// fragmentShaderL.glsl
uniform float u_time;
uniform float glowStrength;
uniform float pulseSpeed;

uniform vec3 color1;
uniform vec3 color2;
uniform vec3 color3;

varying vec2 vUv;
varying float vDisplacement;

void main() {
  float pulse = sin(u_time * pulseSpeed) * 0.5 + 0.5;
  vec3 baseColor = mix(color1, color2, vUv.y);
  baseColor = mix(baseColor, color3, vDisplacement);

  float fresnel = pow(1.0 - dot(normalize(vec3(0.0, 0.0, 1.0)), normalize(vec3(vUv, 1.0))), 3.0);
  float glow = fresnel * glowStrength;

  vec3 finalColor = baseColor + glow;

  gl_FragColor = vec4(finalColor, 0.9);
}
