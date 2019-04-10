/**
 * MyCubeMap
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyCubeMap extends CGFobject {

	constructor(scene) {
		super(scene);
		this.initBuffers();
	}
	
	initBuffers() {
		var val = 0.5;

		this.vertices = [
			val, val, val,    //0 Top face
			val, val, -val,   //1
			-val, val, -val,  //2
			-val, val, val,   //3

			val, -val, val,   //4 Down face
			val, -val, -val,  //5
			-val, -val, -val, //6
			-val, -val, val,  //7

			val, val, val,    //8 Right face
			val, val, -val,   //9
			val, -val, val,   //10
			val, -val, -val,  //11

			-val, val, -val,  //12 Left face
			-val, val, val,   //13
			-val, -val, -val, //14
			-val, -val, val,  //15

			-val, val, val,   //16 Front face
			val, val, val,    //17
			-val, -val, val,  //18
			val, -val, val,   //19

			val, val, -val,   //20 Back face
			-val, val, -val,  //21
			val, -val, -val,  //22
			-val, -val, -val, //23
		];

		//Counter-clockwise reference of vertices
		this.indices = [
			0,2,1,    // Top
			0,3,2,

			4,5,6,    // Down
			4,6,7,

			10,8,11,  // Right
			11,8,9,

			14,12,13, // Left
			14,13,15,

			19,16,17, // Front
			19,18,16,

			22,21,23,  // Back
			22,20,21
		];

		this.normals = [
			0, -1, 0,
			0, -1, 0,
			0, -1, 0,
			0, -1, 0,

			0, 1, 0,
			0, 1, 0,
			0, 1, 0,
			0, 1, 0,

			-1, 0, 0,
			-1, 0, 0,
			-1, 0, 0,
			-1, 0, 0,

			1, 0, 0,
			1, 0, 0,
			1, 0, 0,
			1, 0, 0,

			0, 0, -1,
			0, 0, -1,
			0, 0, -1,
			0, 0, -1,

			0, 0, 1,
			0, 0, 1,
			0, 0, 1,
			0, 0, 1, 
		]

		var u = [];
		var v = [];

		for (var i = 0; i < 5; i++){
		    u.push(i/4);
		}

		for (var j = 0; j < 5; j++){
		    v.push(j/3);
		}

		this.texCoords = [
		    u[2], v[0], // Top
		    u[2], v[1],
		    u[1], v[1],
		    u[1], v[0],

		    u[2], v[3], // Down
		    u[2], v[2],
		    u[1], v[2],
		    u[1], v[3],

		    u[3], v[1], // Right
		    u[2], v[1],
		    u[3], v[2],
		    u[2], v[2],

		    u[1], v[1], // Left
		    u[0], v[1],
		    u[1], v[2],
		    u[0], v[2],

		    u[4], v[1], // Front
		    u[3], v[1],
		    u[4], v[2],
		    u[3], v[2],

		    u[2], v[1], // Back
		    u[1], v[1],
		    u[2], v[2],
		    u[1], v[2],
		]

		this.primitiveType = this.scene.gl.TRIANGLES;
		this.initGLBuffers();
	}

	updateBuffers(complexity){}
}