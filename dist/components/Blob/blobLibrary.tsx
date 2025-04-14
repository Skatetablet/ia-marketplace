// blobLibrary.tsx

import alienVertex from '../../shaders/f1/vertexShader.glsl'
import alienFragment from '../../shaders/f1/fragmentShader.glsl'

import metallicVertex from '../../shaders/f3/vertexShaderM.glsl'
import metallicFragment from '../../shaders/f3/fragmentShaderM.glsl'

import lavaVertex from '../../shaders/f4/vertexShaderL.glsl'
import lavaFragment from '../../shaders/f4/fragmentShaderL.glsl'

import sphereVertex from '../../shaders/f5/vertexShaderC.glsl'
import sphereFragment from '../../shaders/f5/fragmentShaderC.glsl'


import glitchVertex from '../../shaders/f7/vertexShaderD.glsl'
import glitchFragment from '../../shaders/f7/fragmentShaderD.glsl'

import iceVertex from '../../shaders/f8/vertexShaderH.glsl'
import iceFragment from '../../shaders/f8/fragmentShaderH.glsl'

import lightningVertex from '../../shaders/f9/vertexShaderR.glsl'
import lightningFragment from '../../shaders/f9/fragmentShaderR.glsl'

import ghostVertex from '../../shaders/f10/vertexShaderF.glsl'
import ghostFragment from '../../shaders/f10/fragmentShaderF.glsl'

export const blobPersonalities = {
  alien: {
      distortion: 0.8,
      speed: 1.5,
      phase: 2,
      r: 0.3,
      g: 1.0,
      b: 0.6,
      vertex: alienVertex,
      fragment: alienFragment,
      color1: "#ffffff",
      color2: "#ab00ff",
      color3: "#5900b8",
      pulseSpeed:{ value: 1.0, min: 0.1, max: 5.0, step: 0.1 },
      glowStrength: { value: 1.0, min: 0.0, max: 3.0, step: 0.1 },
      iTime: 0.0,
  },
  lava: {
    distortion: 0.6,
    speed: 0.9,
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
    distortion: 0.5,
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
  color1: "#016ed8",
  color2: "#6a0a87",
  color3: "#a7171e",
  pulseSpeed:{ value: 1.5, min: 0.1, max: 5.0, step: 0.1 },
  glowStrength: { value: 2.0, min: 0.0, max: 3.0, step: 0.1 },
  iTime: 0,
},
glitch: {
  distortion: 0.3,
  speed: 1.2,
  phase: 0.5,
  r: 0.5,
  g: 0.7,
  b: 1.0,
  vertex: glitchVertex,
  fragment: glitchFragment,
  color1: "#00ffff",
  color2: "#ff00ff",
  color3: "#ffffff",
  pulseSpeed: { value: 2.0, min: 0.1, max: 5.0, step: 0.1 },
  glowStrength: { value: 1.2, min: 0.0, max: 3.0, step: 0.1 },
  iTime: 0,
},

ice: {
  distortion: 0.2,
  speed: 0.6,
  phase: 0.4,
  r: 0.6,
  g: 0.8,
  b: 1.0,
  vertex: iceVertex,
  fragment: iceFragment,
  color1: "#add8e6",
  color2: "#ffffff",
  color3: "#00ced1",
  pulseSpeed: { value: 1.0, min: 0.1, max: 5.0, step: 0.1 },
  glowStrength: { value: 0.8, min: 0.0, max: 3.0, step: 0.1 },
  iTime: 0,
},

lightning: {
  distortion: 0.5,
  speed: 0.5,
  phase: 1.0,
  r: 0.3,
  g: 0.9,
  b: 1.0,
  vertex: lightningVertex,
  fragment: lightningFragment,
  color1: "#00ffff",
  color2: "#ffffff",
  color3: "#8000ff",
  pulseSpeed: { value: 2.5, min: 0.1, max: 5.0, step: 0.1 },
  glowStrength: { value: 3.0, min: 0.0, max: 3.0, step: 0.1 },
  iTime: 0,
},

ghostFlame: {
  distortion: 0.35,
  speed: 1.0,
  phase: 0.3,
  r: 0.4,
  g: 0.7,
  b: 1.0,
  vertex: ghostVertex,
  fragment: ghostFragment,
  color1: "#00bcd4",
  color2: "#a020f0",
  color3: "#e0ffff",
  pulseSpeed: { value: 1.2, min: 0.1, max: 5.0, step: 0.1 },
  glowStrength: { value: 1.5, min: 0.0, max: 3.0, step: 0.1 },
  iTime: 0,
},

}
