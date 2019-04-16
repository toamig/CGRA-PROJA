/**
 * MyHouse
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyHouse extends CGFobject {

	constructor(scene)
	{
		super(scene);
		this.pillar1 = new MyPrism(scene,8);
		this.pillar2 = new MyPrism(scene,8);
		this.pillar3 = new MyPrism(scene,8);
		this.pillar4 = new MyPrism(scene,8);
		this.body = new MyUnitCubeQuad(scene, 'houseBack.png', 'houseSide.png', 'houseBack.png', 'houseFront.png');
		this.roof = new MyPyramid(scene,4);
        
        this.initBuffers();
        this.initMaterials();
	}

	initMaterials() {
        this.pillarMaterial = new CGFappearance(this.scene);
        this.pillarMaterial.setAmbient(0.5,0.5,0.5,1);
		this.pillarMaterial.setDiffuse(0.6,0.6,0.6,1);
		this.pillarMaterial.setSpecular(0.2,0.2,0.2,1);
        this.pillarMaterial.loadTexture('images/pillar.jpg');
        this.pillarMaterial.setTextureWrap('REPEAT', 'REPEAT');

        this.roofMaterial = new CGFappearance(this.scene);
        this.roofMaterial.setAmbient(1,1,1,1);
		this.roofMaterial.setDiffuse(1,1,1,1);
        this.roofMaterial.setSpecular(0.1,0.1,0.1,1);
        //this.roofMaterial.setEmission(1,1,1,1);
        this.roofMaterial.loadTexture('images/snowroof.jpg');
        this.roofMaterial.setTextureWrap('REPEAT', 'REPEAT');
	}

	deg2rad = function(degrees)
    {
        var pi = Math.PI;
        return degrees * (pi/180);
    }

	display() {
        this.scene.pushMatrix();
        this.scene.translate(0,2,0);
        this.scene.scale(4, 4, 4);
        this.body.display();
        this.scene.popMatrix();

        this.roofMaterial.apply();
        this.scene.pushMatrix();
        this.scene.translate(0,4,0);
        this.scene.rotate(this.deg2rad(45), 0, 1, 0);
        this.scene.scale(5, 3, 5);
        this.roof.display();
        this.scene.popMatrix();

        this.pillarMaterial.apply();
        this.scene.pushMatrix();
        this.scene.translate(2.7,0,2.7);
        this.scene.scale(0.5, 4, 0.5);
        this.pillar1.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(2.7,0,-2.7);
        this.scene.scale(0.5, 4, 0.5);
        this.pillar2.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-2.7,0,2.7);
        this.scene.scale(0.5, 4, 0.5);
        this.pillar3.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-2.7,0,-2.7);
        this.scene.scale(0.5, 4, 0.5);
        this.pillar4.display();
        this.scene.popMatrix();
	}

	updateBuffers(complexity){}
}