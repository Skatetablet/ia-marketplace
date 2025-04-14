import { useGLTF } from '@react-three/drei'
import { useEffect, useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { MeshSurfaceSampler } from 'three/examples/jsm/math/MeshSurfaceSampler'


export const Particles = () => {
  const { scene } = useGLTF('../../model/humanoid.glb') as any
  const pointsRef = useRef<THREE.Points>(null)

  // Extraer puntos desde geometría del modelo
  const positions = useMemo(() => {
    const geometry = extractFirstGeometry(scene)
    if (!geometry) return new Float32Array(0)

    const tempGeo = geometry.clone()
    tempGeo.center() // centra el modelo
    const sampler = new MeshSurfaceSampler(new THREE.Mesh(tempGeo)).build()

    const numParticles = 6000
    const positionArray = new Float32Array(numParticles * 3)
    const tempPosition = new THREE.Vector3()

    for (let i = 0; i < numParticles; i++) {
      sampler.sample(tempPosition)
      positionArray.set([tempPosition.x, tempPosition.y, tempPosition.z], i * 3)
    }

    return positionArray
  }, [scene])

  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry()
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    return geo
  }, [positions])

  const material = useMemo(() => {
    return new THREE.PointsMaterial({
      size: 0.01,
      color: 0x00ffff,
      sizeAttenuation: true,
    })
  }, [])

  useFrame(() => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += 0.001
    }
  })

  return <points ref={pointsRef} geometry={geometry} material={material} position={[0.5 ,-0.22 , 1.70]}
  rotation={[0, 305, 0]}
  scale={0.7} />
}

// Extrae la primera geometría encontrada en el modelo
function extractFirstGeometry(obj: THREE.Object3D): THREE.BufferGeometry | null {
  let geometry: THREE.BufferGeometry | null = null
  obj.traverse((child) => {
    if ((child as THREE.Mesh).isMesh) {
      geometry = (child as THREE.Mesh).geometry
    }
  })
  return geometry
}
