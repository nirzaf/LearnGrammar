import type { Planet } from '../types/game'

/**
 * Planet data for Grammar Galaxy Quest
 * Contains all planets, lessons, and activities based on the curriculum requirements
 */
export const planetsData: Planet[] = [
  {
    id: 'planet-core',
    name: 'Planet Core',
    theme: 'A geologically active planet where the raw, crystalline building blocks of language are mined',
    description: 'Master the fundamental building blocks of language: nouns, verbs, and adjectives',
    color: '#8B4513',
    position: { x: 25, y: 35 },
    isUnlocked: true,
    completionPercentage: 0,
    lessons: [
      {
        id: 'core-lesson-1',
        title: 'Noun Knights - Revising Nouns',
        description: 'Help the Noun Knights collect magical objects for their quest',
        type: 'lesson',
        grammarConcept: 'Nouns',
        rewardStarDust: 50,
        isCompleted: false,
        isUnlocked: true,
        activities: [
          {
            id: 'noun-treasure-hunt',
            type: 'multiple-choice',
            title: 'Treasure Hunt',
            instructions: 'Click on all the nouns in this animated castle scene!',
            content: {
              sentence: 'The brave knight rode his horse to the castle where the princess waited.',
              options: ['knight, horse, castle, princess', 'brave, rode, waited', 'the, his, to, where', 'knight, brave, castle']
            },
            correctAnswer: 'knight, horse, castle, princess',
            feedback: {
              correct: 'Excellent! You found all the treasure nouns!',
              incorrect: 'Some treasures are still hidden. Look for people, places, things, and ideas!'
            }
          },
          {
            id: 'noun-sorting-challenge',
            type: 'drag-drop',
            title: 'Sorting Challenge',
            instructions: 'Categorize these nouns into the correct treasure chests!',
            content: {
              words: ['teacher', 'park', 'ball', 'happiness', 'dog', 'school', 'book', 'love'],
              categories: ['Person', 'Place', 'Thing', 'Idea']
            },
            correctAnswer: ['teacher:Person', 'dog:Person', 'park:Place', 'school:Place', 'ball:Thing', 'book:Thing', 'happiness:Idea', 'love:Idea'],
            feedback: {
              correct: 'Perfect sorting! The treasure chests are organized!',
              incorrect: 'Some nouns are in the wrong chest. Try again!'
            }
          },
          {
            id: 'story-builder-nouns',
            type: 'story-builder',
            title: 'Story Builder',
            instructions: 'Complete this mini-story by selecting appropriate nouns!',
            content: {
              story: 'The ___ walked to the ___ and found a magical ___.',
              blanks: 3,
              options: ['wizard', 'library', 'book', 'quickly', 'ran', 'beautiful']
            },
            correctAnswer: ['wizard', 'library', 'book'],
            feedback: {
              correct: 'Amazing story! You chose perfect nouns!',
              incorrect: 'Check your choices - make sure they are all nouns!'
            }
          },
          {
            id: 'memory-match-nouns',
            type: 'matching',
            title: 'Memory Match',
            instructions: 'Match noun cards with their category symbols!',
            content: {
              words: ['doctor', 'hospital', 'stethoscope', 'kindness'],
              categories: ['Person', 'Place', 'Thing', 'Idea']
            },
            correctAnswer: ['doctor:Person', 'hospital:Place', 'stethoscope:Thing', 'kindness:Idea'],
            feedback: {
              correct: 'Perfect match! You understand noun categories!',
              incorrect: 'Try again! Think about what each noun represents.'
            }
          },
          {
            id: 'dragons-riddle-nouns',
            type: 'typing',
            title: 'Dragon\'s Riddle',
            instructions: 'Answer the dragon\'s riddle - the solution is always a noun!',
            content: {
              question: 'I am a place where books live, students study, and knowledge grows. What am I?',
              sentence: 'The dragon guards the entrance to the ___'
            },
            correctAnswer: 'library',
            feedback: {
              correct: 'Correct! The dragon allows you to pass!',
              incorrect: 'The dragon shakes its head. Think of a place with books!'
            }
          }
        ]
      },
      {
        id: 'core-lesson-2',
        title: 'Verb Wizards - Revising Singular Verbs',
        description: 'Cast spells with singular verbs to power up your magic',
        type: 'lesson',
        grammarConcept: 'Singular Verbs',
        rewardStarDust: 50,
        isCompleted: false,
        isUnlocked: true,
        activities: [
          {
            id: 'action-movie-verbs',
            type: 'multiple-choice',
            title: 'Action Movie',
            instructions: 'Watch this short animation and identify the singular verb!',
            content: {
              sentence: 'The wizard carefully ___ the ancient scroll.',
              options: ['reads', 'read', 'reading', 'reader']
            },
            correctAnswer: 'reads',
            feedback: {
              correct: 'Excellent! The wizard\'s magic grows stronger!',
              incorrect: 'The spell fizzled! Remember, singular subjects need singular verbs.'
            }
          },
          {
            id: 'spell-completion',
            type: 'typing',
            title: 'Spell Completion',
            instructions: 'Fill in the missing singular verb to complete this magic spell!',
            content: {
              question: 'Complete the spell: The dragon ___ fire from its mouth.',
              sentence: 'When the dragon gets angry, it always ___ fire.'
            },
            correctAnswer: 'breathes',
            feedback: {
              correct: 'Perfect! The spell is complete and glowing!',
              incorrect: 'The spell is incomplete. Try a singular verb!'
            }
          },
          {
            id: 'character-commands',
            type: 'multiple-choice',
            title: 'Character Commands',
            instructions: 'Give commands to animated characters using singular verbs!',
            content: {
              sentence: 'The knight ___ his sword with great skill.',
              options: ['swing', 'swings', 'swinging', 'swung']
            },
            correctAnswer: 'swings',
            feedback: {
              correct: 'The knight follows your command perfectly!',
              incorrect: 'The knight looks confused. Try a singular verb!'
            }
          },
          {
            id: 'verb-transformation',
            type: 'drag-drop',
            title: 'Verb Transformation',
            instructions: 'Transform these sentences by changing the singular verb!',
            content: {
              sentence: 'The cat sleeps on the mat.',
              words: ['runs', 'jumps', 'plays', 'sleeps'],
              categories: ['New Verb']
            },
            correctAnswer: ['runs:New Verb'],
            feedback: {
              correct: 'Great transformation! The sentence has new meaning!',
              incorrect: 'Try a different singular verb to transform the sentence!'
            }
          },
          {
            id: 'rhythm-game-verbs',
            type: 'multiple-choice',
            title: 'Rhythm Game',
            instructions: 'Tap to the beat while identifying singular verbs in this song!',
            content: {
              sentence: '♪ The bird ___ in the morning light ♪',
              options: ['sing', 'sings', 'singing', 'sang']
            },
            correctAnswer: 'sings',
            feedback: {
              correct: 'Perfect rhythm! The song sounds beautiful!',
              incorrect: 'Off beat! Try to match the singular subject with a singular verb!'
            }
          }
        ]
      },
      {
        id: 'core-lesson-3',
        title: 'Companion Customizer: Revising Adjectives',
        description: 'Use adjectives to customize your creature companion',
        type: 'practice',
        grammarConcept: 'Adjectives',
        rewardStarDust: 50,
        isCompleted: false,
        isUnlocked: true,
        activities: [
          {
            id: 'companion-custom-1',
            type: 'multiple-choice',
            title: 'Gene Splicer',
            instructions: 'Identify the adjective to add traits to your companion!',
            content: {
              sentence: 'The fluffy cat slept peacefully.',
              options: ['fluffy', 'cat', 'slept', 'peacefully']
            },
            correctAnswer: 'fluffy',
            feedback: {
              correct: 'Amazing! Your companion grows fluffier!',
              incorrect: 'That\'s not an adjective. Look for describing words!'
            }
          }
        ]
      },
      {
        id: 'core-boss-1',
        title: 'Grammar Gremlin Boss Battle',
        description: 'Defeat the Grammar Gremlin by fixing broken sentences!',
        type: 'boss',
        grammarConcept: 'Mixed Review',
        rewardStarDust: 100,
        isCompleted: false,
        isUnlocked: true,
        activities: [
          {
            id: 'gremlin-battle-1',
            type: 'multiple-choice',
            title: 'Laser Charge',
            instructions: 'Fix the sentence to charge your laser and defeat the Grammar Gremlin!',
            content: {
              sentence: 'The brave knight ___ the dragon.',
              options: ['fight', 'fights', 'fighting', 'fought']
            },
            correctAnswer: 'fights',
            feedback: {
              correct: 'Direct hit! The Grammar Gremlin retreats!',
              incorrect: 'Your laser misfired! Try again!'
            }
          }
        ]
      }
    ]
  },
  {
    id: 'planet-signpost',
    name: 'Planet Signpost',
    theme: 'A bustling cosmic hub of highways, starports, and navigation towers',
    description: 'Learn to use signposts that guide readers to the right nouns',
    color: '#4169E1',
    position: { x: 75, y: 25 },
    isUnlocked: false,
    completionPercentage: 0,
    lessons: [
      {
        id: 'signpost-lesson-1',
        title: 'Starport Traffic Control: Using Articles',
        description: 'Guide spaceships to the right landing pads using articles',
        type: 'practice',
        grammarConcept: 'Articles (a, an, the)',
        rewardStarDust: 50,
        isCompleted: false,
        isUnlocked: true,
        activities: [
          {
            id: 'traffic-control-1',
            type: 'multiple-choice',
            title: 'Tractor Beam Control',
            instructions: 'Choose the correct article to guide the spaceship safely!',
            content: {
              sentence: 'Activate ___ tractor beam for the apple ship.',
              options: ['a', 'an', 'the']
            },
            correctAnswer: 'the',
            feedback: {
              correct: 'Perfect landing! The ship is safely docked!',
              incorrect: 'Collision avoided! Try a different article.'
            }
          }
        ]
      },
      {
        id: 'signpost-lesson-2',
        title: 'Deep Space Scanner: Demonstratives',
        description: 'Use your scanner to identify objects with demonstrative words',
        type: 'lesson',
        grammarConcept: 'Demonstratives (this, that, these, those)',
        rewardStarDust: 50,
        isCompleted: false,
        isUnlocked: true,
        activities: [
          {
            id: 'scanner-demo-1',
            type: 'multiple-choice',
            title: 'Object Scanner',
            instructions: 'Complete the sentence by choosing the correct demonstrative!',
            content: {
              sentence: 'Look at ___ flower floating nearby.',
              options: ['this', 'that', 'these', 'those']
            },
            correctAnswer: 'this',
            feedback: {
              correct: 'Scanner locked on! Object identified!',
              incorrect: 'Scanner malfunction! Recalibrate and try again.'
            }
          }
        ]
      }
    ]
  },
  {
    id: 'planet-morph',
    name: 'Planet Morph',
    theme: 'A lush, jungle-like world inhabited by shape-shifting creatures',
    description: 'Master pronouns with the help of shape-shifting alien friends',
    color: '#32CD32',
    position: { x: 20, y: 75 },
    isUnlocked: false,
    completionPercentage: 0,
    lessons: [
      {
        id: 'morph-lesson-1',
        title: 'Echo Fruit: Subjects & Objects',
        description: 'Feed the correct sentence parts to hungry shape-shifters',
        type: 'practice',
        grammarConcept: 'Subjects and Objects',
        rewardStarDust: 50,
        isCompleted: false,
        isUnlocked: true,
        activities: [
          {
            id: 'echo-fruit-1',
            type: 'drag-drop',
            title: 'Feeding Time',
            instructions: 'Feed the Subject Fruit and Object Fruit to the correct creatures!',
            content: {
              sentence: 'The cat chased the mouse.',
              words: ['The cat', 'chased', 'the mouse'],
              categories: ['Subject', 'Verb', 'Object']
            },
            correctAnswer: ['The cat:Subject', 'the mouse:Object'],
            feedback: {
              correct: 'Yum! The creatures are happy and well-fed!',
              incorrect: 'Uh oh! The creature spits out the wrong fruit!'
            }
          }
        ]
      },
      {
        id: 'morph-lesson-2',
        title: 'Transmogrifier Ray: Subject Pronouns',
        description: 'Transform nouns into pronouns with your ray gun',
        type: 'lesson',
        grammarConcept: 'Subject Pronouns',
        rewardStarDust: 50,
        isCompleted: false,
        isUnlocked: true,
        activities: [
          {
            id: 'transmog-ray-1',
            type: 'multiple-choice',
            title: 'Pronoun Transformation',
            instructions: 'Fire your ray to transform the noun into the correct pronoun!',
            content: {
              sentence: 'Mom baked a cake. ___ is delicious.',
              options: ['She', 'Her', 'He', 'It']
            },
            correctAnswer: 'It',
            feedback: {
              correct: 'ZAP! Perfect transformation!',
              incorrect: 'The ray misfired! Try a different setting.'
            }
          }
        ]
      }
    ]
  },
  {
    id: 'planet-time-warp',
    name: 'Planet Time-Warp',
    theme: 'A clockwork planet where time can be manipulated',
    description: 'Master plurals and past tense in this time-bending world',
    color: '#FFD700',
    position: { x: 80, y: 70 },
    isUnlocked: false,
    completionPercentage: 0,
    lessons: [
      {
        id: 'time-lesson-1',
        title: 'The Pluralizer 5000: Plurals & Verb Agreement',
        description: 'Use the amazing Pluralizer machine to transform words',
        type: 'practice',
        grammarConcept: 'Plurals and Verb Agreement',
        rewardStarDust: 50,
        isCompleted: false,
        isUnlocked: true,
        activities: [
          {
            id: 'pluralizer-1',
            type: 'typing',
            title: 'Machine Activation',
            instructions: 'Type the correct plural form to activate the Pluralizer 5000!',
            content: {
              question: 'Transform this word to plural: man',
              sentence: 'One man becomes many ___'
            },
            correctAnswer: 'men',
            feedback: {
              correct: 'BZZT! Transformation complete! Sparks fly everywhere!',
              incorrect: 'The machine shakes and sparks! Try again!'
            }
          }
        ]
      },
      {
        id: 'time-lesson-2',
        title: 'The Time Slider: Past Tense',
        description: 'Slide through time and fix glitching verbs',
        type: 'lesson',
        grammarConcept: 'Past Tense',
        rewardStarDust: 50,
        isCompleted: false,
        isUnlocked: true,
        activities: [
          {
            id: 'time-slider-1',
            type: 'typing',
            title: 'Timeline Stabilizer',
            instructions: 'Type the past tense form to stabilize the timeline!',
            content: {
              question: 'Yesterday, I ___ to the store.',
              sentence: 'Today I walk, but yesterday I ___'
            },
            correctAnswer: 'walked',
            feedback: {
              correct: 'Timeline stabilized! The glitching stops!',
              incorrect: 'The timeline is still unstable! Try again!'
            }
          }
        ]
      }
    ]
  },
  {
    id: 'planet-connector',
    name: 'Planet Connector',
    theme: 'A beautiful archipelago of floating islands, each representing a single idea',
    description: 'Build bridges between ideas using conjunctions',
    color: '#20B2AA',
    position: { x: 50, y: 85 },
    isUnlocked: false,
    completionPercentage: 0,
    lessons: [
      {
        id: 'connector-lesson-1',
        title: 'Bridge the Gap: Linking Sentences',
        description: 'Build bridges between floating islands using conjunctions',
        type: 'practice',
        grammarConcept: 'Conjunctions (and, but, or, because)',
        rewardStarDust: 50,
        isCompleted: false,
        isUnlocked: true,
        activities: [
          {
            id: 'bridge-gap-1',
            type: 'multiple-choice',
            title: 'Bridge Builder',
            instructions: 'Choose the right building material to construct a safe bridge!',
            content: {
              sentence: 'I wanted to play outside ___ it was raining.',
              options: ['and', 'but', 'or', 'because']
            },
            correctAnswer: 'but',
            feedback: {
              correct: 'Perfect! Your Grammarnaut crosses safely!',
              incorrect: 'The bridge wobbles! Your Grammarnaut parachutes down to try again!'
            }
          }
        ]
      }
    ]
  },
  {
    id: 'punctuation-palace',
    name: 'Punctuation Palace',
    theme: 'A majestic, crystalline palace where punctuation marks are powerful, energy-giving gems',
    description: 'Master the art of punctuation in this royal palace',
    color: '#9370DB',
    position: { x: 85, y: 45 },
    isUnlocked: false,
    completionPercentage: 0,
    lessons: [
      {
        id: 'palace-lesson-1',
        title: 'Holo-Communicator: Punctuating Speech',
        description: 'Help aliens communicate clearly by adding punctuation gems',
        type: 'practice',
        grammarConcept: 'Punctuating Speech',
        rewardStarDust: 50,
        isCompleted: false,
        isUnlocked: true,
        activities: [
          {
            id: 'holo-comm-1',
            type: 'drag-drop',
            title: 'Gem Placement',
            instructions: 'Drag the correct punctuation gems to complete the alien\'s message!',
            content: {
              sentence: 'Hello said the alien How are you today',
              words: ['"', 'Hello', ',', '"', 'said', 'the', 'alien', '.', '"', 'How', 'are', 'you', 'today', '?', '"'],
              categories: ['Quotation', 'Word', 'Comma', 'Period', 'Question']
            },
            correctAnswer: ['"Hello," said the alien. "How are you today?"'],
            feedback: {
              correct: 'Perfect! The alien gives a happy cheer and the transmission ends!',
              incorrect: 'The message is unclear! Try placing the gems differently.'
            }
          }
        ]
      },
      {
        id: 'palace-lesson-2',
        title: 'Word Fusion Chamber: Contractions',
        description: 'Fuse words together and place apostrophe gems correctly',
        type: 'lesson',
        grammarConcept: 'Contractions',
        rewardStarDust: 50,
        isCompleted: false,
        isUnlocked: true,
        activities: [
          {
            id: 'fusion-chamber-1',
            type: 'multiple-choice',
            title: 'Word Fusion',
            instructions: 'Fuse the words and place the apostrophe gem correctly!',
            content: {
              sentence: 'do + not = ?',
              options: ['dont', 'do\'nt', 'don\'t', 'do not']
            },
            correctAnswer: 'don\'t',
            feedback: {
              correct: 'FUSION COMPLETE! The apostrophe gem glows brightly!',
              incorrect: 'Fusion failed! The chamber needs recalibration.'
            }
          }
        ]
      }
    ]
  }
]