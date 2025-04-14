// vertexShaderGhostFlame.glsl
uniform float u_time;
uniform float u_intensity;

varying vec2 vUv;
varying float vNoise;

float flameNoise(vec3 pos) {
  return sin(pos.y * 5.0 + u_time * 2.0) * 0.1 +
         cos(pos.x * 3.0 + u_time * 1.5) * 0.08;
}

void main() {
  vUv = uv;

  float distortion = flameNoise(position);
  vec3 displaced = position + normal * distortion;

  vNoise = abs(distortion);

  gl_Position = projectionMatrix * modelViewMatrix * vec4(displaced, 1.0);
}
