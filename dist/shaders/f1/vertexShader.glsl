uniform float u_time;
uniform float u_intensity;
uniform float u_blobDistort;
uniform float u_blobFreq;
uniform float u_surfaceDistort;
uniform float u_surfaceFreq;
uniform float u_waves;


varying float vDisplacement;
varying vec3 vNormal;

float baseNoise(vec3 p) {
  return sin(p.x * u_blobFreq + u_time) * 
         cos(p.y * u_blobFreq + u_time) * 
         sin(p.z * u_blobFreq + u_time);
}

float surfaceNoise(vec3 p) {
  return sin(p.x * u_surfaceFreq + u_time * 1.5) * 
         cos(p.y * u_surfaceFreq + u_time * 2.0 + u_waves) * 
         sin(p.z * u_surfaceFreq + u_time * 1.2);
}

void main() {
  vNormal = normal;

  float displacement = baseNoise(normal) * u_blobDistort;
  float surface = surfaceNoise(position) * u_surfaceDistort;

  float totalDisplacement = (displacement + surface) * u_intensity;
  vDisplacement = totalDisplacement;

  vec3 newPosition = position + normal * totalDisplacement;

  gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
}
