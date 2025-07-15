import { useState, useEffect } from 'react'
import type { Planet } from '../types/game'
import { planetsData } from '../data/planets'

interface GalaxyMapProps {
  onPlanetSelect: (planet: Planet) => void
  unlockedPlanets: Set<string>
  completedLessons: Set<string>
}

/**
 * Galaxy Map component displaying all planets in the Grammar Galaxy
 * Shows planet progress, unlock status, and handles planet selection
 */
const GalaxyMap: React.FC<GalaxyMapProps> = ({ 
  onPlanetSelect, 
  unlockedPlanets, 
  completedLessons 
}) => {
  const [hoveredPlanet, setHoveredPlanet] = useState<string | null>(null)
  const [animatedStars, setAnimatedStars] = useState<Array<{id: number, x: number, y: number, delay: number}>>([])

  /**
   * Generate random stars for background animation
   */
  useEffect(() => {
    const stars = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 3
    }))
    setAnimatedStars(stars)
  }, [])

  /**
   * Calculate planet completion percentage based on completed lessons
   */
  const getPlanetCompletion = (planet: Planet): number => {
    const totalLessons = planet.lessons.length
    const completedCount = planet.lessons.filter(lesson => 
      completedLessons.has(lesson.id)
    ).length
    return totalLessons > 0 ? (completedCount / totalLessons) * 100 : 0
  }

  /**
   * Get planet visual state based on unlock and completion status
   */
  const getPlanetState = (planet: Planet) => {
    const isUnlocked = unlockedPlanets.has(planet.id)
    const completion = getPlanetCompletion(planet)
    
    if (!isUnlocked) {
      return { 
        className: 'opacity-30 cursor-not-allowed grayscale',
        glow: false,
        pulseColor: 'gray'
      }
    }
    
    if (completion === 100) {
      return {
        className: 'cursor-pointer transform hover:scale-110 transition-all duration-300',
        glow: true,
        pulseColor: 'green'
      }
    }
    
    return {
      className: 'cursor-pointer transform hover:scale-110 transition-all duration-300',
      glow: completion > 0,
      pulseColor: completion > 0 ? 'yellow' : 'blue'
    }
  }

  /**
   * Handle planet click with unlock validation
   */
  const handlePlanetClick = (planet: Planet) => {
    if (unlockedPlanets.has(planet.id)) {
      onPlanetSelect(planet)
    }
  }

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Animated Background Stars */}
      {animatedStars.map(star => (
        <div
          key={star.id}
          className="star"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            animationDelay: `${star.delay}s`
          }}
        />
      ))}

      {/* Galaxy Title */}
      <div className="text-center pt-8 pb-4">
        <h1 className="text-5xl font-space font-bold text-star-yellow text-glow mb-2">
          Grammar Galaxy
        </h1>
        <p className="text-xl text-gray-300 font-cosmic">
          Choose your destination, brave Grammarnaut!
        </p>
      </div>

      {/* Galaxy Map Container */}
      <div className="relative max-w-6xl mx-auto h-[600px] mt-8 px-4">
        {/* Central Black Hole (The Great Void) */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-20 h-20 bg-gradient-to-r from-purple-900 to-black rounded-full animate-pulse border-4 border-purple-500">
            <div className="w-full h-full rounded-full bg-gradient-to-r from-transparent to-black animate-spin duration-[10s]"></div>
          </div>
          <div className="text-center mt-2">
            <span className="text-sm text-purple-400 font-cosmic">The Great Void</span>
          </div>
        </div>

        {/* Planets */}
        {planetsData.map((planet) => {
          const planetState = getPlanetState(planet)
          const completion = getPlanetCompletion(planet)
          const isUnlocked = unlockedPlanets.has(planet.id)

          return (
            <div
              key={planet.id}
              className="absolute transform -translate-x-1/2 -translate-y-1/2"
              style={{
                left: `${planet.position.x}%`,
                top: `${planet.position.y}%`
              }}
              onMouseEnter={() => setHoveredPlanet(planet.id)}
              onMouseLeave={() => setHoveredPlanet(null)}
              onClick={() => handlePlanetClick(planet)}
            >
              {/* Planet Glow Effect */}
              {planetState.glow && (
                <div 
                  className="absolute -inset-2 rounded-full blur-lg animate-pulse opacity-50"
                  style={{
                    backgroundColor: planet.color,
                  }}
                />
              )}

              {/* Planet Body */}
              <div 
                className={`relative w-24 h-24 rounded-full border-4 ${planetState.className}`}
                style={{
                  backgroundColor: planet.color,
                  borderColor: isUnlocked ? planet.color : '#6B7280'
                }}
              >
                {/* Completion Ring */}
                {isUnlocked && completion > 0 && (
                  <div className="absolute inset-0 rounded-full">
                    <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                      <circle
                        cx="50"
                        cy="50"
                        r="45"
                        fill="none"
                        stroke="rgba(255,255,255,0.2)"
                        strokeWidth="4"
                      />
                      <circle
                        cx="50"
                        cy="50"
                        r="45"
                        fill="none"
                        stroke={completion === 100 ? '#10B981' : '#FCD34D'}
                        strokeWidth="4"
                        strokeDasharray={`${completion * 2.83} 283`}
                        className="transition-all duration-500"
                      />
                    </svg>
                  </div>
                )}

                {/* Planet Icon/Emoji */}
                <div className="absolute inset-0 flex items-center justify-center text-2xl">
                  {planet.id === 'planet-core' && '🏗️'}
                  {planet.id === 'planet-signpost' && '📚'}
                  {planet.id === 'planet-morph' && '👤'}
                  {planet.id === 'planet-time-warp' && '⏳'}
                  {planet.id === 'planet-connector' && '🔗'}
                  {planet.id === 'punctuation-palace' && '✒️'}
                </div>
              </div>

              {/* Planet Name */}
              <div className="text-center mt-2">
                <div className="text-sm font-semibold text-white">{planet.name}</div>
                {isUnlocked && (
                  <div className="text-xs text-gray-400">
                    {Math.round(completion)}% Complete
                  </div>
                )}
              </div>

              {/* Hover Tooltip */}
              {hoveredPlanet === planet.id && (
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-4 bg-slate-800 border border-slate-600 rounded-lg p-3 min-w-64 z-10">
                  <div className="text-sm font-semibold text-star-yellow">{planet.name}</div>
                  <div className="text-xs text-gray-300 mt-1">{planet.description}</div>
                  <div className="text-xs text-cosmic-purple mt-2">
                    Theme: {planet.theme}
                  </div>
                  {!isUnlocked && (
                    <div className="text-xs text-red-400 mt-2">
                      🔒 Complete previous planets to unlock
                    </div>
                  )}
                </div>
              )}
            </div>
          )
        })}

        {/* Orbital Paths */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
          <defs>
            <pattern id="orbit" patternUnits="userSpaceOnUse" width="4" height="4">
              <circle cx="2" cy="2" r="1" fill="white" opacity="0.3" />
            </pattern>
          </defs>
          {/* Orbital rings around the center */}
          <circle cx="50%" cy="50%" r="150" fill="none" stroke="url(#orbit)" strokeWidth="2" />
          <circle cx="50%" cy="50%" r="200" fill="none" stroke="url(#orbit)" strokeWidth="2" />
          <circle cx="50%" cy="50%" r="250" fill="none" stroke="url(#orbit)" strokeWidth="2" />
        </svg>
      </div>

      {/* Legend */}
      <div className="fixed bottom-4 right-4 bg-slate-800/80 backdrop-blur-sm border border-slate-600 rounded-lg p-4">
        <div className="text-sm font-semibold text-white mb-2">Legend</div>
        <div className="space-y-1 text-xs">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-gray-500 rounded-full opacity-30"></div>
            <span className="text-gray-400">Locked Planet</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
            <span className="text-gray-400">Available Planet</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <span className="text-gray-400">In Progress</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span className="text-gray-400">Completed</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GalaxyMap