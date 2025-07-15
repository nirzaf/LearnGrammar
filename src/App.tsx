import { useState } from 'react'
import GalaxyMap from './components/GalaxyMap.tsx'
import PlanetView from './components/PlanetView.tsx'
import GameHeader from './components/GameHeader'
import type { Planet } from './types/game'

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
    companionEvolution: 0
  })

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
    setPlayerProgress(prev => ({
      ...prev,
      starDust: prev.starDust + starDustEarned,
      completedLessons: new Set([...prev.completedLessons, lessonId])
    }))
  }

  return (
    <div className="min-h-screen w-full bg-space-blue bg-stars">
      <GameHeader 
        starDust={playerProgress.starDust}
        companionEvolution={playerProgress.companionEvolution}
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
    </div>
  )
}

export default App
