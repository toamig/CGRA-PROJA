/**
* MyCylinder
* @constructor
*/
class MyCylinder extends CGFobject {
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

        for(var i = 0; i < this.slices+1; i++){

            var sa=Math.sin(ang);
            var saa=Math.sin(ang+alphaAng);
            var ca=Math.cos(ang);
            var caa=Math.cos(ang+alphaAng);

            this.vertices.push(ca, 0, -sa);
            this.vertices.push(ca, 1, -sa);

            // edge normal computed by cross product of two edges
            var normal= [
                ca,
                0,
                -sa
            ];

            // normalization
            var nsize=Math.sqrt(
                normal[0]*normal[0]+
                normal[1]*normal[1]+
                normal[2]*normal[2]
                );
            normal[0]/=nsize;
            normal[1]/=nsize;
            normal[2]/=nsize;

            // push normals
            this.normals.push(...normal);
            this.normals.push(...normal);


            if(i != 0){
            this.indices.push(2*i-1, (2*i-2) , (2*i));
            this.indices.push(2*i, (2*i+1) , (2*i-1));
            }



            var i1 = i/this.slices+1;

            this.texCoords.push(i1,1);
            this.texCoords.push(i1,0);

            ang+=alphaAng;
        }
        
        this.primitiveType = this.scene.gl.TRIANGLES;
        this.initGLBuffers();
    }
    
    updateBuffers(complexity){
        
        // reinitialize buffers
        this.initBuffers();
        this.initNormalVizBuffers();
    }
}