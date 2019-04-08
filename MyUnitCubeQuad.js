/**
 * MyUnitCubeQuad
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyUnitCubeQuad extends CGFobject {

	constructor(scene) {
		super(scene);
		this.quad1 = new MyQuad(scene);
        this.quad2 = new MyQuad(scene);
        this.quad3 = new MyQuad(scene);
        this.quad4 = new MyQuad(scene);
        this.quad5 = new MyQuad(scene);
        this.quad6 = new MyQuad(scene);
        this.initBuffers();
        this.initMaterials();
	}

	initMaterials() {
		
	}

	display() {
		var toRad = Math.PI / 180;
        
		this.scene.pushMatrix();
        this.scene.translate(0,0,-0.5);
        this.scene.rotate(180*toRad, 0, 1, 0);
        this.quad1.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0,0,0.5);
        this.quad2.display();
        this.scene.popMatrix();
        
        this.scene.pushMatrix();
        this.scene.translate(0.5, 0, 0);
        this.scene.rotate(90*toRad, 0, 1, 0);
        this.quad3.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-0.5, 0, 0);
        this.scene.rotate(-90*toRad, 0, 1, 0);
        this.quad4.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0, 0.5, 0);
        this.scene.rotate(-90*toRad, 1, 0, 0);
        this.quad5.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0, -0.5, 0);
        this.scene.rotate(90*toRad, 1, 0, 0);
        this.quad6.display();
        this.scene.popMatrix();
	}

}