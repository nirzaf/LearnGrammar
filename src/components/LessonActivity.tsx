import { useState, useEffect } from 'react'
import type { Lesson, Planet } from '../types/game'
import CharacterGuide from './CharacterGuide'
import { AdaptiveLearningEngine, StudentPerformance } from '../services/adaptiveLearning'

interface LessonActivityProps {
  lesson: Lesson
  planet: Planet
  onBack: () => void
  onComplete: (lessonId: string, starDustEarned: number) => void
  adaptiveLearning?: AdaptiveLearningEngine
}

/**
 * Lesson Activity component handling interactive grammar exercises
 * Supports multiple activity types: drag-drop, multiple-choice, typing, etc.
 */
const LessonActivity: React.FC<LessonActivityProps> = ({
  lesson,
  planet,
  onBack,
  onComplete,
  adaptiveLearning
}) => {
  const [currentActivityIndex, setCurrentActivityIndex] = useState(0)
  const [userAnswer, setUserAnswer] = useState<string>('')
  const [selectedOption, setSelectedOption] = useState<string>('')
  const [draggedItems, setDraggedItems] = useState<{[key: string]: string}>({})
  const [matchedPairs, setMatchedPairs] = useState<{[key: string]: string}>({})
  const [storyAnswers, setStoryAnswers] = useState<string[]>([])
  const [showFeedback, setShowFeedback] = useState(false)
  const [isCorrect, setIsCorrect] = useState(false)
  const [activityCompleted, setActivityCompleted] = useState(false)
  const [lessonProgress, setLessonProgress] = useState(0)
  const [showCharacterGuide, setShowCharacterGuide] = useState(false)
  const [characterMessage, setCharacterMessage] = useState('')
  const [showIntroduction, setShowIntroduction] = useState(true)
  const [hintsUsed, setHintsUsed] = useState(0)
  const [attempts, setAttempts] = useState(0)
  const [activityStartTime, setActivityStartTime] = useState<Date>(new Date())
  const [adaptiveHint, setAdaptiveHint] = useState<string>('')

  const currentActivity = lesson.activities[currentActivityIndex]
  const isLastActivity = currentActivityIndex === lesson.activities.length - 1

  /**
   * Reset activity state when activity changes
   */
  useEffect(() => {
    setUserAnswer('')
    setSelectedOption('')
    setDraggedItems({})
    setMatchedPairs({})
    setStoryAnswers([])
    setShowFeedback(false)
    setIsCorrect(false)
    setActivityCompleted(false)
  }, [currentActivityIndex])

  /**
   * Show character guide introduction when lesson starts
   */
  useEffect(() => {
    if (showIntroduction) {
      setShowCharacterGuide(true)
    }
  }, [showIntroduction])

  /**
   * Update lesson progress
   */
  useEffect(() => {
    const progress = ((currentActivityIndex + (activityCompleted ? 1 : 0)) / lesson.activities.length) * 100
    setLessonProgress(progress)
  }, [currentActivityIndex, activityCompleted, lesson.activities.length])

  /**
   * Handle answer submission
   */
  const showCharacterFeedback = (message: string) => {
    setCharacterMessage(message)
    setShowCharacterGuide(true)
    setShowIntroduction(false)
  }

  const getAdaptiveHint = () => {
    if (adaptiveLearning) {
      const hint = adaptiveLearning.generatePersonalizedHint(
        lesson.grammarConcept,
        currentActivity.type
      )
      setAdaptiveHint(hint)
      setHintsUsed(prev => prev + 1)
      showCharacterFeedback(hint)
    }
  }

  const handleSubmitAnswer = () => {
    let userResponse = ''

    switch (currentActivity.type) {
      case 'multiple-choice':
        userResponse = selectedOption
        break
      case 'typing':
        userResponse = userAnswer.trim().toLowerCase()
        break
      case 'drag-drop':
        userResponse = Object.entries(draggedItems)
          .map(([item, category]) => `${item}:${category}`)
          .join(', ')
        break
      case 'matching':
        userResponse = Object.entries(matchedPairs)
          .map(([item, match]) => `${item}:${match}`)
          .join(', ')
        break
      case 'story-builder':
        userResponse = storyAnswers.join(', ')
        break
      default:
        userResponse = userAnswer
    }

    const correctAnswer = Array.isArray(currentActivity.correctAnswer)
      ? currentActivity.correctAnswer.join(', ').toLowerCase()
      : currentActivity.correctAnswer.toLowerCase()

    const correct = userResponse.toLowerCase() === correctAnswer
    setIsCorrect(correct)
    setShowFeedback(true)

    if (correct) {
      setActivityCompleted(true)
      // Show character encouragement after a short delay
      setTimeout(() => {
        showCharacterFeedback('')
      }, 1500)
    }
  }

  /**
   * Handle proceeding to next activity or completing lesson
   */
  const handleNext = () => {
    if (isLastActivity) {
      onComplete(lesson.id, lesson.rewardStarDust)
    } else {
      setCurrentActivityIndex(prev => prev + 1)
    }
  }

  /**
   * Handle drag and drop functionality
   */
  const handleDragStart = (e: React.DragEvent, item: string) => {
    e.dataTransfer.setData('text/plain', item)
  }

  const handleDrop = (e: React.DragEvent, category: string) => {
    e.preventDefault()
    const item = e.dataTransfer.getData('text/plain')
    setDraggedItems(prev => ({ ...prev, [item]: category }))
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
  }

  /**
   * Render activity based on type
   */
  const renderActivity = () => {
    switch (currentActivity.type) {
      case 'multiple-choice':
        return (
          <div className="space-y-6">
            {/* Question */}
            <div className="card bg-slate-700/50">
              <h3 className="text-xl font-semibold text-white mb-4">
                {currentActivity.content.sentence || currentActivity.content.question}
              </h3>
            </div>
            
            {/* Options */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {currentActivity.content.options?.map((option, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedOption(option)}
                  className={`p-4 rounded-lg border-2 transition-all duration-200 ${
                    selectedOption === option
                      ? 'border-cosmic-purple bg-cosmic-purple/20 text-white'
                      : 'border-slate-600 bg-slate-800/50 text-gray-300 hover:border-slate-500'
                  }`}
                >
                  <span className="text-lg font-medium">{option}</span>
                </button>
              ))}
            </div>
          </div>
        )
        
      case 'typing':
        return (
          <div className="space-y-6">
            {/* Question */}
            <div className="card bg-slate-700/50">
              <h3 className="text-xl font-semibold text-white mb-4">
                {currentActivity.content.question}
              </h3>
              {currentActivity.content.sentence && (
                <p className="text-gray-300 text-lg">
                  {currentActivity.content.sentence}
                </p>
              )}
            </div>
            
            {/* Input */}
            <div className="card">
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Type your answer:
              </label>
              <input
                type="text"
                value={userAnswer}
                onChange={(e) => setUserAnswer(e.target.value)}
                className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cosmic-purple focus:ring-2 focus:ring-cosmic-purple/20"
                placeholder="Enter your answer here..."
                onKeyPress={(e) => e.key === 'Enter' && handleSubmitAnswer()}
              />
            </div>
          </div>
        )
        
      case 'drag-drop':
        return (
          <div className="space-y-6">
            {/* Instructions */}
            <div className="card bg-slate-700/50">
              <h3 className="text-xl font-semibold text-white mb-2">
                {currentActivity.content.sentence}
              </h3>
            </div>
            
            {/* Draggable Items */}
            <div className="card">
              <h4 className="text-lg font-semibold text-white mb-4">Drag these items:</h4>
              <div className="flex flex-wrap gap-3">
                {currentActivity.content.words?.map((word, index) => (
                  <div
                    key={index}
                    draggable
                    onDragStart={(e) => handleDragStart(e, word)}
                    className="px-4 py-2 bg-cosmic-purple rounded-lg text-white cursor-move hover:bg-purple-600 transition-colors duration-200 select-none"
                  >
                    {word}
                  </div>
                ))}
              </div>
            </div>
            
            {/* Drop Zones */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {currentActivity.content.categories?.map((category, index) => (
                <div
                  key={index}
                  onDrop={(e) => handleDrop(e, category)}
                  onDragOver={handleDragOver}
                  className="card border-2 border-dashed border-slate-600 hover:border-slate-500 transition-colors duration-200 min-h-32"
                >
                  <h5 className="text-lg font-semibold text-center text-white mb-4">
                    {category}
                  </h5>
                  <div className="space-y-2">
                    {Object.entries(draggedItems)
                      .filter(([, cat]) => cat === category)
                      .map(([item], idx) => (
                        <div key={idx} className="px-3 py-1 bg-slate-700 rounded text-white text-sm">
                          {item}
                        </div>
                      ))
                    }
                  </div>
                </div>
              ))}
            </div>
          </div>
        )

      case 'matching':
        return (
          <div className="space-y-6">
            {/* Instructions */}
            <div className="card bg-slate-700/50">
              <h3 className="text-xl font-semibold text-white mb-2">
                {currentActivity.instructions}
              </h3>
            </div>

            {/* Items to Match */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="card">
                <h4 className="text-lg font-semibold text-white mb-4">Items</h4>
                <div className="space-y-2">
                  {currentActivity.content.words?.map((word, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        const category = currentActivity.content.categories?.[index]
                        if (category) {
                          setMatchedPairs(prev => ({ ...prev, [word]: category }))
                        }
                      }}
                      className={`w-full p-3 rounded-lg border-2 transition-all duration-200 ${
                        matchedPairs[word]
                          ? 'border-cosmic-purple bg-cosmic-purple/20 text-white'
                          : 'border-slate-600 bg-slate-800/50 text-gray-300 hover:border-slate-500'
                      }`}
                    >
                      {word} {matchedPairs[word] && `→ ${matchedPairs[word]}`}
                    </button>
                  ))}
                </div>
              </div>

              <div className="card">
                <h4 className="text-lg font-semibold text-white mb-4">Categories</h4>
                <div className="space-y-2">
                  {currentActivity.content.categories?.map((category, index) => (
                    <div
                      key={index}
                      className="p-3 bg-slate-700 rounded-lg text-white border border-slate-600"
                    >
                      {category}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )

      case 'story-builder':
        return (
          <div className="space-y-6">
            {/* Story Template */}
            <div className="card bg-slate-700/50">
              <h3 className="text-xl font-semibold text-white mb-4">
                Complete the Story
              </h3>
              <p className="text-gray-300 text-lg">
                {currentActivity.content.story}
              </p>
            </div>

            {/* Word Options */}
            <div className="card">
              <h4 className="text-lg font-semibold text-white mb-4">Choose words to fill the blanks:</h4>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {currentActivity.content.options?.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      if (storyAnswers.length < (currentActivity.content.blanks || 0)) {
                        setStoryAnswers(prev => [...prev, option])
                      }
                    }}
                    disabled={storyAnswers.includes(option)}
                    className={`p-3 rounded-lg border-2 transition-all duration-200 ${
                      storyAnswers.includes(option)
                        ? 'border-cosmic-purple bg-cosmic-purple/20 text-white opacity-50'
                        : 'border-slate-600 bg-slate-800/50 text-gray-300 hover:border-slate-500'
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>

            {/* Selected Words */}
            {storyAnswers.length > 0 && (
              <div className="card">
                <h4 className="text-lg font-semibold text-white mb-4">Your choices:</h4>
                <div className="flex flex-wrap gap-2">
                  {storyAnswers.map((answer, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-cosmic-purple rounded-full text-white text-sm"
                    >
                      {index + 1}. {answer}
                    </span>
                  ))}
                </div>
                <button
                  onClick={() => setStoryAnswers([])}
                  className="mt-3 text-sm text-gray-400 hover:text-white"
                >
                  Clear all
                </button>
              </div>
            )}
          </div>
        )

      default:
        return (
          <div className="card">
            <p className="text-gray-300">Activity type not implemented yet.</p>
          </div>
        )
    }
  }

  return (
    <div className="min-h-screen bg-space-blue">
      {/* Header */}
      <div className="bg-slate-900/80 backdrop-blur-sm border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={onBack}
              className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-200"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span>Back to Planet</span>
            </button>
            
            <div className="text-center">
              <h1 className="text-2xl font-space font-bold text-star-yellow">
                {lesson.title}
              </h1>
              <div className="text-sm text-gray-400">
                Activity {currentActivityIndex + 1} of {lesson.activities.length}
              </div>
            </div>
            
            <div className="flex items-center space-x-2 text-star-yellow">
              <span className="text-sm">Reward:</span>
              <span className="font-bold">{lesson.rewardStarDust}</span>
              <span>⭐</span>
            </div>
          </div>
          
          {/* Progress Bar */}
          <div className="mt-4">
            <div className="w-full bg-slate-700 rounded-full h-2">
              <div 
                className="bg-gradient-to-r from-cosmic-purple to-star-yellow h-2 rounded-full transition-all duration-500"
                style={{ width: `${lessonProgress}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Activity Instructions */}
        <div className="card mb-8 bg-gradient-to-r from-cosmic-purple/20 to-blue-600/20">
          <div className="flex items-start space-x-4">
            <div className="text-4xl">
              {lesson.type === 'boss' ? '👹' : lesson.type === 'practice' ? '🎮' : '📚'}
            </div>
            <div>
              <h2 className="text-xl font-semibold text-white mb-2">
                {currentActivity.title}
              </h2>
              <p className="text-gray-300">
                {currentActivity.instructions}
              </p>
            </div>
          </div>
        </div>

        {/* Activity Content */}
        {renderActivity()}

        {/* Feedback */}
        {showFeedback && (
          <div className={`card mt-6 ${isCorrect ? 'bg-green-600/20 border-green-500' : 'bg-red-600/20 border-red-500'}`}>
            <div className="flex items-center space-x-3">
              <div className="text-3xl">
                {isCorrect ? '🎉' : '😅'}
              </div>
              <div>
                <h3 className={`text-lg font-semibold ${isCorrect ? 'text-green-400' : 'text-red-400'}`}>
                  {isCorrect ? 'Correct!' : 'Not quite right!'}
                </h3>
                <p className="text-gray-300">
                  {isCorrect ? currentActivity.feedback.correct : currentActivity.feedback.incorrect}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex justify-between mt-8">
          <div>
            {showFeedback && !isCorrect && (
              <button
                onClick={() => {
                  setShowFeedback(false)
                  setUserAnswer('')
                  setSelectedOption('')
                  setDraggedItems({})
                  setMatchedPairs({})
                  setStoryAnswers([])
                }}
                className="btn-secondary"
              >
                Try Again
              </button>
            )}
          </div>
          
          <div className="space-x-4">
            {!showFeedback && (
              <button
                onClick={handleSubmitAnswer}
                disabled={
                  !userAnswer &&
                  !selectedOption &&
                  Object.keys(draggedItems).length === 0 &&
                  Object.keys(matchedPairs).length === 0 &&
                  storyAnswers.length === 0
                }
                className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Submit Answer
              </button>
            )}
            
            {showFeedback && isCorrect && (
              <button
                onClick={handleNext}
                className="btn-primary"
              >
                {isLastActivity ? 'Complete Lesson' : 'Next Activity'}
              </button>
            )}
          </div>
        </div>

        {/* Character Guide Help Button */}
        <div className="fixed bottom-4 right-4">
          <button
            onClick={() => showCharacterFeedback('')}
            className="bg-cosmic-purple hover:bg-purple-700 text-white p-3 rounded-full shadow-lg transition-colors"
            title="Get help from your character guide"
          >
            👤
          </button>
        </div>
      </div>
    </div>

    {/* Character Guide Modal */}
    <CharacterGuide
      planet={planet}
      isVisible={showCharacterGuide}
      onClose={() => {
        setShowCharacterGuide(false)
        setShowIntroduction(false)
      }}
      message={characterMessage}
      showIntroduction={showIntroduction}
    />
  )
}

export default LessonActivity