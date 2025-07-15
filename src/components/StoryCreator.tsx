import { useState, useEffect } from 'react'

interface StoryTemplate {
  id: string
  title: string
  description: string
  difficulty: 'easy' | 'medium' | 'hard'
  grammarFocus: string[]
  template: string
  blanks: {
    id: string
    type: 'noun' | 'verb' | 'adjective' | 'adverb' | 'pronoun'
    hint: string
    suggestions: string[]
  }[]
  illustration?: string
}

interface StoryCreatorProps {
  isVisible: boolean
  onClose: () => void
  completedLessons: Set<string>
}

const storyTemplates: StoryTemplate[] = [
  {
    id: 'adventure-castle',
    title: 'Castle Adventure',
    description: 'Create an exciting adventure story in a magical castle!',
    difficulty: 'easy',
    grammarFocus: ['nouns', 'adjectives', 'verbs'],
    template: 'Once upon a time, there was a {adjective1} {noun1} who lived in a {adjective2} castle. Every morning, the {noun1} would {verb1} through the {adjective3} halls and {verb2} the {noun2}. One day, they discovered a {adjective4} {noun3} hidden behind a {adjective5} door.',
    blanks: [
      { id: 'adjective1', type: 'adjective', hint: 'How would you describe the main character?', suggestions: ['brave', 'curious', 'friendly', 'clever'] },
      { id: 'noun1', type: 'noun', hint: 'Who is the main character?', suggestions: ['knight', 'princess', 'wizard', 'dragon'] },
      { id: 'adjective2', type: 'adjective', hint: 'What kind of castle is it?', suggestions: ['magical', 'ancient', 'mysterious', 'golden'] },
      { id: 'verb1', type: 'verb', hint: 'What does the character do in the morning?', suggestions: ['walk', 'dance', 'skip', 'march'] },
      { id: 'adjective3', type: 'adjective', hint: 'Describe the halls', suggestions: ['long', 'dark', 'bright', 'echoing'] },
      { id: 'verb2', type: 'verb', hint: 'What action do they do?', suggestions: ['visit', 'clean', 'explore', 'guard'] },
      { id: 'noun2', type: 'noun', hint: 'What do they interact with?', suggestions: ['garden', 'library', 'kitchen', 'tower'] },
      { id: 'adjective4', type: 'adjective', hint: 'Describe the discovery', suggestions: ['secret', 'sparkling', 'ancient', 'powerful'] },
      { id: 'noun3', type: 'noun', hint: 'What did they find?', suggestions: ['treasure', 'book', 'key', 'map'] },
      { id: 'adjective5', type: 'adjective', hint: 'Describe the door', suggestions: ['heavy', 'creaky', 'invisible', 'glowing'] }
    ],
    illustration: '🏰'
  },
  {
    id: 'space-adventure',
    title: 'Space Explorer',
    description: 'Journey through the cosmos in this space adventure!',
    difficulty: 'medium',
    grammarFocus: ['nouns', 'verbs', 'adjectives', 'adverbs'],
    template: 'Captain {noun1} {adverb1} piloted their {adjective1} spaceship through the {adjective2} galaxy. They were searching for a {adjective3} planet where {noun2} could {verb1}. Suddenly, they {adverb2} spotted a {adjective4} {noun3} floating in space!',
    blanks: [
      { id: 'noun1', type: 'noun', hint: 'What is the captain\'s name?', suggestions: ['Stardust', 'Nova', 'Cosmos', 'Galaxy'] },
      { id: 'adverb1', type: 'adverb', hint: 'How did they pilot?', suggestions: ['carefully', 'quickly', 'smoothly', 'bravely'] },
      { id: 'adjective1', type: 'adjective', hint: 'Describe the spaceship', suggestions: ['shiny', 'fast', 'powerful', 'advanced'] },
      { id: 'adjective2', type: 'adjective', hint: 'What kind of galaxy?', suggestions: ['distant', 'colorful', 'mysterious', 'vast'] },
      { id: 'adjective3', type: 'adjective', hint: 'Describe the planet they seek', suggestions: ['peaceful', 'green', 'habitable', 'beautiful'] },
      { id: 'noun2', type: 'noun', hint: 'Who or what needs the planet?', suggestions: ['aliens', 'humans', 'robots', 'creatures'] },
      { id: 'verb1', type: 'verb', hint: 'What can they do there?', suggestions: ['live', 'explore', 'rest', 'play'] },
      { id: 'adverb2', type: 'adverb', hint: 'How did they spot it?', suggestions: ['suddenly', 'excitedly', 'carefully', 'amazingly'] },
      { id: 'adjective4', type: 'adjective', hint: 'Describe what they found', suggestions: ['strange', 'glowing', 'enormous', 'beautiful'] },
      { id: 'noun3', type: 'noun', hint: 'What did they discover?', suggestions: ['asteroid', 'station', 'creature', 'crystal'] }
    ],
    illustration: '🚀'
  },
  {
    id: 'animal-friends',
    title: 'Animal Friends',
    description: 'Create a heartwarming story about animal friendship!',
    difficulty: 'easy',
    grammarFocus: ['nouns', 'adjectives', 'verbs'],
    template: 'In the {adjective1} forest, a {adjective2} {noun1} met a {adjective3} {noun2}. At first, they were {adjective4}, but soon they began to {verb1} together. They would {verb2} through the trees and {verb3} by the {adjective5} river.',
    blanks: [
      { id: 'adjective1', type: 'adjective', hint: 'Describe the forest', suggestions: ['peaceful', 'green', 'magical', 'sunny'] },
      { id: 'adjective2', type: 'adjective', hint: 'Describe the first animal', suggestions: ['small', 'fluffy', 'quick', 'gentle'] },
      { id: 'noun1', type: 'noun', hint: 'What is the first animal?', suggestions: ['rabbit', 'squirrel', 'fox', 'deer'] },
      { id: 'adjective3', type: 'adjective', hint: 'Describe the second animal', suggestions: ['wise', 'friendly', 'playful', 'kind'] },
      { id: 'noun2', type: 'noun', hint: 'What is the second animal?', suggestions: ['owl', 'bear', 'turtle', 'bird'] },
      { id: 'adjective4', type: 'adjective', hint: 'How did they feel at first?', suggestions: ['shy', 'nervous', 'curious', 'cautious'] },
      { id: 'verb1', type: 'verb', hint: 'What did they start doing?', suggestions: ['play', 'talk', 'explore', 'laugh'] },
      { id: 'verb2', type: 'verb', hint: 'What do they do in trees?', suggestions: ['climb', 'swing', 'jump', 'hide'] },
      { id: 'verb3', type: 'verb', hint: 'What do they do by the river?', suggestions: ['swim', 'drink', 'splash', 'rest'] },
      { id: 'adjective5', type: 'adjective', hint: 'Describe the river', suggestions: ['clear', 'cool', 'sparkling', 'gentle'] }
    ],
    illustration: '🦊'
  }
]

