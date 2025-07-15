import React, { useState } from 'react'
import { CompanionState } from '../types/game'
import { 
  getCompanionEvolution, 
  getNextEvolutionRequirement, 
  companionTraits, 
  companionMoods,
  getUnlockedCustomizations,
  companionCustomizations
} from '../data/companions'

interface CompanionModalProps {
  companion: CompanionState
  isVisible: boolean
  onClose: () => void
  onCustomizationChange: (customizations: CompanionState['customizations']) => void
  playerProgress: {
    completedLessons: number
    completedPlanets: number
    achievements: number
    starDust: number
  }
}

export default function CompanionModal({ 
  companion, 
  isVisible, 
  onClose, 
  onCustomizationChange,
  playerProgress 
}: CompanionModalProps) {
  const [activeTab, setActiveTab] = useState<'info' | 'customize'>('info')
  
  if (!isVisible) return null

  const currentEvolution = getCompanionEvolution(companion.evolutionLevel)
  const nextEvolution = getNextEvolutionRequirement(companion.evolutionLevel)
  const currentMood = companionMoods[companion.mood]
  const unlockedCustomizations = getUnlockedCustomizations(playerProgress)

  const handleColorChange = (colorId: string) => {
    const color = companionCustomizations.colors.find(c => c.id === colorId)
    if (color) {
      onCustomizationChange({
        ...companion.customizations,
        color: color.value
      })
    }
  }

  const handleAccessoryToggle = (accessoryId: string) => {
    const accessory = companionCustomizations.accessories.find(a => a.id === accessoryId)
    if (!accessory) return

    const currentAccessories = companion.customizations.accessories
    const hasAccessory = currentAccessories.includes(accessoryId)
    
    let newAccessories
    if (hasAccessory) {
      newAccessories = currentAccessories.filter(id => id !== accessoryId)
    } else {
      newAccessories = [...currentAccessories, accessoryId]
    }

    onCustomizationChange({
      ...companion.customizations,
      accessories: newAccessories
    })
  }

  const getCompanionDisplay = () => {
    const moodEmoji = currentEvolution.moodVariations[companion.mood]
    const accessories = companion.customizations.accessories
      .map(id => companionCustomizations.accessories.find(a => a.id === id)?.emoji)
      .filter(Boolean)
      .join('')
    
    return (
      <div 
        className="text-6xl relative"
        style={{ filter: companion.customizations.color !== 'default' ? companion.customizations.color : 'none' }}
      >
        {moodEmoji}
        {accessories && (
          <div className="absolute -top-2 -right-2 text-2xl">
            {accessories}
          </div>
        )}
      </div>
    )
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden border-2 border-cosmic-purple">
        {/* Header */}
        <div className="bg-gradient-to-r from-cosmic-purple to-blue-600 p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="animate-bounce">
                {getCompanionDisplay()}
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">{companion.name}</h2>
                <p className="text-gray-200">{currentEvolution.description}</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="text-white hover:text-gray-300 text-2xl"
            >
              ✕
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-slate-700">
          <button
            onClick={() => setActiveTab('info')}
            className={`flex-1 py-3 px-4 text-center font-medium transition-colors ${
              activeTab === 'info'
                ? 'bg-cosmic-purple text-white'
                : 'text-gray-400 hover:text-white hover:bg-slate-700'
            }`}
          >
            📊 Info & Stats
          </button>
          <button
            onClick={() => setActiveTab('customize')}
            className={`flex-1 py-3 px-4 text-center font-medium transition-colors ${
              activeTab === 'customize'
                ? 'bg-cosmic-purple text-white'
                : 'text-gray-400 hover:text-white hover:bg-slate-700'
            }`}
          >
            🎨 Customize
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-96">
          {activeTab === 'info' && (
            <div className="space-y-6">
              {/* Evolution Info */}
              <div className="bg-slate-800/50 rounded-lg p-4">
                <h3 className="text-lg font-bold text-white mb-3">Evolution Status</h3>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-300">Level {currentEvolution.level}</span>
                  <span className="text-cosmic-purple font-medium">{currentEvolution.name}</span>
                </div>
                
                {nextEvolution && (
                  <div className="mt-4">
                    <div className="flex justify-between text-sm text-gray-400 mb-1">
                      <span>Next Evolution: {nextEvolution.name}</span>
                      <span>
                        {nextEvolution.unlockRequirement.type === 'lessons' && `${playerProgress.completedLessons}/${nextEvolution.unlockRequirement.target} lessons`}
                        {nextEvolution.unlockRequirement.type === 'planets' && `${playerProgress.completedPlanets}/${nextEvolution.unlockRequirement.target} planets`}
                        {nextEvolution.unlockRequirement.type === 'achievements' && `${playerProgress.achievements}/${nextEvolution.unlockRequirement.target} achievements`}
                        {nextEvolution.unlockRequirement.type === 'star_dust' && `${playerProgress.starDust}/${nextEvolution.unlockRequirement.target} star dust`}
                      </span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-cosmic-purple to-blue-500 h-2 rounded-full transition-all duration-500"
                        style={{ 
                          width: `${Math.min(
                            (playerProgress[nextEvolution.unlockRequirement.type === 'lessons' ? 'completedLessons' : 
                             nextEvolution.unlockRequirement.type === 'planets' ? 'completedPlanets' :
                             nextEvolution.unlockRequirement.type === 'achievements' ? 'achievements' : 'starDust'] / 
                             nextEvolution.unlockRequirement.target) * 100, 100
                          )}%` 
                        }}
                      />
                    </div>
                  </div>
                )}
              </div>

              {/* Current Mood */}
              <div className="bg-slate-800/50 rounded-lg p-4">
                <h3 className="text-lg font-bold text-white mb-3">Current Mood</h3>
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">{currentEvolution.moodVariations[companion.mood]}</span>
                  <div>
                    <div className="text-white font-medium">{currentMood.name}</div>
                    <div className="text-gray-400 text-sm">{currentMood.description}</div>
                  </div>
                </div>
              </div>

              {/* Traits */}
              <div className="bg-slate-800/50 rounded-lg p-4">
                <h3 className="text-lg font-bold text-white mb-3">Traits</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {companion.traits.map(trait => {
                    const traitInfo = companionTraits[trait as keyof typeof companionTraits]
                    return (
                      <div key={trait} className="bg-slate-700 rounded-lg p-3">
                        <div className="text-white font-medium">{trait}</div>
                        <div className="text-gray-400 text-sm">{traitInfo?.description}</div>
                        <div className="text-cosmic-purple text-xs mt-1">{traitInfo?.effect}</div>
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* Special Abilities */}
              <div className="bg-slate-800/50 rounded-lg p-4">
                <h3 className="text-lg font-bold text-white mb-3">Special Abilities</h3>
                <div className="space-y-2">
                  {currentEvolution.specialAbilities.map((ability, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <span className="text-yellow-400">⭐</span>
                      <span className="text-gray-300">{ability}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'customize' && (
            <div className="space-y-6">
              {/* Color Customization */}
              <div className="bg-slate-800/50 rounded-lg p-4">
                <h3 className="text-lg font-bold text-white mb-3">Color Themes</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {unlockedCustomizations.colors.map(color => (
                    <button
                      key={color.id}
                      onClick={() => handleColorChange(color.id)}
                      className={`p-3 rounded-lg border-2 transition-all ${
                        companion.customizations.color === color.value
                          ? 'border-cosmic-purple bg-cosmic-purple/20'
                          : 'border-slate-600 hover:border-slate-500'
                      }`}
                    >
                      <div className="text-2xl mb-1" style={{ filter: color.value !== 'default' ? color.value : 'none' }}>
                        {currentEvolution.emoji}
                      </div>
                      <div className="text-white text-sm">{color.name}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Accessory Customization */}
              <div className="bg-slate-800/50 rounded-lg p-4">
                <h3 className="text-lg font-bold text-white mb-3">Accessories</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {unlockedCustomizations.accessories.map(accessory => (
                    <button
                      key={accessory.id}
                      onClick={() => handleAccessoryToggle(accessory.id)}
                      className={`p-3 rounded-lg border-2 transition-all ${
                        companion.customizations.accessories.includes(accessory.id)
                          ? 'border-cosmic-purple bg-cosmic-purple/20'
                          : 'border-slate-600 hover:border-slate-500'
                      }`}
                    >
                      <div className="text-2xl mb-1">
                        {accessory.emoji || '❌'}
                      </div>
                      <div className="text-white text-sm">{accessory.name}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Locked Customizations Preview */}
              <div className="bg-slate-800/50 rounded-lg p-4">
                <h3 className="text-lg font-bold text-gray-400 mb-3">🔒 Locked Customizations</h3>
                <div className="text-sm text-gray-500">
                  <p>Complete more lessons, unlock planets, and earn achievements to unlock more customization options!</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
