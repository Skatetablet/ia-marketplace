// vertexShaderGlitch.glsl
uniform float u_time;
uniform float u_intensity;

varying vec2 vUv;
varying float vDistort;

void main() {
  vUv = uv;

  // Efecto tipo glitch vertical oscilando
  float glitch = sin(position.y * 20.0 + u_time * 10.0) * 0.03;
  float pulse = sin(u_time * 4.0) * 0.05;

  vec3 displaced = position;
  displaced.x += glitch;
  displaced.z += pulse;

  vDistort = glitch + pulse;

  vec4 mvPosition = modelViewMatrix * vec4(displaced, 1.0);
  gl_Position = projectionMatrix * mvPosition;
}
