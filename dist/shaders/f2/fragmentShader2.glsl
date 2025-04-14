uniform float u_time;
uniform float u_intensity;
uniform float r;
uniform float g;
uniform float b;

varying vec3 vNormal;
varying vec3 vPosition;
varying float vDisplacement; // 👈 Lo recibimos aquí

void main() {
    float baseIntensity = pow(u_intensity - dot(vNormal, vec3(0.0, 0.0, 1.0)), 2.0);

    // Glow pulsante en base al displacement
    float glow = sin(vDisplacement * 10.0 + u_time * 2.0) * 0.5 + 0.5;

    vec3 baseColor = vec3(r, g, b);
    vec3 glowColor = baseColor + glow * 0.5; // aumenta brillo

    gl_FragColor = vec4(glowColor * baseIntensity, 1.0);
}
