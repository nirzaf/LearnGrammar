import { useState } from 'react'
import type { Achievement } from '../types/game'

interface AchievementModalProps {
  achievements: Achievement[]
  isVisible: boolean
  onClose: () => void
  newlyUnlocked?: Achievement[]
}

const rarityColors = {
  common: 'from-gray-400 to-gray-600',
  rare: 'from-blue-400 to-blue-600',
  epic: 'from-purple-400 to-purple-600',
  legendary: 'from-yellow-400 to-yellow-600'
}

const rarityBorders = {
  common: 'border-gray-400',
  rare: 'border-blue-400',
  epic: 'border-purple-400',
  legendary: 'border-yellow-400'
}

export default function AchievementModal({ achievements, isVisible, onClose, newlyUnlocked = [] }: AchievementModalProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [showOnlyUnlocked, setShowOnlyUnlocked] = useState(false)

  if (!isVisible) return null

  const categories = [
    { id: 'all', name: 'All', icon: '🏆' },
    { id: 'progress', name: 'Progress', icon: '📈' },
    { id: 'mastery', name: 'Mastery', icon: '⭐' },
    { id: 'exploration', name: 'Exploration', icon: '🚀' },
    { id: 'special', name: 'Special', icon: '🌟' }
  ]

  const filteredAchievements = achievements.filter(achievement => {
    const categoryMatch = selectedCategory === 'all' || achievement.category === selectedCategory
    const unlockedMatch = !showOnlyUnlocked || achievement.isUnlocked
    return categoryMatch && unlockedMatch
  })

  const unlockedCount = achievements.filter(a => a.isUnlocked).length
  const totalCount = achievements.length

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden border-2 border-cosmic-purple">
        {/* Header */}
        <div className="bg-gradient-to-r from-cosmic-purple to-blue-600 p-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-3xl font-bold text-white mb-2">🏆 Achievements</h2>
              <p className="text-gray-200">
                {unlockedCount} of {totalCount} achievements unlocked
              </p>
            </div>
            <button
              onClick={onClose}
              className="text-white hover:text-gray-300 text-2xl"
            >
              ✕
            </button>
          </div>

          {/* Progress Bar */}
          <div className="mt-4">
            <div className="w-full bg-white/20 rounded-full h-3">
              <div 
                className="bg-gradient-to-r from-yellow-400 to-yellow-600 h-3 rounded-full transition-all duration-500"
                style={{ width: `${(unlockedCount / totalCount) * 100}%` }}
              />
            </div>
          </div>
        </div>

        {/* Category Filters */}
        <div className="p-4 border-b border-slate-700">
          <div className="flex flex-wrap gap-2 mb-4">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-cosmic-purple text-white'
                    : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
                }`}
              >
                {category.icon} {category.name}
              </button>
            ))}
          </div>

          <label className="flex items-center space-x-2 text-gray-300">
            <input
              type="checkbox"
              checked={showOnlyUnlocked}
              onChange={(e) => setShowOnlyUnlocked(e.target.checked)}
              className="rounded"
            />
            <span>Show only unlocked</span>
          </label>
        </div>

        {/* Achievements Grid */}
        <div className="p-4 overflow-y-auto max-h-96">
          {newlyUnlocked.length > 0 && (
            <div className="mb-6">
              <h3 className="text-xl font-bold text-yellow-400 mb-3">🎉 Newly Unlocked!</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {newlyUnlocked.map(achievement => (
                  <AchievementCard key={achievement.id} achievement={achievement} isNew />
                ))}
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredAchievements.map(achievement => (
              <AchievementCard key={achievement.id} achievement={achievement} />
            ))}
          </div>

          {filteredAchievements.length === 0 && (
            <div className="text-center py-8 text-gray-400">
              <div className="text-4xl mb-2">🏆</div>
              <p>No achievements found for the selected filters.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

interface AchievementCardProps {
  achievement: Achievement
  isNew?: boolean
}

function AchievementCard({ achievement, isNew = false }: AchievementCardProps) {
  const progressPercentage = (achievement.progress / achievement.requirements.target) * 100

  return (
    <div className={`relative p-4 rounded-lg border-2 transition-all duration-300 ${
      achievement.isUnlocked 
        ? `bg-gradient-to-br ${rarityColors[achievement.rarity]} ${rarityBorders[achievement.rarity]}`
        : 'bg-slate-800 border-slate-600'
    } ${isNew ? 'animate-pulse ring-2 ring-yellow-400' : ''}`}>
      
      {/* Rarity Indicator */}
      <div className={`absolute top-2 right-2 px-2 py-1 rounded-full text-xs font-bold ${
        achievement.rarity === 'legendary' ? 'bg-yellow-500 text-black' :
        achievement.rarity === 'epic' ? 'bg-purple-500 text-white' :
        achievement.rarity === 'rare' ? 'bg-blue-500 text-white' :
        'bg-gray-500 text-white'
      }`}>
        {achievement.rarity.toUpperCase()}
      </div>

      {/* Icon and Title */}
      <div className="flex items-start space-x-3 mb-3">
        <div className={`text-3xl ${achievement.isUnlocked ? '' : 'grayscale opacity-50'}`}>
          {achievement.isUnlocked ? achievement.icon : '🔒'}
        </div>
        <div className="flex-1">
          <h4 className={`font-bold ${achievement.isUnlocked ? 'text-white' : 'text-gray-400'}`}>
            {achievement.title}
          </h4>
          <p className={`text-sm ${achievement.isUnlocked ? 'text-gray-100' : 'text-gray-500'}`}>
            {achievement.description}
          </p>
        </div>
      </div>

      {/* Progress Bar */}
      {!achievement.isUnlocked && (
        <div className="mb-3">
          <div className="flex justify-between text-xs text-gray-400 mb-1">
            <span>Progress</span>
            <span>{achievement.progress}/{achievement.requirements.target}</span>
          </div>
          <div className="w-full bg-slate-700 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-cosmic-purple to-blue-500 h-2 rounded-full transition-all duration-500"
              style={{ width: `${Math.min(progressPercentage, 100)}%` }}
            />
          </div>
        </div>
      )}

      {/* Reward */}
      <div className={`flex items-center justify-between text-sm ${
        achievement.isUnlocked ? 'text-yellow-200' : 'text-gray-500'
      }`}>
        <span>⭐ {achievement.reward.starDust} Star Dust</span>
        {achievement.reward.title && (
          <span className="font-medium">"{achievement.reward.title}"</span>
        )}
      </div>

      {/* Unlocked Date */}
      {achievement.isUnlocked && achievement.unlockedAt && (
        <div className="text-xs text-gray-300 mt-2">
          Unlocked: {achievement.unlockedAt.toLocaleDateString()}
        </div>
      )}
    </div>
  )
}
