

export interface StudentPerformance {
  lessonId: string
  activityId: string
  attempts: number
  correctOnFirstTry: boolean
  timeSpent: number // in seconds
  hintsUsed: number
  completedAt: Date
  difficulty: 'easy' | 'medium' | 'hard'
  grammarConcept: string
}

export interface LearningProfile {
  studentId: string
  overallDifficulty: 'easy' | 'medium' | 'hard'
  conceptMastery: Record<string, number> // concept -> mastery level (0-1)
  learningSpeed: 'slow' | 'average' | 'fast'
  preferredActivityTypes: string[]
  strugglingConcepts: string[]
  masteredConcepts: string[]
  lastReviewDate: Record<string, Date>
  streakData: {
    current: number
    longest: number
    lastActiveDate: Date
  }
}

export interface AdaptiveRecommendation {
  type: 'review' | 'advance' | 'practice' | 'hint' | 'break'
  priority: 'low' | 'medium' | 'high'
  message: string
  action?: {
    lessonId?: string
    activityType?: string
    concept?: string
    difficulty?: 'easy' | 'medium' | 'hard'
  }
}

export class AdaptiveLearningEngine {
  private performanceHistory: StudentPerformance[] = []
  private learningProfile: LearningProfile

  constructor(studentId: string, savedProfile?: LearningProfile) {
    this.learningProfile = savedProfile || {
      studentId,
      overallDifficulty: 'medium',
      conceptMastery: {},
      learningSpeed: 'average',
      preferredActivityTypes: [],
      strugglingConcepts: [],
      masteredConcepts: [],
      lastReviewDate: {},
      streakData: {
        current: 0,
        longest: 0,
        lastActiveDate: new Date()
      }
    }
  }

  // Record student performance for an activity
  recordPerformance(performance: StudentPerformance) {
    this.performanceHistory.push(performance)
    this.updateLearningProfile(performance)
    this.updateConceptMastery(performance)
  }

  // Update the learning profile based on recent performance
  private updateLearningProfile(performance: StudentPerformance) {
    const concept = performance.grammarConcept
    
    // Update concept mastery
    const currentMastery = this.learningProfile.conceptMastery[concept] || 0
    const masteryChange = performance.correctOnFirstTry ? 0.1 : -0.05
    this.learningProfile.conceptMastery[concept] = Math.max(0, Math.min(1, currentMastery + masteryChange))

    // Update struggling/mastered concepts
    if (this.learningProfile.conceptMastery[concept] < 0.3) {
      if (!this.learningProfile.strugglingConcepts.includes(concept)) {
        this.learningProfile.strugglingConcepts.push(concept)
      }
      this.learningProfile.masteredConcepts = this.learningProfile.masteredConcepts.filter(c => c !== concept)
    } else if (this.learningProfile.conceptMastery[concept] > 0.8) {
      if (!this.learningProfile.masteredConcepts.includes(concept)) {
        this.learningProfile.masteredConcepts.push(concept)
      }
      this.learningProfile.strugglingConcepts = this.learningProfile.strugglingConcepts.filter(c => c !== concept)
    }

    // Update learning speed based on time spent
    this.updateLearningSpeed(performance)
    
    // Update preferred activity types
    this.updatePreferredActivityTypes(performance)
  }

  private updateLearningSpeed(_performance: StudentPerformance) {
    const recentPerformances = this.performanceHistory.slice(-10)
    const averageTime = recentPerformances.reduce((sum, p) => sum + p.timeSpent, 0) / recentPerformances.length
    
    if (averageTime < 30) {
      this.learningProfile.learningSpeed = 'fast'
    } else if (averageTime > 90) {
      this.learningProfile.learningSpeed = 'slow'
    } else {
      this.learningProfile.learningSpeed = 'average'
    }
  }

  private updatePreferredActivityTypes(performance: StudentPerformance) {
    // Track activity types where student performs well
    const activityPerformance = this.performanceHistory
      .filter(p => p.activityId.includes(performance.activityId.split('-')[0]))
      .slice(-5)
    
    const successRate = activityPerformance.filter(p => p.correctOnFirstTry).length / activityPerformance.length
    
    if (successRate > 0.7) {
      const activityType = performance.activityId.split('-')[0]
      if (!this.learningProfile.preferredActivityTypes.includes(activityType)) {
        this.learningProfile.preferredActivityTypes.push(activityType)
      }
    }
  }

  private updateConceptMastery(performance: StudentPerformance) {
    const concept = performance.grammarConcept
    const recentPerformances = this.performanceHistory
      .filter(p => p.grammarConcept === concept)
      .slice(-5)
    
    const successRate = recentPerformances.filter(p => p.correctOnFirstTry).length / recentPerformances.length
    this.learningProfile.conceptMastery[concept] = successRate
  }

  // Get adaptive difficulty for next activity
  getAdaptiveDifficulty(concept: string): 'easy' | 'medium' | 'hard' {
    const mastery = this.learningProfile.conceptMastery[concept] || 0.5
    const recentPerformance = this.performanceHistory
      .filter(p => p.grammarConcept === concept)
      .slice(-3)
    
    const recentSuccessRate = recentPerformance.length > 0 
      ? recentPerformance.filter(p => p.correctOnFirstTry).length / recentPerformance.length 
      : 0.5

    if (recentSuccessRate > 0.8 && mastery > 0.7) {
      return 'hard'
    } else if (recentSuccessRate < 0.4 || mastery < 0.3) {
      return 'easy'
    } else {
      return 'medium'
    }
  }

