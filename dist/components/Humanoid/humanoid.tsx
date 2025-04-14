import React, { useRef, useEffect } from 'react'
import { useGLTF, OrbitControls } from '@react-three/drei'
import * as THREE from 'three'
export function Silverman(props : any) {
  const { nodes, materials } = useGLTF('../../model/humanoid.glb') as any

// Cambiar color al cargar
useEffect(() => {
    if (materials['Scratched metal']) {
      materials['Scratched metal'].color = new THREE.Color('#5c65ce') // Cambia este color
    }
  }, [materials])

  return (
    <group {...props} dispose={null}>
      <mesh
        name="Mesh1"
        castShadow
        receiveShadow
        geometry={nodes.Mesh1.geometry}
        material={materials['Scratched metal']}
        position={[0.5 ,-0.22 , 1.70]}
        rotation={[0, 305, 0]}
        scale={0.9}
      />
      
    </group>
  )
}

useGLTF.preload('../../model/humanoid.glb')
