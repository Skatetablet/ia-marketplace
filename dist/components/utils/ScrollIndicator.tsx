"use client"

import type React from "react"
import { useEffect, useState } from "react"
import '../../../src/styles.css'

const ScrollIndicator: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      // Calcular el progreso del scroll
      const scrollTop = window.scrollY
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = scrollTop / scrollHeight
      setScrollProgress(progress)
    }

    // Añadir event listener
    window.addEventListener("scroll", handleScroll)

    // Llamar una vez para inicializar
    handleScroll()

    // Limpiar event listener
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="scroll-progress-container">
      <div className="scroll-progress-bar" style={{ width: `${scrollProgress * 100}%` }}></div>
    </div>
  )
}

export default ScrollIndicator

