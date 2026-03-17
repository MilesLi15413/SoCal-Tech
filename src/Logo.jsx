import { useRef } from 'react'
import './Logo.css'

const defaultPositions = [2, 0, -10, 7, -3, 6, 2, -8, 10, 3, 12]

function Logo() {
  const containerRef = useRef(null)

  const handleMouseEnter = () => {
    const bars = containerRef.current.querySelectorAll('.bar')
    bars.forEach((bar, index) => {
      const offset = defaultPositions[index]
      bar.style.transition = ''
      bar.style.animation = `bounce-${index} 1.2s ease-in-out infinite ${index * 0.1}s`
    })
  }

  const handleMouseLeave = () => {
    const bars = containerRef.current.querySelectorAll('.bar')
    bars.forEach((bar, index) => {
      const currentTransform = window.getComputedStyle(bar).transform
      bar.style.animation = 'none'
      bar.style.transform = currentTransform

      setTimeout(() => {
        bar.style.transition = 'transform 0.6s ease'
        bar.style.transform = `translateY(${defaultPositions[index]}px)`
      }, 50)

      setTimeout(() => {
        bar.style.transition = ''
        bar.style.animation = ''
        bar.style.animationPlayState = 'paused'
      }, 100)
    })
  }

  return (
    <div className="logo-container" ref={containerRef} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="bar b1"></div>
      <div className="bar b2"></div>
      <div className="bar b3"></div>
      <div className="bar b4"></div>
      <div className="bar b5"></div>
      <div className="bar b6"></div>
      <div className="bar b7"></div>
      <div className="bar b8"></div>
      <div className="bar b9"></div>
      <div className="bar b10"></div>
      <div className="bar b11"></div>
    </div>
  )
}

export default Logo