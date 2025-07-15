import { useState, useEffect } from 'react'
import type { Planet } from '../types/game'

interface CharacterGuideProps {
  planet: Planet
  isVisible: boolean
  onClose: () => void
  message?: string
  showIntroduction?: boolean
}

interface CharacterInfo {
  name: string
  avatar: string
  personality: string
  greeting: string
  helpText: string
  encouragement: string[]
  hints: string[]
}

const characterData: Record<string, CharacterInfo> = {
  'planet-core': {
    name: 'Grammar Wizard Grammarion',
    avatar: '🧙‍♂️',
    personality: 'wise and encouraging',
    greeting: 'Welcome to the Grammar Kingdom, young adventurer! I am Grammarion, your guide through the magical world of words.',
    helpText: 'In Building Blocks Castle, we\'ll learn about the foundation stones of language: nouns, verbs, and adjectives!',
    encouragement: [
      'Excellent work! You\'re mastering the building blocks!',
      'Fantastic! Your grammar skills are growing stronger!',
      'Well done! You understand the magic of words!',
      'Brilliant! Keep building your grammar castle!'
    ],
    hints: [
      'Remember: Nouns are people, places, things, or ideas!',
      'Verbs show action or being - what someone does!',
      'Adjectives describe nouns - they add color to your words!',
      'Think about what the word is doing in the sentence!'
    ]
  },
  'planet-signpost': {
    name: 'Village Guide Signora',
    avatar: '🗺️',
    personality: 'helpful and organized',
    greeting: 'Hello there, traveler! I\'m Signora, your village guide. Let me help you navigate with proper signposts!',
    helpText: 'In Signpost Village, we use special words called determiners to point the way - like "the," "a," "this," and "that"!',
    encouragement: [
      'Perfect navigation! You\'re following the signposts well!',
      'Great job! You know which way to go!',
      'Excellent! Your signpost skills are improving!',
      'Wonderful! You\'re becoming a master navigator!'
    ],
    hints: [
      'Use "a" before consonant sounds, "an" before vowel sounds!',
      '"The" points to something specific!',
      '"This" and "these" are for things nearby!',
      '"That" and "those" are for things far away!'
    ]
  },
  'planet-morph': {
    name: 'Royal Advisor Pronouncia',
    avatar: '👑',
    personality: 'regal and wise',
    greeting: 'Greetings, noble student! I am Pronouncia, Royal Advisor of Pronoun Palace. Let me teach you the art of elegant speech!',
    helpText: 'In Pronoun Palace, we learn to replace nouns with pronouns to make our speech flow like royal silk!',
    encouragement: [
      'Magnificent! Your royal speech is improving!',
      'Splendid! You speak with noble elegance!',
      'Excellent! Fit for the royal court!',
      'Marvelous! Your pronoun mastery grows!'
    ],
    hints: [
      'Subject pronouns do the action: I, you, he, she, it, we, they!',
      'Object pronouns receive the action: me, you, him, her, it, us, them!',
      'Replace repeated nouns with pronouns for smoother speech!',
      'Match the pronoun to who or what you\'re talking about!'
    ]
  },
  'planet-time-warp': {
    name: 'Time Master Chronos',
    avatar: '⏰',
    personality: 'energetic and time-conscious',
    greeting: 'Greetings from across time! I\'m Chronos, Master of Time Travel Academy. Ready to journey through verb tenses?',
    helpText: 'In Time Travel Academy, we master how verbs change to show when things happen - past, present, and future!',
    encouragement: [
      'Time travel successful! Perfect tense usage!',
      'Excellent! You\'ve mastered this time period!',
      'Fantastic! Your verb timing is perfect!',
      'Great work! Time has no secrets from you!'
    ],
    hints: [
      'Singular subjects need singular verbs!',
      'Plural subjects need plural verbs!',
      'Past tense shows what already happened!',
      'Listen to how the verb sounds with the subject!'
    ]
  },
  'planet-connector': {
    name: 'Bridge Builder Connecta',
    avatar: '🌉',
    personality: 'connecting and collaborative',
    greeting: 'Hello, sentence architect! I\'m Connecta, master bridge builder. Let\'s connect ideas with powerful conjunctions!',
    helpText: 'On Connection Bridge, we learn to link sentences and ideas using conjunctions like "and," "but," "or," and "because"!',
    encouragement: [
      'Perfect connection! Your bridges are strong!',
      'Excellent! Ideas flow smoothly across your bridges!',
      'Great work! You\'re a master bridge builder!',
      'Wonderful! Your connections make perfect sense!'
    ],
    hints: [
      'Use "and" to add similar ideas together!',
      'Use "but" to show contrast or difference!',
      'Use "or" to show choices or alternatives!',
      'Use "because" to show reasons or causes!'
    ]
  },
  'punctuation-palace': {
    name: 'Punctuation Princess Puncta',
    avatar: '👸',
    personality: 'precise and elegant',
    greeting: 'Welcome to my crystal palace! I\'m Princess Puncta, guardian of all punctuation gems. Let\'s make your writing sparkle!',
    helpText: 'In Punctuation Palace, every mark has magical power - periods end thoughts, questions seek answers, and exclamations show excitement!',
    encouragement: [
      'Perfectly punctuated! Your writing sparkles!',
      'Excellent! Your punctuation gems shine brightly!',
      'Wonderful! Your sentences are crystal clear!',
      'Magnificent! You wield punctuation like royalty!'
    ],
    hints: [
      'Every sentence needs an ending mark!',
      'Capital letters start sentences and proper nouns!',
      'Commas separate items in lists!',
      'Quotation marks surround spoken words!'
    ]
  }
}

