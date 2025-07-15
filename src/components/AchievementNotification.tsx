import React, { useEffect, useState } from 'react'
import { Achievement } from '../types/game'

interface AchievementNotificationProps {
  achievement: Achievement | null
  onClose: () => void
}

const rarityColors = {
  common: 'from-gray-400 to-gray-600',
  rare: 'from-blue-400 to-blue-600',
  epic: 'from-purple-400 to-purple-600',
  legendary: 'from-yellow-400 to-yellow-600'
}

const rarityGlow = {
  common: 'shadow-gray-400/50',
  rare: 'shadow-blue-400/50',
  epic: 'shadow-purple-400/50',
  legendary: 'shadow-yellow-400/50'
}

export default function AchievementNotification({ achievement, onClose }: AchievementNotificationProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    if (achievement) {
      setIsVisible(true)
      setIsAnimating(true)
      
      // Auto-close after 5 seconds
      const timer = setTimeout(() => {
        handleClose()
      }, 5000)

      return () => clearTimeout(timer)
    }
  }, [achievement])

  const handleClose = () => {
    setIsAnimating(false)
    setTimeout(() => {
      setIsVisible(false)
      onClose()
    }, 300)
  }

  if (!achievement || !isVisible) return null

  return (
    <div className="fixed top-4 right-4 z-50">
      <div className={`transform transition-all duration-300 ${
        isAnimating ? 'translate-x-0 opacity-100 scale-100' : 'translate-x-full opacity-0 scale-95'
      }`}>
        <div className={`
          bg-gradient-to-r ${rarityColors[achievement.rarity]}
          rounded-lg p-4 max-w-sm shadow-2xl ${rarityGlow[achievement.rarity]}
          border-2 border-white/20
        `}>
          {/* Header */}
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center space-x-2">
              <span className="text-2xl">🏆</span>
              <span className="text-white font-bold text-sm">ACHIEVEMENT UNLOCKED!</span>
            </div>
            <button
              onClick={handleClose}
              className="text-white/70 hover:text-white text-lg"
            >
              ✕
            </button>
          </div>

          {/* Achievement Content */}
          <div className="flex items-center space-x-3">
            <div className="text-4xl animate-bounce">
              {achievement.icon}
            </div>
            <div className="flex-1">
              <h3 className="text-white font-bold text-lg">
                {achievement.title}
              </h3>
              <p className="text-white/90 text-sm">
                {achievement.description}
              </p>
            </div>
          </div>

          {/* Reward */}
          <div className="mt-3 pt-3 border-t border-white/20">
            <div className="flex items-center justify-between text-white/90 text-sm">
              <span>Reward:</span>
              <div className="flex items-center space-x-2">
                <span>⭐ {achievement.reward.starDust}</span>
                {achievement.reward.title && (
                  <span className="font-medium">+ "{achievement.reward.title}"</span>
                )}
              </div>
            </div>
          </div>

          {/* Rarity Badge */}
          <div className="absolute top-2 right-2">
            <div className={`px-2 py-1 rounded-full text-xs font-bold ${
              achievement.rarity === 'legendary' ? 'bg-yellow-500 text-black' :
              achievement.rarity === 'epic' ? 'bg-purple-500 text-white' :
              achievement.rarity === 'rare' ? 'bg-blue-500 text-white' :
              'bg-gray-500 text-white'
            }`}>
              {achievement.rarity.toUpperCase()}
            </div>
          </div>

          {/* Celebration Particles */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="absolute animate-ping"
                style={{
                  left: `${20 + i * 15}%`,
                  top: `${10 + (i % 2) * 20}%`,
                  animationDelay: `${i * 0.2}s`,
                  animationDuration: '1s'
                }}
              >
                ✨
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
