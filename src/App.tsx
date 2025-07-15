import { useState, useEffect, useRef } from 'react'
import GalaxyMap from './components/GalaxyMap.tsx'
import PlanetView from './components/PlanetView.tsx'
import GameHeader from './components/GameHeader'
import AchievementModal from './components/AchievementModal'
import AchievementNotification from './components/AchievementNotification'
import CompanionModal from './components/CompanionModal'
import TeacherDashboard from './components/TeacherDashboard'
import ParentDashboard from './components/ParentDashboard'
import AdaptiveLearningPanel from './components/AdaptiveLearningPanel'
import { AchievementManager } from './services/achievementManager'
import { AdaptiveLearningEngine } from './services/adaptiveLearning'
import { calculateEvolutionLevel, getCompanionEvolution, companionMoods } from './data/companions'
import type { Planet, Achievement, CompanionState } from './types/game'

/**
 * Main App component for Grammar Galaxy Quest
 * Manages the overall game state and navigation between galaxy map and planet views
 */
function App() {
  const [selectedPlanet, setSelectedPlanet] = useState<Planet | null>(null)
  const [playerProgress, setPlayerProgress] = useState({
    starDust: 0,
    completedLessons: new Set<string>(),
    unlockedPlanets: new Set(['planet-core']), // Start with first planet unlocked
    companionEvolution: 0,
    perfectScores: 0,
    streakCount: 0,
    timeSpent: 0,
    completedPlanets: new Set<string>()
  })

  const [companion, setCompanion] = useState<CompanionState>({
    name: 'Grammar Buddy',
    evolutionLevel: 0,
    traits: ['Mysterious', 'Potential'],
    mood: 'curious' as const,
    customizations: {
      color: 'default',
      accessories: []
    }
  })

  // Achievement system state
  const achievementManagerRef = useRef<AchievementManager>()
  const [showAchievementModal, setShowAchievementModal] = useState(false)
  const [currentNotification, setCurrentNotification] = useState<Achievement | null>(null)
  const [achievements, setAchievements] = useState<Achievement[]>([])

  // Adaptive learning system
  const adaptiveLearningRef = useRef<AdaptiveLearningEngine>()

  // Companion system state
  const [showCompanionModal, setShowCompanionModal] = useState(false)

  // Dashboard state
  const [showTeacherDashboard, setShowTeacherDashboard] = useState(false)
  const [showParentDashboard, setShowParentDashboard] = useState(false)
  const [showAdaptiveLearning, setShowAdaptiveLearning] = useState(false)

  // Initialize achievement manager and adaptive learning
  useEffect(() => {
    const savedAchievements = AchievementManager.loadFromStorage()
    achievementManagerRef.current = new AchievementManager(savedAchievements || undefined)

    // Initialize adaptive learning engine
    adaptiveLearningRef.current = new AdaptiveLearningEngine('student-1')

    // Subscribe to achievement unlocks
    const unsubscribe = achievementManagerRef.current.onAchievementUnlocked((achievement) => {
      setCurrentNotification(achievement)
      // Add star dust reward
      setPlayerProgress(prev => ({
        ...prev,
        starDust: prev.starDust + achievement.reward.starDust
      }))
    })

    setAchievements(achievementManagerRef.current.getAchievements())

    return unsubscribe
  }, [])

  /**
   * Handle planet selection from the galaxy map
   */
  const handlePlanetSelect = (planet: Planet) => {
    if (playerProgress.unlockedPlanets.has(planet.id)) {
      setSelectedPlanet(planet)
    }
  }

  /**
   * Return to galaxy map from planet view
   */
  const handleBackToGalaxy = () => {
    setSelectedPlanet(null)
  }

  /**
   * Update player progress when lessons are completed
   */
  const handleProgressUpdate = (lessonId: string, starDustEarned: number) => {
    setPlayerProgress(prev => {
      const newProgress = {
        ...prev,
        starDust: prev.starDust + starDustEarned,
        completedLessons: new Set([...prev.completedLessons, lessonId])
      }

      // Update companion evolution
      const newEvolutionLevel = calculateEvolutionLevel({
        completedLessons: newProgress.completedLessons.size,
        completedPlanets: newProgress.completedPlanets.size,
        achievements: achievements.filter(a => a.isUnlocked).length,
        starDust: newProgress.starDust
      })

      if (newEvolutionLevel > companion.evolutionLevel) {
        const newEvolution = getCompanionEvolution(newEvolutionLevel)
        setCompanion(prev => ({
          ...prev,
          evolutionLevel: newEvolutionLevel,
          traits: newEvolution.traits,
          mood: 'excited' as const
        }))
      }

      // Check achievements after updating progress
      if (achievementManagerRef.current) {
        const newlyUnlocked = achievementManagerRef.current.checkAchievements({
          completedLessons: newProgress.completedLessons,
          starDust: newProgress.starDust,
          perfectScores: newProgress.perfectScores,
          streakCount: newProgress.streakCount,
          timeSpent: newProgress.timeSpent,
          completedPlanets: newProgress.completedPlanets
        })

        if (newlyUnlocked.length > 0) {
          setAchievements(achievementManagerRef.current.getAchievements())
          achievementManagerRef.current.saveToStorage()
        }
      }

      return newProgress
    })
  }

  const handleCompanionCustomization = (customizations: CompanionState['customizations']) => {
    setCompanion(prev => ({
      ...prev,
      customizations
    }))
  }

  const handleAdaptiveRecommendationAction = (recommendation: any) => {
    // Handle adaptive learning recommendations
    console.log('Taking action on recommendation:', recommendation)
    // In a real app, this would navigate to specific lessons or activities
  }

  // Mock data for dashboards (in a real app, this would come from a backend)
  const mockStudentData = [
    {
      id: '1',
      name: 'Alice Johnson',
      completedLessons: 15,
      totalLessons: 50,
      starDust: 750,
      achievements: achievements.filter(a => a.isUnlocked).slice(0, 3),
      currentStreak: 5,
      timeSpent: 120,
      lastActive: new Date(Date.now() - 1000 * 60 * 60 * 24), // 1 day ago
      strengths: ['Nouns', 'Adjectives'],
      needsSupport: ['Verb Agreement', 'Punctuation'],
      completedPlanets: ['planet-core'],
      currentPlanet: 'planet-signpost'
    },
    {
      id: '2',
      name: 'Bob Smith',
      completedLessons: 8,
      totalLessons: 50,
      starDust: 400,
      achievements: achievements.filter(a => a.isUnlocked).slice(0, 1),
      currentStreak: 2,
      timeSpent: 80,
      lastActive: new Date(Date.now() - 1000 * 60 * 60 * 24 * 3), // 3 days ago
      strengths: ['Pronouns'],
      needsSupport: ['Nouns', 'Verb Tenses'],
      completedPlanets: [],
      currentPlanet: 'planet-core'
    }
  ]

  const mockChildData = {
    id: '1',
    name: 'Your Child',
    completedLessons: playerProgress.completedLessons.size,
    totalLessons: 50,
    starDust: playerProgress.starDust,
    achievements: achievements.filter(a => a.isUnlocked),
    currentStreak: playerProgress.streakCount,
    timeSpent: playerProgress.timeSpent,
    lastActive: new Date(),
    strengths: ['Nouns', 'Adjectives'],
    needsSupport: ['Verb Agreement', 'Punctuation'],
    completedPlanets: Array.from(playerProgress.completedPlanets),
    currentPlanet: 'planet-core',
    weeklyGoal: 5,
    weeklyProgress: 3
  }

  return (
    <div className="min-h-screen w-full bg-space-blue bg-stars">
      <GameHeader
        starDust={playerProgress.starDust}
        companionEvolution={companion.evolutionLevel}
        onShowAchievements={() => setShowAchievementModal(true)}
        onShowCompanion={() => setShowCompanionModal(true)}
        onShowTeacherDashboard={() => setShowTeacherDashboard(true)}
        onShowParentDashboard={() => setShowParentDashboard(true)}
      />

      <main className="w-full">
        {selectedPlanet ? (
          <PlanetView
            planet={selectedPlanet}
            onBack={handleBackToGalaxy}
            onProgressUpdate={handleProgressUpdate}
            completedLessons={playerProgress.completedLessons}
            adaptiveLearning={adaptiveLearningRef.current}
          />
        ) : (
          <GalaxyMap
            onPlanetSelect={handlePlanetSelect}
            unlockedPlanets={playerProgress.unlockedPlanets}
            completedLessons={playerProgress.completedLessons}
          />
        )}
      </main>

      {/* Achievement Modal */}
      <AchievementModal
        achievements={achievements}
        isVisible={showAchievementModal}
        onClose={() => setShowAchievementModal(false)}
      />

      {/* Achievement Notification */}
      <AchievementNotification
        achievement={currentNotification}
        onClose={() => setCurrentNotification(null)}
      />

      {/* Companion Modal */}
      <CompanionModal
        companion={companion}
        isVisible={showCompanionModal}
        onClose={() => setShowCompanionModal(false)}
        onCustomizationChange={handleCompanionCustomization}
        playerProgress={{
          completedLessons: playerProgress.completedLessons.size,
          completedPlanets: playerProgress.completedPlanets.size,
          achievements: achievements.filter(a => a.isUnlocked).length,
          starDust: playerProgress.starDust
        }}
      />

      {/* Teacher Dashboard */}
      <TeacherDashboard
        isVisible={showTeacherDashboard}
        onClose={() => setShowTeacherDashboard(false)}
        studentData={mockStudentData}
      />

      {/* Parent Dashboard */}
      <ParentDashboard
        isVisible={showParentDashboard}
        onClose={() => setShowParentDashboard(false)}
        childData={mockChildData}
      />
    </div>
  )
}

export default App
