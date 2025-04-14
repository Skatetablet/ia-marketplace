uniform float iTime;
varying vec3 vNormal;
varying vec2 vUv;

float noise(vec3 p) {
  return sin(p.x * 4.0 + iTime) * 0.1 + sin(p.y * 4.0 + iTime) * 0.1;
}

void main() {
      vUv = uv;
      vNormal = normal;

      vec3 pos = position + normal * noise(position + iTime * 0.5);
      gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}