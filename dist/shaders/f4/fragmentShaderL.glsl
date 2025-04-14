uniform float iTime;
uniform float gloss;
uniform vec3 color1;
uniform vec3 color2;
uniform vec3 color3;
uniform float pulseSpeed;
varying vec3 vNormal;
varying vec2 vUv;

float noise(vec3 p){
  return sin(p.x * 10.0 + sin(p.y * 10.0 + iTime));
}

void main() {
  vec3 normal = normalize(vNormal);

  float pulse = iTime * pulseSpeed;
  vec3 color = mix(color1, color2, sin(vUv.y * 10.0 + pulse) * 0.5 + 0.5);
  color = mix(color, color3, sin(vUv.x * 10.0 + pulse * 0.7) * 0.5 + 0.5);

  float fresnel = pow(1.0 - dot(normal, vec3(0.0, 0.0, 1.0)), 3.0);
  color += fresnel * gloss;

  gl_FragColor = vec4(color, 1.0);
}