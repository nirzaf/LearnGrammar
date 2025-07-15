import { useState } from 'react'

interface GameHeaderProps {
  starDust: number
  companionEvolution: number
  onShowAchievements?: () => void
  onShowCompanion?: () => void
  onShowTeacherDashboard?: () => void
  onShowParentDashboard?: () => void
  onShowAdaptiveLearning?: () => void
}

/**
 * Game header component displaying player stats, companion, and navigation
 * Shows star dust currency, companion status, and game controls
 */
const GameHeader: React.FC<GameHeaderProps> = ({
  starDust,
  companionEvolution,
  onShowAchievements,
  onShowCompanion,
  onShowTeacherDashboard,
  onShowParentDashboard
}) => {
  const [showCompanionDetails, setShowCompanionDetails] = useState(false)

  /**
   * Get companion appearance based on evolution level
   */
  const getCompanionAppearance = (evolution: number) => {
    const stages = [
      { emoji: '🥚', name: 'Egg', description: 'Your companion is still developing!' },
      { emoji: '🐣', name: 'Hatchling', description: 'A curious little creature emerges!' },
      { emoji: '🦄', name: 'Cosmic Unicorn', description: 'Magical and wise grammar companion!' },
      { emoji: '🐉', name: 'Grammar Dragon', description: 'Powerful protector of language!' }
    ]
    return stages[Math.min(evolution, stages.length - 1)]
  }

  const companion = getCompanionAppearance(companionEvolution)

  return (
    <header className="relative z-10 bg-slate-900/80 backdrop-blur-sm border-b border-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Title */}
          <div className="flex items-center space-x-4">
            <div className="text-2xl font-space font-bold text-star-yellow text-glow">
              🚀 Grammar Galaxy Quest
            </div>
          </div>

          {/* Center - Companion */}
          <div className="flex items-center space-x-6">
            <div
              className="relative cursor-pointer transform hover:scale-110 transition-transform duration-200"
              onClick={() => onShowCompanion ? onShowCompanion() : setShowCompanionDetails(!showCompanionDetails)}
            >
              <div className="text-4xl animate-float">{companion.emoji}</div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-galaxy-green rounded-full animate-pulse"></div>
              
              {/* Companion Details Tooltip */}
              {showCompanionDetails && (
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-slate-800 border border-slate-600 rounded-lg p-3 min-w-48 z-20">
                  <div className="text-sm font-semibold text-star-yellow">{companion.name}</div>
                  <div className="text-xs text-gray-300 mt-1">{companion.description}</div>
                  <div className="text-xs text-cosmic-purple mt-2">
                    Evolution Level: {companionEvolution}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right - Star Dust and Controls */}
          <div className="flex items-center space-x-4">
            {/* Star Dust Counter */}
            <div className="flex items-center space-x-2 bg-slate-800/50 rounded-full px-4 py-2 border border-slate-600">
              <span className="text-star-yellow text-xl">⭐</span>
              <span className="font-semibold text-star-yellow">{starDust.toLocaleString()}</span>
              <span className="text-xs text-gray-400">Star Dust</span>
            </div>

            {/* Achievements Button */}
            {onShowAchievements && (
              <button
                onClick={onShowAchievements}
                className="p-2 rounded-full bg-slate-800/50 border border-slate-600 hover:bg-slate-700/50 transition-colors duration-200"
                title="View Achievements"
              >
                <span className="text-lg">🏆</span>
              </button>
            )}

            {/* Teacher Dashboard Button */}
            {onShowTeacherDashboard && (
              <button
                onClick={onShowTeacherDashboard}
                className="p-2 rounded-full bg-slate-800/50 border border-slate-600 hover:bg-slate-700/50 transition-colors duration-200"
                title="Teacher Dashboard"
              >
                <span className="text-lg">👩‍🏫</span>
              </button>
            )}

            {/* Parent Dashboard Button */}
            {onShowParentDashboard && (
              <button
                onClick={onShowParentDashboard}
                className="p-2 rounded-full bg-slate-800/50 border border-slate-600 hover:bg-slate-700/50 transition-colors duration-200"
                title="Parent Dashboard"
              >
                <span className="text-lg">👨‍👩‍👧‍👦</span>
              </button>
            )}

            {/* Settings Button */}
            <button className="p-2 rounded-full bg-slate-800/50 border border-slate-600 hover:bg-slate-700/50 transition-colors duration-200">
              <svg className="w-5 h-5 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </button>

            {/* Help Button */}
            <button className="p-2 rounded-full bg-slate-800/50 border border-slate-600 hover:bg-slate-700/50 transition-colors duration-200">
              <svg className="w-5 h-5 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default GameHeader