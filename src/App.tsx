import { useState, useEffect, useRef } from 'react'
import GalaxyMap from './components/GalaxyMap.tsx'
import PlanetView from './components/PlanetView.tsx'
import GameHeader from './components/GameHeader'
import AchievementModal from './components/AchievementModal'
import AchievementNotification from './components/AchievementNotification'
import { AchievementManager } from './services/achievementManager'
import type { Planet, Achievement } from './types/game'

/**
 * Main App component for Grammar Galaxy Quest
 * Manages the overall game state and navigation between galaxy map and planet views
 */
function App() {
  const [selectedPlanet, setSelectedPlanet] = useState<Planet | null>(null)
  const [playerProgress, setPlayerProgress] = useState({
    starDust: 0,
    completedLessons: new Set<string>(),
    unlockedPlanets: new Set(['planet-core']), // Start with first planet unlocked
    companionEvolution: 0,
    perfectScores: 0,
    streakCount: 0,
    timeSpent: 0,
    completedPlanets: new Set<string>()
  })

  // Achievement system state
  const achievementManagerRef = useRef<AchievementManager>()
  const [showAchievementModal, setShowAchievementModal] = useState(false)
  const [currentNotification, setCurrentNotification] = useState<Achievement | null>(null)
  const [achievements, setAchievements] = useState<Achievement[]>([])

  // Initialize achievement manager
  useEffect(() => {
    const savedAchievements = AchievementManager.loadFromStorage()
    achievementManagerRef.current = new AchievementManager(savedAchievements || undefined)

    // Subscribe to achievement unlocks
    const unsubscribe = achievementManagerRef.current.onAchievementUnlocked((achievement) => {
      setCurrentNotification(achievement)
      // Add star dust reward
      setPlayerProgress(prev => ({
        ...prev,
        starDust: prev.starDust + achievement.reward.starDust
      }))
    })

    setAchievements(achievementManagerRef.current.getAchievements())

    return unsubscribe
  }, [])

  /**
   * Handle planet selection from the galaxy map
   */
  const handlePlanetSelect = (planet: Planet) => {
    if (playerProgress.unlockedPlanets.has(planet.id)) {
      setSelectedPlanet(planet)
    }
  }

  /**
   * Return to galaxy map from planet view
   */
  const handleBackToGalaxy = () => {
    setSelectedPlanet(null)
  }

  /**
   * Update player progress when lessons are completed
   */
  const handleProgressUpdate = (lessonId: string, starDustEarned: number) => {
    setPlayerProgress(prev => {
      const newProgress = {
        ...prev,
        starDust: prev.starDust + starDustEarned,
        completedLessons: new Set([...prev.completedLessons, lessonId])
      }

      // Check achievements after updating progress
      if (achievementManagerRef.current) {
        const newlyUnlocked = achievementManagerRef.current.checkAchievements({
          completedLessons: newProgress.completedLessons,
          starDust: newProgress.starDust,
          perfectScores: newProgress.perfectScores,
          streakCount: newProgress.streakCount,
          timeSpent: newProgress.timeSpent,
          completedPlanets: newProgress.completedPlanets
        })

        if (newlyUnlocked.length > 0) {
          setAchievements(achievementManagerRef.current.getAchievements())
          achievementManagerRef.current.saveToStorage()
        }
      }

      return newProgress
    })
  }

  return (
    <div className="min-h-screen w-full bg-space-blue bg-stars">
      <GameHeader
        starDust={playerProgress.starDust}
        companionEvolution={playerProgress.companionEvolution}
        onShowAchievements={() => setShowAchievementModal(true)}
      />

      <main className="w-full">
        {selectedPlanet ? (
          <PlanetView
            planet={selectedPlanet}
            onBack={handleBackToGalaxy}
            onProgressUpdate={handleProgressUpdate}
            completedLessons={playerProgress.completedLessons}
          />
        ) : (
          <GalaxyMap
            onPlanetSelect={handlePlanetSelect}
            unlockedPlanets={playerProgress.unlockedPlanets}
            completedLessons={playerProgress.completedLessons}
          />
        )}
      </main>

      {/* Achievement Modal */}
      <AchievementModal
        achievements={achievements}
        isVisible={showAchievementModal}
        onClose={() => setShowAchievementModal(false)}
      />

      {/* Achievement Notification */}
      <AchievementNotification
        achievement={currentNotification}
        onClose={() => setCurrentNotification(null)}
      />
    </div>
  )
}

export default App
