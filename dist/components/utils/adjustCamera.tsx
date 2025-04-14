import React, { useEffect } from 'react'
import { useThree } from '@react-three/fiber'

const AdjustCamera: React.FC = () => {
  const { camera } = useThree()

  useEffect(() => {
    const updateCamera = () => {
      const width = window.innerWidth

      // Ajusta la posición de la cámara según el ancho de la pantalla
      if (width < 480) {
        // Móviles
        camera.position.set(1, 7, 1)
      } else if (width < 768) {
        // Dispositivos medianos (tabletas)
        camera.position.set(1, 4, 2)
      } else {
        // Desktop
        camera.position.set(3,1, 0.999)
      }
    }

    updateCamera() // Llama al inicio
    window.addEventListener('resize', updateCamera)
    return () => window.removeEventListener('resize', updateCamera)
  }, [camera])

  return null
}

export default AdjustCamera