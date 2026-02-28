#version 300 es

precision mediump float;

in vec2 vTextureCoord;
out vec4 fragColor;

uniform sampler2D uSampler;
uniform float uAlpha;

void main() {
    fragColor = texture(uSampler, vTextureCoord);
    fragColor.a *= uAlpha;
}