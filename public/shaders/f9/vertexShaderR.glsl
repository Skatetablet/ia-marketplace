// vertexShaderLightning.glsl
uniform float u_time;
uniform float u_intensity;

varying vec2 vUv;
varying float vCharge;

float electricNoise(vec3 pos) {
  return sin(pos.x * 10.0 + u_time * 20.0) * 
         cos(pos.y * 15.0 + u_time * 25.0);
}

void main() {
  vUv = uv;

  float charge = electricNoise(position) * 0.1;
  vec3 displaced = position + normal * charge;

  vCharge = abs(charge);

  gl_Position = projectionMatrix * modelViewMatrix * vec4(displaced, 1.0);
}
