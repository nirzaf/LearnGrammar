/**
 * Core game type definitions for Grammar Galaxy Quest
 */

export interface Planet {
  id: string
  name: string
  theme: string
  description: string
  color: string
  position: { x: number; y: number }
  lessons: Lesson[]
  isUnlocked: boolean
  completionPercentage: number
}

export interface Lesson {
  id: string
  title: string
  description: string
  type: 'lesson' | 'practice' | 'boss'
  grammarConcept: string
  activities: Activity[]
  requiredStarDust?: number
  rewardStarDust: number
  isCompleted: boolean
  isUnlocked: boolean
}

export interface Activity {
  id: string
  type: 'drag-drop' | 'multiple-choice' | 'typing' | 'matching' | 'story-builder' | 'sentence-builder'
  title: string
  instructions: string
  content: ActivityContent
  correctAnswer: string | string[]
  feedback: {
    correct: string
    incorrect: string
  }
}

export interface ActivityContent {
  question?: string
  options?: string[]
  sentence?: string
  words?: string[]
  categories?: string[]
  story?: string
  blanks?: number
}

export interface PlayerProgress {
  starDust: number
  completedLessons: Set<string>
  unlockedPlanets: Set<string>
  companionEvolution: number
  achievements: Achievement[]
  currentStreak: number
}

export interface Achievement {
  id: string
  title: string
  description: string
  icon: string
  unlockedAt: Date
}

export interface CompanionState {
  name: string
  evolutionLevel: number
  traits: string[]
  mood: 'happy' | 'excited' | 'sleepy' | 'curious'
  customizations: {
    color: string
    accessories: string[]
  }
}

export interface GameState {
  currentView: 'galaxy' | 'planet' | 'lesson'
  selectedPlanet?: Planet
  selectedLesson?: Lesson
  playerProgress: PlayerProgress
  companion: CompanionState
  settings: {
    soundEnabled: boolean
    musicEnabled: boolean
    difficulty: 'easy' | 'medium' | 'hard'
  }
}