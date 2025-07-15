import { useState } from 'react'
import type { Achievement } from '../types/game'

interface ChildProgress {
  id: string
  name: string
  completedLessons: number
  totalLessons: number
  starDust: number
  achievements: Achievement[]
  currentStreak: number
  timeSpent: number // in minutes
  lastActive: Date
  strengths: string[]
  needsSupport: string[]
  completedPlanets: string[]
  currentPlanet: string
  weeklyGoal: number
  weeklyProgress: number
}

interface ParentDashboardProps {
  isVisible: boolean
  onClose: () => void
  childData: ChildProgress
}

export default function ParentDashboard({ isVisible, onClose, childData }: ParentDashboardProps) {
  const [activeTab, setActiveTab] = useState<'progress' | 'achievements' | 'insights' | 'settings'>('progress')
  // const [timeRange] = useState<'week' | 'month' | 'all'>('week')

  if (!isVisible) return null

  const completionRate = (childData.completedLessons / childData.totalLessons) * 100
  const weeklyGoalProgress = (childData.weeklyProgress / childData.weeklyGoal) * 100
  const daysSinceActive = (Date.now() - childData.lastActive.getTime()) / (1000 * 60 * 60 * 24)

  const getPerformanceColor = (percentage: number) => {
    if (percentage >= 80) return 'text-green-400'
    if (percentage >= 60) return 'text-yellow-400'
    return 'text-red-400'
  }

  const getProgressColor = (percentage: number) => {
    if (percentage >= 80) return 'from-green-400 to-green-600'
    if (percentage >= 60) return 'from-yellow-400 to-yellow-600'
    return 'from-red-400 to-red-600'
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl max-w-5xl w-full max-h-[95vh] overflow-hidden border-2 border-cosmic-purple">
        {/* Header */}
        <div className="bg-gradient-to-r from-cosmic-purple to-blue-600 p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                {childData.name.charAt(0)}
              </div>
              <div>
                <h2 className="text-3xl font-bold text-white">{childData.name}'s Progress</h2>
                <p className="text-gray-200">
                  {childData.completedLessons}/{childData.totalLessons} lessons completed • 
                  {childData.starDust} Star Dust earned
                </p>
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

        {/* Navigation Tabs */}
        <div className="flex border-b border-slate-700">
          {[
            { id: 'progress', name: 'Learning Progress', icon: '📈' },
            { id: 'achievements', name: 'Achievements', icon: '🏆' },
            { id: 'insights', name: 'Learning Insights', icon: '💡' },
            { id: 'settings', name: 'Settings & Goals', icon: '⚙️' }
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
          {activeTab === 'progress' && (
            <div className="space-y-6">
              {/* Key Metrics */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="bg-slate-800/50 rounded-lg p-4 text-center">
                  <div className={`text-2xl font-bold ${getPerformanceColor(completionRate)}`}>
                    {completionRate.toFixed(1)}%
                  </div>
                  <div className="text-gray-400 text-sm">Overall Progress</div>
                </div>
                <div className="bg-slate-800/50 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-yellow-400">{childData.starDust}</div>
                  <div className="text-gray-400 text-sm">Star Dust Earned</div>
                </div>
                <div className="bg-slate-800/50 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-blue-400">{childData.currentStreak}</div>
                  <div className="text-gray-400 text-sm">Day Streak</div>
                </div>
                <div className="bg-slate-800/50 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-purple-400">{childData.timeSpent}m</div>
                  <div className="text-gray-400 text-sm">Time Spent Learning</div>
                </div>
              </div>

              {/* Weekly Goal Progress */}
              <div className="bg-slate-800/50 rounded-lg p-4">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-lg font-bold text-white">📅 This Week's Goal</h3>
                  <span className="text-sm text-gray-400">
                    {childData.weeklyProgress}/{childData.weeklyGoal} lessons
                  </span>
                </div>
                <div className="w-full bg-slate-700 rounded-full h-3 mb-2">
                  <div 
                    className={`h-3 rounded-full bg-gradient-to-r ${getProgressColor(weeklyGoalProgress)}`}
                    style={{ width: `${Math.min(weeklyGoalProgress, 100)}%` }}
                  />
                </div>
                <div className="text-center">
                  {weeklyGoalProgress >= 100 ? (
                    <span className="text-green-400 font-medium">🎉 Goal achieved! Great job!</span>
                  ) : (
                    <span className="text-gray-400">
                      {childData.weeklyGoal - childData.weeklyProgress} more lessons to reach this week's goal
                    </span>
                  )}
                </div>
              </div>

              {/* Planet Progress */}
              <div className="bg-slate-800/50 rounded-lg p-4">
                <h3 className="text-lg font-bold text-white mb-4">🌍 Grammar Kingdom Journey</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {[
                    { id: 'planet-core', name: 'Building Blocks Castle', icon: '🏰' },
                    { id: 'planet-signpost', name: 'Signpost Village', icon: '🗺️' },
                    { id: 'planet-morph', name: 'Pronoun Palace', icon: '👑' },
                    { id: 'planet-time-warp', name: 'Time Travel Academy', icon: '⏰' },
                    { id: 'planet-connector', name: 'Connection Bridge', icon: '🌉' },
                    { id: 'punctuation-palace', name: 'Punctuation Palace', icon: '💎' }
                  ].map(planet => {
                    const isCompleted = childData.completedPlanets.includes(planet.id)
                    const isCurrent = childData.currentPlanet === planet.id
                    
                    return (
                      <div key={planet.id} className={`p-4 rounded-lg border-2 text-center ${
                        isCompleted ? 'border-green-400 bg-green-400/10' :
                        isCurrent ? 'border-cosmic-purple bg-cosmic-purple/10' :
                        'border-slate-600 bg-slate-700'
                      }`}>
                        <div className="text-3xl mb-2">
                          {isCompleted ? '✅' : isCurrent ? planet.icon : '🔒'}
                        </div>
                        <div className={`text-sm font-medium ${
                          isCompleted ? 'text-green-400' :
                          isCurrent ? 'text-cosmic-purple' :
                          'text-gray-400'
                        }`}>
                          {planet.name}
                        </div>
                        <div className="text-xs text-gray-500 mt-1">
                          {isCompleted ? 'Completed' : isCurrent ? 'In Progress' : 'Locked'}
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* Recent Activity */}
              <div className="bg-slate-800/50 rounded-lg p-4">
                <h3 className="text-lg font-bold text-white mb-3">📊 Recent Activity</h3>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Last Active:</span>
                  <span className={`font-medium ${
                    daysSinceActive < 1 ? 'text-green-400' :
                    daysSinceActive < 3 ? 'text-yellow-400' :
                    'text-red-400'
                  }`}>
                    {daysSinceActive < 1 ? 'Today' : 
                     daysSinceActive < 2 ? 'Yesterday' :
                     `${Math.floor(daysSinceActive)} days ago`}
                  </span>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'achievements' && (
            <div className="space-y-6">
              <div className="text-center mb-6">
                <div className="text-4xl mb-2">🏆</div>
                <h3 className="text-xl font-bold text-white">
                  {childData.achievements.length} Achievements Unlocked!
                </h3>
                <p className="text-gray-400">Celebrating your child's learning milestones</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {childData.achievements.map(achievement => (
                  <div key={achievement.id} className="bg-slate-800/50 rounded-lg p-4 border-l-4 border-yellow-400">
                    <div className="flex items-center space-x-3">
                      <span className="text-3xl">{achievement.icon}</span>
                      <div className="flex-1">
                        <h4 className="text-white font-bold">{achievement.title}</h4>
                        <p className="text-gray-400 text-sm">{achievement.description}</p>
                        <div className="flex items-center space-x-2 mt-2">
                          <span className="text-yellow-400 text-sm">⭐ {achievement.reward.starDust}</span>
                          {achievement.reward.title && (
                            <span className="text-purple-400 text-sm">"{achievement.reward.title}"</span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'insights' && (
            <div className="space-y-6">
              {/* Strengths and Support Areas */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-slate-800/50 rounded-lg p-4">
                  <h3 className="text-lg font-bold text-green-400 mb-4">💪 Strengths</h3>
                  <div className="space-y-3">
                    {childData.strengths.map((strength, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <span className="text-green-400 text-xl">✓</span>
                        <span className="text-gray-300">{strength}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="bg-slate-800/50 rounded-lg p-4">
                  <h3 className="text-lg font-bold text-yellow-400 mb-4">🎯 Areas for Growth</h3>
                  <div className="space-y-3">
                    {childData.needsSupport.map((area, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <span className="text-yellow-400 text-xl">⚠</span>
                        <span className="text-gray-300">{area}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Learning Tips */}
              <div className="bg-slate-800/50 rounded-lg p-4">
                <h3 className="text-lg font-bold text-white mb-4">💡 Tips for Parents</h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <span className="text-blue-400 text-xl">📚</span>
                    <div>
                      <div className="text-white font-medium">Encourage Daily Practice</div>
                      <div className="text-gray-400 text-sm">
                        Short, consistent sessions work better than long, infrequent ones.
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-purple-400 text-xl">🎉</span>
                    <div>
                      <div className="text-white font-medium">Celebrate Achievements</div>
                      <div className="text-gray-400 text-sm">
                        Acknowledge progress and effort, not just perfect scores.
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-green-400 text-xl">🗣️</span>
                    <div>
                      <div className="text-white font-medium">Practice Together</div>
                      <div className="text-gray-400 text-sm">
                        Use grammar concepts in everyday conversations and activities.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'settings' && (
            <div className="space-y-6">
              <div className="text-center text-gray-400">
                <div className="text-4xl mb-2">⚙️</div>
                <p>Settings & Goals</p>
                <p className="text-sm">Customization options coming soon...</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
