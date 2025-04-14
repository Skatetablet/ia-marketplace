// fragmentShaderLightning.glsl
uniform float u_time;
uniform vec3 color1; // azul eléctrico
uniform vec3 color2; // blanco puro
uniform vec3 color3; // púrpura brillante
uniform float glowStrength;

varying vec2 vUv;
varying float vCharge;

void main() {
  float flicker = sin(u_time * 80.0 + vUv.x * 60.0) * 0.5 + 0.5;

  // Electricidad aleatoria con movimiento
  vec3 base = mix(color1, color2, vCharge * 2.0);
  vec3 glow = mix(base, color3, flicker * vCharge * 1.5);

  float alpha = 0.8 + 0.2 * flicker;

  gl_FragColor = vec4(glow * glowStrength, alpha);
}
