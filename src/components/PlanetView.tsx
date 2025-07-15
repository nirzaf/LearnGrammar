import { useState } from 'react'
import type { Planet, Lesson } from '../types/game'
import LessonActivity from './LessonActivity'

interface PlanetViewProps {
  planet: Planet
  onBack: () => void
  onProgressUpdate: (lessonId: string, starDustEarned: number) => void
  completedLessons: Set<string>
}

/**
 * Planet View component displaying planet details, lessons, and activities
 * Handles lesson selection and progress tracking within a planet
 */
const PlanetView: React.FC<PlanetViewProps> = ({ 
  planet, 
  onBack, 
  onProgressUpdate, 
  completedLessons 
}) => {
  const [selectedLesson, setSelectedLesson] = useState<Lesson | null>(null)
  const [showPlanetInfo, setShowPlanetInfo] = useState(true)

  /**
   * Calculate planet completion percentage
   */
  const getCompletionPercentage = (): number => {
    const totalLessons = planet.lessons.length
    const completedCount = planet.lessons.filter(lesson => 
      completedLessons.has(lesson.id)
    ).length
    return totalLessons > 0 ? (completedCount / totalLessons) * 100 : 0
  }

  /**
   * Handle lesson selection
   */
  const handleLessonSelect = (lesson: Lesson) => {
    setSelectedLesson(lesson)
    setShowPlanetInfo(false)
  }

  /**
   * Handle returning from lesson to planet overview
   */
  const handleLessonBack = () => {
    setSelectedLesson(null)
    setShowPlanetInfo(true)
  }

  /**
   * Handle lesson completion
   */
  const handleLessonComplete = (lessonId: string, starDustEarned: number) => {
    onProgressUpdate(lessonId, starDustEarned)
    setSelectedLesson(null)
    setShowPlanetInfo(true)
  }

  /**
   * Get lesson status styling
   */
  const getLessonStatus = (lesson: Lesson) => {
    const isCompleted = completedLessons.has(lesson.id)
    
    if (isCompleted) {
      return {
        className: 'bg-green-600/20 border-green-500 hover:bg-green-600/30',
        icon: '✅',
        status: 'Completed'
      }
    }
    
    if (lesson.type === 'boss') {
      return {
        className: 'bg-red-600/20 border-red-500 hover:bg-red-600/30',
        icon: '👹',
        status: 'Boss Battle'
      }
    }
    
    if (lesson.type === 'practice') {
      return {
        className: 'bg-blue-600/20 border-blue-500 hover:bg-blue-600/30',
        icon: '🎮',
        status: 'Practice Mission'
      }
    }
    
    return {
      className: 'bg-purple-600/20 border-purple-500 hover:bg-purple-600/30',
      icon: '📚',
      status: 'Lesson'
    }
  }

  if (selectedLesson) {
    return (
      <LessonActivity
        lesson={selectedLesson}
        planet={planet}
        onBack={handleLessonBack}
        onComplete={handleLessonComplete}
      />
    )
  }

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Planet Background */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          background: `radial-gradient(circle at 30% 40%, ${planet.color} 0%, transparent 50%)`
        }}
      />

      {/* Header */}
      <div className="relative z-10 bg-slate-900/80 backdrop-blur-sm border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={onBack}
              className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-200"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span>Back to Galaxy</span>
            </button>
            
            <div className="text-center">
              <h1 className="text-3xl font-space font-bold text-star-yellow text-glow">
                {planet.name}
              </h1>
              <div className="text-sm text-gray-400 mt-1">
                {Math.round(getCompletionPercentage())}% Complete
              </div>
            </div>
            
            <button
              onClick={() => setShowPlanetInfo(!showPlanetInfo)}
              className="btn-secondary text-sm px-4 py-2"
            >
              {showPlanetInfo ? 'Hide Info' : 'Show Info'}
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Planet Information */}
        {showPlanetInfo && (
          <div className="card mb-8">
            <div className="flex items-start space-x-6">
              {/* Planet Visual */}
              <div className="flex-shrink-0">
                <div 
                  className="w-24 h-24 rounded-full border-4 flex items-center justify-center text-4xl animate-float"
                  style={{
                    backgroundColor: planet.color,
                    borderColor: planet.color
                  }}
                >
                  {planet.id === 'planet-core' && '🏗️'}
                  {planet.id === 'planet-signpost' && '📚'}
                  {planet.id === 'planet-morph' && '👤'}
                  {planet.id === 'planet-time-warp' && '⏳'}
                  {planet.id === 'planet-connector' && '🔗'}
                  {planet.id === 'punctuation-palace' && '✒️'}
                </div>
              </div>
              
              {/* Planet Details */}
              <div className="flex-1">
                <h2 className="text-2xl font-semibold text-white mb-2">{planet.name}</h2>
                <p className="text-gray-300 mb-4">{planet.description}</p>
                <div className="bg-slate-700/50 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-cosmic-purple mb-2">Planet Theme</h3>
                  <p className="text-gray-300 text-sm italic">{planet.theme}</p>
                </div>
              </div>
              
              {/* Progress Ring */}
              <div className="flex-shrink-0">
                <div className="relative w-20 h-20">
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      fill="none"
                      stroke="rgba(255,255,255,0.2)"
                      strokeWidth="8"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      fill="none"
                      stroke={getCompletionPercentage() === 100 ? '#10B981' : '#FCD34D'}
                      strokeWidth="8"
                      strokeDasharray={`${getCompletionPercentage() * 2.51} 251`}
                      className="transition-all duration-500"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-sm font-bold text-white">
                      {Math.round(getCompletionPercentage())}%
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Lessons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {planet.lessons.map((lesson, index) => {
            const status = getLessonStatus(lesson)
            const isCompleted = completedLessons.has(lesson.id)
            
            return (
              <div
                key={lesson.id}
                className={`card cursor-pointer transition-all duration-300 transform hover:scale-105 ${status.className}`}
                onClick={() => handleLessonSelect(lesson)}
              >
                {/* Lesson Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl">{status.icon}</span>
                    <div>
                      <div className="text-sm text-gray-400">Lesson {index + 1}</div>
                      <div className="text-xs text-gray-500">{status.status}</div>
                    </div>
                  </div>
                  
                  {isCompleted && (
                    <div className="flex items-center space-x-1 text-green-400">
                      <span className="text-xs">+{lesson.rewardStarDust}</span>
                      <span className="text-sm">⭐</span>
                    </div>
                  )}
                </div>
                
                {/* Lesson Content */}
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">{lesson.title}</h3>
                  <p className="text-gray-300 text-sm mb-3">{lesson.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="text-xs text-cosmic-purple font-medium">
                      {lesson.grammarConcept}
                    </div>
                    
                    <div className="flex items-center space-x-1 text-star-yellow">
                      <span className="text-xs">{lesson.rewardStarDust}</span>
                      <span className="text-sm">⭐</span>
                    </div>
                  </div>
                  
                  {/* Activities Count */}
                  <div className="mt-3 text-xs text-gray-400">
                    {lesson.activities.length} {lesson.activities.length === 1 ? 'Activity' : 'Activities'}
                  </div>
                </div>
                
                {/* Lesson Progress Bar */}
                <div className="mt-4">
                  <div className="w-full bg-slate-700 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full transition-all duration-300 ${
                        isCompleted ? 'bg-green-500' : 'bg-gray-600'
                      }`}
                      style={{ width: isCompleted ? '100%' : '0%' }}
                    />
                  </div>
                </div>
              </div>
            )
          })}
        </div>
        
        {/* Planet Completion Reward */}
        {getCompletionPercentage() === 100 && (
          <div className="card mt-8 bg-gradient-to-r from-green-600/20 to-blue-600/20 border-green-500">
            <div className="text-center">
              <div className="text-4xl mb-4">🎉</div>
              <h3 className="text-2xl font-bold text-green-400 mb-2">Planet Mastered!</h3>
              <p className="text-gray-300 mb-4">
                Congratulations! You've restored the Language Power to {planet.name}!
              </p>
              <div className="flex items-center justify-center space-x-2 text-star-yellow">
                <span className="text-lg font-bold">Bonus Reward: +200</span>
                <span className="text-xl">⭐</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default PlanetView