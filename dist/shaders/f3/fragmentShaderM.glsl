uniform float u_time;
varying vec2 vUv;

void main() {
  float wave = sin(vUv.y * 8.0 + u_time * 1.5) * 0.5 + 0.5;

  // Colores Glassmorphism metálico azul tech
  vec3 deepBlueMetallic = vec3(0.1, 0.3, 0.7);
  vec3 techGreen = vec3(0.3, 0.8, 0.6);
  vec3 cyanGlass = vec3(0.5, 0.9, 1.0);

  // Gradiente base metálico-tecnológico
  vec3 baseColor = mix(deepBlueMetallic, techGreen, wave);

  // Capa Glassmorphism brillante y translúcida
  float fresnel = pow(1.0 - wave, 2.0);
  vec3 glassEffect = cyanGlass * fresnel * 0.9;

  // Combinación final para efecto cristal-vidrio
  vec3 glassmorphicColor = mix(baseColor, glassEffect, fresnel);

  gl_FragColor = vec4(glassmorphicColor, 0.9); // Alpha para translúcido
}