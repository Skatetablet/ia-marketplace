// vertexShaderIce.glsl
uniform float u_time;
uniform float u_intensity;

varying vec2 vUv;
varying float vIceNoise;

float hash(vec2 p) {
  return fract(sin(dot(p ,vec2(127.1, 311.7))) * 43758.5453);
}

float noise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  float a = hash(i);
  float b = hash(i + vec2(1.0, 0.0));
  float c = hash(i + vec2(0.0, 1.0));
  float d = hash(i + vec2(1.0, 1.0));
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
}

void main() {
  vUv = uv;

  float n = noise(position.xy * 2.5 + u_time * 0.5);
  float distortion = n * 0.1;

  vec3 displaced = position + normal * distortion;

  vIceNoise = distortion;

  gl_Position = projectionMatrix * modelViewMatrix * vec4(displaced, 1.0);
}
