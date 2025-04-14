// blobLibrary.tsx

import alienVertex from '../../shaders/f1/vertexShader.glsl'
import alienFragment from '../../shaders/f1/fragmentShader.glsl'

import metallicVertex from '../../shaders/f3/vertexShaderM.glsl'
import metallicFragment from '../../shaders/f3/fragmentShaderM.glsl'

import lavaVertex from '../../shaders/f4/vertexShaderL.glsl'
import lavaFragment from '../../shaders/f4/fragmentShaderL.glsl'

import sphereVertex from '../../shaders/f5/vertexShaderC.glsl'
import sphereFragment from '../../shaders/f5/fragmentShaderC.glsl'

export const blobPersonalities = {
  alien: {
      distortion: 0.8,
      speed: 1.5,
      phase: 3.14,
      r: 0.3,
      g: 1.0,
      b: 0.6,
      vertex: alienVertex,
      fragment: alienFragment,
      color1: "",
      color2: "",
      color3: "",
      pulseSpeed:{ value: 1.0, min: 0.1, max: 5.0, step: 0.1 },
      glowStrength: { value: 1.0, min: 0.0, max: 3.0, step: 0.1 },
      iTime: 0,
  },
  lava: {
    distortion: 0.6,
    speed: 1.8,
    phase: 1.2,
    r: 0.3,
    g: 1.0,
    b: 0.9,
    vertex: lavaVertex,
    fragment: lavaFragment,
    color1: "#ffffff",
    color2: "#ab00ff",
    color3: "#5900b8",
    pulseSpeed:{ value: 1.0, min: 0.1, max: 5.0, step: 0.1 },
    glowStrength: { value: 1.0, min: 0.0, max: 3.0, step: 0.1 },
    iTime: 0,
},
sphere:{
  distortion: 0.3,
      speed: 0.4,
      phase: 0.8,
      r: 0.7,
      g: 0.8,
      b: 1.0,
      vertex: sphereVertex,
      fragment:sphereFragment,
      color1: "#ffffff",
      color2: "#ab00ff",
      color3: "#5900b8",
      pulseSpeed:{ value: 1.0, min: 0.1, max: 5.0, step: 0.1 },
      glowStrength: { value: 1.0, min: 0.0, max: 3.0, step: 0.1 },
      iTime: 0,
},
metallic: {
      distortion: 0.3,
      speed: 0.4,
      phase: 0.8,
      r: 0.7,
      g: 0.8,
      b: 1.0,
      vertex: metallicVertex,
      fragment: metallicFragment,
      color1: "",
      color2: "",
      color3: "",
      pulseSpeed:{ value: 1.0, min: 0.1, max: 5.0, step: 0.1 },
      glowStrength: { value: 1.0, min: 0.0, max: 3.0, step: 0.1 },
      iTime: 0.03,
      
  },
shine: {
    distortion: 0.1,
    speed: 0.5,
    phase: 0.2,
    r: 0.22,
    g: 0.565,
    b:  0.847,
    vertex: alienVertex,
    fragment: alienFragment,
    color1: "",
    color2: "",
    color3: "",
    pulseSpeed:{ value: 1.0, min: 0.1, max: 5.0, step: 0.1 },
    glowStrength: { value: 1.0, min: 0.0, max: 3.0, step: 0.1 },
    iTime: 0,
},
waves: {
  distortion: 0.6,
  speed: 1.8,
  phase: 1.2,
  r: 0.3,
  g: 1.0,
  b: 0.9,
  vertex: lavaVertex,
  fragment: lavaFragment,
  color1: "#cdeafb",
  color2: "#cdea80",
  color3: "#36a7c3",
  pulseSpeed:{ value: 1.5, min: 0.1, max: 5.0, step: 0.1 },
  glowStrength: { value: 2.0, min: 0.0, max: 3.0, step: 0.1 },
  iTime: 0,
},

  
 
}
