/**
* MyCone
* @constructor
*/
class MyCone extends CGFobject {
    constructor(scene, slices) {
        super(scene);
        this.slices = slices;
        this.initBuffers();
    }
    initBuffers() {
        this.vertices = [];
        this.indices = [];
        this.normals = [];
        this.texCoords = [];

        var ang = 0;
        var alphaAng = 2*Math.PI/this.slices;

        for(var i = 0; i < this.slices; i++){

            var sa=Math.sin(ang);
            var saa=Math.sin(ang+alphaAng);
            var ca=Math.cos(ang);
            var caa=Math.cos(ang+alphaAng);

            this.vertices.push(ca, 0, -sa);
            this.vertices.push(caa, 0, -saa);
            this.indices.push((2*i) % (2*this.slices), (2*i+1) % (2*this.slices), 2*this.slices);
            this.normals.push(ca, Math.cos(Math.PI/4.0), -sa);
            this.normals.push(caa, Math.cos(Math.PI/4.0), -saa);
            this.texCoords.push(0.1,1);
            this.texCoords.push(0.9,1);

            ang+=alphaAng;
        }
        this.vertices.push(0,1,0);
        this.normals.push(0,1,0);
        this.texCoords.push(0.5,-2);


        this.primitiveType = this.scene.gl.TRIANGLES;
        this.initGLBuffers();
    }
    
    updateBuffers(complexity){
        // reinitialize buffers
        this.initBuffers();
        this.initNormalVizBuffers();
    }
}