  // Generate personalized hints based on student's learning profile
  generatePersonalizedHint(concept: string, _activityType: string): string {
    const mastery = this.learningProfile.conceptMastery[concept] || 0.5
    const isStruggling = this.learningProfile.strugglingConcepts.includes(concept)
    
    const hints = {
      'nouns': {
        beginner: "Remember: A noun is a person, place, or thing! Look for words that name something.",
        intermediate: "Try asking 'What is this?' or 'Who is this?' to identify nouns in the sentence.",
        advanced: "Consider whether the word is concrete (you can touch it) or abstract (an idea or feeling)."
      },
      'verbs': {
        beginner: "Verbs are action words! Look for what someone or something is doing.",
        intermediate: "Ask yourself: 'What is happening?' or 'What action is being performed?'",
        advanced: "Remember that verbs can show action, state of being, or help other verbs."
      },
      'adjectives': {
        beginner: "Adjectives describe nouns! They tell us what something looks, feels, or sounds like.",
        intermediate: "Look for words that answer 'What kind?' or 'How many?' about a noun.",
        advanced: "Consider the position: adjectives usually come before nouns or after linking verbs."
      }
    }
    
    const conceptHints = hints[concept as keyof typeof hints] || hints.nouns
    
    if (mastery < 0.3 || isStruggling) {
      return conceptHints.beginner
    } else if (mastery < 0.7) {
      return conceptHints.intermediate
    } else {
      return conceptHints.advanced
    }
  }

  // Get recommendations for what to do next
  getRecommendations(): AdaptiveRecommendation[] {
    const recommendations: AdaptiveRecommendation[] = []
    
    // Check for concepts that need review
    const conceptsNeedingReview = this.getConceptsNeedingReview()
    conceptsNeedingReview.forEach(concept => {
      recommendations.push({
        type: 'review',
        priority: 'high',
        message: `Time to review ${concept}! Let's strengthen your understanding.`,
        action: { concept, difficulty: 'easy' }
      })
    })
    
    // Check for struggling concepts
    this.learningProfile.strugglingConcepts.forEach(concept => {
      recommendations.push({
        type: 'practice',
        priority: 'high',
        message: `Let's practice ${concept} with some easier activities to build confidence.`,
        action: { concept, difficulty: 'easy' }
      })
    })
    
    // Check if student is ready to advance
    if (this.isReadyToAdvance()) {
      recommendations.push({
        type: 'advance',
        priority: 'medium',
        message: "Great progress! You're ready for more challenging activities.",
        action: { difficulty: 'hard' }
      })
    }
    
    // Check if student needs a break
    if (this.needsBreak()) {
      recommendations.push({
        type: 'break',
        priority: 'medium',
        message: "You've been working hard! Consider taking a short break.",
      })
    }
    
    return recommendations.sort((a, b) => {
      const priorityOrder = { high: 3, medium: 2, low: 1 }
      return priorityOrder[b.priority] - priorityOrder[a.priority]
    })
  }

  private getConceptsNeedingReview(): string[] {
    const now = new Date()
    const needsReview: string[] = []
    
    Object.entries(this.learningProfile.lastReviewDate).forEach(([concept, lastReview]) => {
      const daysSinceReview = (now.getTime() - lastReview.getTime()) / (1000 * 60 * 60 * 24)
      const mastery = this.learningProfile.conceptMastery[concept] || 0
      
      // Review schedule based on mastery level
      const reviewInterval = mastery > 0.8 ? 7 : mastery > 0.5 ? 3 : 1
      
      if (daysSinceReview >= reviewInterval) {
        needsReview.push(concept)
      }
    })
    
    return needsReview
  }

  private isReadyToAdvance(): boolean {
    const recentPerformances = this.performanceHistory.slice(-5)
    if (recentPerformances.length < 3) return false
    
    const successRate = recentPerformances.filter(p => p.correctOnFirstTry).length / recentPerformances.length
    const averageHints = recentPerformances.reduce((sum, p) => sum + p.hintsUsed, 0) / recentPerformances.length
    
    return successRate > 0.8 && averageHints < 1
  }

  private needsBreak(): boolean {
    const recentPerformances = this.performanceHistory.slice(-10)
    if (recentPerformances.length < 5) return false
    
    const totalTime = recentPerformances.reduce((sum, p) => sum + p.timeSpent, 0)
    const averageAttempts = recentPerformances.reduce((sum, p) => sum + p.attempts, 0) / recentPerformances.length
    
    return totalTime > 1800 || averageAttempts > 3 // 30 minutes or high attempt rate
  }

  // Update streak data
  updateStreak(isActive: boolean) {
    const today = new Date()
    const lastActive = this.learningProfile.streakData.lastActiveDate
    const daysDiff = Math.floor((today.getTime() - lastActive.getTime()) / (1000 * 60 * 60 * 24))
    
    if (isActive) {
      if (daysDiff === 1) {
        // Consecutive day
        this.learningProfile.streakData.current += 1
      } else if (daysDiff === 0) {
        // Same day, no change
      } else {
        // Streak broken
        this.learningProfile.streakData.current = 1
      }
      
      this.learningProfile.streakData.longest = Math.max(
        this.learningProfile.streakData.longest,
        this.learningProfile.streakData.current
      )
      this.learningProfile.streakData.lastActiveDate = today
    }
  }

  // Get learning profile for saving
  getLearningProfile(): LearningProfile {
    return this.learningProfile
  }

  // Get performance history
  getPerformanceHistory(): StudentPerformance[] {
    return this.performanceHistory
  }

  // Load performance history
  loadPerformanceHistory(history: StudentPerformance[]) {
    this.performanceHistory = history
  }
}