export default function StoryCreator({ isVisible, onClose }: StoryCreatorProps) {
  const [selectedTemplate, setSelectedTemplate] = useState<StoryTemplate | null>(null)
  const [storyInputs, setStoryInputs] = useState<Record<string, string>>({})
  const [currentBlankIndex, setCurrentBlankIndex] = useState(0)
  const [completedStory, setCompletedStory] = useState<string>('')
  const [showSuggestions, setShowSuggestions] = useState(true)
  const [customInput, setCustomInput] = useState('')

  // Filter templates based on completed lessons
  const availableTemplates = storyTemplates.filter(() => {
    // For now, show all templates. In a real app, you'd filter based on grammar concepts learned
    return true
  })

  useEffect(() => {
    if (selectedTemplate) {
      setStoryInputs({})
      setCurrentBlankIndex(0)
      setCompletedStory('')
    }
  }, [selectedTemplate])

  const handleInputChange = (blankId: string, value: string) => {
    setStoryInputs(prev => ({ ...prev, [blankId]: value }))
  }

  const handleSuggestionClick = (suggestion: string) => {
    const currentBlank = selectedTemplate?.blanks[currentBlankIndex]
    if (currentBlank) {
      handleInputChange(currentBlank.id, suggestion)
      if (currentBlankIndex < selectedTemplate.blanks.length - 1) {
        setCurrentBlankIndex(prev => prev + 1)
      }
    }
  }

  const handleCustomSubmit = () => {
    const currentBlank = selectedTemplate?.blanks[currentBlankIndex]
    if (currentBlank && customInput.trim()) {
      handleInputChange(currentBlank.id, customInput.trim())
      setCustomInput('')
      if (currentBlankIndex < selectedTemplate.blanks.length - 1) {
        setCurrentBlankIndex(prev => prev + 1)
      }
    }
  }

  const generateStory = () => {
    if (!selectedTemplate) return

    let story = selectedTemplate.template
    selectedTemplate.blanks.forEach(blank => {
      const value = storyInputs[blank.id] || `[${blank.type}]`
      story = story.replace(`{${blank.id}}`, value)
    })
    setCompletedStory(story)
  }

  const resetStory = () => {
    setStoryInputs({})
    setCurrentBlankIndex(0)
    setCompletedStory('')
    setCustomInput('')
  }

  const isStoryComplete = selectedTemplate ? 
    selectedTemplate.blanks.every(blank => storyInputs[blank.id]) : false

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl max-w-4xl w-full max-h-[95vh] overflow-hidden border-2 border-cosmic-purple">
        {/* Header */}
        <div className="bg-gradient-to-r from-cosmic-purple to-blue-600 p-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-3xl font-bold text-white mb-2">📚 Story Creator</h2>
              <p className="text-gray-200">
                Create amazing stories using your grammar skills!
              </p>
            </div>
            <button
              onClick={onClose}
              className="text-white hover:text-gray-300 text-2xl"
            >
              ✕
            </button>
          </div>
        </div>

        <div className="p-6 overflow-y-auto max-h-[80vh]">
          {!selectedTemplate ? (
            /* Template Selection */
            <div className="space-y-6">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-2">Choose Your Story Adventure!</h3>
                <p className="text-gray-400">Select a story template to begin creating</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {availableTemplates.map(template => (
                  <div
                    key={template.id}
                    onClick={() => setSelectedTemplate(template)}
                    className="bg-slate-800/50 rounded-lg p-6 border-2 border-slate-600 hover:border-cosmic-purple cursor-pointer transition-all duration-200 hover:scale-105"
                  >
                    <div className="text-center">
                      <div className="text-4xl mb-3">{template.illustration}</div>
                      <h4 className="text-xl font-bold text-white mb-2">{template.title}</h4>
                      <p className="text-gray-400 text-sm mb-3">{template.description}</p>
                      
                      <div className="flex justify-center space-x-2 mb-3">
                        {template.grammarFocus.map(focus => (
                          <span
                            key={focus}
                            className="px-2 py-1 bg-cosmic-purple rounded-full text-white text-xs"
                          >
                            {focus}
                          </span>
                        ))}
                      </div>
                      
                      <div className={`text-sm font-medium ${
                        template.difficulty === 'easy' ? 'text-green-400' :
                        template.difficulty === 'medium' ? 'text-yellow-400' :
                        'text-red-400'
                      }`}>
                        {template.difficulty.toUpperCase()}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            /* Story Creation */
            <div className="space-y-6">
              {/* Header with back button */}
              <div className="flex items-center justify-between">
                <button
                  onClick={() => setSelectedTemplate(null)}
                  className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  <span>Back to Templates</span>
                </button>
                
                <div className="text-center">
                  <h3 className="text-xl font-bold text-white">{selectedTemplate.title}</h3>
                  <div className="text-sm text-gray-400">
                    Progress: {Object.keys(storyInputs).length}/{selectedTemplate.blanks.length}
                  </div>
                </div>
                
                <button
                  onClick={resetStory}
                  className="px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg text-sm"
                >
                  Reset
                </button>
              </div>

              {!completedStory ? (
                /* Story Building Interface */
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Current Blank Input */}
                  <div className="bg-slate-800/50 rounded-lg p-6">
                    <div className="mb-4">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-lg font-bold text-white">
                          Step {currentBlankIndex + 1} of {selectedTemplate.blanks.length}
                        </h4>
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                          selectedTemplate.blanks[currentBlankIndex]?.type === 'noun' ? 'bg-blue-500' :
                          selectedTemplate.blanks[currentBlankIndex]?.type === 'verb' ? 'bg-green-500' :
                          selectedTemplate.blanks[currentBlankIndex]?.type === 'adjective' ? 'bg-purple-500' :
                          selectedTemplate.blanks[currentBlankIndex]?.type === 'adverb' ? 'bg-yellow-500' :
                          'bg-red-500'
                        } text-white`}>
                          {selectedTemplate.blanks[currentBlankIndex]?.type}
                        </span>
                      </div>
                      <p className="text-gray-300">
                        {selectedTemplate.blanks[currentBlankIndex]?.hint}
                      </p>
                    </div>

                    {/* Suggestions */}
                    {showSuggestions && (
                      <div className="mb-4">
                        <h5 className="text-white font-medium mb-2">💡 Suggestions:</h5>
                        <div className="grid grid-cols-2 gap-2">
                          {selectedTemplate.blanks[currentBlankIndex]?.suggestions.map(suggestion => (
                            <button
                              key={suggestion}
                              onClick={() => handleSuggestionClick(suggestion)}
                              className="p-2 bg-cosmic-purple hover:bg-purple-700 text-white rounded-lg text-sm transition-colors"
                            >
                              {suggestion}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Custom Input */}
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <input
                          type="text"
                          value={customInput}
                          onChange={(e) => setCustomInput(e.target.value)}
                          placeholder="Or type your own word..."
                          className="flex-1 p-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:border-cosmic-purple focus:outline-none"
                          onKeyPress={(e) => e.key === 'Enter' && handleCustomSubmit()}
                        />
                        <button
                          onClick={handleCustomSubmit}
                          disabled={!customInput.trim()}
                          className="px-4 py-3 bg-green-600 hover:bg-green-700 disabled:bg-gray-600 text-white rounded-lg font-medium transition-colors"
                        >
                          Add
                        </button>
                      </div>
                      
                      <button
                        onClick={() => setShowSuggestions(!showSuggestions)}
                        className="text-sm text-gray-400 hover:text-white transition-colors"
                      >
                        {showSuggestions ? 'Hide' : 'Show'} suggestions
                      </button>
                    </div>
                  </div>

                  {/* Story Preview */}
                  <div className="bg-slate-800/50 rounded-lg p-6">
                    <h4 className="text-lg font-bold text-white mb-4">📖 Your Story So Far</h4>
                    <div className="bg-slate-700 rounded-lg p-4 min-h-32">
                      <p className="text-gray-300 leading-relaxed">
                        {selectedTemplate.template.split(/\{[^}]+\}/).map((part, index) => {
                          const blank = selectedTemplate.blanks[index]
                          const value = blank ? storyInputs[blank.id] : null
                          
                          return (
                            <span key={index}>
                              {part}
                              {blank && (
                                <span className={`font-bold ${
                                  value ? 'text-cosmic-purple' : 'text-gray-500'
                                }`}>
                                  {value || `[${blank.type}]`}
                                </span>
                              )}
                            </span>
                          )
                        })}
                      </p>
                    </div>
                    
                    {isStoryComplete && (
                      <button
                        onClick={generateStory}
                        className="w-full mt-4 py-3 bg-gradient-to-r from-cosmic-purple to-blue-600 text-white rounded-lg font-bold text-lg hover:from-purple-700 hover:to-blue-700 transition-all"
                      >
                        🎉 Complete Your Story!
                      </button>
                    )}
                  </div>
                </div>
              ) : (
                /* Completed Story Display */
                <div className="space-y-6">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-white mb-2">🎉 Your Amazing Story!</h3>
                    <p className="text-gray-400">Great job creating this wonderful story!</p>
                  </div>
                  
                  <div className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-lg p-8 border-2 border-cosmic-purple">
                    <div className="text-center mb-6">
                      <div className="text-6xl mb-4">{selectedTemplate.illustration}</div>
                      <h4 className="text-2xl font-bold text-white">{selectedTemplate.title}</h4>
                    </div>
                    
                    <div className="bg-white/10 rounded-lg p-6">
                      <p className="text-lg text-gray-100 leading-relaxed font-serif">
                        {completedStory}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex justify-center space-x-4">
                    <button
                      onClick={() => setCompletedStory('')}
                      className="px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white rounded-lg font-medium transition-colors"
                    >
                      ✏️ Edit Story
                    </button>
                    <button
                      onClick={() => {
                        setSelectedTemplate(null)
                        resetStory()
                      }}
                      className="px-6 py-3 bg-cosmic-purple hover:bg-purple-700 text-white rounded-lg font-medium transition-colors"
                    >
                      📚 Create New Story
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
