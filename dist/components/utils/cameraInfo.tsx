import { useThree, useFrame } from '@react-three/fiber'
import React from 'react'

const CameraInfo: React.FC = () => {
  const { camera } = useThree()

  useFrame(() => {
    console.log('Posición de la cámara:', camera.position)
  })

  return null
}

export default CameraInfo
