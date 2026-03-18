import { useEffect, useRef } from 'react'

function Stars() {
  const containerRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return        // add this
    container.innerHTML = ''      // add this
    const cols = 20
    const rows = 15

    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        const dot = document.createElement('div')
        dot.className = 'star-dot'
        dot.style.left = `${(col / cols) * 100}%`
        dot.style.top = `${(row / rows) * 100}%`
        dot.style.animationDelay = `${Math.random() * 4}s`
        dot.style.animationDuration = `${1.5 + Math.random() * 3}s`
        container.appendChild(dot)
      }
    }
  }, [])

  return <div className="stars-container" ref={containerRef} />
}

export default Stars