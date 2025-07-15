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
        title: 'Adjective Artists - Revising Adjectives',
        description: 'Paint scenes while learning descriptive adjectives',
        type: 'lesson',
        grammarConcept: 'Adjectives',
        rewardStarDust: 50,
        isCompleted: false,
        isUnlocked: true,
        activities: [
          {
            id: 'art-gallery-adjectives',
            type: 'multiple-choice',
            title: 'Art Gallery',
            instructions: 'Describe this painting using appropriate adjectives!',
            content: {
              sentence: 'This painting shows a ___ sunset over the mountains.',
              options: ['beautiful', 'quickly', 'mountain', 'shows']
            },
            correctAnswer: 'beautiful',
            feedback: {
              correct: 'Perfect description! The painting comes to life!',
              incorrect: 'That doesn\'t describe the sunset. Try an adjective!'
            }
          },
          {
            id: 'monster-maker',
            type: 'drag-drop',
            title: 'Monster Maker',
            instructions: 'Create creatures by selecting descriptive adjectives!',
            content: {
              words: ['scary', 'purple', 'tiny', 'friendly', 'quickly', 'runs', 'monster', 'very'],
              categories: ['Adjectives', 'Other Words']
            },
            correctAnswer: ['scary:Adjectives', 'purple:Adjectives', 'tiny:Adjectives', 'friendly:Adjectives', 'quickly:Other Words', 'runs:Other Words', 'monster:Other Words', 'very:Other Words'],
            feedback: {
              correct: 'Amazing creature! You chose perfect adjectives!',
              incorrect: 'Some words aren\'t adjectives. Look for describing words!'
            }
          },
          {
            id: 'fashion-designer',
            type: 'multiple-choice',
            title: 'Fashion Designer',
            instructions: 'Dress characters by choosing clothing adjectives!',
            content: {
              sentence: 'The princess wore a ___ dress to the ball.',
              options: ['sparkly', 'dance', 'wore', 'princess']
            },
            correctAnswer: 'sparkly',
            feedback: {
              correct: 'Gorgeous! The princess looks stunning!',
              incorrect: 'That doesn\'t describe the dress. Try an adjective!'
            }
          },
          {
            id: 'weather-reporter',
            type: 'typing',
            title: 'Weather Reporter',
            instructions: 'Describe weather scenes using appropriate adjectives!',
            content: {
              question: 'Describe today\'s weather: It is a ___ day.',
              sentence: 'The weather forecast shows ___ skies.'
            },
            correctAnswer: 'sunny',
            feedback: {
              correct: 'Great weather report! Very descriptive!',
              incorrect: 'Try an adjective that describes weather!'
            }
          },
          {
            id: 'taste-tester',
            type: 'matching',
            title: 'Taste Tester',
            instructions: 'Match foods with taste-describing adjectives!',
            content: {
              words: ['lemon', 'chocolate', 'pepper', 'sugar'],
              categories: ['sour', 'sweet', 'spicy', 'sweet']
            },
            correctAnswer: ['lemon:sour', 'chocolate:sweet', 'pepper:spicy', 'sugar:sweet'],
            feedback: {
              correct: 'Delicious matching! You know your tastes!',
              incorrect: 'Hmm, that doesn\'t taste right. Try again!'
            }
          }
        ]
      },
      {
        id: 'core-lesson-4',
        title: 'Phrase Builders - Expanding Noun Phrases',
        description: 'Build expanded noun phrases like constructing with blocks',
        type: 'lesson',
        grammarConcept: 'Expanding Noun Phrases',
        rewardStarDust: 50,
        isCompleted: false,
        isUnlocked: true,
        activities: [
          {
            id: 'sentence-expander',
            type: 'multiple-choice',
            title: 'Sentence Expander',
            instructions: 'Transform simple nouns into expanded phrases!',
            content: {
              sentence: 'A cat → A ___ cat',
              options: ['fluffy orange', 'quickly ran', 'meowed loudly', 'in the garden']
            },
            correctAnswer: 'fluffy orange',
            feedback: {
              correct: 'Excellent expansion! The noun phrase is much more interesting!',
              incorrect: 'That doesn\'t expand the noun. Try adding describing words!'
            }
          },
          {
            id: 'detective-description',
            type: 'story-builder',
            title: 'Detective Description',
            instructions: 'Create detailed descriptions for mystery solving!',
            content: {
              story: 'The detective found a ___ ___ book on the ___ ___ table.',
              blanks: 4,
              options: ['old', 'mysterious', 'wooden', 'round', 'quickly', 'very']
            },
            correctAnswer: ['old', 'mysterious', 'wooden', 'round'],
            feedback: {
              correct: 'Perfect description! The mystery is clearer now!',
              incorrect: 'The description needs more adjectives to expand the noun phrases!'
            }
          },
          {
            id: 'story-enhancer',
            type: 'drag-drop',
            title: 'Story Enhancer',
            instructions: 'Improve boring sentences with expanded noun phrases!',
            content: {
              sentence: 'The dog played in the yard.',
              words: ['playful golden', 'energetic', 'spacious green', 'sunny'],
              categories: ['Dog Description', 'Yard Description']
            },
            correctAnswer: ['playful golden:Dog Description', 'energetic:Dog Description', 'spacious green:Yard Description', 'sunny:Yard Description'],
            feedback: {
              correct: 'Much better! The story is now vivid and interesting!',
              incorrect: 'Try to match the descriptions with what they describe!'
            }
          },
          {
            id: 'comparison-game',
            type: 'multiple-choice',
            title: 'Comparison Game',
            instructions: 'Choose the more interesting expanded phrase!',
            content: {
              sentence: 'Which is more interesting?',
              options: ['a book', 'a thick, mysterious book', 'book reading', 'books are good']
            },
            correctAnswer: 'a thick, mysterious book',
            feedback: {
              correct: 'Great choice! Expanded noun phrases make writing more engaging!',
              incorrect: 'Look for the phrase with more descriptive words!'
            }
          },
          {
            id: 'creative-writing-phrases',
            type: 'typing',
            title: 'Creative Writing',
            instructions: 'Write descriptions using expanded noun phrases!',
            content: {
              question: 'Describe a magical castle using expanded noun phrases.',
              sentence: 'I see a ___ ___ castle on the hill.'
            },
            correctAnswer: 'tall magnificent',
            feedback: {
              correct: 'Beautiful description! Your expanded noun phrase paints a vivid picture!',
              incorrect: 'Try adding more describing words to expand the noun phrase!'
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
        title: 'Article Helpers - Using Articles',
        description: 'Guide spaceships to the right landing pads using articles',
        type: 'lesson',
        grammarConcept: 'Articles (a, an, the)',
        rewardStarDust: 50,
        isCompleted: false,
        isUnlocked: true,
        activities: [
          {
            id: 'village-guide',
            type: 'multiple-choice',
            title: 'Village Guide',
            instructions: 'Help tourists by placing correct article signposts!',
            content: {
              sentence: 'The tourist wants to visit ___ museum.',
              options: ['a', 'an', 'the']
            },
            correctAnswer: 'the',
            feedback: {
              correct: 'Perfect! The tourist found the museum!',
              incorrect: 'The tourist is lost! Try a different article signpost.'
            }
          },
          {
            id: 'shopping-trip',
            type: 'multiple-choice',
            title: 'Shopping Trip',
            instructions: 'Choose correct articles when buying items at village shops!',
            content: {
              sentence: 'I need to buy ___ apple from the market.',
              options: ['a', 'an', 'the']
            },
            correctAnswer: 'an',
            feedback: {
              correct: 'Great choice! The shopkeeper is happy!',
              incorrect: 'The shopkeeper looks confused. Try again!'
            }
          },
          {
            id: 'story-navigation',
            type: 'story-builder',
            title: 'Story Navigation',
            instructions: 'Complete this choose-your-own-adventure using correct articles!',
            content: {
              story: 'You enter ___ dark forest and see ___ owl sitting on ___ branch.',
              blanks: 3,
              options: ['a', 'an', 'the', 'some', 'many']
            },
            correctAnswer: ['a', 'an', 'a'],
            feedback: {
              correct: 'Excellent navigation! Your adventure continues!',
              incorrect: 'You got lost in the forest! Check your articles.'
            }
          },
          {
            id: 'listening-challenge',
            type: 'multiple-choice',
            title: 'Listening Challenge',
            instructions: 'Hear the word and select the correct article!',
            content: {
              sentence: 'Listen: "elephant" - Choose the correct article: ___ elephant',
              options: ['a', 'an', 'the']
            },
            correctAnswer: 'an',
            feedback: {
              correct: 'Perfect listening! You heard the vowel sound!',
              incorrect: 'Listen carefully to the first sound of the word!'
            }
          },
          {
            id: 'speed-sorting',
            type: 'drag-drop',
            title: 'Speed Sorting',
            instructions: 'Quick-fire article selection with immediate feedback!',
            content: {
              words: ['apple', 'book', 'elephant', 'house'],
              categories: ['a ___', 'an ___']
            },
            correctAnswer: ['book:a ___', 'house:a ___', 'apple:an ___', 'elephant:an ___'],
            feedback: {
              correct: 'Lightning fast! Perfect article sorting!',
              incorrect: 'Slow down and think about the first sound!'
            }
          }
        ]
      },
      {
        id: 'signpost-lesson-2',
        title: 'More Signpost Helpers - Understanding More Signposts',
        description: 'Discover various determiners through village exploration',
        type: 'lesson',
        grammarConcept: 'Determiners (this, that, these, those, my, your)',
        rewardStarDust: 50,
        isCompleted: false,
        isUnlocked: true,
        activities: [
          {
            id: 'signpost-repair',
            type: 'multiple-choice',
            title: 'Signpost Repair',
            instructions: 'Fix broken signposts by choosing correct determiners!',
            content: {
              sentence: '___ book belongs to me.',
              options: ['This', 'These', 'My', 'Those']
            },
            correctAnswer: 'This',
            feedback: {
              correct: 'Signpost repaired! The path is clear!',
              incorrect: 'The signpost is still broken. Try another word!'
            }
          },
          {
            id: 'village-census',
            type: 'drag-drop',
            title: 'Village Census',
            instructions: 'Count and describe village elements using appropriate signposts!',
            content: {
              words: ['this house', 'these houses', 'that tree', 'those trees'],
              categories: ['Near (singular)', 'Near (plural)', 'Far (singular)', 'Far (plural)']
            },
            correctAnswer: ['this house:Near (singular)', 'these houses:Near (plural)', 'that tree:Far (singular)', 'those trees:Far (plural)'],
            feedback: {
              correct: 'Census complete! Village mapped perfectly!',
              incorrect: 'Some locations are mixed up. Check distance and number!'
            }
          },
          {
            id: 'directions-game',
            type: 'multiple-choice',
            title: 'Directions Game',
            instructions: 'Give directions using various determiners!',
            content: {
              sentence: 'Go to ___ building over there.',
              options: ['this', 'that', 'these', 'those']
            },
            correctAnswer: 'that',
            feedback: {
              correct: 'Perfect directions! The traveler found their way!',
              incorrect: 'The traveler is confused. Think about distance!'
            }
          },
          {
            id: 'mystery-solver',
            type: 'story-builder',
            title: 'Mystery Solver',
            instructions: 'Use signpost clues to solve village mysteries!',
            content: {
              story: '___ footprints lead to ___ door, but ___ window is open.',
              blanks: 3,
              options: ['These', 'This', 'That', 'Those', 'My', 'Your']
            },
            correctAnswer: ['These', 'that', 'this'],
            feedback: {
              correct: 'Mystery solved! You used the clues perfectly!',
              incorrect: 'The mystery remains unsolved. Check your signpost clues!'
            }
          },
          {
            id: 'creative-building',
            type: 'typing',
            title: 'Creative Building',
            instructions: 'Design village scenes using different determiners!',
            content: {
              question: 'Describe what you see: ___ flowers are beautiful.',
              sentence: 'In my garden, ___ flowers bloom every spring.'
            },
            correctAnswer: 'these',
            feedback: {
              correct: 'Beautiful scene! Your description is perfect!',
              incorrect: 'Try a determiner that shows the flowers are near and plural!'
            }
          }
        ]
      },
      {
        id: 'signpost-lesson-3',
        title: 'Number Detectives - Adding Information About Number',
        description: 'Track singular and plural items with number detective tools',
        type: 'lesson',
        grammarConcept: 'Number Information (one, two, many, few)',
        rewardStarDust: 50,
        isCompleted: false,
        isUnlocked: true,
        activities: [
          {
            id: 'census-taker',
            type: 'multiple-choice',
            title: 'Census Taker',
            instructions: 'Count and describe village population correctly!',
            content: {
              sentence: 'There are ___ children playing in the park.',
              options: ['one', 'many', 'a', 'the']
            },
            correctAnswer: 'many',
            feedback: {
              correct: 'Accurate count! The census is complete!',
              incorrect: 'Recount needed! Look at the number of children!'
            }
          },
          {
            id: 'inventory-manager',
            type: 'drag-drop',
            title: 'Inventory Manager',
            instructions: 'Track singular and plural items in village shops!',
            content: {
              words: ['one apple', 'three books', 'many flowers', 'few coins'],
              categories: ['Singular', 'Plural']
            },
            correctAnswer: ['one apple:Singular', 'three books:Plural', 'many flowers:Plural', 'few coins:Plural'],
            feedback: {
              correct: 'Inventory organized! Everything is counted correctly!',
              incorrect: 'Some items are miscounted. Check singular vs plural!'
            }
          },
          {
            id: 'event-planner',
            type: 'story-builder',
            title: 'Event Planner',
            instructions: 'Plan village events using correct number information!',
            content: {
              story: 'We need ___ table, ___ chairs, and ___ decorations for the party.',
              blanks: 3,
              options: ['one', 'two', 'many', 'few', 'several', 'some']
            },
            correctAnswer: ['one', 'many', 'few'],
            feedback: {
              correct: 'Perfect party planning! Everyone will have fun!',
              incorrect: 'The party setup is confusing. Check your numbers!'
            }
          },
          {
            id: 'recipe-adjuster',
            type: 'multiple-choice',
            title: 'Recipe Adjuster',
            instructions: 'Modify recipes by changing number quantities!',
            content: {
              sentence: 'The recipe calls for ___ eggs.',
              options: ['one', 'two', 'much', 'very']
            },
            correctAnswer: 'two',
            feedback: {
              correct: 'Delicious! The recipe is perfectly adjusted!',
              incorrect: 'The recipe won\'t work. Try a number word!'
            }
          },
          {
            id: 'sports-announcer',
            type: 'typing',
            title: 'Sports Announcer',
            instructions: 'Describe sports events using appropriate number language!',
            content: {
              question: 'How many players are on the field?',
              sentence: 'There are ___ players running on the field.'
            },
            correctAnswer: 'many',
            feedback: {
              correct: 'Great commentary! The crowd is excited!',
              incorrect: 'The audience is confused. Use a number word!'
            }
          }
        ]
      },
      {
        id: 'signpost-lesson-4',
        title: 'Signpost Choosers - Choosing Signposts',
        description: 'Master the art of choosing the right signpost for every situation',
        type: 'lesson',
        grammarConcept: 'Choosing Appropriate Signposts',
        rewardStarDust: 50,
        isCompleted: false,
        isUnlocked: true,
        activities: [
          {
            id: 'signpost-challenge',
            type: 'multiple-choice',
            title: 'Signpost Challenge',
            instructions: 'Choose the best signpost for various situations!',
            content: {
              sentence: 'I lost ___ keys somewhere in the house.',
              options: ['my', 'the', 'this', 'these']
            },
            correctAnswer: 'my',
            feedback: {
              correct: 'Perfect choice! The meaning is clear!',
              incorrect: 'That signpost doesn\'t fit. Think about ownership!'
            }
          },
          {
            id: 'context-clue-detective',
            type: 'story-builder',
            title: 'Context Clue Detective',
            instructions: 'Use context to select appropriate signposts!',
            content: {
              story: '___ dog in ___ yard belongs to ___ neighbor.',
              blanks: 3,
              options: ['The', 'A', 'This', 'That', 'My', 'Our']
            },
            correctAnswer: ['The', 'the', 'our'],
            feedback: {
              correct: 'Detective work complete! The context is clear!',
              incorrect: 'More investigation needed. Check the context clues!'
            }
          },
          {
            id: 'communication-helper',
            type: 'multiple-choice',
            title: 'Communication Helper',
            instructions: 'Help village characters communicate clearly!',
            content: {
              sentence: 'Can you pass me ___ book on the table?',
              options: ['a', 'the', 'this', 'that']
            },
            correctAnswer: 'the',
            feedback: {
              correct: 'Clear communication! Message understood!',
              incorrect: 'The message is unclear. Try a different signpost!'
            }
          },
          {
            id: 'editing-expert',
            type: 'drag-drop',
            title: 'Editing Expert',
            instructions: 'Improve village notices by choosing better signposts!',
            content: {
              sentence: 'Village Meeting: All residents should bring their ideas to the meeting.',
              words: ['All', 'their', 'the', 'a'],
              categories: ['Good Signposts', 'Could Be Better']
            },
            correctAnswer: ['All:Good Signposts', 'their:Good Signposts', 'the:Good Signposts', 'a:Could Be Better'],
            feedback: {
              correct: 'Expert editing! The notice is much clearer!',
              incorrect: 'Some signposts could be improved. Keep editing!'
            }
          },
          {
            id: 'creative-writer',
            type: 'typing',
            title: 'Creative Writer',
            instructions: 'Write village announcements using various signposts!',
            content: {
              question: 'Write an announcement about a village festival.',
              sentence: '___ annual festival will be held in ___ town square.'
            },
            correctAnswer: 'The, the',
            feedback: {
              correct: 'Wonderful announcement! Everyone will know about the festival!',
              incorrect: 'The announcement needs clearer signposts!'
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
        title: 'Subject and Object Servants - Understanding Subjects and Objects',
        description: 'Learn who does what to whom in the royal court',
        type: 'lesson',
        grammarConcept: 'Subjects and Objects',
        rewardStarDust: 50,
        isCompleted: false,
        isUnlocked: true,
        activities: [
          {
            id: 'court-reporter',
            type: 'multiple-choice',
            title: 'Court Reporter',
            instructions: 'Identify who is doing what in royal court scenes!',
            content: {
              sentence: 'The queen gave the knight a medal.',
              options: ['The queen (subject)', 'gave (subject)', 'the knight (subject)', 'a medal (subject)']
            },
            correctAnswer: 'The queen (subject)',
            feedback: {
              correct: 'Excellent reporting! You identified the subject correctly!',
              incorrect: 'Check again - who is doing the action?'
            }
          },
          {
            id: 'play-director',
            type: 'drag-drop',
            title: 'Play Director',
            instructions: 'Assign subject and object roles to actors!',
            content: {
              sentence: 'The prince rescued the princess.',
              words: ['The prince', 'rescued', 'the princess'],
              categories: ['Subject (who does)', 'Action', 'Object (receives action)']
            },
            correctAnswer: ['The prince:Subject (who does)', 'rescued:Action', 'the princess:Object (receives action)'],
            feedback: {
              correct: 'Perfect casting! The play will be amazing!',
              incorrect: 'The actors are confused about their roles!'
            }
          },
          {
            id: 'news-anchor',
            type: 'multiple-choice',
            title: 'News Anchor',
            instructions: 'Report palace events by identifying subjects and objects!',
            content: {
              sentence: 'The dragon frightened the villagers.',
              options: ['the villagers (object)', 'frightened (object)', 'The dragon (object)', 'palace (object)']
            },
            correctAnswer: 'the villagers (object)',
            feedback: {
              correct: 'Breaking news delivered perfectly!',
              incorrect: 'The news is confusing. Who received the action?'
            }
          },
          {
            id: 'detective-work',
            type: 'story-builder',
            title: 'Detective Work',
            instructions: 'Solve palace mysteries by tracking subjects and objects!',
            content: {
              story: '___ stole ___ from ___.',
              blanks: 3,
              options: ['The thief', 'the crown', 'the treasury', 'quickly', 'yesterday']
            },
            correctAnswer: ['The thief', 'the crown', 'the treasury'],
            feedback: {
              correct: 'Mystery solved! You tracked the subject and objects perfectly!',
              incorrect: 'The mystery remains unsolved. Check who did what to whom!'
            }
          },
          {
            id: 'story-analyzer',
            type: 'typing',
            title: 'Story Analyzer',
            instructions: 'Break down fairy tales into subjects and objects!',
            content: {
              question: 'In "Goldilocks ate the porridge," who is the subject?',
              sentence: 'The subject (who does the action) is ___'
            },
            correctAnswer: 'Goldilocks',
            feedback: {
              correct: 'Perfect analysis! You understand subjects and objects!',
              incorrect: 'Think about who is doing the eating!'
            }
          }
        ]
      },
      {
        id: 'morph-lesson-2',
        title: 'Subject Pronoun Guards - Understanding Subject Pronouns',
        description: 'Replace noun guards with pronoun guards in the royal palace',
        type: 'lesson',
        grammarConcept: 'Subject Pronouns',
        rewardStarDust: 50,
        isCompleted: false,
        isUnlocked: true,
        activities: [
          {
            id: 'guard-duty',
            type: 'multiple-choice',
            title: 'Guard Duty',
            instructions: 'Replace tired noun guards with fresh pronoun guards!',
            content: {
              sentence: 'The king is tired. ___ needs to rest.',
              options: ['He', 'Him', 'His', 'They']
            },
            correctAnswer: 'He',
            feedback: {
              correct: 'Perfect guard replacement! The palace is secure!',
              incorrect: 'Wrong guard type! Try a subject pronoun.'
            }
          },
          {
            id: 'royal-proclamation',
            type: 'story-builder',
            title: 'Royal Proclamation',
            instructions: 'Write palace announcements using subject pronouns!',
            content: {
              story: 'The queen and king will visit tomorrow. ___ are excited to meet everyone.',
              blanks: 1,
              options: ['They', 'Them', 'Their', 'We']
            },
            correctAnswer: ['They'],
            feedback: {
              correct: 'Royal proclamation approved! The message is clear!',
              incorrect: 'The proclamation is confusing. Use a subject pronoun!'
            }
          },
          {
            id: 'throne-room',
            type: 'drag-drop',
            title: 'Throne Room',
            instructions: 'Identify subject pronouns in royal conversations!',
            content: {
              words: ['I', 'me', 'you', 'he', 'him', 'she', 'her', 'we', 'us', 'they', 'them'],
              categories: ['Subject Pronouns', 'Object Pronouns']
            },
            correctAnswer: ['I:Subject Pronouns', 'you:Subject Pronouns', 'he:Subject Pronouns', 'she:Subject Pronouns', 'we:Subject Pronouns', 'they:Subject Pronouns', 'me:Object Pronouns', 'him:Object Pronouns', 'her:Object Pronouns', 'us:Object Pronouns', 'them:Object Pronouns'],
            feedback: {
              correct: 'Excellent sorting! You know your pronouns!',
              incorrect: 'Some pronouns are in the wrong category!'
            }
          },
          {
            id: 'palace-gossip',
            type: 'multiple-choice',
            title: 'Palace Gossip',
            instructions: 'Transform gossip by using subject pronouns!',
            content: {
              sentence: 'The princess danced beautifully. ___ impressed everyone.',
              options: ['She', 'Her', 'Hers', 'They']
            },
            correctAnswer: 'She',
            feedback: {
              correct: 'Gossip transformed! The story flows better!',
              incorrect: 'The gossip is still clunky. Try a subject pronoun!'
            }
          },
          {
            id: 'crown-ceremony',
            type: 'typing',
            title: 'Crown Ceremony',
            instructions: 'Describe royal events using appropriate subject pronouns!',
            content: {
              question: 'The knights marched proudly. ___ looked magnificent.',
              sentence: 'Complete with a subject pronoun: ___'
            },
            correctAnswer: 'They',
            feedback: {
              correct: 'Magnificent ceremony description!',
              incorrect: 'The description needs a subject pronoun for multiple knights!'
            }
          }
        ]
      },
      {
        id: 'morph-lesson-3',
        title: 'Object Pronoun Assistants - Understanding Object Pronouns',
        description: 'Learn when object pronouns help in palace duties',
        type: 'lesson',
        grammarConcept: 'Object Pronouns',
        rewardStarDust: 50,
        isCompleted: false,
        isUnlocked: true,
        activities: [
          {
            id: 'butler-training',
            type: 'multiple-choice',
            title: 'Butler Training',
            instructions: 'Use object pronouns to serve palace guests efficiently!',
            content: {
              sentence: 'The queen asked for tea. Please serve ___ immediately.',
              options: ['she', 'her', 'hers', 'they']
            },
            correctAnswer: 'her',
            feedback: {
              correct: 'Excellent service! The queen is pleased!',
              incorrect: 'Service error! Try an object pronoun.'
            }
          },
          {
            id: 'gift-giving',
            type: 'drag-drop',
            title: 'Gift Giving',
            instructions: 'Describe who receives what using object pronouns!',
            content: {
              sentence: 'The king gave presents to the children.',
              words: ['The king gave presents to them', 'They received presents', 'Him gave presents', 'Them were happy'],
              categories: ['Correct', 'Incorrect']
            },
            correctAnswer: ['The king gave presents to them:Correct', 'They received presents:Correct', 'Him gave presents:Incorrect', 'Them were happy:Incorrect'],
            feedback: {
              correct: 'Perfect gift distribution! Everyone is happy!',
              incorrect: 'Some gifts went to the wrong people!'
            }
          },
          {
            id: 'palace-service',
            type: 'story-builder',
            title: 'Palace Service',
            instructions: 'Complete service requests using correct object pronouns!',
            content: {
              story: 'The guests are hungry. Please bring ___ some food and show ___ to the dining hall.',
              blanks: 2,
              options: ['them', 'they', 'their', 'us', 'we']
            },
            correctAnswer: ['them', 'them'],
            feedback: {
              correct: 'Excellent service! The guests are well cared for!',
              incorrect: 'Service confusion! Check your object pronouns.'
            }
          },
          {
            id: 'royal-correspondence',
            type: 'multiple-choice',
            title: 'Royal Correspondence',
            instructions: 'Write letters using appropriate object pronouns!',
            content: {
              sentence: 'Dear friends, we invite ___ to the royal ball.',
              options: ['you', 'your', 'yours', 'we']
            },
            correctAnswer: 'you',
            feedback: {
              correct: 'Perfect invitation! Everyone will come to the ball!',
              incorrect: 'The invitation is confusing. Try an object pronoun!'
            }
          },
          {
            id: 'dinner-party',
            type: 'typing',
            title: 'Dinner Party',
            instructions: 'Organize seating and serving using object pronouns!',
            content: {
              question: 'The servants will serve the nobles. They will serve ___.',
              sentence: 'Complete with an object pronoun: ___'
            },
            correctAnswer: 'them',
            feedback: {
              correct: 'Perfect dinner party organization!',
              incorrect: 'The dinner party is chaotic! Use an object pronoun.'
            }
          }
        ]
      },
      {
        id: 'morph-lesson-4',
        title: 'The Great Exchange - Exchanging Nouns for Pronouns',
        description: 'Master the art of transforming sentences with pronouns',
        type: 'lesson',
        grammarConcept: 'Noun-Pronoun Exchange',
        rewardStarDust: 50,
        isCompleted: false,
        isUnlocked: true,
        activities: [
          {
            id: 'sentence-makeover',
            type: 'multiple-choice',
            title: 'Sentence Makeover',
            instructions: 'Transform repetitive sentences using pronouns!',
            content: {
              sentence: 'Sarah loves books. Sarah reads books every day.',
              options: ['Sarah loves books. She reads books every day.', 'Sarah loves books. Sarah reads them every day.', 'She loves them. She reads them every day.', 'Sarah loves books. Her reads books every day.']
            },
            correctAnswer: 'Sarah loves books. She reads books every day.',
            feedback: {
              correct: 'Perfect makeover! The sentence flows much better!',
              incorrect: 'The makeover needs work. Check your pronoun choice!'
            }
          },
          {
            id: 'efficiency-expert',
            type: 'story-builder',
            title: 'Efficiency Expert',
            instructions: 'Improve palace communications with pronoun exchanges!',
            content: {
              story: 'The cook prepared dinner. The cook served dinner to the guests. The guests enjoyed dinner.',
              blanks: 3,
              options: ['She', 'He', 'They', 'It', 'Them', 'Him']
            },
            correctAnswer: ['She', 'it', 'They'],
            feedback: {
              correct: 'Communication efficiency improved! Much clearer!',
              incorrect: 'Still some inefficiency. Check your pronoun exchanges!'
            }
          },
          {
            id: 'story-editor',
            type: 'drag-drop',
            title: 'Story Editor',
            instructions: 'Edit stories to avoid repetitive noun use!',
            content: {
              sentence: 'The wizard cast a spell. The spell was powerful. The wizard was proud of the spell.',
              words: ['The wizard', 'He', 'The spell', 'It', 'the spell', 'it'],
              categories: ['Keep', 'Replace']
            },
            correctAnswer: ['The wizard:Keep', 'He:Replace', 'The spell:Keep', 'It:Replace', 'the spell:Keep', 'it:Replace'],
            feedback: {
              correct: 'Excellent editing! The story flows perfectly!',
              incorrect: 'The story still has repetitive parts!'
            }
          },
          {
            id: 'palace-scribe',
            type: 'multiple-choice',
            title: 'Palace Scribe',
            instructions: 'Rewrite announcements using appropriate pronouns!',
            content: {
              sentence: 'The royal family will host a feast. The royal family invites all citizens.',
              options: ['The royal family will host a feast. They invite all citizens.', 'They will host a feast. The royal family invites all citizens.', 'The royal family will host a feast. Them invite all citizens.', 'The royal family will host a feast. The royal family invites them.']
            },
            correctAnswer: 'The royal family will host a feast. They invite all citizens.',
            feedback: {
              correct: 'Perfect scribing! The announcement is clear and efficient!',
              incorrect: 'The announcement needs better pronoun use!'
            }
          },
          {
            id: 'communication-coach',
            type: 'typing',
            title: 'Communication Coach',
            instructions: 'Help palace staff communicate more effectively!',
            content: {
              question: 'Improve this: "The guards saw the intruder. The guards chased the intruder."',
              sentence: 'Better version: "The guards saw the intruder. ___ chased ___."'
            },
            correctAnswer: 'They, him',
            feedback: {
              correct: 'Excellent coaching! Communication is much clearer!',
              incorrect: 'The communication still needs improvement!'
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
        title: 'Singular vs Plural Time Machine - Revising Singular and Plural',
        description: 'Travel through time while mastering singular and plural concepts',
        type: 'lesson',
        grammarConcept: 'Singular and Plural',
        rewardStarDust: 50,
        isCompleted: false,
        isUnlocked: true,
        activities: [
          {
            id: 'population-counter',
            type: 'multiple-choice',
            title: 'Population Counter',
            instructions: 'Count and describe different time periods correctly!',
            content: {
              sentence: 'In medieval times, there was one ___ in the village.',
              options: ['knight', 'knights', 'knighting', 'knightly']
            },
            correctAnswer: 'knight',
            feedback: {
              correct: 'Time machine calibrated! Population counted correctly!',
              incorrect: 'Time distortion detected! Check singular vs plural!'
            }
          },
          {
            id: 'time-machine-operator',
            type: 'drag-drop',
            title: 'Time Machine Operator',
            instructions: 'Set machine for singular or plural destinations!',
            content: {
              words: ['one dinosaur', 'many dinosaurs', 'a castle', 'several castles', 'the king', 'the people'],
              categories: ['Singular', 'Plural']
            },
            correctAnswer: ['one dinosaur:Singular', 'a castle:Singular', 'the king:Singular', 'many dinosaurs:Plural', 'several castles:Plural', 'the people:Plural'],
            feedback: {
              correct: 'Time machine ready! Destination set correctly!',
              incorrect: 'Time coordinates wrong! Check your singular/plural settings!'
            }
          },
          {
            id: 'historical-reporter',
            type: 'story-builder',
            title: 'Historical Reporter',
            instructions: 'Report events using correct singular/plural language!',
            content: {
              story: 'In ancient Egypt, ___ pharaoh ruled over ___ people who built ___ pyramids.',
              blanks: 3,
              options: ['one', 'many', 'the', 'several', 'a', 'some']
            },
            correctAnswer: ['one', 'many', 'several'],
            feedback: {
              correct: 'Historical report approved! Timeline preserved!',
              incorrect: 'Historical inaccuracy detected! Check your numbers!'
            }
          },
          {
            id: 'museum-guide',
            type: 'multiple-choice',
            title: 'Museum Guide',
            instructions: 'Describe historical artifacts using appropriate numbers!',
            content: {
              sentence: 'This display shows ___ ancient sword from the Viking era.',
              options: ['a', 'an', 'many', 'several']
            },
            correctAnswer: 'an',
            feedback: {
              correct: 'Excellent tour guide! Visitors are impressed!',
              incorrect: 'Visitors are confused! Check your article choice!'
            }
          },
          {
            id: 'time-traveler',
            type: 'typing',
            title: 'Time Traveler',
            instructions: 'Navigate different eras using correct numerical language!',
            content: {
              question: 'You see multiple Roman soldiers. How do you describe them?',
              sentence: 'I see ___ Roman soldiers marching.'
            },
            correctAnswer: 'many',
            feedback: {
              correct: 'Safe time travel! You navigated the era perfectly!',
              incorrect: 'Time paradox avoided! Use a plural indicator!'
            }
          }
        ]
      },
      {
        id: 'time-lesson-2',
        title: 'Plural Verb Portal - Understanding Plural Verbs',
        description: 'Watch actions change when subjects become plural',
        type: 'lesson',
        grammarConcept: 'Plural Verbs',
        rewardStarDust: 50,
        isCompleted: false,
        isUnlocked: true,
        activities: [
          {
            id: 'group-leader',
            type: 'multiple-choice',
            title: 'Group Leader',
            instructions: 'Coordinate group activities using plural verbs!',
            content: {
              sentence: 'The children ___ in the playground.',
              options: ['plays', 'play', 'playing', 'played']
            },
            correctAnswer: 'play',
            feedback: {
              correct: 'Great leadership! The group is well coordinated!',
              incorrect: 'The group is confused! Try a plural verb!'
            }
          },
          {
            id: 'sports-commentator',
            type: 'story-builder',
            title: 'Sports Commentator',
            instructions: 'Describe team actions using plural verbs!',
            content: {
              story: 'The players ___ across the field while the fans ___ loudly.',
              blanks: 2,
              options: ['run', 'runs', 'cheer', 'cheers', 'running', 'cheering']
            },
            correctAnswer: ['run', 'cheer'],
            feedback: {
              correct: 'Exciting commentary! The crowd loves it!',
              incorrect: 'The commentary is confusing! Check your plural verbs!'
            }
          },
          {
            id: 'event-organizer',
            type: 'drag-drop',
            title: 'Event Organizer',
            instructions: 'Plan group events with correct plural verb usage!',
            content: {
              words: ['The students study', 'The student studies', 'Dogs bark', 'A dog barks'],
              categories: ['Plural Subject + Plural Verb', 'Singular Subject + Singular Verb']
            },
            correctAnswer: ['The students study:Plural Subject + Plural Verb', 'Dogs bark:Plural Subject + Plural Verb', 'The student studies:Singular Subject + Singular Verb', 'A dog barks:Singular Subject + Singular Verb'],
            feedback: {
              correct: 'Perfect event planning! Everything is organized!',
              incorrect: 'Some events are mixed up! Check subject-verb agreement!'
            }
          },
          {
            id: 'family-reunion',
            type: 'multiple-choice',
            title: 'Family Reunion',
            instructions: 'Describe family activities using plural verbs!',
            content: {
              sentence: 'The cousins ___ games together at the reunion.',
              options: ['plays', 'play', 'playing', 'to play']
            },
            correctAnswer: 'play',
            feedback: {
              correct: 'Wonderful reunion! Everyone is having fun!',
              incorrect: 'The reunion is awkward! Try a plural verb!'
            }
          },
          {
            id: 'school-reporter',
            type: 'typing',
            title: 'School Reporter',
            instructions: 'Report classroom activities using appropriate plural verbs!',
            content: {
              question: 'The teachers are working together. They ___ lesson plans.',
              sentence: 'Complete with a plural verb: ___'
            },
            correctAnswer: 'create',
            feedback: {
              correct: 'Great school report! Very informative!',
              incorrect: 'The report needs a plural verb for multiple teachers!'
            }
          }
        ]
      },
      {
        id: 'time-lesson-3',
        title: 'Verb Agreement Academy - Using Singular and Plural Verbs',
        description: 'Master the harmony between subjects and verbs',
        type: 'lesson',
        grammarConcept: 'Subject-Verb Agreement',
        rewardStarDust: 50,
        isCompleted: false,
        isUnlocked: true,
        activities: [
          {
            id: 'grammar-police',
            type: 'multiple-choice',
            title: 'Grammar Police',
            instructions: 'Identify and correct verb agreement errors!',
            content: {
              sentence: 'The dog and cat ___ in the yard.',
              options: ['plays', 'play', 'playing', 'to play']
            },
            correctAnswer: 'play',
            feedback: {
              correct: 'Crime solved! Grammar law is restored!',
              incorrect: 'Grammar violation detected! Check the subject!'
            }
          },
          {
            id: 'sentence-fixer',
            type: 'drag-drop',
            title: 'Sentence Fixer',
            instructions: 'Repair broken sentences by fixing verb agreement!',
            content: {
              sentence: 'The birds sings in the trees.',
              words: ['sings', 'sing', 'singing', 'sang'],
              categories: ['Correct Verb', 'Incorrect Verbs']
            },
            correctAnswer: ['sing:Correct Verb', 'sings:Incorrect Verbs', 'singing:Incorrect Verbs', 'sang:Incorrect Verbs'],
            feedback: {
              correct: 'Sentence repaired! Perfect agreement achieved!',
              incorrect: 'The sentence is still broken! Check plural subjects!'
            }
          },
          {
            id: 'editors-challenge',
            type: 'story-builder',
            title: 'Editor\'s Challenge',
            instructions: 'Edit paragraphs for correct verb agreement!',
            content: {
              story: 'The children ___ to school while the teacher ___ for them.',
              blanks: 2,
              options: ['walk', 'walks', 'wait', 'waits', 'running', 'runs']
            },
            correctAnswer: ['walk', 'waits'],
            feedback: {
              correct: 'Editorial excellence! The paragraph flows perfectly!',
              incorrect: 'Editorial revision needed! Check your agreements!'
            }
          },
          {
            id: 'communication-helper',
            type: 'multiple-choice',
            title: 'Communication Helper',
            instructions: 'Help characters communicate with proper agreement!',
            content: {
              sentence: 'My friends ___ to the movies every Friday.',
              options: ['goes', 'go', 'going', 'went']
            },
            correctAnswer: 'go',
            feedback: {
              correct: 'Clear communication! Message understood perfectly!',
              incorrect: 'Communication breakdown! Check the agreement!'
            }
          },
          {
            id: 'writing-coach',
            type: 'typing',
            title: 'Writing Coach',
            instructions: 'Guide students in using correct verb agreement!',
            content: {
              question: 'The books on the shelf ___ dusty.',
              sentence: 'Complete with the correct verb: ___'
            },
            correctAnswer: 'are',
            feedback: {
              correct: 'Excellent coaching! The student understands agreement!',
              incorrect: 'More coaching needed! Think about plural subjects!'
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