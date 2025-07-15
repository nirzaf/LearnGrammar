import { Achievement } from '../types/game'
import { achievements as defaultAchievements } from '../data/achievements'

export class AchievementManager {
  private achievements: Achievement[]
  private listeners: ((achievement: Achievement) => void)[] = []

  constructor(savedAchievements?: Achievement[]) {
    // Initialize with saved achievements or defaults
    this.achievements = savedAchievements || defaultAchievements.map(a => ({ ...a }))
  }

  // Subscribe to achievement unlock events
  onAchievementUnlocked(callback: (achievement: Achievement) => void) {
    this.listeners.push(callback)
    return () => {
      this.listeners = this.listeners.filter(listener => listener !== callback)
    }
  }

  // Get all achievements
  getAchievements(): Achievement[] {
    return this.achievements
  }

  // Get unlocked achievements
  getUnlockedAchievements(): Achievement[] {
    return this.achievements.filter(a => a.isUnlocked)
  }

  // Check and update achievements based on game state
  checkAchievements(gameState: {
    completedLessons: Set<string>
    starDust: number
    perfectScores: number
    streakCount: number
    timeSpent: number
    completedPlanets: Set<string>
  }): Achievement[] {
    const newlyUnlocked: Achievement[] = []

    this.achievements.forEach(achievement => {
      if (achievement.isUnlocked) return

      let currentProgress = 0
      let shouldUnlock = false

      switch (achievement.requirements.type) {
        case 'lessons_completed':
          currentProgress = gameState.completedLessons.size
          shouldUnlock = currentProgress >= achievement.requirements.target
          break

        case 'planet_completed':
          if (achievement.requirements.planetId) {
            currentProgress = gameState.completedPlanets.has(achievement.requirements.planetId) ? 1 : 0
            shouldUnlock = currentProgress >= achievement.requirements.target
          }
          break

        case 'perfect_scores':
          currentProgress = gameState.perfectScores
          shouldUnlock = currentProgress >= achievement.requirements.target
          break

        case 'streak':
          currentProgress = gameState.streakCount
          shouldUnlock = currentProgress >= achievement.requirements.target
          break

        case 'star_dust':
          currentProgress = gameState.starDust
          shouldUnlock = currentProgress >= achievement.requirements.target
          break

        case 'time_spent':
          currentProgress = gameState.timeSpent
          shouldUnlock = currentProgress >= achievement.requirements.target
          break
      }

      // Update progress
      achievement.progress = Math.min(currentProgress, achievement.requirements.target)

      // Unlock achievement if requirements are met
      if (shouldUnlock && !achievement.isUnlocked) {
        achievement.isUnlocked = true
        achievement.unlockedAt = new Date()
        newlyUnlocked.push(achievement)
        
        // Notify listeners
        this.listeners.forEach(listener => listener(achievement))
      }
    })

    return newlyUnlocked
  }

  // Get achievement progress for a specific achievement
  getAchievementProgress(achievementId: string): number {
    const achievement = this.achievements.find(a => a.id === achievementId)
    if (!achievement) return 0
    
    return achievement.isUnlocked ? 100 : (achievement.progress / achievement.requirements.target) * 100
  }

  // Get total star dust earned from achievements
  getTotalAchievementStarDust(): number {
    return this.achievements
      .filter(a => a.isUnlocked)
      .reduce((total, a) => total + a.reward.starDust, 0)
  }

  // Get earned titles from achievements
  getEarnedTitles(): string[] {
    return this.achievements
      .filter(a => a.isUnlocked && a.reward.title)
      .map(a => a.reward.title!)
  }

  // Get achievements by category
  getAchievementsByCategory(category: string): Achievement[] {
    if (category === 'all') return this.achievements
    return this.achievements.filter(a => a.category === category)
  }

  // Get achievements by rarity
  getAchievementsByRarity(rarity: string): Achievement[] {
    return this.achievements.filter(a => a.rarity === rarity)
  }

  // Get completion percentage
  getCompletionPercentage(): number {
    const unlockedCount = this.achievements.filter(a => a.isUnlocked).length
    return (unlockedCount / this.achievements.length) * 100
  }

  // Reset all achievements (for testing or new game)
  resetAchievements() {
    this.achievements = defaultAchievements.map(a => ({
      ...a,
      isUnlocked: false,
      progress: 0,
      unlockedAt: undefined
    }))
  }

  // Save achievements to localStorage
  saveToStorage() {
    localStorage.setItem('grammar-achievements', JSON.stringify(this.achievements))
  }

  // Load achievements from localStorage
  static loadFromStorage(): Achievement[] | null {
    const saved = localStorage.getItem('grammar-achievements')
    if (!saved) return null
    
    try {
      const parsed = JSON.parse(saved)
      // Ensure all required properties exist and merge with defaults for new achievements
      return defaultAchievements.map(defaultAchievement => {
        const savedAchievement = parsed.find((a: Achievement) => a.id === defaultAchievement.id)
        return savedAchievement ? {
          ...defaultAchievement,
          ...savedAchievement,
          unlockedAt: savedAchievement.unlockedAt ? new Date(savedAchievement.unlockedAt) : undefined
        } : defaultAchievement
      })
    } catch (error) {
      console.error('Failed to load achievements from storage:', error)
      return null
    }
  }

  // Get next achievement to unlock (for motivation)
  getNextAchievement(): Achievement | null {
    const locked = this.achievements.filter(a => !a.isUnlocked)
    if (locked.length === 0) return null

    // Sort by progress percentage (closest to completion first)
    locked.sort((a, b) => {
      const aProgress = (a.progress / a.requirements.target) * 100
      const bProgress = (b.progress / b.requirements.target) * 100
      return bProgress - aProgress
    })

    return locked[0]
  }

  // Get recent achievements (last 5 unlocked)
  getRecentAchievements(): Achievement[] {
    return this.achievements
      .filter(a => a.isUnlocked && a.unlockedAt)
      .sort((a, b) => (b.unlockedAt!.getTime() - a.unlockedAt!.getTime()))
      .slice(0, 5)
  }
}
