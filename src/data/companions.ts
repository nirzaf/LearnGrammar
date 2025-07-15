import { CompanionState } from '../types/game'

export interface CompanionEvolution {
  level: number
  name: string
  emoji: string
  description: string
  unlockRequirement: {
    type: 'lessons' | 'planets' | 'achievements' | 'star_dust'
    target: number
  }
  traits: string[]
  specialAbilities: string[]
  moodVariations: {
    happy: string
    excited: string
    sleepy: string
    curious: string
  }
}

export const companionEvolutions: CompanionEvolution[] = [
  {
    level: 0,
    name: 'Grammar Egg',
    emoji: '🥚',
    description: 'Your companion is still developing inside this mysterious egg!',
    unlockRequirement: { type: 'lessons', target: 0 },
    traits: ['Mysterious', 'Potential'],
    specialAbilities: ['Stores learning energy'],
    moodVariations: {
      happy: '🥚',
      excited: '🥚✨',
      sleepy: '🥚💤',
      curious: '🥚❓'
    }
  },
  {
    level: 1,
    name: 'Grammar Hatchling',
    emoji: '🐣',
    description: 'A curious little creature emerges, eager to learn grammar!',
    unlockRequirement: { type: 'lessons', target: 3 },
    traits: ['Curious', 'Energetic', 'Learning'],
    specialAbilities: ['Provides basic hints', 'Celebrates achievements'],
    moodVariations: {
      happy: '🐣😊',
      excited: '🐣🎉',
      sleepy: '🐣😴',
      curious: '🐣🤔'
    }
  },
  {
    level: 2,
    name: 'Word Sprite',
    emoji: '🧚‍♀️',
    description: 'A magical sprite that dances around words and helps with grammar!',
    unlockRequirement: { type: 'lessons', target: 10 },
    traits: ['Magical', 'Helpful', 'Playful', 'Word-loving'],
    specialAbilities: ['Advanced hints', 'Word suggestions', 'Grammar corrections'],
    moodVariations: {
      happy: '🧚‍♀️✨',
      excited: '🧚‍♀️🌟',
      sleepy: '🧚‍♀️💤',
      curious: '🧚‍♀️🔍'
    }
  },
  {
    level: 3,
    name: 'Cosmic Unicorn',
    emoji: '🦄',
    description: 'A majestic unicorn with cosmic powers and deep grammar wisdom!',
    unlockRequirement: { type: 'planets', target: 2 },
    traits: ['Wise', 'Magical', 'Majestic', 'Grammar Master'],
    specialAbilities: ['Expert guidance', 'Mistake prevention', 'Advanced explanations'],
    moodVariations: {
      happy: '🦄🌈',
      excited: '🦄⚡',
      sleepy: '🦄🌙',
      curious: '🦄📚'
    }
  },
  {
    level: 4,
    name: 'Grammar Dragon',
    emoji: '🐉',
    description: 'A powerful dragon that guards the secrets of perfect grammar!',
    unlockRequirement: { type: 'planets', target: 4 },
    traits: ['Powerful', 'Protective', 'Ancient Wisdom', 'Grammar Guardian'],
    specialAbilities: ['Master-level guidance', 'Error detection', 'Advanced teaching'],
    moodVariations: {
      happy: '🐉💚',
      excited: '🐉🔥',
      sleepy: '🐉💤',
      curious: '🐉📖'
    }
  },
  {
    level: 5,
    name: 'Galactic Grammar Phoenix',
    emoji: '🔥🦅',
    description: 'The ultimate companion - a phoenix that embodies all grammar knowledge!',
    unlockRequirement: { type: 'planets', target: 6 },
    traits: ['Legendary', 'All-knowing', 'Inspiring', 'Grammar Deity'],
    specialAbilities: ['Ultimate guidance', 'Perfect predictions', 'Inspirational teaching'],
    moodVariations: {
      happy: '🔥🦅✨',
      excited: '🔥🦅🌟',
      sleepy: '🔥🦅🌙',
      curious: '🔥🦅🔮'
    }
  }
]

export const companionTraits = {
  'Mysterious': { description: 'Full of unknown potential', effect: 'Increases curiosity about lessons' },
  'Potential': { description: 'Ready to grow and learn', effect: 'Bonus XP from first attempts' },
  'Curious': { description: 'Always asking questions', effect: 'Provides extra hints when stuck' },
  'Energetic': { description: 'Full of enthusiasm', effect: 'Celebrates every small victory' },
  'Learning': { description: 'Actively absorbing knowledge', effect: 'Learns from your mistakes' },
  'Magical': { description: 'Possesses mystical abilities', effect: 'Can reveal hidden patterns' },
  'Helpful': { description: 'Always ready to assist', effect: 'Offers timely suggestions' },
  'Playful': { description: 'Makes learning fun', effect: 'Adds humor to explanations' },
  'Word-loving': { description: 'Fascinated by language', effect: 'Shares interesting word facts' },
  'Wise': { description: 'Possesses deep understanding', effect: 'Provides profound insights' },
  'Majestic': { description: 'Commands respect and awe', effect: 'Inspires confidence' },
  'Grammar Master': { description: 'Expert in all grammar rules', effect: 'Never gives wrong advice' },
  'Powerful': { description: 'Possesses great strength', effect: 'Can overcome difficult challenges' },
  'Protective': { description: 'Guards against mistakes', effect: 'Warns before major errors' },
  'Ancient Wisdom': { description: 'Knows the history of language', effect: 'Explains etymology and origins' },
  'Grammar Guardian': { description: 'Protects language integrity', effect: 'Maintains high standards' },
  'Legendary': { description: 'Mythical status achieved', effect: 'Unlocks special content' },
  'All-knowing': { description: 'Understands everything', effect: 'Perfect guidance always' },
  'Inspiring': { description: 'Motivates greatness', effect: 'Boosts confidence and performance' },
  'Grammar Deity': { description: 'Divine grammar powers', effect: 'Transcendent understanding' }
}

