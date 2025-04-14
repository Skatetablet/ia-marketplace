uniform float u_time;
varying vec2 vUv;

float noise(vec3 p){
  return sin(p.x)*sin(p.y)*sin(p.z);
}

float perlin(vec3 p){
  vec3 i = floor(p);
  vec3 f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  return mix(
    mix(noise(i), noise(i + vec3(1.0, 0.0, 0.0)), f.x),
    mix(noise(i + vec3(0.0, 1.0, 0.0)), noise(i + vec3(1.0, 1.0, 0.0)), f.x),
    f.y
  );
}

void main() {
  vUv = uv;
  vec3 newPosition = position + normal * perlin(position + u_time * 0.5) * 0.3;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
}