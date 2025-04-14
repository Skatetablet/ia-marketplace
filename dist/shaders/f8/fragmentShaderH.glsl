// fragmentShaderIce.glsl
uniform float u_time;
uniform vec3 color1; // azul claro
uniform vec3 color2; // blanco hielo
uniform vec3 color3; // cian profundo
uniform float glowStrength;

varying vec2 vUv;
varying float vIceNoise;

void main() {
  float pulse = sin(u_time * 1.5 + vUv.y * 10.0) * 0.5 + 0.5;

  // Reflejo interno y fracturas
  vec3 base = mix(color1, color2, pulse);
  vec3 cracks = mix(base, color3, vIceNoise * 6.0);

  float glow = glowStrength * pow(vIceNoise, 2.0);

  gl_FragColor = vec4(cracks + glow, 0.95);
}