export const companionMoods = {
  happy: {
    name: 'Happy',
    description: 'Your companion is content and pleased with your progress!',
    triggers: ['completing lessons', 'getting answers right', 'achieving goals'],
    effects: ['More encouraging messages', 'Bonus celebration animations']
  },
  excited: {
    name: 'Excited',
    description: 'Your companion is thrilled about new discoveries and achievements!',
    triggers: ['unlocking new content', 'earning achievements', 'perfect scores'],
    effects: ['Extra enthusiastic responses', 'Special animations', 'Bonus hints']
  },
  sleepy: {
    name: 'Sleepy',
    description: 'Your companion needs rest after intense learning sessions.',
    triggers: ['long study sessions', 'late night learning', 'completing many lessons'],
    effects: ['Gentle reminders to take breaks', 'Slower animations', 'Calm guidance']
  },
  curious: {
    name: 'Curious',
    description: 'Your companion is intrigued and wants to explore new grammar concepts!',
    triggers: ['encountering new topics', 'asking for hints', 'exploring different planets'],
    effects: ['Extra explanations', 'Related topic suggestions', 'Investigative questions']
  }
}

export const companionCustomizations = {
  colors: [
    { id: 'default', name: 'Natural', value: 'default', unlockRequirement: { type: 'lessons', target: 0 } },
    { id: 'golden', name: 'Golden', value: 'filter: hue-rotate(45deg) saturate(1.5)', unlockRequirement: { type: 'achievements', target: 5 } },
    { id: 'rainbow', name: 'Rainbow', value: 'filter: hue-rotate(180deg) saturate(2)', unlockRequirement: { type: 'planets', target: 3 } },
    { id: 'cosmic', name: 'Cosmic', value: 'filter: hue-rotate(270deg) brightness(1.2)', unlockRequirement: { type: 'star_dust', target: 5000 } },
    { id: 'shadow', name: 'Shadow', value: 'filter: grayscale(0.5) contrast(1.5)', unlockRequirement: { type: 'achievements', target: 10 } }
  ],
  accessories: [
    { id: 'none', name: 'None', emoji: '', unlockRequirement: { type: 'lessons', target: 0 } },
    { id: 'crown', name: 'Royal Crown', emoji: '👑', unlockRequirement: { type: 'achievements', target: 3 } },
    { id: 'glasses', name: 'Smart Glasses', emoji: '🤓', unlockRequirement: { type: 'lessons', target: 15 } },
    { id: 'hat', name: 'Wizard Hat', emoji: '🎩', unlockRequirement: { type: 'planets', target: 2 } },
    { id: 'bow', name: 'Cute Bow', emoji: '🎀', unlockRequirement: { type: 'star_dust', target: 2000 } },
    { id: 'cape', name: 'Hero Cape', emoji: '🦸', unlockRequirement: { type: 'achievements', target: 8 } }
  ]
}

export function getCompanionEvolution(level: number): CompanionEvolution {
  return companionEvolutions[Math.min(level, companionEvolutions.length - 1)]
}

export function calculateEvolutionLevel(progress: {
  completedLessons: number
  completedPlanets: number
  achievements: number
  starDust: number
}): number {
  let level = 0
  
  for (const evolution of companionEvolutions) {
    const req = evolution.unlockRequirement
    let requirementMet = false
    
    switch (req.type) {
      case 'lessons':
        requirementMet = progress.completedLessons >= req.target
        break
      case 'planets':
        requirementMet = progress.completedPlanets >= req.target
        break
      case 'achievements':
        requirementMet = progress.achievements >= req.target
        break
      case 'star_dust':
        requirementMet = progress.starDust >= req.target
        break
    }
    
    if (requirementMet) {
      level = evolution.level
    } else {
      break
    }
  }
  
  return level
}

export function getNextEvolutionRequirement(currentLevel: number): CompanionEvolution | null {
  const nextLevel = currentLevel + 1
  return companionEvolutions.find(e => e.level === nextLevel) || null
}

export function getCompanionMoodFromActivity(activityType: string, isCorrect: boolean): keyof typeof companionMoods {
  if (isCorrect) {
    return Math.random() > 0.5 ? 'happy' : 'excited'
  } else {
    return Math.random() > 0.5 ? 'curious' : 'sleepy'
  }
}

export function getUnlockedCustomizations(progress: {
  completedLessons: number
  completedPlanets: number
  achievements: number
  starDust: number
}) {
  const unlockedColors = companionCustomizations.colors.filter(color => {
    const req = color.unlockRequirement
    switch (req.type) {
      case 'lessons': return progress.completedLessons >= req.target
      case 'planets': return progress.completedPlanets >= req.target
      case 'achievements': return progress.achievements >= req.target
      case 'star_dust': return progress.starDust >= req.target
      default: return false
    }
  })
  
  const unlockedAccessories = companionCustomizations.accessories.filter(accessory => {
    const req = accessory.unlockRequirement
    switch (req.type) {
      case 'lessons': return progress.completedLessons >= req.target
      case 'planets': return progress.completedPlanets >= req.target
      case 'achievements': return progress.achievements >= req.target
      case 'star_dust': return progress.starDust >= req.target
      default: return false
    }
  })
  
  return { colors: unlockedColors, accessories: unlockedAccessories }
}
