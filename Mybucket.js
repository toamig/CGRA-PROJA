/**
 * MyBucket
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyBucket extends CGFobject {

	constructor(scene) {
		super(scene);
        this.bucketOut = new MyCylinder(scene, 15);
        this.bucketIn = new MyCylinderReverse(scene, 15);

        this.initBuffers();
        this.initMaterials();
    }

    initMaterials() {
        this.metalMaterialIn = new CGFappearance(this.scene);
        this.metalMaterialIn.setDiffuse(0.4,0.4,0.4,1);
        this.metalMaterialIn.setSpecular(0.9,0.9,0.9,1);
        this.metalMaterialIn.loadTexture('images/metalin.jpg');
        this.metalMaterialIn.setTextureWrap('REPEAT', 'REPEAT');

        this.metalMaterialOut = new CGFappearance(this.scene);
        this.metalMaterialOut.setDiffuse(0.4,0.4,0.4,1);
        this.metalMaterialOut.setSpecular(0.9,0.9,0.9,1);
        this.metalMaterialOut.loadTexture('images/metal.jpg');
        this.metalMaterialOut.setTextureWrap('REPEAT', 'REPEAT');
        
    	}

    display() {
        var toRad = Math.PI / 180;
        
        this.scene.pushMatrix();
        this.scene.scale(0.2, 0.5, 0.2);
        this.metalMaterialOut.apply();
        this.bucketOut.display();
        this.metalMaterialIn.apply();
        this.bucketIn.display();
        this.scene.popMatrix();
       
    }
    updateBuffers(complexity){}
}