export default function CharacterGuide({ planet, isVisible, onClose, message, showIntroduction = false }: CharacterGuideProps) {
  const [currentMessage, setCurrentMessage] = useState('')
  const [isAnimating, setIsAnimating] = useState(false)
  // const [messageIndex] = useState(0)

  const character = characterData[planet.id] || characterData['planet-core']

  useEffect(() => {
    if (isVisible) {
      setIsAnimating(true)
      if (showIntroduction) {
        setCurrentMessage(character.greeting)
      } else if (message) {
        setCurrentMessage(message)
      } else {
        // Show random encouragement
        const randomEncouragement = character.encouragement[Math.floor(Math.random() * character.encouragement.length)]
        setCurrentMessage(randomEncouragement)
      }
    }
  }, [isVisible, message, showIntroduction, character])

  const getRandomHint = () => {
    const randomHint = character.hints[Math.floor(Math.random() * character.hints.length)]
    setCurrentMessage(randomHint)
  }

  const getRandomEncouragement = () => {
    const randomEncouragement = character.encouragement[Math.floor(Math.random() * character.encouragement.length)]
    setCurrentMessage(randomEncouragement)
  }

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className={`bg-gradient-to-br from-purple-900 to-blue-900 rounded-2xl p-6 max-w-md mx-4 border-2 border-cosmic-purple shadow-2xl transform transition-all duration-300 ${
        isAnimating ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
      }`}>
        {/* Character Avatar */}
        <div className="text-center mb-4">
          <div className="text-6xl mb-2 animate-bounce">
            {character.avatar}
          </div>
          <h3 className="text-xl font-bold text-white mb-1">
            {character.name}
          </h3>
          <p className="text-sm text-gray-300 italic">
            {character.personality}
          </p>
        </div>

        {/* Message */}
        <div className="bg-white/10 rounded-lg p-4 mb-4 backdrop-blur-sm">
          <p className="text-white text-center leading-relaxed">
            {currentMessage}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-2 justify-center mb-4">
          <button
            onClick={getRandomHint}
            className="px-3 py-1 bg-yellow-500 hover:bg-yellow-600 text-white rounded-full text-sm transition-colors"
          >
            💡 Get Hint
          </button>
          <button
            onClick={getRandomEncouragement}
            className="px-3 py-1 bg-green-500 hover:bg-green-600 text-white rounded-full text-sm transition-colors"
          >
            ⭐ Encouragement
          </button>
          <button
            onClick={() => setCurrentMessage(character.helpText)}
            className="px-3 py-1 bg-blue-500 hover:bg-blue-600 text-white rounded-full text-sm transition-colors"
          >
            ℹ️ Help
          </button>
        </div>

        {/* Close Button */}
        <div className="text-center">
          <button
            onClick={onClose}
            className="px-6 py-2 bg-cosmic-purple hover:bg-purple-700 text-white rounded-full transition-colors"
          >
            Continue Adventure
          </button>
        </div>
      </div>
    </div>
  )
}
