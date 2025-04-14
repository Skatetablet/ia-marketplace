// vertexShaderL.glsl
uniform float u_time;
uniform float u_intensity;
uniform float u_blobDistort;
uniform float u_blobFreq;
uniform float u_surfaceDistort;
uniform float u_surfaceFreq;
uniform float u_waves;

varying vec2 vUv;
varying float vDisplacement;

float noise(vec3 p) {
  return sin(p.x) * cos(p.y) * sin(p.z);
}

void main() {
  vUv = uv;

  float distortion = sin(position.y * u_blobFreq + u_time) * u_blobDistort;
  float surfaceNoise = sin(position.y * u_surfaceFreq + u_time * u_waves) * u_surfaceDistort;

  float totalDistortion = distortion + surfaceNoise;
  vec3 displacedPosition = position + normal * totalDistortion;

  vDisplacement = totalDistortion;

  vec4 mvPosition = modelViewMatrix * vec4(displacedPosition, 1.0);
  gl_Position = projectionMatrix * mvPosition;
}
