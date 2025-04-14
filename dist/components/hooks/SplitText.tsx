// hooks/useSplitTextLoader.ts
import { useEffect } from 'react'
import gsap from 'gsap'

export const SplitText = () => {
  useEffect(() => {
    const loadSplitText = () => {
      return new Promise((resolve, reject) => {
        if ((window as any).SplitText) {
          resolve((window as any).SplitText)
          return
        }

        const script = document.createElement('script')
        script.src = '../../libs/SplitText.min.js'
        script.async = true
        script.onload = () => {
          const SplitText =
            (window as any).SplitText?.default ??
            (window as any).SplitText ??
            (window as any).gsap?.SplitText

          if (SplitText) {
            gsap.registerPlugin(SplitText)
            console.log('✅ SplitText loaded and registered')
            resolve(SplitText)
          } else {
            console.warn('⚠️ SplitText no disponible en window')
            reject(new Error('SplitText no disponible'))
          }
        }
        script.onerror = () => reject(new Error('Error al cargar SplitText'))

        document.body.appendChild(script)
      })
    }

    loadSplitText().catch((error) => {
      console.error('Error al cargar SplitText:', error)
    })
  }, [])
}
