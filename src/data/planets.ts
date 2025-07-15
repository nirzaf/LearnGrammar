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
      },
      {
        id: 'time-lesson-4',
        title: 'Past Tense Time Portal - Understanding the Past Tense',
        description: 'Travel to past events and describe them using past tense',
        type: 'lesson',
        grammarConcept: 'Past Tense',
        rewardStarDust: 50,
        isCompleted: false,
        isUnlocked: true,
        activities: [
          {
            id: 'time-traveler-past',
            type: 'multiple-choice',
            title: 'Time Traveler',
            instructions: 'Describe past adventures using past tense verbs!',
            content: {
              sentence: 'Yesterday, the knight ___ the dragon.',
              options: ['fight', 'fights', 'fought', 'fighting']
            },
            correctAnswer: 'fought',
            feedback: {
              correct: 'Time portal stable! Past event recorded correctly!',
              incorrect: 'Time distortion! Use past tense for yesterday!'
            }
          },
          {
            id: 'historian',
            type: 'story-builder',
            title: 'Historian',
            instructions: 'Write historical accounts using appropriate past tense!',
            content: {
              story: 'Long ago, the Vikings ___ across the seas and ___ new lands.',
              blanks: 2,
              options: ['sailed', 'sail', 'discovered', 'discover', 'traveling', 'found']
            },
            correctAnswer: ['sailed', 'discovered'],
            feedback: {
              correct: 'Historical accuracy achieved! The record is complete!',
              incorrect: 'Historical error! Use past tense for long ago events!'
            }
          },
          {
            id: 'diary-writer',
            type: 'typing',
            title: 'Diary Writer',
            instructions: 'Create diary entries using past tense verbs!',
            content: {
              question: 'Write about what you did yesterday: Yesterday, I ___ to the park.',
              sentence: 'Complete your diary entry: ___'
            },
            correctAnswer: 'went',
            feedback: {
              correct: 'Perfect diary entry! Your memories are preserved!',
              incorrect: 'Diary confusion! Use past tense for yesterday!'
            }
          },
          {
            id: 'news-reporter-past',
            type: 'multiple-choice',
            title: 'News Reporter',
            instructions: 'Report yesterday\'s events using past tense!',
            content: {
              sentence: 'The mayor ___ a new park yesterday.',
              options: ['opens', 'opened', 'opening', 'will open']
            },
            correctAnswer: 'opened',
            feedback: {
              correct: 'Breaking news delivered accurately!',
              incorrect: 'News error! Use past tense for yesterday\'s events!'
            }
          },
          {
            id: 'storyteller',
            type: 'drag-drop',
            title: 'Storyteller',
            instructions: 'Tell stories about past events using correct past tense!',
            content: {
              words: ['walked', 'walk', 'played', 'play', 'ate', 'eat', 'slept', 'sleep'],
              categories: ['Past Tense', 'Present Tense']
            },
            correctAnswer: ['walked:Past Tense', 'played:Past Tense', 'ate:Past Tense', 'slept:Past Tense', 'walk:Present Tense', 'play:Present Tense', 'eat:Present Tense', 'sleep:Present Tense'],
            feedback: {
              correct: 'Masterful storytelling! The audience is captivated!',
              incorrect: 'Story confusion! Sort the tenses correctly!'
            }
          }
        ]
      },
      {
        id: 'time-lesson-5',
        title: 'Past Tense Practice Chamber - Using the Past Tense',
        description: 'Create past tense stories with interactive elements',
        type: 'lesson',
        grammarConcept: 'Past Tense Usage',
        rewardStarDust: 50,
        isCompleted: false,
        isUnlocked: true,
        activities: [
          {
            id: 'story-converter',
            type: 'story-builder',
            title: 'Story Converter',
            instructions: 'Transform present tense stories to past tense!',
            content: {
              story: 'The princess walks to the castle and meets the prince.',
              blanks: 2,
              options: ['walked', 'met', 'walks', 'meets', 'running', 'seeing']
            },
            correctAnswer: ['walked', 'met'],
            feedback: {
              correct: 'Perfect conversion! The story is now in the past!',
              incorrect: 'Conversion incomplete! Use past tense verbs!'
            }
          },
          {
            id: 'memory-bank',
            type: 'matching',
            title: 'Memory Bank',
            instructions: 'Match present and past tense verb pairs!',
            content: {
              words: ['run', 'sing', 'write', 'think'],
              categories: ['ran', 'sang', 'wrote', 'thought']
            },
            correctAnswer: ['run:ran', 'sing:sang', 'write:wrote', 'think:thought'],
            feedback: {
              correct: 'Memory bank updated! All verb pairs matched!',
              incorrect: 'Memory error! Check your verb transformations!'
            }
          },
          {
            id: 'time-capsule',
            type: 'typing',
            title: 'Time Capsule',
            instructions: 'Describe past events for future generations!',
            content: {
              question: 'What did people do in the past? Long ago, people ___ by candlelight.',
              sentence: 'Complete the time capsule message: ___'
            },
            correctAnswer: 'lived',
            feedback: {
              correct: 'Time capsule sealed! Future generations will understand!',
              incorrect: 'Time capsule error! Use past tense for long ago!'
            }
          },
          {
            id: 'photo-album',
            type: 'multiple-choice',
            title: 'Photo Album',
            instructions: 'Describe past photos using appropriate past tense!',
            content: {
              sentence: 'In this photo, we ___ at the beach last summer.',
              options: ['play', 'played', 'playing', 'will play']
            },
            correctAnswer: 'played',
            feedback: {
              correct: 'Perfect photo caption! The memory is preserved!',
              incorrect: 'Caption error! Use past tense for last summer!'
            }
          },
          {
            id: 'adventure-log',
            type: 'story-builder',
            title: 'Adventure Log',
            instructions: 'Write adventure stories using past tense verbs!',
            content: {
              story: 'The explorer ___ through the jungle and ___ a hidden temple.',
              blanks: 2,
              options: ['traveled', 'found', 'travels', 'finds', 'walking', 'seeing']
            },
            correctAnswer: ['traveled', 'found'],
            feedback: {
              correct: 'Epic adventure logged! The story is complete!',
              incorrect: 'Adventure incomplete! Use past tense verbs!'
            }
          }
        ]
      },
      {
        id: 'time-lesson-6',
        title: 'Agreement Time Machine - Understanding Verb Agreement',
        description: 'Master the harmony between subjects and verbs across time',
        type: 'lesson',
        grammarConcept: 'Advanced Verb Agreement',
        rewardStarDust: 50,
        isCompleted: false,
        isUnlocked: true,
        activities: [
          {
            id: 'agreement-detective',
            type: 'multiple-choice',
            title: 'Agreement Detective',
            instructions: 'Find and fix verb agreement errors!',
            content: {
              sentence: 'The group of students ___ working hard.',
              options: ['is', 'are', 'was', 'were']
            },
            correctAnswer: 'is',
            feedback: {
              correct: 'Case solved! Perfect agreement detected!',
              incorrect: 'Agreement error found! Think about collective nouns!'
            }
          },
          {
            id: 'sentence-doctor',
            type: 'drag-drop',
            title: 'Sentence Doctor',
            instructions: 'Heal sick sentences with proper agreement!',
            content: {
              sentence: 'The team are playing well.',
              words: ['is', 'are', 'was', 'were'],
              categories: ['Correct', 'Incorrect']
            },
            correctAnswer: ['is:Correct', 'are:Incorrect', 'was:Incorrect', 'were:Incorrect'],
            feedback: {
              correct: 'Patient healed! Sentence is healthy again!',
              incorrect: 'Patient still sick! Check collective noun agreement!'
            }
          },
          {
            id: 'communication-specialist',
            type: 'story-builder',
            title: 'Communication Specialist',
            instructions: 'Help characters agree their verbs properly!',
            content: {
              story: 'Either the cat or the dogs ___ in the yard, and neither the birds nor the squirrel ___ afraid.',
              blanks: 2,
              options: ['is', 'are', 'was', 'were']
            },
            correctAnswer: ['are', 'is'],
            feedback: {
              correct: 'Communication perfected! Everyone understands!',
              incorrect: 'Communication breakdown! Check either/or and neither/nor rules!'
            }
          },
          {
            id: 'grammar-guardian',
            type: 'multiple-choice',
            title: 'Grammar Guardian',
            instructions: 'Protect the language from agreement errors!',
            content: {
              sentence: 'Each of the players ___ their best.',
              options: ['do', 'does', 'doing', 'done']
            },
            correctAnswer: 'does',
            feedback: {
              correct: 'Language protected! Grammar rules upheld!',
              incorrect: 'Grammar violation! "Each" is singular!'
            }
          },
          {
            id: 'writing-wizard',
            type: 'typing',
            title: 'Writing Wizard',
            instructions: 'Cast spells using perfect verb agreement!',
            content: {
              question: 'The scissors ___ on the table.',
              sentence: 'Complete the spell: ___'
            },
            correctAnswer: 'are',
            feedback: {
              correct: 'Magical spell cast! Perfect agreement achieved!',
              incorrect: 'Spell failed! Some nouns are always plural!'
            }
          }
        ]
      },
      {
        id: 'time-lesson-7',
        title: 'Agreement Mastery - Ensuring Verb Agreement',
        description: 'Achieve mastery in the most challenging agreement scenarios',
        type: 'lesson',
        grammarConcept: 'Mastery Level Agreement',
        rewardStarDust: 75,
        isCompleted: false,
        isUnlocked: true,
        activities: [
          {
            id: 'master-class',
            type: 'multiple-choice',
            title: 'Master Class',
            instructions: 'Demonstrate mastery of verb agreement!',
            content: {
              sentence: 'The news ___ very important today.',
              options: ['is', 'are', 'was', 'were']
            },
            correctAnswer: 'is',
            feedback: {
              correct: 'Mastery achieved! You understand tricky nouns!',
              incorrect: 'More practice needed! "News" is singular!'
            }
          },
          {
            id: 'teaching-assistant',
            type: 'story-builder',
            title: 'Teaching Assistant',
            instructions: 'Help other students with agreement problems!',
            content: {
              story: 'Mathematics ___ my favorite subject, but physics ___ also interesting.',
              blanks: 2,
              options: ['is', 'are', 'was', 'were']
            },
            correctAnswer: ['is', 'is'],
            feedback: {
              correct: 'Excellent teaching! Students understand now!',
              incorrect: 'Students still confused! Subject names are singular!'
            }
          },
          {
            id: 'quality-controller',
            type: 'drag-drop',
            title: 'Quality Controller',
            instructions: 'Ensure all writing has perfect agreement!',
            content: {
              words: ['The data is clear', 'The data are clear', 'Ten dollars is enough', 'Ten dollars are enough'],
              categories: ['Correct', 'Incorrect']
            },
            correctAnswer: ['The data are clear:Correct', 'Ten dollars is enough:Correct', 'The data is clear:Incorrect', 'Ten dollars are enough:Incorrect'],
            feedback: {
              correct: 'Quality approved! Perfect agreement standards met!',
              incorrect: 'Quality check failed! Review data and money rules!'
            }
          },
          {
            id: 'agreement-ambassador',
            type: 'multiple-choice',
            title: 'Agreement Ambassador',
            instructions: 'Spread good agreement practices!',
            content: {
              sentence: 'The United States ___ a large country.',
              options: ['is', 'are', 'was', 'were']
            },
            correctAnswer: 'is',
            feedback: {
              correct: 'Diplomatic success! Agreement treaty signed!',
              incorrect: 'Diplomatic crisis! Country names are singular!'
            }
          },
          {
            id: 'grammar-guru',
            type: 'typing',
            title: 'Grammar Guru',
            instructions: 'Solve complex agreement challenges!',
            content: {
              question: 'The committee ___ meeting tomorrow.',
              sentence: 'Complete with wisdom: ___'
            },
            correctAnswer: 'is',
            feedback: {
              correct: 'Guru wisdom achieved! Complex challenge solved!',
              incorrect: 'More meditation needed! Collective nouns can be tricky!'
            }
          }
        ]
      },
      {
        id: 'time-lesson-8',
        title: 'Verb Transformer - Changing Verbs in Sentences',
        description: 'Master the art of verb transformation and sentence enhancement',
        type: 'lesson',
        grammarConcept: 'Verb Transformation',
        rewardStarDust: 75,
        isCompleted: false,
        isUnlocked: true,
        activities: [
          {
            id: 'verb-scientist',
            type: 'multiple-choice',
            title: 'Verb Scientist',
            instructions: 'Experiment with different verb transformations!',
            content: {
              sentence: 'The cat walks → The cat ___',
              options: ['walked', 'will walk', 'is walking', 'all of the above']
            },
            correctAnswer: 'all of the above',
            feedback: {
              correct: 'Scientific breakthrough! All transformations possible!',
              incorrect: 'Experiment incomplete! Verbs can transform in many ways!'
            }
          },
          {
            id: 'sentence-improver',
            type: 'story-builder',
            title: 'Sentence Improver',
            instructions: 'Enhance sentences by changing verbs!',
            content: {
              story: 'The old sentence: "The dog runs." The improved sentence: "The dog ___ gracefully."',
              blanks: 1,
              options: ['gallops', 'moves', 'dances', 'flows']
            },
            correctAnswer: ['gallops'],
            feedback: {
              correct: 'Sentence enhanced! Much more vivid and interesting!',
              incorrect: 'Enhancement needed! Choose a more descriptive verb!'
            }
          },
          {
            id: 'style-consultant',
            type: 'drag-drop',
            title: 'Style Consultant',
            instructions: 'Advise on verb choices for different effects!',
            content: {
              words: ['whispered', 'shouted', 'mumbled', 'announced'],
              categories: ['Quiet Speaking', 'Loud Speaking']
            },
            correctAnswer: ['whispered:Quiet Speaking', 'mumbled:Quiet Speaking', 'shouted:Loud Speaking', 'announced:Loud Speaking'],
            feedback: {
              correct: 'Style consultation successful! Perfect verb choices!',
              incorrect: 'Style revision needed! Consider the volume level!'
            }
          },
          {
            id: 'creative-writer-verbs',
            type: 'multiple-choice',
            title: 'Creative Writer',
            instructions: 'Transform writing by changing verb forms!',
            content: {
              sentence: 'To make "I eat breakfast" more interesting, try:',
              options: ['I devour breakfast', 'I am eating breakfast', 'I will eat breakfast', 'all are improvements']
            },
            correctAnswer: 'all are improvements',
            feedback: {
              correct: 'Creative genius! All transformations add interest!',
              incorrect: 'Creativity blocked! All options improve the original!'
            }
          },
          {
            id: 'language-artist',
            type: 'typing',
            title: 'Language Artist',
            instructions: 'Create artistic effects through verb changes!',
            content: {
              question: 'Transform "The rain falls" into something more poetic.',
              sentence: 'Artistic version: "The rain ___"'
            },
            correctAnswer: 'dances',
            feedback: {
              correct: 'Artistic masterpiece! Beautiful verb transformation!',
              incorrect: 'Art needs refinement! Try a more creative verb!'
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
        title: 'Sentence Island Review - Revising Sentences',
        description: 'Construct complete sentences on floating islands',
        type: 'lesson',
        grammarConcept: 'Complete Sentences',
        rewardStarDust: 50,
        isCompleted: false,
        isUnlocked: true,
        activities: [
          {
            id: 'island-inspector',
            type: 'multiple-choice',
            title: 'Island Inspector',
            instructions: 'Identify complete sentences on sentence islands!',
            content: {
              sentence: 'Which is a complete sentence?',
              options: ['The brave knight.', 'Fought the dragon.', 'The brave knight fought the dragon.', 'Brave knight dragon.']
            },
            correctAnswer: 'The brave knight fought the dragon.',
            feedback: {
              correct: 'Island approved! This sentence can stand alone!',
              incorrect: 'Island unstable! A complete sentence needs subject and verb!'
            }
          },
          {
            id: 'sentence-architect',
            type: 'story-builder',
            title: 'Sentence Architect',
            instructions: 'Build strong, complete sentences!',
            content: {
              story: '___ ___ in the garden.',
              blanks: 2,
              options: ['The flowers', 'bloom', 'beautiful', 'very', 'in', 'garden']
            },
            correctAnswer: ['The flowers', 'bloom'],
            feedback: {
              correct: 'Architectural masterpiece! Strong sentence foundation!',
              incorrect: 'Foundation weak! Need subject and verb!'
            }
          },
          {
            id: 'bridge-engineer',
            type: 'drag-drop',
            title: 'Bridge Engineer',
            instructions: 'Prepare sentences for connection!',
            content: {
              words: ['Birds fly.', 'Very fast.', 'The sun shines.', 'In the sky.'],
              categories: ['Complete Sentences', 'Sentence Fragments']
            },
            correctAnswer: ['Birds fly.:Complete Sentences', 'The sun shines.:Complete Sentences', 'Very fast.:Sentence Fragments', 'In the sky.:Sentence Fragments'],
            feedback: {
              correct: 'Engineering success! Sentences ready for bridging!',
              incorrect: 'Engineering error! Check for complete thoughts!'
            }
          },
          {
            id: 'sentence-lifeguard',
            type: 'multiple-choice',
            title: 'Sentence Lifeguard',
            instructions: 'Rescue incomplete sentences!',
            content: {
              sentence: 'How can you rescue "Running in the park"?',
              options: ['Add "The dog is"', 'Add "very fast"', 'Add "and jumping"', 'Add "in the morning"']
            },
            correctAnswer: 'Add "The dog is"',
            feedback: {
              correct: 'Rescue successful! Sentence is now complete!',
              incorrect: 'Rescue failed! Need to add a subject!'
            }
          },
          {
            id: 'island-developer',
            type: 'typing',
            title: 'Island Developer',
            instructions: 'Create communities of complete sentences!',
            content: {
              question: 'Write a complete sentence about cats.',
              sentence: 'Your sentence: ___'
            },
            correctAnswer: 'Cats sleep.',
            feedback: {
              correct: 'Development approved! Perfect sentence community!',
              incorrect: 'Development rejected! Make sure it\'s a complete sentence!'
            }
          }
        ]
      },
      {
        id: 'connector-lesson-2',
        title: 'Conjunction Connectors - Understanding "and," "but," "because"',
        description: 'Use conjunctions to build bridges between sentence islands',
        type: 'lesson',
        grammarConcept: 'Conjunctions (and, but, because)',
        rewardStarDust: 50,
        isCompleted: false,
        isUnlocked: true,
        activities: [
          {
            id: 'bridge-constructor',
            type: 'multiple-choice',
            title: 'Bridge Constructor',
            instructions: 'Build bridges using appropriate conjunctions!',
            content: {
              sentence: 'I like pizza ___ I don\'t like mushrooms.',
              options: ['and', 'but', 'because', 'or']
            },
            correctAnswer: 'but',
            feedback: {
              correct: 'Strong bridge built! Ideas connected perfectly!',
              incorrect: 'Bridge collapsed! Try a conjunction that shows contrast!'
            }
          },
          {
            id: 'connection-specialist',
            type: 'drag-drop',
            title: 'Connection Specialist',
            instructions: 'Choose the best conjunction for each connection!',
            content: {
              words: ['I studied hard and passed the test', 'I studied hard but failed the test', 'I studied hard because the test was important'],
              categories: ['Addition (and)', 'Contrast (but)', 'Reason (because)']
            },
            correctAnswer: ['I studied hard and passed the test:Addition (and)', 'I studied hard but failed the test:Contrast (but)', 'I studied hard because the test was important:Reason (because)'],
            feedback: {
              correct: 'Connection expertise achieved! Perfect relationships!',
              incorrect: 'Connection confusion! Check the relationship between ideas!'
            }
          },
          {
            id: 'relationship-counselor',
            type: 'story-builder',
            title: 'Relationship Counselor',
            instructions: 'Help sentences work together with conjunctions!',
            content: {
              story: 'The weather was cold ___ we wore warm coats ___ we stayed comfortable.',
              blanks: 2,
              options: ['and', 'but', 'because', 'so']
            },
            correctAnswer: ['so', 'and'],
            feedback: {
              correct: 'Relationship harmony! Sentences work together perfectly!',
              incorrect: 'Relationship problems! Check the logical connections!'
            }
          },
          {
            id: 'bridge-inspector',
            type: 'multiple-choice',
            title: 'Bridge Inspector',
            instructions: 'Ensure conjunctions create proper connections!',
            content: {
              sentence: 'She wanted to go swimming ___ the pool was closed.',
              options: ['and', 'but', 'because', 'or']
            },
            correctAnswer: 'but',
            feedback: {
              correct: 'Bridge inspection passed! Safe connection approved!',
              incorrect: 'Bridge safety concern! This shows contrast!'
            }
          },
          {
            id: 'connection-designer',
            type: 'typing',
            title: 'Connection Designer',
            instructions: 'Design complex sentence networks!',
            content: {
              question: 'Connect these ideas: "It was raining" and "we stayed inside"',
              sentence: 'Connected sentence: It was raining ___ we stayed inside.'
            },
            correctAnswer: 'so',
            feedback: {
              correct: 'Design masterpiece! Perfect logical connection!',
              incorrect: 'Design flaw! Show the cause and effect relationship!'
            }
          }
        ]
      },
      {
        id: 'connector-lesson-3',
        title: 'Conjunction Chooser - Selecting "and," "but," "or," "because"',
        description: 'Master the art of choosing the perfect conjunction',
        type: 'lesson',
        grammarConcept: 'Conjunction Selection',
        rewardStarDust: 50,
        isCompleted: false,
        isUnlocked: true,
        activities: [
          {
            id: 'conjunction-expert',
            type: 'multiple-choice',
            title: 'Conjunction Expert',
            instructions: 'Choose the perfect conjunction for each situation!',
            content: {
              sentence: 'Would you like tea ___ coffee?',
              options: ['and', 'but', 'or', 'because']
            },
            correctAnswer: 'or',
            feedback: {
              correct: 'Expert choice! Perfect for showing options!',
              incorrect: 'Expert consultation needed! This offers a choice!'
            }
          },
          {
            id: 'connection-consultant',
            type: 'story-builder',
            title: 'Connection Consultant',
            instructions: 'Advise on conjunction selection!',
            content: {
              story: 'I wanted to buy the book ___ it was expensive ___ I decided to borrow it from the library.',
              blanks: 2,
              options: ['and', 'but', 'or', 'because', 'so']
            },
            correctAnswer: ['but', 'so'],
            feedback: {
              correct: 'Consultation successful! Perfect conjunction advice!',
              incorrect: 'Consultation needed! Check the logical flow!'
            }
          },
          {
            id: 'sentence-mediator',
            type: 'drag-drop',
            title: 'Sentence Mediator',
            instructions: 'Help sentences connect appropriately!',
            content: {
              words: ['I like cats and dogs', 'I like cats but not dogs', 'I like cats or dogs', 'I like cats because they purr'],
              categories: ['Addition', 'Contrast', 'Choice', 'Reason']
            },
            correctAnswer: ['I like cats and dogs:Addition', 'I like cats but not dogs:Contrast', 'I like cats or dogs:Choice', 'I like cats because they purr:Reason'],
            feedback: {
              correct: 'Mediation successful! All sentences connected properly!',
              incorrect: 'Mediation needed! Check the relationship types!'
            }
          },
          {
            id: 'bridge-planner',
            type: 'multiple-choice',
            title: 'Bridge Planner',
            instructions: 'Plan conjunction usage for complex connections!',
            content: {
              sentence: 'The movie was long ___ boring ___ we left early.',
              options: ['and, so', 'but, and', 'or, because', 'because, but']
            },
            correctAnswer: 'and, so',
            feedback: {
              correct: 'Planning perfection! Complex bridge designed beautifully!',
              incorrect: 'Planning revision needed! Think about the logical sequence!'
            }
          },
          {
            id: 'connection-critic',
            type: 'typing',
            title: 'Connection Critic',
            instructions: 'Evaluate conjunction choices in writing!',
            content: {
              question: 'Fix this sentence: "I was tired and I went to bed early."',
              sentence: 'Better version: I was tired ___ I went to bed early.'
            },
            correctAnswer: 'so',
            feedback: {
              correct: 'Critical analysis perfect! Much better connection!',
              incorrect: 'Critical review needed! Show cause and effect!'
            }
          }
        ]
      },
      {
        id: 'connector-lesson-4',
        title: 'Master Bridge Builder - Linking Sentences with Conjunctions',
        description: 'Achieve mastery in creating sophisticated sentence connections',
        type: 'lesson',
        grammarConcept: 'Advanced Conjunction Usage',
        rewardStarDust: 75,
        isCompleted: false,
        isUnlocked: true,
        activities: [
          {
            id: 'master-builder',
            type: 'story-builder',
            title: 'Master Builder',
            instructions: 'Create complex sentence connections!',
            content: {
              story: 'The storm was approaching ___ the sailors secured the ship ___ they knew it would be dangerous ___ they were prepared.',
              blanks: 3,
              options: ['and', 'but', 'or', 'because', 'so', 'although']
            },
            correctAnswer: ['so', 'because', 'but'],
            feedback: {
              correct: 'Master builder status achieved! Complex connections mastered!',
              incorrect: 'More building practice needed! Check the logical flow!'
            }
          },
          {
            id: 'connection-virtuoso',
            type: 'multiple-choice',
            title: 'Connection Virtuoso',
            instructions: 'Demonstrate advanced conjunction skills!',
            content: {
              sentence: 'The concert was cancelled ___ the lead singer was sick, ___ the fans were disappointed.',
              options: ['because, and', 'and, but', 'or, because', 'but, or']
            },
            correctAnswer: 'because, and',
            feedback: {
              correct: 'Virtuoso performance! Masterful conjunction usage!',
              incorrect: 'More practice needed! Think about cause and addition!'
            }
          },
          {
            id: 'bridge-master',
            type: 'drag-drop',
            title: 'Bridge Master',
            instructions: 'Build elaborate sentence networks!',
            content: {
              words: ['Simple connection', 'Complex connection', 'I ran and jumped', 'I ran because I was late, but I still missed the bus'],
              categories: ['Simple', 'Complex']
            },
            correctAnswer: ['I ran and jumped:Simple', 'Simple connection:Simple', 'I ran because I was late, but I still missed the bus:Complex', 'Complex connection:Complex'],
            feedback: {
              correct: 'Bridge mastery achieved! Network construction perfect!',
              incorrect: 'Bridge engineering needs work! Check complexity levels!'
            }
          },
          {
            id: 'connection-teacher',
            type: 'multiple-choice',
            title: 'Connection Teacher',
            instructions: 'Teach others about conjunction usage!',
            content: {
              sentence: 'Which sentence shows the best conjunction usage?',
              options: ['I like pizza and I like pasta and I like salad.', 'I like pizza, pasta, and salad.', 'I like pizza but pasta but salad.', 'I like pizza or pasta or salad or something.']
            },
            correctAnswer: 'I like pizza, pasta, and salad.',
            feedback: {
              correct: 'Teaching excellence! Perfect example chosen!',
              incorrect: 'Teaching moment! Show the most efficient connection!'
            }
          },
          {
            id: 'master-architect',
            type: 'typing',
            title: 'Master Architect',
            instructions: 'Design masterful sentence structures!',
            content: {
              question: 'Create a complex sentence using "although" and "because"',
              sentence: 'Masterful sentence: ___'
            },
            correctAnswer: 'Although it was raining, we went hiking because we love nature.',
            feedback: {
              correct: 'Architectural masterpiece! Complex structure perfected!',
              incorrect: 'Architectural revision needed! Use both conjunctions effectively!'
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
        title: 'Capital Letters & Full Stops Roller Coaster',
        description: 'Navigate sentences with proper capitalization and periods',
        type: 'lesson',
        grammarConcept: 'Capitalization and Periods',
        rewardStarDust: 50,
        isCompleted: false,
        isUnlocked: true,
        activities: [
          {
            id: 'roller-coaster-operator',
            type: 'multiple-choice',
            title: 'Roller Coaster Operator',
            instructions: 'Ensure safe sentence rides with proper punctuation!',
            content: {
              sentence: 'Which sentence is correctly punctuated?',
              options: ['the dog ran fast', 'The dog ran fast.', 'the dog ran fast.', 'The dog ran fast']
            },
            correctAnswer: 'The dog ran fast.',
            feedback: {
              correct: 'Safe ride! Perfect capitalization and punctuation!',
              incorrect: 'Safety hazard! Check capitalization and end punctuation!'
            }
          },
          {
            id: 'capital-letter-collector',
            type: 'drag-drop',
            title: 'Capital Letter Collector',
            instructions: 'Gather capitals for sentence beginnings!',
            content: {
              words: ['The', 'cat', 'Sleeps', 'on', 'The', 'mat'],
              categories: ['Needs Capital', 'Lowercase']
            },
            correctAnswer: ['The:Needs Capital', 'Sleeps:Needs Capital', 'cat:Lowercase', 'on:Lowercase', 'mat:Lowercase'],
            feedback: {
              correct: 'Collection complete! All capitals in the right places!',
              incorrect: 'Collection error! Only sentence beginnings need capitals!'
            }
          },
          {
            id: 'full-stop-detective',
            type: 'story-builder',
            title: 'Full Stop Detective',
            instructions: 'Find where sentences should end!',
            content: {
              story: 'The sun is shining ___ The birds are singing ___ It is a beautiful day ___',
              blanks: 3,
              options: ['.', '!', '?', ',']
            },
            correctAnswer: ['.', '.', '.'],
            feedback: {
              correct: 'Detective work complete! All sentences properly ended!',
              incorrect: 'Investigation continues! Statements need periods!'
            }
          },
          {
            id: 'sentence-racer',
            type: 'multiple-choice',
            title: 'Sentence Racer',
            instructions: 'Race through sentences with correct punctuation!',
            content: {
              sentence: 'Fix this sentence: "my friend likes ice cream"',
              options: ['My friend likes ice cream.', 'my friend likes ice cream.', 'My Friend Likes Ice Cream.', 'my friend likes ice cream']
            },
            correctAnswer: 'My friend likes ice cream.',
            feedback: {
              correct: 'Race won! Perfect punctuation speed!',
              incorrect: 'Slow down! Check capitalization and end punctuation!'
            }
          },
          {
            id: 'park-safety-inspector',
            type: 'typing',
            title: 'Park Safety Inspector',
            instructions: 'Ensure all sentences are properly punctuated!',
            content: {
              question: 'Write a properly punctuated sentence about your favorite animal.',
              sentence: 'Your sentence: ___'
            },
            correctAnswer: 'Dogs are loyal pets.',
            feedback: {
              correct: 'Safety inspection passed! Perfect sentence construction!',
              incorrect: 'Safety violation! Remember capital letter and period!'
            }
          }
        ]
      },
      {
        id: 'palace-lesson-2',
        title: 'Question & Exclamation Express',
        description: 'Experience exciting questions and exclamations',
        type: 'lesson',
        grammarConcept: 'Question Marks and Exclamation Points',
        rewardStarDust: 50,
        isCompleted: false,
        isUnlocked: true,
        activities: [
          {
            id: 'question-master',
            type: 'multiple-choice',
            title: 'Question Master',
            instructions: 'Create and punctuate various question types!',
            content: {
              sentence: 'What punctuation mark goes here: "How are you today___"',
              options: ['.', '!', '?', ',']
            },
            correctAnswer: '?',
            feedback: {
              correct: 'Question mastery achieved! Perfect inquiry punctuation!',
              incorrect: 'Question confusion! Questions need question marks!'
            }
          },
          {
            id: 'excitement-engineer',
            type: 'drag-drop',
            title: 'Excitement Engineer',
            instructions: 'Design thrilling exclamations!',
            content: {
              words: ['Wow, that\'s amazing!', 'What time is it?', 'I love pizza!', 'Where are you going?'],
              categories: ['Exclamations', 'Questions']
            },
            correctAnswer: ['Wow, that\'s amazing!:Exclamations', 'I love pizza!:Exclamations', 'What time is it?:Questions', 'Where are you going?:Questions'],
            feedback: {
              correct: 'Engineering success! Perfect excitement and inquiry design!',
              incorrect: 'Engineering error! Check the sentence types!'
            }
          },
          {
            id: 'mood-detector',
            type: 'story-builder',
            title: 'Mood Detector',
            instructions: 'Identify appropriate punctuation for emotions!',
            content: {
              story: 'Help___ I\'m stuck___ Can you hear me___ This is terrible___',
              blanks: 4,
              options: ['!', '?', '.', ',']
            },
            correctAnswer: ['!', '!', '?', '!'],
            feedback: {
              correct: 'Mood detection perfect! All emotions properly punctuated!',
              incorrect: 'Mood confusion! Match punctuation to emotion level!'
            }
          },
          {
            id: 'carnival-announcer',
            type: 'multiple-choice',
            title: 'Carnival Announcer',
            instructions: 'Use questions and exclamations in announcements!',
            content: {
              sentence: 'Which announcement is correctly punctuated?',
              options: ['Step right up. Try your luck.', 'Step right up! Try your luck!', 'Step right up? Try your luck?', 'Step right up, Try your luck,']
            },
            correctAnswer: 'Step right up! Try your luck!',
            feedback: {
              correct: 'Announcement approved! Perfect carnival excitement!',
              incorrect: 'Announcement needs work! Carnival calls need excitement!'
            }
          },
          {
            id: 'punctuation-performer',
            type: 'typing',
            title: 'Punctuation Performer',
            instructions: 'Act out different punctuation marks!',
            content: {
              question: 'Write an exciting sentence about winning a prize.',
              sentence: 'Your exciting sentence: ___'
            },
            correctAnswer: 'I won first place!',
            feedback: {
              correct: 'Performance outstanding! Perfect exclamation energy!',
              incorrect: 'Performance needs more excitement! Use an exclamation mark!'
            }
          }
        ]
      },
      {
        id: 'palace-lesson-3',
        title: 'Punctuation Carousel - Statements, Questions, Exclamations',
        description: 'Ride the carousel while mastering sentence types',
        type: 'lesson',
        grammarConcept: 'Sentence Types and Punctuation',
        rewardStarDust: 50,
        isCompleted: false,
        isUnlocked: true,
        activities: [
          {
            id: 'carousel-rider',
            type: 'multiple-choice',
            title: 'Carousel Rider',
            instructions: 'Choose the correct punctuation as you ride!',
            content: {
              sentence: 'That movie was incredible___',
              options: ['.', '!', '?', ',']
            },
            correctAnswer: '!',
            feedback: {
              correct: 'Perfect ride! You matched the excitement level!',
              incorrect: 'Bumpy ride! Match punctuation to the emotion!'
            }
          },
          {
            id: 'sentence-sorter',
            type: 'drag-drop',
            title: 'Sentence Sorter',
            instructions: 'Sort sentences by their punctuation type!',
            content: {
              words: ['I like cookies.', 'Do you like cookies?', 'Cookies are delicious!', 'Where are the cookies?'],
              categories: ['Statements (.)', 'Questions (?)', 'Exclamations (!)']
            },
            correctAnswer: ['I like cookies.:Statements (.)', 'Do you like cookies?:Questions (?)', 'Cookies are delicious!:Exclamations (!)', 'Where are the cookies?:Questions (?)'],
            feedback: {
              correct: 'Sorting success! All sentence types organized!',
              incorrect: 'Sorting error! Check the punctuation marks!'
            }
          },
          {
            id: 'punctuation-artist',
            type: 'story-builder',
            title: 'Punctuation Artist',
            instructions: 'Create art using different sentence types!',
            content: {
              story: 'The sunset is beautiful___ Can you see it___ Look at those colors___',
              blanks: 3,
              options: ['.', '!', '?', ',']
            },
            correctAnswer: ['.', '?', '!'],
            feedback: {
              correct: 'Artistic masterpiece! Perfect punctuation variety!',
              incorrect: 'Art needs refinement! Consider the sentence meanings!'
            }
          },
          {
            id: 'emotion-translator',
            type: 'multiple-choice',
            title: 'Emotion Translator',
            instructions: 'Translate emotions into correct punctuation!',
            content: {
              sentence: 'A calm statement about the weather should end with:',
              options: ['.', '!', '?', '...']
            },
            correctAnswer: '.',
            feedback: {
              correct: 'Translation perfect! Calm statements use periods!',
              incorrect: 'Translation error! Calm statements need periods!'
            }
          },
          {
            id: 'punctuation-conductor',
            type: 'typing',
            title: 'Punctuation Conductor',
            instructions: 'Conduct a symphony of sentence types!',
            content: {
              question: 'Write three sentences: one statement, one question, one exclamation.',
              sentence: 'Your symphony: ___'
            },
            correctAnswer: 'I like music. Do you like music? Music is amazing!',
            feedback: {
              correct: 'Symphony conducted perfectly! Beautiful punctuation harmony!',
              incorrect: 'Symphony needs tuning! Include all three sentence types!'
            }
          }
        ]
      },
      {
        id: 'palace-lesson-4',
        title: 'Sentence Construction Zone - Forming Different Sentence Types',
        description: 'Build various sentence types with proper punctuation',
        type: 'lesson',
        grammarConcept: 'Sentence Construction',
        rewardStarDust: 50,
        isCompleted: false,
        isUnlocked: true,
        activities: [
          {
            id: 'construction-foreman',
            type: 'multiple-choice',
            title: 'Construction Foreman',
            instructions: 'Supervise sentence construction projects!',
            content: {
              sentence: 'To build a question, you need:',
              options: ['Subject + verb + period', 'Question word + subject + verb + question mark', 'Exclamation + period', 'Just a question mark']
            },
            correctAnswer: 'Question word + subject + verb + question mark',
            feedback: {
              correct: 'Construction approved! Perfect question blueprint!',
              incorrect: 'Construction violation! Check question requirements!'
            }
          },
          {
            id: 'blueprint-designer',
            type: 'story-builder',
            title: 'Blueprint Designer',
            instructions: 'Design blueprints for different sentence types!',
            content: {
              story: 'Statement: The cat sleeps___ Question: ___ the cat sleep___ Exclamation: The cat is so cute___',
              blanks: 3,
              options: ['.', '?', '!', 'Does', 'Where', 'How']
            },
            correctAnswer: ['.', 'Does', '!'],
            feedback: {
              correct: 'Blueprint approved! All sentence types designed correctly!',
              incorrect: 'Blueprint revision needed! Check sentence structures!'
            }
          },
          {
            id: 'quality-inspector',
            type: 'drag-drop',
            title: 'Quality Inspector',
            instructions: 'Inspect sentence construction quality!',
            content: {
              words: ['Well-built statement', 'Poorly built statement', 'The dog barks.', 'the dog barks', 'What time is it?', 'what time is it'],
              categories: ['Good Construction', 'Needs Repair']
            },
            correctAnswer: ['The dog barks.:Good Construction', 'What time is it?:Good Construction', 'Well-built statement:Good Construction', 'the dog barks:Needs Repair', 'what time is it:Needs Repair', 'Poorly built statement:Needs Repair'],
            feedback: {
              correct: 'Quality inspection passed! All constructions meet standards!',
              incorrect: 'Quality issues found! Check capitalization and punctuation!'
            }
          },
          {
            id: 'sentence-architect',
            type: 'multiple-choice',
            title: 'Sentence Architect',
            instructions: 'Design architectural marvels of sentences!',
            content: {
              sentence: 'Which sentence shows the best construction?',
              options: ['wow that is amazing', 'Wow, that is amazing!', 'wow, that is amazing.', 'Wow that is amazing?']
            },
            correctAnswer: 'Wow, that is amazing!',
            feedback: {
              correct: 'Architectural masterpiece! Perfect exclamation construction!',
              incorrect: 'Architectural flaw! Check punctuation and capitalization!'
            }
          },
          {
            id: 'master-builder',
            type: 'typing',
            title: 'Master Builder',
            instructions: 'Build complex sentence structures!',
            content: {
              question: 'Build a question about your favorite hobby.',
              sentence: 'Your question: ___'
            },
            correctAnswer: 'What is your favorite hobby?',
            feedback: {
              correct: 'Master building achieved! Perfect question construction!',
              incorrect: 'Building needs work! Questions need question words and question marks!'
            }
          }
        ]
      },
      {
        id: 'palace-lesson-5',
        title: 'List Land - Understanding Lists',
        description: 'Explore the organized world of lists and commas',
        type: 'lesson',
        grammarConcept: 'Lists and Commas',
        rewardStarDust: 50,
        isCompleted: false,
        isUnlocked: true,
        activities: [
          {
            id: 'list-explorer',
            type: 'multiple-choice',
            title: 'List Explorer',
            instructions: 'Navigate through properly formatted lists!',
            content: {
              sentence: 'Which list is correctly punctuated?',
              options: ['apples oranges bananas', 'apples, oranges, bananas', 'apples, oranges and bananas', 'apples, oranges, and bananas']
            },
            correctAnswer: 'apples, oranges, and bananas',
            feedback: {
              correct: 'Exploration successful! Perfect list navigation!',
              incorrect: 'Lost in List Land! Remember commas separate items!'
            }
          },
          {
            id: 'comma-collector',
            type: 'drag-drop',
            title: 'Comma Collector',
            instructions: 'Collect commas for proper list formatting!',
            content: {
              sentence: 'I need pencils erasers rulers and paper.',
              words: [',', ',', ','],
              categories: ['After pencils', 'After erasers', 'After rulers']
            },
            correctAnswer: [',After pencils', ',After erasers', ',After rulers'],
            feedback: {
              correct: 'Collection complete! All commas properly placed!',
              incorrect: 'Collection incomplete! Lists need commas between items!'
            }
          },
          {
            id: 'shopping-assistant',
            type: 'story-builder',
            title: 'Shopping Assistant',
            instructions: 'Help create organized shopping lists!',
            content: {
              story: 'For the party, we need balloons___ streamers___ cake___ and ice cream.',
              blanks: 3,
              options: [',', '.', '!', '?']
            },
            correctAnswer: [',', ',', ','],
            feedback: {
              correct: 'Shopping list perfected! Party planning complete!',
              incorrect: 'Shopping confusion! Use commas to separate list items!'
            }
          },
          {
            id: 'menu-designer',
            type: 'multiple-choice',
            title: 'Menu Designer',
            instructions: 'Design restaurant menus with proper list formatting!',
            content: {
              sentence: 'Today\'s specials include soup salad pasta and dessert.',
              options: ['soup, salad, pasta and dessert', 'soup, salad, pasta, and dessert', 'soup salad pasta and dessert', 'soup; salad; pasta; and dessert']
            },
            correctAnswer: 'soup, salad, pasta, and dessert',
            feedback: {
              correct: 'Menu design approved! Customers can read it clearly!',
              incorrect: 'Menu revision needed! Use commas in lists!'
            }
          },
          {
            id: 'list-organizer',
            type: 'typing',
            title: 'List Organizer',
            instructions: 'Organize information into proper lists!',
            content: {
              question: 'Write a list of three colors you like.',
              sentence: 'My favorite colors are ___'
            },
            correctAnswer: 'red, blue, and green',
            feedback: {
              correct: 'Organization perfect! Beautiful list formatting!',
              incorrect: 'Organization needed! Use commas between list items!'
            }
          }
        ]
      },
      {
        id: 'palace-lesson-6',
        title: 'List Writing Workshop - Writing Lists',
        description: 'Master the craft of writing various types of lists',
        type: 'lesson',
        grammarConcept: 'List Writing',
        rewardStarDust: 50,
        isCompleted: false,
        isUnlocked: true,
        activities: [
          {
            id: 'workshop-instructor',
            type: 'multiple-choice',
            title: 'Workshop Instructor',
            instructions: 'Teach proper list writing techniques!',
            content: {
              sentence: 'When writing a list in a sentence, always:',
              options: ['Use periods between items', 'Use commas between items', 'Use question marks', 'Use no punctuation']
            },
            correctAnswer: 'Use commas between items',
            feedback: {
              correct: 'Instruction clear! Students understand list punctuation!',
              incorrect: 'Instruction unclear! Commas separate list items!'
            }
          },
          {
            id: 'recipe-writer',
            type: 'story-builder',
            title: 'Recipe Writer',
            instructions: 'Write ingredient lists for delicious recipes!',
            content: {
              story: 'To make cookies, you need flour___ sugar___ butter___ eggs___ and vanilla.',
              blanks: 4,
              options: [',', '.', '!', '?']
            },
            correctAnswer: [',', ',', ',', ','],
            feedback: {
              correct: 'Recipe perfected! Cookies will be delicious!',
              incorrect: 'Recipe confusion! Use commas in ingredient lists!'
            }
          },
          {
            id: 'travel-planner',
            type: 'drag-drop',
            title: 'Travel Planner',
            instructions: 'Plan trips with properly formatted packing lists!',
            content: {
              words: ['shirts', 'pants', 'shoes', 'socks'],
              categories: ['Pack: shirts,', 'Pack: pants,', 'Pack: shoes,', 'Pack: and socks.']
            },
            correctAnswer: ['shirts:Pack: shirts,', 'pants:Pack: pants,', 'shoes:Pack: shoes,', 'socks:Pack: and socks.'],
            feedback: {
              correct: 'Travel planning complete! Perfect packing list!',
              incorrect: 'Packing confusion! Check list formatting!'
            }
          },
          {
            id: 'party-planner',
            type: 'multiple-choice',
            title: 'Party Planner',
            instructions: 'Plan parties with organized activity lists!',
            content: {
              sentence: 'Party activities: games music dancing and food.',
              options: ['games, music, dancing and food', 'games, music, dancing, and food', 'games music dancing and food', 'games; music; dancing; and food']
            },
            correctAnswer: 'games, music, dancing, and food',
            feedback: {
              correct: 'Party planning perfected! Everyone will have fun!',
              incorrect: 'Party planning needs work! Use commas in lists!'
            }
          },
          {
            id: 'list-master',
            type: 'typing',
            title: 'List Master',
            instructions: 'Demonstrate mastery of list writing!',
            content: {
              question: 'Write a list of four school subjects.',
              sentence: 'School subjects include ___'
            },
            correctAnswer: 'math, science, English, and history',
            feedback: {
              correct: 'List mastery achieved! Perfect educational list!',
              incorrect: 'More practice needed! Use commas between subjects!'
            }
          }
        ]
      },
      {
        id: 'palace-lesson-7',
        title: 'Speech Bubble Booth - Identifying Speech',
        description: 'Identify when characters are speaking in stories',
        type: 'lesson',
        grammarConcept: 'Identifying Speech',
        rewardStarDust: 50,
        isCompleted: false,
        isUnlocked: true,
        activities: [
          {
            id: 'speech-detective',
            type: 'multiple-choice',
            title: 'Speech Detective',
            instructions: 'Identify which parts are speech in stories!',
            content: {
              sentence: 'In the sentence "Hello," said Mary, "how are you?" - what is the speech?',
              options: ['said Mary', 'Hello, how are you', '"Hello," and "how are you?"', 'the whole sentence']
            },
            correctAnswer: '"Hello," and "how are you?"',
            feedback: {
              correct: 'Detective work excellent! Speech identified perfectly!',
              incorrect: 'Investigation continues! Look for words in quotation marks!'
            }
          },
          {
            id: 'bubble-maker',
            type: 'drag-drop',
            title: 'Bubble Maker',
            instructions: 'Create speech bubbles for character dialogue!',
            content: {
              words: ['Hello there', 'said the teacher', 'How are you today', 'asked the student'],
              categories: ['Speech (in bubbles)', 'Narration (outside bubbles)']
            },
            correctAnswer: ['Hello there:Speech (in bubbles)', 'How are you today:Speech (in bubbles)', 'said the teacher:Narration (outside bubbles)', 'asked the student:Narration (outside bubbles)'],
            feedback: {
              correct: 'Bubble creation perfect! Speech clearly identified!',
              incorrect: 'Bubble confusion! Speech goes in bubbles, narration outside!'
            }
          },
          {
            id: 'dialogue-director',
            type: 'story-builder',
            title: 'Dialogue Director',
            instructions: 'Direct actors by identifying their spoken lines!',
            content: {
              story: 'The king announced, "___" The crowd cheered. A child whispered, "___"',
              blanks: 2,
              options: ['Today is a celebration', 'The crowd was happy', 'I can\'t see', 'Everyone was excited']
            },
            correctAnswer: ['Today is a celebration', 'I can\'t see'],
            feedback: {
              correct: 'Direction perfect! Actors know their lines!',
              incorrect: 'Direction unclear! Choose words characters would speak!'
            }
          },
          {
            id: 'conversation-analyst',
            type: 'multiple-choice',
            title: 'Conversation Analyst',
            instructions: 'Analyze conversations in literature!',
            content: {
              sentence: 'Which shows someone speaking?',
              options: ['The boy was happy.', 'The boy said he was happy.', '"I am happy," said the boy.', 'The happy boy smiled.']
            },
            correctAnswer: '"I am happy," said the boy.',
            feedback: {
              correct: 'Analysis accurate! Direct speech identified!',
              incorrect: 'Analysis needed! Look for quotation marks around speech!'
            }
          },
          {
            id: 'speech-coach',
            type: 'typing',
            title: 'Speech Coach',
            instructions: 'Coach others in identifying speech patterns!',
            content: {
              question: 'Write what a character might say when they\'re excited.',
              sentence: 'Excited character says: ___'
            },
            correctAnswer: 'This is amazing!',
            feedback: {
              correct: 'Coaching success! Perfect character speech!',
              incorrect: 'Coaching needed! Write words a character would actually say!'
            }
          }
        ]
      },
      {
        id: 'palace-lesson-8',
        title: 'Speech Punctuation Studio - Punctuating Speech',
        description: 'Master the art of punctuating dialogue correctly',
        type: 'lesson',
        grammarConcept: 'Speech Punctuation',
        rewardStarDust: 50,
        isCompleted: false,
        isUnlocked: true,
        activities: [
          {
            id: 'punctuation-producer',
            type: 'multiple-choice',
            title: 'Punctuation Producer',
            instructions: 'Produce perfectly punctuated dialogue!',
            content: {
              sentence: 'Which is correctly punctuated?',
              options: ['"Hello" said Tom.', '"Hello," said Tom.', '"Hello." said Tom', '"Hello", said Tom.']
            },
            correctAnswer: '"Hello," said Tom.',
            feedback: {
              correct: 'Production perfect! Dialogue sounds natural!',
              incorrect: 'Production error! Check comma placement in dialogue!'
            }
          },
          {
            id: 'quotation-specialist',
            type: 'drag-drop',
            title: 'Quotation Specialist',
            instructions: 'Place quotation marks around speech!',
            content: {
              sentence: 'Good morning, said the teacher, please sit down.',
              words: ['"', '"', '"', '"'],
              categories: ['Before Good', 'After morning,', 'Before please', 'After down.']
            },
            correctAnswer: ['"Before Good', '"After morning,', '"Before please', '"After down.'],
            feedback: {
              correct: 'Specialization achieved! Perfect quotation placement!',
              incorrect: 'Specialization needed! Quotation marks surround speech!'
            }
          },
          {
            id: 'dialogue-editor',
            type: 'story-builder',
            title: 'Dialogue Editor',
            instructions: 'Edit dialogue for proper punctuation!',
            content: {
              story: '___Where are you going___ asked Mom. ___To the park___ I replied.',
              blanks: 4,
              options: ['"', ',', '.', '?']
            },
            correctAnswer: ['"', '?', '"', ','],
            feedback: {
              correct: 'Editing excellence! Dialogue flows perfectly!',
              incorrect: 'Editing revision needed! Check quotation and punctuation rules!'
            }
          },
          {
            id: 'script-writer',
            type: 'multiple-choice',
            title: 'Script Writer',
            instructions: 'Write scripts with proper dialogue punctuation!',
            content: {
              sentence: 'How should this be punctuated: I love ice cream said Sarah',
              options: ['"I love ice cream" said Sarah.', '"I love ice cream," said Sarah.', '"I love ice cream." said Sarah', 'I love ice cream, said Sarah.']
            },
            correctAnswer: '"I love ice cream," said Sarah.',
            feedback: {
              correct: 'Script writing mastered! Perfect dialogue format!',
              incorrect: 'Script revision needed! Check dialogue punctuation rules!'
            }
          },
          {
            id: 'conversation-creator',
            type: 'typing',
            title: 'Conversation Creator',
            instructions: 'Create conversations with perfect punctuation!',
            content: {
              question: 'Write a line of dialogue where someone asks a question.',
              sentence: 'Dialogue with question: ___'
            },
            correctAnswer: '"What time is it?" asked John.',
            feedback: {
              correct: 'Creation masterful! Perfect dialogue punctuation!',
              incorrect: 'Creation needs work! Include quotation marks and proper punctuation!'
            }
          }
        ]
      },
      {
        id: 'palace-lesson-9',
        title: 'Contraction Station - Understanding Contractions',
        description: 'Learn how words combine and transform with apostrophes',
        type: 'lesson',
        grammarConcept: 'Understanding Contractions',
        rewardStarDust: 50,
        isCompleted: false,
        isUnlocked: true,
        activities: [
          {
            id: 'contraction-scientist',
            type: 'multiple-choice',
            title: 'Contraction Scientist',
            instructions: 'Study how contractions are formed!',
            content: {
              sentence: 'What does "can\'t" stand for?',
              options: ['can not', 'cannot', 'can\'t not', 'can it']
            },
            correctAnswer: 'cannot',
            feedback: {
              correct: 'Scientific discovery! Contraction decoded perfectly!',
              incorrect: 'Research continues! "Can\'t" means "cannot"!'
            }
          },
          {
            id: 'word-combiner',
            type: 'drag-drop',
            title: 'Word Combiner',
            instructions: 'Combine words to form contractions!',
            content: {
              words: ['do not', 'will not', 'I am', 'you are'],
              categories: ['don\'t', 'won\'t', 'I\'m', 'you\'re']
            },
            correctAnswer: ['do not:don\'t', 'will not:won\'t', 'I am:I\'m', 'you are:you\'re'],
            feedback: {
              correct: 'Combination complete! All contractions formed correctly!',
              incorrect: 'Combination error! Check which words combine!'
            }
          },
          {
            id: 'apostrophe-placer',
            type: 'story-builder',
            title: 'Apostrophe Placer',
            instructions: 'Place apostrophes correctly in contractions!',
            content: {
              story: 'I dont know where youre going, but well find out.',
              blanks: 3,
              options: ['\'', '\'', '\'', ',', '.']
            },
            correctAnswer: ['\'', '\'', '\''],
            feedback: {
              correct: 'Placement perfect! All apostrophes correctly positioned!',
              incorrect: 'Placement practice needed! Apostrophes replace missing letters!'
            }
          },
          {
            id: 'contraction-decoder',
            type: 'multiple-choice',
            title: 'Contraction Decoder',
            instructions: 'Decode contractions back to original words!',
            content: {
              sentence: 'What is the full form of "they\'re"?',
              options: ['they are', 'they were', 'their', 'there']
            },
            correctAnswer: 'they are',
            feedback: {
              correct: 'Decoding successful! Message understood clearly!',
              incorrect: 'Decoding error! "They\'re" means "they are"!'
            }
          },
          {
            id: 'contraction-teacher',
            type: 'typing',
            title: 'Contraction Teacher',
            instructions: 'Teach others about contraction formation!',
            content: {
              question: 'Write the contraction for "we will".',
              sentence: 'Contraction: ___'
            },
            correctAnswer: 'we\'ll',
            feedback: {
              correct: 'Teaching excellence! Perfect contraction formation!',
              incorrect: 'Teaching moment! "We will" becomes "we\'ll"!'
            }
          }
        ]
      },
      {
        id: 'palace-lesson-10',
        title: 'Contraction Workshop - Using Contractions',
        description: 'Practice using contractions in natural speech and writing',
        type: 'lesson',
        grammarConcept: 'Using Contractions',
        rewardStarDust: 50,
        isCompleted: false,
        isUnlocked: true,
        activities: [
          {
            id: 'casual-conversation',
            type: 'multiple-choice',
            title: 'Casual Conversation',
            instructions: 'Make speech sound more natural with contractions!',
            content: {
              sentence: 'Which sounds more natural in casual speech?',
              options: ['I cannot go to the party.', 'I can\'t go to the party.', 'I can not go to the party.', 'I will not go to the party.']
            },
            correctAnswer: 'I can\'t go to the party.',
            feedback: {
              correct: 'Conversation flows naturally! Perfect contraction usage!',
              incorrect: 'Conversation sounds formal! Contractions make speech casual!'
            }
          },
          {
            id: 'text-message-writer',
            type: 'story-builder',
            title: 'Text Message Writer',
            instructions: 'Write text messages using appropriate contractions!',
            content: {
              story: 'Hey! I ___ make it to the movie. ___ you want to go tomorrow instead?',
              blanks: 2,
              options: ['can\'t', 'cannot', 'Don\'t', 'Do not', 'Won\'t', 'Will not']
            },
            correctAnswer: ['can\'t', 'Don\'t'],
            feedback: {
              correct: 'Text sent successfully! Natural contraction usage!',
              incorrect: 'Text sounds too formal! Use contractions in casual messages!'
            }
          },
          {
            id: 'dialogue-naturalizer',
            type: 'drag-drop',
            title: 'Dialogue Naturalizer',
            instructions: 'Make dialogue sound more natural with contractions!',
            content: {
              words: ['I do not know', 'We will see', 'They are coming', 'You have been'],
              categories: ['I don\'t know', 'We\'ll see', 'They\'re coming', 'You\'ve been']
            },
            correctAnswer: ['I do not know:I don\'t know', 'We will see:We\'ll see', 'They are coming:They\'re coming', 'You have been:You\'ve been'],
            feedback: {
              correct: 'Dialogue naturalized! Conversations sound realistic!',
              incorrect: 'Dialogue still formal! Match contractions with full forms!'
            }
          },
          {
            id: 'speech-coach',
            type: 'multiple-choice',
            title: 'Speech Coach',
            instructions: 'Coach characters to speak naturally!',
            content: {
              sentence: 'In a friendly conversation, which is better?',
              options: ['We are going to have fun!', 'We\'re going to have fun!', 'We will have fun!', 'We shall have fun!']
            },
            correctAnswer: 'We\'re going to have fun!',
            feedback: {
              correct: 'Coaching success! Speech sounds friendly and natural!',
              incorrect: 'Coaching needed! Contractions make speech friendlier!'
            }
          },
          {
            id: 'contraction-master',
            type: 'typing',
            title: 'Contraction Master',
            instructions: 'Demonstrate mastery of contraction usage!',
            content: {
              question: 'Rewrite this formally: "I would not do that if I were you."',
              sentence: 'Casual version: ___'
            },
            correctAnswer: 'I wouldn\'t do that if I were you.',
            feedback: {
              correct: 'Mastery achieved! Perfect casual contraction usage!',
              incorrect: 'More practice needed! "Would not" becomes "wouldn\'t"!'
            }
          }
        ]
      },
      {
        id: 'palace-lesson-11',
        title: 'Punctuation Review Rally - Revising Punctuation',
        description: 'Rally through all punctuation concepts learned',
        type: 'lesson',
        grammarConcept: 'Punctuation Review',
        rewardStarDust: 75,
        isCompleted: false,
        isUnlocked: true,
        activities: [
          {
            id: 'punctuation-champion',
            type: 'multiple-choice',
            title: 'Punctuation Champion',
            instructions: 'Demonstrate championship-level punctuation skills!',
            content: {
              sentence: 'Which sentence is perfectly punctuated?',
              options: ['wow that was amazing', 'Wow, that was amazing!', 'wow, that was amazing.', 'Wow that was amazing?']
            },
            correctAnswer: 'Wow, that was amazing!',
            feedback: {
              correct: 'Championship won! Perfect punctuation mastery!',
              incorrect: 'Championship training continues! Check all punctuation rules!'
            }
          },
          {
            id: 'error-hunter',
            type: 'drag-drop',
            title: 'Error Hunter',
            instructions: 'Hunt down punctuation errors in various sentences!',
            content: {
              words: ['Hello, how are you?', 'hello how are you', 'I can\'t wait!', 'I cant wait', 'Red, blue, and green.', 'Red blue and green'],
              categories: ['Correct', 'Has Errors']
            },
            correctAnswer: ['Hello, how are you?:Correct', 'I can\'t wait!:Correct', 'Red, blue, and green.:Correct', 'hello how are you:Has Errors', 'I cant wait:Has Errors', 'Red blue and green:Has Errors'],
            feedback: {
              correct: 'Hunt successful! All errors identified and corrected!',
              incorrect: 'Hunt continues! Check capitalization, punctuation, and contractions!'
            }
          },
          {
            id: 'punctuation-medic',
            type: 'story-builder',
            title: 'Punctuation Medic',
            instructions: 'Heal sick sentences with proper punctuation!',
            content: {
              story: 'help___ im lost___ can you hear me___ this is terrible___',
              blanks: 4,
              options: ['!', '?', '.', ',']
            },
            correctAnswer: ['!', '!', '?', '!'],
            feedback: {
              correct: 'Medical miracle! All sentences healed perfectly!',
              incorrect: 'Patient needs more treatment! Match punctuation to emotion!'
            }
          },
          {
            id: 'punctuation-teacher',
            type: 'multiple-choice',
            title: 'Punctuation Teacher',
            instructions: 'Teach others about punctuation mastery!',
            content: {
              sentence: 'What\'s the most important rule for punctuation?',
              options: ['Always use periods', 'Match punctuation to meaning', 'Use lots of exclamation marks', 'Avoid commas']
            },
            correctAnswer: 'Match punctuation to meaning',
            feedback: {
              correct: 'Teaching wisdom! Perfect punctuation philosophy!',
              incorrect: 'Teaching moment! Punctuation should match the meaning!'
            }
          },
          {
            id: 'punctuation-artist',
            type: 'typing',
            title: 'Punctuation Artist',
            instructions: 'Create artistic sentences with perfect punctuation!',
            content: {
              question: 'Write a sentence that uses a question, exclamation, and list.',
              sentence: 'Artistic sentence: ___'
            },
            correctAnswer: 'Can you believe we saw lions, tigers, and bears? Amazing!',
            feedback: {
              correct: 'Artistic masterpiece! Perfect punctuation symphony!',
              incorrect: 'Art needs refinement! Include question, exclamation, and list!'
            }
          }
        ]
      },
      {
        id: 'palace-lesson-12',
        title: 'Sentence Writing Studio - Writing Sentences',
        description: 'Master the complete art of sentence writing with perfect punctuation',
        type: 'lesson',
        grammarConcept: 'Complete Sentence Writing',
        rewardStarDust: 100,
        isCompleted: false,
        isUnlocked: true,
        activities: [
          {
            id: 'sentence-architect',
            type: 'multiple-choice',
            title: 'Sentence Architect',
            instructions: 'Design architectural marvels of sentences!',
            content: {
              sentence: 'What makes a sentence complete and well-punctuated?',
              options: ['Just a subject', 'Subject + verb + proper punctuation', 'Lots of adjectives', 'Long length']
            },
            correctAnswer: 'Subject + verb + proper punctuation',
            feedback: {
              correct: 'Architectural genius! Perfect sentence blueprint!',
              incorrect: 'Blueprint revision needed! Complete sentences need subject, verb, and punctuation!'
            }
          },
          {
            id: 'writing-virtuoso',
            type: 'story-builder',
            title: 'Writing Virtuoso',
            instructions: 'Compose virtuoso-level writing with varied sentences!',
            content: {
              story: 'The concert was amazing___ Did you enjoy it___ I loved every minute___ What a performance___',
              blanks: 4,
              options: ['.', '!', '?', ',']
            },
            correctAnswer: ['.', '?', '!', '!'],
            feedback: {
              correct: 'Virtuoso performance! Perfect sentence variety and punctuation!',
              incorrect: 'Performance needs practice! Match punctuation to sentence type!'
            }
          },
          {
            id: 'master-editor',
            type: 'drag-drop',
            title: 'Master Editor',
            instructions: 'Edit writing to perfection with flawless punctuation!',
            content: {
              words: ['Perfect sentence', 'Needs editing', 'The sun shines brightly.', 'the sun shines brightly', 'What a beautiful day!', 'what a beautiful day', 'Are you coming?', 'are you coming'],
              categories: ['Perfect', 'Needs Work']
            },
            correctAnswer: ['The sun shines brightly.:Perfect', 'What a beautiful day!:Perfect', 'Are you coming?:Perfect', 'Perfect sentence:Perfect', 'the sun shines brightly:Needs Work', 'what a beautiful day:Needs Work', 'are you coming:Needs Work', 'Needs editing:Needs Work'],
            feedback: {
              correct: 'Master editing achieved! All sentences perfected!',
              incorrect: 'Editing continues! Check capitalization and end punctuation!'
            }
          },
          {
            id: 'writing-mentor',
            type: 'multiple-choice',
            title: 'Writing Mentor',
            instructions: 'Mentor others in the art of sentence writing!',
            content: {
              sentence: 'What\'s the best advice for new writers?',
              options: ['Write long sentences', 'Use big words', 'Match punctuation to meaning', 'Avoid punctuation']
            },
            correctAnswer: 'Match punctuation to meaning',
            feedback: {
              correct: 'Mentoring mastery! Perfect writing wisdom shared!',
              incorrect: 'Mentoring moment! Good writing matches punctuation to meaning!'
            }
          },
          {
            id: 'sentence-master',
            type: 'typing',
            title: 'Sentence Master',
            instructions: 'Demonstrate complete mastery of sentence writing!',
            content: {
              question: 'Write a paragraph with different sentence types and perfect punctuation.',
              sentence: 'Master paragraph: ___'
            },
            correctAnswer: 'I love reading books. Do you have a favorite author? Reading is so exciting! My favorite books are mysteries, adventures, and fantasies.',
            feedback: {
              correct: 'Sentence mastery achieved! Perfect writing with flawless punctuation!',
              incorrect: 'Mastery in progress! Include different sentence types with proper punctuation!'
            }
          }
        ]
      }
    ]
  }
]