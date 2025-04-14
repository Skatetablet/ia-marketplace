// fragmentShaderGlitch.glsl
uniform float u_time;
uniform vec3 color1;
uniform vec3 color2;
uniform vec3 color3;
uniform float glowStrength;

varying vec2 vUv;
varying float vDistort;

void main() {
  // Glitch RGB split horizontal
  float glitchBand = step(0.5, fract(vUv.y * 10.0 + sin(u_time * 5.0)));
  vec3 baseColor = mix(color1, color2, glitchBand);
  baseColor = mix(baseColor, color3, sin(u_time + vUv.x * 10.0) * 0.5 + 0.5);

  float flicker = sin(vUv.y * 50.0 + u_time * 20.0) * 0.2;
  float hologramFade = abs(sin(u_time * 2.0 + vUv.y * 5.0));

  vec3 finalColor = baseColor + flicker * glowStrength;

  gl_FragColor = vec4(finalColor, 0.6 + 0.3 * hologramFade); // alpha variable para efecto holograma
}
