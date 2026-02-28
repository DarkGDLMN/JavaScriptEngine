#version 300 es

in vec2 aVertexPosition;
in vec2 aTextureCoord;

uniform mat3 uProjectionMatrix;
uniform mat3 uWorldMatrix;

out vec2 vTextureCoord;

void main() {
    vec3 worldPosition = uWorldMatrix * vec3(aVertexPosition, 1.0);
    vec4 projectedPosition = vec4((uProjectionMatrix * worldPosition).xy, 0.0, 1.0);
    gl_Position = projectedPosition;
    
    vTextureCoord = aTextureCoord;
}