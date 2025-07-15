import React, { useState } from 'react'
import { Achievement } from '../types/game'

interface StudentProgress {
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
}

interface TeacherDashboardProps {
  isVisible: boolean
  onClose: () => void
  studentData: StudentProgress[]
}

export default function TeacherDashboard({ isVisible, onClose, studentData }: TeacherDashboardProps) {
  const [activeTab, setActiveTab] = useState<'overview' | 'individual' | 'analytics' | 'reports'>('overview')
  const [selectedStudent, setSelectedStudent] = useState<StudentProgress | null>(null)
  const [timeRange, setTimeRange] = useState<'week' | 'month' | 'term'>('week')

  if (!isVisible) return null

  const classAverage = {
    completionRate: studentData.length > 0 ? 
      (studentData.reduce((sum, student) => sum + (student.completedLessons / student.totalLessons), 0) / studentData.length) * 100 : 0,
    averageStarDust: studentData.length > 0 ? 
      studentData.reduce((sum, student) => sum + student.starDust, 0) / studentData.length : 0,
    averageTimeSpent: studentData.length > 0 ? 
      studentData.reduce((sum, student) => sum + student.timeSpent, 0) / studentData.length : 0,
    activeStudents: studentData.filter(s => {
      const daysSinceActive = (Date.now() - s.lastActive.getTime()) / (1000 * 60 * 60 * 24)
      return daysSinceActive <= 7
    }).length
  }

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
      <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl max-w-7xl w-full max-h-[95vh] overflow-hidden border-2 border-cosmic-purple">
        {/* Header */}
        <div className="bg-gradient-to-r from-cosmic-purple to-blue-600 p-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-3xl font-bold text-white mb-2">📊 Teacher Dashboard</h2>
              <p className="text-gray-200">
                Monitor student progress and provide targeted support
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
            { id: 'overview', name: 'Class Overview', icon: '📈' },
            { id: 'individual', name: 'Individual Progress', icon: '👤' },
            { id: 'analytics', name: 'Learning Analytics', icon: '📊' },
            { id: 'reports', name: 'Reports & Export', icon: '📄' }
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
          {activeTab === 'overview' && (
            <div className="space-y-6">
              {/* Class Statistics */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="bg-slate-800/50 rounded-lg p-4">
                  <div className="text-2xl font-bold text-white">{studentData.length}</div>
                  <div className="text-gray-400 text-sm">Total Students</div>
                </div>
                <div className="bg-slate-800/50 rounded-lg p-4">
                  <div className="text-2xl font-bold text-green-400">{classAverage.activeStudents}</div>
                  <div className="text-gray-400 text-sm">Active This Week</div>
                </div>
                <div className="bg-slate-800/50 rounded-lg p-4">
                  <div className="text-2xl font-bold text-blue-400">{classAverage.completionRate.toFixed(1)}%</div>
                  <div className="text-gray-400 text-sm">Average Completion</div>
                </div>
                <div className="bg-slate-800/50 rounded-lg p-4">
                  <div className="text-2xl font-bold text-yellow-400">{Math.round(classAverage.averageTimeSpent)}m</div>
                  <div className="text-gray-400 text-sm">Avg. Time Spent</div>
                </div>
              </div>

              {/* Student List */}
              <div className="bg-slate-800/50 rounded-lg p-4">
                <h3 className="text-xl font-bold text-white mb-4">Student Progress Overview</h3>
                <div className="space-y-3">
                  {studentData.map(student => {
                    const completionRate = (student.completedLessons / student.totalLessons) * 100
                    const daysSinceActive = (Date.now() - student.lastActive.getTime()) / (1000 * 60 * 60 * 24)
                    
                    return (
                      <div key={student.id} className="flex items-center justify-between p-3 bg-slate-700 rounded-lg">
                        <div className="flex items-center space-x-4">
                          <div className="w-10 h-10 bg-cosmic-purple rounded-full flex items-center justify-center text-white font-bold">
                            {student.name.charAt(0)}
                          </div>
                          <div>
                            <div className="text-white font-medium">{student.name}</div>
                            <div className="text-gray-400 text-sm">
                              {student.completedLessons}/{student.totalLessons} lessons • {student.starDust} ⭐
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex items-center space-x-4">
                          <div className="text-right">
                            <div className={`font-medium ${getPerformanceColor(completionRate)}`}>
                              {completionRate.toFixed(1)}%
                            </div>
                            <div className="text-gray-400 text-xs">
                              {daysSinceActive < 1 ? 'Active today' : 
                               daysSinceActive < 7 ? `${Math.floor(daysSinceActive)}d ago` : 
                               'Inactive'}
                            </div>
                          </div>
                          
                          <div className="w-20 h-2 bg-slate-600 rounded-full">
                            <div 
                              className={`h-2 rounded-full bg-gradient-to-r ${getProgressColor(completionRate)}`}
                              style={{ width: `${completionRate}%` }}
                            />
                          </div>
                          
                          <button
                            onClick={() => {
                              setSelectedStudent(student)
                              setActiveTab('individual')
                            }}
                            className="px-3 py-1 bg-cosmic-purple hover:bg-purple-700 text-white rounded text-sm"
                          >
                            View Details
                          </button>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* Quick Insights */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-slate-800/50 rounded-lg p-4">
                  <h4 className="text-lg font-bold text-white mb-3">🎯 Students Needing Support</h4>
                  <div className="space-y-2">
                    {studentData
                      .filter(s => (s.completedLessons / s.totalLessons) < 0.5)
                      .slice(0, 5)
                      .map(student => (
                        <div key={student.id} className="flex justify-between text-sm">
                          <span className="text-gray-300">{student.name}</span>
                          <span className="text-red-400">
                            {((student.completedLessons / student.totalLessons) * 100).toFixed(1)}%
                          </span>
                        </div>
                      ))}
                  </div>
                </div>
                
                <div className="bg-slate-800/50 rounded-lg p-4">
                  <h4 className="text-lg font-bold text-white mb-3">⭐ Top Performers</h4>
                  <div className="space-y-2">
                    {studentData
                      .sort((a, b) => b.starDust - a.starDust)
                      .slice(0, 5)
                      .map(student => (
                        <div key={student.id} className="flex justify-between text-sm">
                          <span className="text-gray-300">{student.name}</span>
                          <span className="text-yellow-400">{student.starDust} ⭐</span>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'individual' && selectedStudent && (
            <div className="space-y-6">
              {/* Student Header */}
              <div className="bg-slate-800/50 rounded-lg p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-16 h-16 bg-cosmic-purple rounded-full flex items-center justify-center text-white text-2xl font-bold">
                    {selectedStudent.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{selectedStudent.name}</h3>
                    <p className="text-gray-400">
                      {selectedStudent.completedLessons}/{selectedStudent.totalLessons} lessons completed • 
                      {selectedStudent.starDust} Star Dust earned
                    </p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-400">
                      {((selectedStudent.completedLessons / selectedStudent.totalLessons) * 100).toFixed(1)}%
                    </div>
                    <div className="text-gray-400 text-sm">Completion Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-400">{selectedStudent.currentStreak}</div>
                    <div className="text-gray-400 text-sm">Day Streak</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-400">{selectedStudent.timeSpent}m</div>
                    <div className="text-gray-400 text-sm">Time Spent</div>
                  </div>
                </div>
              </div>

              {/* Strengths and Areas for Support */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-slate-800/50 rounded-lg p-4">
                  <h4 className="text-lg font-bold text-green-400 mb-3">💪 Strengths</h4>
                  <div className="space-y-2">
                    {selectedStudent.strengths.map((strength, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <span className="text-green-400">✓</span>
                        <span className="text-gray-300">{strength}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="bg-slate-800/50 rounded-lg p-4">
                  <h4 className="text-lg font-bold text-yellow-400 mb-3">🎯 Needs Support</h4>
                  <div className="space-y-2">
                    {selectedStudent.needsSupport.map((area, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <span className="text-yellow-400">⚠</span>
                        <span className="text-gray-300">{area}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Planet Progress */}
              <div className="bg-slate-800/50 rounded-lg p-4">
                <h4 className="text-lg font-bold text-white mb-3">🌍 Planet Progress</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {['Planet Core', 'Planet Signpost', 'Planet Morph', 'Planet Time-Warp', 'Planet Connector', 'Punctuation Palace'].map((planet, index) => {
                    const isCompleted = selectedStudent.completedPlanets.includes(planet.toLowerCase().replace(' ', '-'))
                    const isCurrent = selectedStudent.currentPlanet === planet.toLowerCase().replace(' ', '-')
                    
                    return (
                      <div key={planet} className={`p-3 rounded-lg border-2 ${
                        isCompleted ? 'border-green-400 bg-green-400/10' :
                        isCurrent ? 'border-cosmic-purple bg-cosmic-purple/10' :
                        'border-slate-600 bg-slate-700'
                      }`}>
                        <div className="text-center">
                          <div className="text-2xl mb-1">
                            {isCompleted ? '✅' : isCurrent ? '🚀' : '🔒'}
                          </div>
                          <div className={`text-sm font-medium ${
                            isCompleted ? 'text-green-400' :
                            isCurrent ? 'text-cosmic-purple' :
                            'text-gray-400'
                          }`}>
                            {planet}
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* Recent Achievements */}
              <div className="bg-slate-800/50 rounded-lg p-4">
                <h4 className="text-lg font-bold text-white mb-3">🏆 Recent Achievements</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {selectedStudent.achievements.slice(0, 6).map(achievement => (
                    <div key={achievement.id} className="flex items-center space-x-3 p-2 bg-slate-700 rounded">
                      <span className="text-2xl">{achievement.icon}</span>
                      <div>
                        <div className="text-white font-medium">{achievement.title}</div>
                        <div className="text-gray-400 text-sm">{achievement.description}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'analytics' && (
            <div className="space-y-6">
              {/* Time Range Selector */}
              <div className="flex justify-center mb-6">
                <div className="flex bg-slate-800 rounded-lg p-1">
                  {[
                    { id: 'week', name: 'This Week' },
                    { id: 'month', name: 'This Month' },
                    { id: 'term', name: 'This Term' }
                  ].map(range => (
                    <button
                      key={range.id}
                      onClick={() => setTimeRange(range.id as any)}
                      className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                        timeRange === range.id
                          ? 'bg-cosmic-purple text-white'
                          : 'text-gray-400 hover:text-white'
                      }`}
                    >
                      {range.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Learning Patterns */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-slate-800/50 rounded-lg p-4">
                  <h4 className="text-lg font-bold text-white mb-3">📈 Learning Trends</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-300">Most Active Time</span>
                      <span className="text-blue-400">3:00 PM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Average Session Length</span>
                      <span className="text-green-400">{Math.round(classAverage.averageTimeSpent)} minutes</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Completion Rate Trend</span>
                      <span className="text-green-400">↗ +12%</span>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-800/50 rounded-lg p-4">
                  <h4 className="text-lg font-bold text-white mb-3">🎯 Common Challenges</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-300">Verb Agreement</span>
                      <span className="text-red-400">45% struggle</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Punctuation</span>
                      <span className="text-yellow-400">30% struggle</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Pronouns</span>
                      <span className="text-yellow-400">25% struggle</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Engagement Metrics */}
              <div className="bg-slate-800/50 rounded-lg p-4">
                <h4 className="text-lg font-bold text-white mb-3">📊 Engagement Metrics</h4>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-400">
                      {Math.round((classAverage.activeStudents / studentData.length) * 100)}%
                    </div>
                    <div className="text-gray-400 text-sm">Weekly Active Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-400">
                      {studentData.filter(s => s.currentStreak >= 3).length}
                    </div>
                    <div className="text-gray-400 text-sm">Students with 3+ Day Streak</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-400">
                      {studentData.reduce((sum, s) => sum + s.achievements.length, 0)}
                    </div>
                    <div className="text-gray-400 text-sm">Total Achievements</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-yellow-400">
                      {Math.round(studentData.reduce((sum, s) => sum + s.starDust, 0))}
                    </div>
                    <div className="text-gray-400 text-sm">Total Star Dust</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'reports' && (
            <div className="space-y-6">
              <div className="text-center text-gray-400">
                <div className="text-4xl mb-2">📄</div>
                <p>Reports & Export</p>
                <p className="text-sm">Export functionality and detailed reports coming soon...</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
