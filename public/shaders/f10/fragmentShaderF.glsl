// fragmentShaderGhostFlame.glsl
uniform float u_time;
uniform vec3 color1; // spectral blue
uniform vec3 color2; // purple glow
uniform vec3 color3; // cyan inner core
uniform float glowStrength;

varying vec2 vUv;
varying float vNoise;

void main() {
  float pulse = sin(u_time * 1.5 + vUv.y * 8.0) * 0.5 + 0.5;

  vec3 base = mix(color1, color2, pulse);
  vec3 aura = mix(base, color3, vNoise * 2.0);

  float outerGlow = glowStrength * pow(vNoise, 1.5);
  float alpha = 0.7 + 0.3 * vNoise;

  gl_FragColor = vec4(aura + outerGlow, alpha);
}
