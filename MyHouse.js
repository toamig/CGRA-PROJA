/**
 * MyHouse
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyHouse extends CGFobject {

	constructor(scene)
	{
		super(scene);
		this.pillar = new MyPrism(scene,8);
		this.body = new MyUnitCubeQuad(scene, 'houseBack.png', 'houseSide.png', 'houseBack.png', 'houseFront.png');
		this.roof = new MyPyramid(scene,4);
        
        this.initBuffers();
        this.initMaterials();
	}

	initMaterials() {
        this.pillarMaterial = new CGFappearance(this.scene);
		this.pillarMaterial.setDiffuse(0.6,0.6,0.6,1);
		this.pillarMaterial.setSpecular(0.1,0.1,0.1,1);
        this.pillarMaterial.loadTexture('images/polishedpillar.png');
        this.pillarMaterial.setTextureWrap('REPEAT', 'REPEAT');

        this.roofMaterial = new CGFappearance(this.scene);
		this.roofMaterial.setDiffuse(0.6,0.6,0.6,1);
        this.roofMaterial.setSpecular(0.1,0.1,0.1,1);
        //this.roofMaterial.setEmission(1,1,1,1);
        this.roofMaterial.loadTexture('images/woodroof.jpg');
        this.roofMaterial.setTextureWrap('REPEAT', 'REPEAT');
	}

	deg2rad = function(degrees)
    {
        var pi = Math.PI;
        return degrees * (pi/180);
    }

	display() {
        this.scene.pushMatrix();
        this.scene.translate(0,1,0);
        this.scene.scale(2,2,2);
        this.body.display();
        this.scene.popMatrix();

        this.roofMaterial.apply();
        this.scene.pushMatrix();
        this.scene.translate(0,2,0);
        this.scene.rotate(this.deg2rad(45), 0, 1, 0);
        this.scene.scale(2.75, 1.25, 2.75);
        this.roof.display();
        this.scene.popMatrix();

        this.pillarMaterial.apply();
        this.scene.pushMatrix();
        this.scene.translate(1.45,0,1.45);
        this.scene.scale(0.25, 2, 0.25);
        this.pillar.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(1.45,0,-1.45);
        this.scene.scale(0.25, 2, 0.25);
        this.pillar.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-1.45,0,1.45);
        this.scene.scale(0.25, 2, 0.25);
        this.pillar.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-1.45,0,-1.45);
        this.scene.scale(0.25, 2, 0.25);
        this.pillar.display();
        this.scene.popMatrix();
	}

	updateBuffers(complexity){}
}