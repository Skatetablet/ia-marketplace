uniform float u_intensity;
uniform float u_time;
//uniform vec3 u_color;
uniform float r;
uniform float g;
uniform float b;
uniform float metalness;
uniform float roughness;
uniform float clearcoat;

varying vec2 vUv;
varying float vDisplacement;

void main() {
  float distort = 2.0 * vDisplacement * u_intensity;
 
  
  vec3 baseColor = vec3(r-distort, g-distort, b);

  
  gl_FragColor = vec4(baseColor ,1.0);
}
