import { useState } from 'react'
import type { AdaptiveRecommendation, LearningProfile } from '../services/adaptiveLearning'

interface AdaptiveLearningPanelProps {
  recommendations: AdaptiveRecommendation[]
  learningProfile: LearningProfile
  onRecommendationAction: (recommendation: AdaptiveRecommendation) => void
  isVisible: boolean
  onClose: () => void
}

export default function AdaptiveLearningPanel({
  recommendations,
  learningProfile,
  onRecommendationAction,
  isVisible,
  onClose
}: AdaptiveLearningPanelProps) {
  const [activeTab, setActiveTab] = useState<'recommendations' | 'profile' | 'progress'>('recommendations')

  if (!isVisible) return null

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'border-red-400 bg-red-400/10'
      case 'medium': return 'border-yellow-400 bg-yellow-400/10'
      case 'low': return 'border-blue-400 bg-blue-400/10'
      default: return 'border-gray-400 bg-gray-400/10'
    }
  }

  const getPriorityIcon = (priority: string) => {
    switch (priority) {
      case 'high': return '🔴'
      case 'medium': return '🟡'
      case 'low': return '🔵'
      default: return '⚪'
    }
  }

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'review': return '📚'
      case 'advance': return '🚀'
      case 'practice': return '💪'
      case 'hint': return '💡'
      case 'break': return '☕'
      default: return '📝'
    }
  }

  const getMasteryColor = (mastery: number) => {
    if (mastery >= 0.8) return 'text-green-400'
    if (mastery >= 0.5) return 'text-yellow-400'
    return 'text-red-400'
  }

  const getMasteryLabel = (mastery: number) => {
    if (mastery >= 0.8) return 'Mastered'
    if (mastery >= 0.5) return 'Learning'
    return 'Needs Practice'
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden border-2 border-cosmic-purple">
        {/* Header */}
        <div className="bg-gradient-to-r from-cosmic-purple to-blue-600 p-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-3xl font-bold text-white mb-2">🧠 Adaptive Learning Assistant</h2>
              <p className="text-gray-200">
                Personalized recommendations based on your learning progress
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

        {/* Navigation Tabs */}
        <div className="flex border-b border-slate-700">
          {[
            { id: 'recommendations', name: 'Recommendations', icon: '💡' },
            { id: 'profile', name: 'Learning Profile', icon: '👤' },
            { id: 'progress', name: 'Progress Tracking', icon: '📈' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex-1 py-3 px-4 text-center font-medium transition-colors ${
                activeTab === tab.id
                  ? 'bg-cosmic-purple text-white'
                  : 'text-gray-400 hover:text-white hover:bg-slate-700'
              }`}
            >
              {tab.icon} {tab.name}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[60vh]">
          {activeTab === 'recommendations' && (
            <div className="space-y-4">
              {recommendations.length === 0 ? (
                <div className="text-center py-8">
                  <div className="text-4xl mb-4">🎉</div>
                  <h3 className="text-xl font-bold text-white mb-2">Great job!</h3>
                  <p className="text-gray-400">
                    You're doing well! Keep up the excellent work and continue learning at your own pace.
                  </p>
                </div>
              ) : (
                recommendations.map((rec, index) => (
                  <div
                    key={index}
                    className={`p-4 rounded-lg border-2 ${getPriorityColor(rec.priority)}`}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex items-start space-x-3">
                        <div className="text-2xl">
                          {getTypeIcon(rec.type)}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <span className="text-lg">{getPriorityIcon(rec.priority)}</span>
                            <span className="text-white font-bold capitalize">
                              {rec.type} Recommendation
                            </span>
                            <span className="text-xs px-2 py-1 bg-slate-700 rounded-full text-gray-300">
                              {rec.priority} priority
                            </span>
                          </div>
                          <p className="text-gray-300 mb-3">{rec.message}</p>
                          
                          {rec.action && (
                            <div className="text-sm text-gray-400 mb-3">
                              {rec.action.concept && (
                                <span>Concept: <span className="text-cosmic-purple">{rec.action.concept}</span> • </span>
                              )}
                              {rec.action.difficulty && (
                                <span>Difficulty: <span className="text-yellow-400">{rec.action.difficulty}</span></span>
                              )}
                            </div>
                          )}
                        </div>
                      </div>
                      
                      <button
                        onClick={() => onRecommendationAction(rec)}
                        className="px-4 py-2 bg-cosmic-purple hover:bg-purple-700 text-white rounded-lg text-sm font-medium transition-colors"
                      >
                        Take Action
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          )}

          {activeTab === 'profile' && (
            <div className="space-y-6">
              {/* Learning Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-slate-800/50 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-blue-400 capitalize">
                    {learningProfile.learningSpeed}
                  </div>
                  <div className="text-gray-400 text-sm">Learning Speed</div>
                </div>
                <div className="bg-slate-800/50 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-purple-400 capitalize">
                    {learningProfile.overallDifficulty}
                  </div>
                  <div className="text-gray-400 text-sm">Current Difficulty</div>
                </div>
                <div className="bg-slate-800/50 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-green-400">
                    {learningProfile.streakData.current}
                  </div>
                  <div className="text-gray-400 text-sm">Current Streak</div>
                </div>
              </div>

              {/* Concept Mastery */}
              <div className="bg-slate-800/50 rounded-lg p-4">
                <h3 className="text-lg font-bold text-white mb-4">📊 Concept Mastery</h3>
                <div className="space-y-3">
                  {Object.entries(learningProfile.conceptMastery).map(([concept, mastery]) => (
                    <div key={concept} className="flex items-center justify-between">
                      <span className="text-gray-300 capitalize">{concept}</span>
                      <div className="flex items-center space-x-3">
                        <div className="w-32 h-2 bg-slate-700 rounded-full">
                          <div
                            className={`h-2 rounded-full bg-gradient-to-r ${
                              mastery >= 0.8 ? 'from-green-400 to-green-600' :
                              mastery >= 0.5 ? 'from-yellow-400 to-yellow-600' :
                              'from-red-400 to-red-600'
                            }`}
                            style={{ width: `${mastery * 100}%` }}
                          />
                        </div>
                        <span className={`text-sm font-medium ${getMasteryColor(mastery)}`}>
                          {getMasteryLabel(mastery)}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Strengths and Challenges */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-slate-800/50 rounded-lg p-4">
                  <h4 className="text-lg font-bold text-green-400 mb-3">💪 Mastered Concepts</h4>
                  <div className="space-y-2">
                    {learningProfile.masteredConcepts.length === 0 ? (
                      <p className="text-gray-400 text-sm">Keep learning to master concepts!</p>
                    ) : (
                      learningProfile.masteredConcepts.map(concept => (
                        <div key={concept} className="flex items-center space-x-2">
                          <span className="text-green-400">✓</span>
                          <span className="text-gray-300 capitalize">{concept}</span>
                        </div>
                      ))
                    )}
                  </div>
                </div>
                
                <div className="bg-slate-800/50 rounded-lg p-4">
                  <h4 className="text-lg font-bold text-yellow-400 mb-3">🎯 Needs Practice</h4>
                  <div className="space-y-2">
                    {learningProfile.strugglingConcepts.length === 0 ? (
                      <p className="text-gray-400 text-sm">Great job! No struggling concepts.</p>
                    ) : (
                      learningProfile.strugglingConcepts.map(concept => (
                        <div key={concept} className="flex items-center space-x-2">
                          <span className="text-yellow-400">⚠</span>
                          <span className="text-gray-300 capitalize">{concept}</span>
                        </div>
                      ))
                    )}
                  </div>
                </div>
              </div>

              {/* Preferred Activity Types */}
              <div className="bg-slate-800/50 rounded-lg p-4">
                <h4 className="text-lg font-bold text-white mb-3">🎮 Preferred Activity Types</h4>
                <div className="flex flex-wrap gap-2">
                  {learningProfile.preferredActivityTypes.length === 0 ? (
                    <p className="text-gray-400 text-sm">Complete more activities to discover your preferences!</p>
                  ) : (
                    learningProfile.preferredActivityTypes.map(type => (
                      <span
                        key={type}
                        className="px-3 py-1 bg-cosmic-purple rounded-full text-white text-sm capitalize"
                      >
                        {type.replace('-', ' ')}
                      </span>
                    ))
                  )}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'progress' && (
            <div className="space-y-6">
              {/* Streak Information */}
              <div className="bg-slate-800/50 rounded-lg p-4">
                <h3 className="text-lg font-bold text-white mb-4">🔥 Learning Streak</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-400">
                      {learningProfile.streakData.current}
                    </div>
                    <div className="text-gray-400">Current Streak</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-400">
                      {learningProfile.streakData.longest}
                    </div>
                    <div className="text-gray-400">Longest Streak</div>
                  </div>
                </div>
                <div className="mt-4 text-center">
                  <p className="text-gray-300">
                    Last active: {learningProfile.streakData.lastActiveDate.toLocaleDateString()}
                  </p>
                </div>
              </div>

              {/* Learning Tips */}
              <div className="bg-slate-800/50 rounded-lg p-4">
                <h3 className="text-lg font-bold text-white mb-4">💡 Personalized Learning Tips</h3>
                <div className="space-y-3">
                  {learningProfile.learningSpeed === 'fast' && (
                    <div className="flex items-start space-x-3">
                      <span className="text-blue-400 text-xl">⚡</span>
                      <div>
                        <div className="text-white font-medium">Quick Learner</div>
                        <div className="text-gray-400 text-sm">
                          You learn quickly! Try challenging yourself with harder activities.
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {learningProfile.learningSpeed === 'slow' && (
                    <div className="flex items-start space-x-3">
                      <span className="text-green-400 text-xl">🐢</span>
                      <div>
                        <div className="text-white font-medium">Steady Learner</div>
                        <div className="text-gray-400 text-sm">
                          Take your time! Steady progress is still great progress.
                        </div>
                      </div>
                    </div>
                  )}
                  
                  <div className="flex items-start space-x-3">
                    <span className="text-purple-400 text-xl">📅</span>
                    <div>
                      <div className="text-white font-medium">Consistency is Key</div>
                      <div className="text-gray-400 text-sm">
                        Try to practice a little bit every day to maintain your streak!
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
