import { useState, useEffect } from 'react'

function WindowTracker() {
  const [size, setSize] = useState({ w: window.innerWidth, h: window.innerHeight })

  useEffect(() => {
    const handleResize = () => {
      setSize({ w: window.innerWidth, h: window.innerHeight })
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div style={{
      position: 'fixed',
      top: '1000px',
      left: '20px',
      background: 'black',
      color: 'white',
      padding: '10px 15px',
      borderRadius: '8px',
      zIndex: 9999,
      fontFamily: 'monospace',
      fontSize: '14px'
      
    }}>
      {size.w} x {size.h}
    </div>
  )
}
export default WindowTracker