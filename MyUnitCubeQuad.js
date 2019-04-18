/**
 * MyUnitCubeQuad
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyUnitCubeQuad extends CGFobject {

	constructor(scene, topTexture, sideTexture, backTexture, frontTexture) {
		super(scene);
		this.quad = new MyQuad(scene, 1, 1);
		this.topTexture = topTexture;
		this.sideTexture = sideTexture;
		this.backTexture = backTexture;
		this.frontTexture = frontTexture;
        this.initMaterials();
	}

	initMaterials() {
		this.topMaterial = new CGFappearance(this.scene);
		this.topMaterial.setDiffuse(0.5,0.5,0.5,1);
		this.topMaterial.setSpecular(0.1,0.1,0.1,1);
        this.topMaterial.loadTexture('images/' + this.topTexture);
        this.topMaterial.setTextureWrap('REPEAT', 'REPEAT');

        this.sideMaterial = new CGFappearance(this.scene);
		this.sideMaterial.setDiffuse(0.5,0.5,0.5,1);
		this.sideMaterial.setSpecular(0.1,0.1,0.1,1);
        this.sideMaterial.loadTexture('images/' + this.sideTexture);
        this.sideMaterial.setTextureWrap('REPEAT', 'REPEAT');

        this.backMaterial = new CGFappearance(this.scene);
		this.backMaterial.setDiffuse(0.5,0.5,0.5,1);
		this.backMaterial.setSpecular(0.1,0.1,0.1,1);
        this.backMaterial.loadTexture('images/' + this.backTexture);
        this.backMaterial.setTextureWrap('REPEAT', 'REPEAT');

        this.frontMaterial = new CGFappearance(this.scene);
		this.frontMaterial.setDiffuse(0.5,0.5,0.5,1);
		this.frontMaterial.setSpecular(0.1,0.1,0.1,1);
        this.frontMaterial.loadTexture('images/' + this.frontTexture);
        this.frontMaterial.setTextureWrap('REPEAT', 'REPEAT');
	}

	display() {
		var toRad = Math.PI / 180;
        
        this.sideMaterial.apply();
		this.scene.pushMatrix();
        this.scene.translate(0,0,-0.5);
        this.scene.rotate(180*toRad, 0, 1, 0);
        this.quad.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0,0,0.5);
        this.quad.display();
        this.scene.popMatrix();
        
        this.frontMaterial.apply();
        this.scene.pushMatrix();
        this.scene.translate(0.5, 0, 0);
        this.scene.rotate(90*toRad, 0, 1, 0);
        this.quad.display();
        this.scene.popMatrix();

        this.backMaterial.apply();
        this.scene.pushMatrix();
        this.scene.translate(-0.5, 0, 0);
        this.scene.rotate(-90*toRad, 0, 1, 0);
        this.quad.display();
        this.scene.popMatrix();

        this.topMaterial.apply();
        this.scene.pushMatrix();
        this.scene.translate(0, 0.5, 0);
        this.scene.rotate(-90*toRad, 1, 0, 0);
        this.quad.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0, -0.5, 0);
        this.scene.rotate(90*toRad, 1, 0, 0);
        this.quad.display();
        this.scene.popMatrix();
	}

}