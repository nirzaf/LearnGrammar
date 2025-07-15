import type { Achievement } from '../types/game'

export const achievements: Achievement[] = [
  // Progress Achievements
  {
    id: 'first-steps',
    title: 'First Steps',
    description: 'Complete your first lesson in the Grammar Kingdom!',
    icon: '👶',
    category: 'progress',
    rarity: 'common',
    requirements: {
      type: 'lessons_completed',
      target: 1
    },
    reward: {
      starDust: 25
    },
    isUnlocked: false,
    progress: 0
  },
  {
    id: 'grammar-explorer',
    title: 'Grammar Explorer',
    description: 'Complete 10 lessons across different planets!',
    icon: '🚀',
    category: 'progress',
    rarity: 'common',
    requirements: {
      type: 'lessons_completed',
      target: 10
    },
    reward: {
      starDust: 100
    },
    isUnlocked: false,
    progress: 0
  },
  {
    id: 'grammar-adventurer',
    title: 'Grammar Adventurer',
    description: 'Complete 25 lessons and become a true adventurer!',
    icon: '⚔️',
    category: 'progress',
    rarity: 'rare',
    requirements: {
      type: 'lessons_completed',
      target: 25
    },
    reward: {
      starDust: 250,
      title: 'Grammar Adventurer'
    },
    isUnlocked: false,
    progress: 0
  },
  {
    id: 'grammar-master',
    title: 'Grammar Master',
    description: 'Complete all 50+ lessons in the Grammar Kingdom!',
    icon: '👑',
    category: 'progress',
    rarity: 'legendary',
    requirements: {
      type: 'lessons_completed',
      target: 50
    },
    reward: {
      starDust: 1000,
      title: 'Grammar Master'
    },
    isUnlocked: false,
    progress: 0
  },

  // Planet Completion Achievements
  {
    id: 'castle-conqueror',
    title: 'Castle Conqueror',
    description: 'Master all lessons in Building Blocks Castle!',
    icon: '🏰',
    category: 'mastery',
    rarity: 'rare',
    requirements: {
      type: 'planet_completed',
      target: 1,
      planetId: 'planet-core'
    },
    reward: {
      starDust: 200,
      title: 'Noun Knight'
    },
    isUnlocked: false,
    progress: 0
  },
  {
    id: 'village-navigator',
    title: 'Village Navigator',
    description: 'Complete all lessons in Signpost Village!',
    icon: '🗺️',
    category: 'mastery',
    rarity: 'rare',
    requirements: {
      type: 'planet_completed',
      target: 1,
      planetId: 'planet-signpost'
    },
    reward: {
      starDust: 200,
      title: 'Village Guide'
    },
    isUnlocked: false,
    progress: 0
  },
  {
    id: 'palace-royalty',
    title: 'Palace Royalty',
    description: 'Master all lessons in Pronoun Palace!',
    icon: '👸',
    category: 'mastery',
    rarity: 'rare',
    requirements: {
      type: 'planet_completed',
      target: 1,
      planetId: 'planet-morph'
    },
    reward: {
      starDust: 200,
      title: 'Royal Advisor'
    },
    isUnlocked: false,
    progress: 0
  },
  {
    id: 'time-master',
    title: 'Time Master',
    description: 'Complete all lessons in Time Travel Academy!',
    icon: '⏰',
    category: 'mastery',
    rarity: 'epic',
    requirements: {
      type: 'planet_completed',
      target: 1,
      planetId: 'planet-time-warp'
    },
    reward: {
      starDust: 300,
      title: 'Time Master'
    },
    isUnlocked: false,
    progress: 0
  },
  {
    id: 'bridge-builder',
    title: 'Master Bridge Builder',
    description: 'Complete all lessons on Connection Bridge!',
    icon: '🌉',
    category: 'mastery',
    rarity: 'rare',
    requirements: {
      type: 'planet_completed',
      target: 1,
      planetId: 'planet-connector'
    },
    reward: {
      starDust: 200,
      title: 'Bridge Master'
    },
    isUnlocked: false,
    progress: 0
  },
  {
    id: 'punctuation-princess',
    title: 'Punctuation Princess',
    description: 'Master all lessons in Punctuation Palace!',
    icon: '💎',
    category: 'mastery',
    rarity: 'epic',
    requirements: {
      type: 'planet_completed',
      target: 1,
      planetId: 'punctuation-palace'
    },
    reward: {
      starDust: 400,
      title: 'Punctuation Princess'
    },
    isUnlocked: false,
    progress: 0
  },

  // Perfect Score Achievements
  {
    id: 'perfectionist',
    title: 'Perfectionist',
    description: 'Get perfect scores on 5 lessons!',
    icon: '⭐',
    category: 'mastery',
    rarity: 'rare',
    requirements: {
      type: 'perfect_scores',
      target: 5
    },
    reward: {
      starDust: 150
    },
    isUnlocked: false,
    progress: 0
  },
  {
    id: 'flawless-champion',
    title: 'Flawless Champion',
    description: 'Achieve perfect scores on 20 lessons!',
    icon: '🏆',
    category: 'mastery',
    rarity: 'epic',
    requirements: {
      type: 'perfect_scores',
      target: 20
    },
    reward: {
      starDust: 500,
      title: 'Flawless Champion'
    },
    isUnlocked: false,
    progress: 0
  },

  // Streak Achievements
  {
    id: 'consistent-learner',
    title: 'Consistent Learner',
    description: 'Complete lessons for 3 days in a row!',
    icon: '🔥',
    category: 'special',
    rarity: 'common',
    requirements: {
      type: 'streak',
      target: 3
    },
    reward: {
      starDust: 75
    },
    isUnlocked: false,
    progress: 0
  },
  {
    id: 'dedicated-student',
    title: 'Dedicated Student',
    description: 'Maintain a 7-day learning streak!',
    icon: '📚',
    category: 'special',
    rarity: 'rare',
    requirements: {
      type: 'streak',
      target: 7
    },
    reward: {
      starDust: 200
    },
    isUnlocked: false,
    progress: 0
  },
  {
    id: 'grammar-devotee',
    title: 'Grammar Devotee',
    description: 'Achieve a 30-day learning streak!',
    icon: '🌟',
    category: 'special',
    rarity: 'legendary',
    requirements: {
      type: 'streak',
      target: 30
    },
    reward: {
      starDust: 1000,
      title: 'Grammar Devotee'
    },
    isUnlocked: false,
    progress: 0
  },

  // Star Dust Collection Achievements
  {
    id: 'star-collector',
    title: 'Star Collector',
    description: 'Collect 1,000 Star Dust!',
    icon: '✨',
    category: 'exploration',
    rarity: 'common',
    requirements: {
      type: 'star_dust',
      target: 1000
    },
    reward: {
      starDust: 100
    },
    isUnlocked: false,
    progress: 0
  },
  {
    id: 'cosmic-treasurer',
    title: 'Cosmic Treasurer',
    description: 'Accumulate 5,000 Star Dust!',
    icon: '💰',
    category: 'exploration',
    rarity: 'rare',
    requirements: {
      type: 'star_dust',
      target: 5000
    },
    reward: {
      starDust: 500
    },
    isUnlocked: false,
    progress: 0
  },
  {
    id: 'galaxy-tycoon',
    title: 'Galaxy Tycoon',
    description: 'Amass 10,000 Star Dust!',
    icon: '🌌',
    category: 'exploration',
    rarity: 'legendary',
    requirements: {
      type: 'star_dust',
      target: 10000
    },
    reward: {
      starDust: 2000,
      title: 'Galaxy Tycoon'
    },
    isUnlocked: false,
    progress: 0
  }
]
