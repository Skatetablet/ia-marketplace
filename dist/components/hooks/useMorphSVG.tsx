// hooks/useMorphSVG.ts (reutilizable)
import { useEffect } from 'react'
import gsap from 'gsap'

export const useMorphSVG = () => {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = '../../libs/MorphSVGPlugin.min.js'
    script.async = true

    script.onload = () => {
      const MorphSVGPlugin = (window as any).MorphSVGPlugin
      if (MorphSVGPlugin) {
        gsap.registerPlugin(MorphSVGPlugin)
        console.log('✅ MorphSVGPlugin loaded and registered')
      }
    }

    document.body.appendChild(script)
  }, [])
}