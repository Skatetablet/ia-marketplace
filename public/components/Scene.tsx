import React , { useRef, useState, useMemo, Suspense }from 'react'
import { Canvas, useThree, useFrame } from '@react-three/fiber'
import { Environment, ScrollControls, Scroll} from '@react-three/drei'
import CameraInfo from './utils/cameraInfo'
import * as THREE from 'three';
import { Model } from './Scrolling/ModelSpace'
import  Blob  from './Blob/Blob'
import AdjustCamera from './utils/adjustCamera'
import { useScroll } from '@react-three/drei'
import gsap from 'gsap'
import { Scale } from 'lucide-react'
import { blobPersonalities} from './Blob/blobLibrary'
import { Particles } from './Particles/particles'
import { ParticlesMorph } from './Particles/particles2'
import { Stats } from '@react-three/drei'


const BlobRow = () => {
  const { viewport } = useThree()
  
  //console.log('section',sectionWidth)
  return (
    <>
    {[...Array(5)].map((_, i) => {

      const positions: [number, number, number][] = [
        [0, 0, 0],
        [15, 0, 0],
        [30, 0, 0],
        [50, 0, 0],
        [70, 0, 0],
      
      ]

      const personalities: (keyof typeof blobPersonalities)[] = [
        'alien',
        'lava',
        'metallic',
        'ghostFlame',
        'lightning',
       
      ];
      

      const scales = [
        0.4,
        0.3,
        0.3,
        0.3,
        0.3
       
      ]

     // const [r, g, b] = colors[i]
     // const position = positions[i]
     // const personality = personalities[i];
      const personalityKey = personalities[i];
      const config = blobPersonalities[personalityKey];
      const position = positions[i];
      const scale = scales[i];

      return (
        <Blob
          key={i}
          position={position}
          scale={scale}
          r={config.r}
          g={config.g}
          b={config.b}
          distortion={config.distortion}
          speed={config.speed}
          phase={config.phase}
          vertexShader={config.vertex}
          fragmentShader={config.fragment}
          color1={config.color1}
          color2={config.color2}
          color3={config.color3}
          glowStrength={config.glowStrength.value}
          pulseSpeed={config.pulseSpeed.value}
          iTime={config.iTime}
          

        />
      )
    })}
  </>
  )
}
const Scene: React.FC = () => {
  return (
    
    <div  >
      
      <div >
          <Canvas style={{ overflow: "hidden", pointerEvents: "auto" }} id='canvas' shadows  camera={{  fov: 50 }} dpr={[1, 2]}  >
          <ambientLight intensity={1.6} />
          <pointLight position={[-1 ,-0.11 , -10]} intensity={1999} />
          <pointLight position={[2 ,-0.11 , 5.5]} intensity={500} />
          {/* Carga tu modelo .glb en la ruta que tengas <Stats />   <Particles />  */}
         
          <Suspense fallback={null}>
          <ParticlesMorph />
          </Suspense>
          <AdjustCamera />
          
          <ScrollControls pages={4} horizontal damping={0.24}  > 
            
            <BlobRow />
            {/* Add your scrollable content here */}
            <Model />
            
            {/*<primitive object={new THREE.AxesHelper(2)} /> */}
          </ScrollControls>
          
          </Canvas>
      </div>
      
      
    </div>
  )
}

export default Scene