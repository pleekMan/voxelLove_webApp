var shaderPool = [
	{
		name: "shader1",
		data: [
			"// SHADER 1",
			"const float PI = 3.14159265358; // SHADER CARGADO",
			"const float TWO_PI = 6.28318530718;",
			"uniform vec3 controls;",
			"uniform float time; // IN SECONDS",
			"varying vec4 vertexColor;",
			"",
			"void main() {",
			"",
			"float wavyX = position.x * tan(position.y * TWO_PI + (time * controls.x ) ); // DRAG THE RED SLIDER",
			"float offsetY = position.y + controls.y; // DRAG THE GREEN SLIDER",
			"vec4 finalPos = vec4(wavyX, offsetY, position.z, 1.0);",
			"",
			"gl_Position = projectionMatrix * modelViewMatrix * finalPos;",
			"vertexColor = vec4(color,1.0);",
			"",
			"}"
		]

	},
	{
		name: "shader2",
		data:[
			"// SHADER 2",
			"const float PI = 3.14159265358; // SHADER CARGADO",
			"const float TWO_PI = 6.28318530718;",
			"uniform vec3 controls;",
			"uniform float time; // IN SECONDS",
			"varying vec4 vertexColor;",
			"",
			"void main() {",
			"",
			"float wavyX = position.x * tan(position.y * TWO_PI + (time * controls.x ) ); // DRAG THE RED SLIDER",
			"float offsetY = position.y + controls.y; // DRAG THE GREEN SLIDER",
			"vec4 finalPos = vec4(wavyX, offsetY, position.z, 1.0);",
			"",
			"gl_Position = projectionMatrix * modelViewMatrix * finalPos;",
			"vertexColor = vec4(color,1.0);",
			"",
			"}"
		]
	}
]