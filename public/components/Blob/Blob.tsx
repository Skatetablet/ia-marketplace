

import { EffectComposer, Bloom } from "@react-three/postprocessing";
import React , { useRef, useState, useMemo, useEffect }from 'react'
import { Canvas, useThree, useFrame } from '@react-three/fiber'
import * as THREE from 'three';
import { mergeVertices } from 'three/examples/jsm/utils/BufferGeometryUtils';
import { IcosahedronGeometry } from 'three';
type BlobProps = {
  position?: [number, number, number]
  scale?: number
  r?:  number
  g?: number
  b?: number
  distortion?: number
  blobDistort?: number
  blobFreq?: number
  speed?: number
  phase?: number

  // Blob Surface Noise
  surfaceDistort?: number
  surfaceFreq?: number
  waves?: number

  // Blob Geometry
  size?: number
  segments?: number

  color1?: string
  color2?: string
  color3?: string
  pulseSpeed?: number
  glowStrength?: number

  vertexShader?: string
  fragmentShader?: string
  iTime?: number
  geometry1?: number
  geometry2?: number
  geometry3?: number

  

}

const Blob: React.FC<BlobProps> = ({  
  position = [0, 0, 0],
  scale: customScale,
  r = 1.0,
  g = 0.0,
  b = 0.0,
  distortion = 0.4,
  speed = 1.0,    // 👈 default 1x
  phase = 0.0,     // 👈 default sin desfaseblobDistort?: number
  // Deformación avanzada (forma + superficie)
  blobDistort = 0.15,
  blobFreq = 2.0,
  surfaceDistort = 0.6,
  surfaceFreq = 2.5,
  waves = 2.0,
  vertexShader = '',
  fragmentShader = '',
  color1 = "",
  color2  = "",
  color3 = "",
  pulseSpeed = { value: 1.0, min: 0.1, max: 5.0, step: 0.1 },
  glowStrength = { value: 1.0, min: 0.0, max: 3.0, step: 0.1 },
  iTime = 0,
  geometry1 = 2,
  geometry2 = 20,



 
  }) => {
  // This reference will give us direct access to the mesh
  const mesh = useRef<THREE.Mesh>(null);
  const materialRef = useRef(null);
  const hover = useRef(false);
  const {viewport, gl} = useThree();
  

  // Definir la escala en función del ancho del viewport
  // Por ejemplo, para móviles (<480px), tabletas (<768px) y desktop:
   // Escalado responsivo si no se pasa explícitamente
   const scaleFactor =
   customScale ??
   (viewport.width < 480 ? 0.2 : viewport.width < 768 ? 0.2 : 0.2)

   

    const uniforms = useMemo(
      () => ({
        u_intensity: {
          value: distortion,
        },
        u_time: {
          value: 0,
        },
        iTime: { value: iTime },
        r: { value: r },
        g: { value: g },
        b: { value: b },
        u_blobDistort: { value: blobDistort ?? 0.0 },
        u_blobFreq: { value: blobFreq ?? 0.0 },
        u_surfaceDistort: { value: surfaceDistort ?? 0.0 },
        u_surfaceFreq: { value: surfaceFreq ?? 0.0 },
        u_waves: { value: waves ?? 0.0 },

        // lava esfera
        color1: { value: new THREE.Color(color1) },
        color2: { value: new THREE.Color(color2) },
        color3: { value: new THREE.Color(color3) },
        pulseSpeed: { value: pulseSpeed },
        glowStrength: { value: glowStrength },
        mouse: { value: new THREE.Vector2() },
        
      }),
      [r,g,b,distortion]
    );

  
    useFrame(({ clock }) => {
      if (!mesh.current) return;
      const shader = mesh.current.material as THREE.ShaderMaterial;
    
      shader.uniforms.u_time.value = clock.getElapsedTime() * speed + phase;
      shader.uniforms.iTime.value = clock.getElapsedTime();
      shader.uniforms.color1.value.set(color1);
      shader.uniforms.color2.value.set(color2);
      shader.uniforms.color3.value.set(color3);
      shader.uniforms.pulseSpeed.value = pulseSpeed;
      shader.uniforms.glowStrength.value = glowStrength;
    });

    useEffect(() => {
      const animate = () => {
        requestAnimationFrame(animate);
        if (materialRef.current) {
          const material = materialRef.current as THREE.ShaderMaterial;
          if (material.uniforms) {
            material.uniforms.iTime.value += 0.02;
          }
        }
      };
      animate();
    }, []);

  return (
    <>
    <mesh
      ref={mesh}
      position={position}
      scale={scaleFactor}
      onPointerOver={() => (hover.current = true)}
      onPointerOut={() => (hover.current = true)}
    >
      <icosahedronGeometry args={[geometry1, geometry2]} />
      <shaderMaterial
        fragmentShader={fragmentShader}
        vertexShader={vertexShader}
        uniforms={uniforms}
        wireframe={false}
      />
    </mesh>

    </>
  );
};

export default Blob;
