/**
 * MyVoxelHill
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyVoxelHill extends CGFobject {

	constructor(scene, levels)
	{
		super(scene);
		this.levels = levels;
		this.cube = new MyUnitCubeQuad(scene,'snow.png', 'snow.png', 'snow.png','snow.png');
        
        this.initBuffers();
	}

	display() {
		for(var i = 0; i < this.levels; i++){
		    for(var j = 0; j < i+i+1; j++){
		        for(var k = 0; k < i+i+1; k++){
		            this.scene.pushMatrix();
		            this.scene.translate(-i,0,-i);
		            this.scene.translate(k,this.levels-(i+1)+0.5,j);
		            this.cube.display();
		            this.scene.popMatrix();
		        }
		    }
		}  
	}

	updateBuffers(complexity){}
}