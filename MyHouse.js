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
		this.body = new MyUnitCubeQuad(scene);
		this.roof = new MyPyramid(scene,4);
        
        this.initBuffers();
        this.initMaterials();
	}

	initMaterials() {
		this.bodyMaterial = new CGFappearance(this.scene);
        this.bodyMaterial.loadTexture('images/housebody.png');
        this.bodyMaterial.setTextureWrap('REPEAT', 'REPEAT');

        this.pillarMaterial = new CGFappearance(this.scene);
        this.pillarMaterial.loadTexture('images/pillar.jpg');
        this.pillarMaterial.setTextureWrap('REPEAT', 'REPEAT');

        this.roofMaterial = new CGFappearance(this.scene);
        this.roofMaterial.loadTexture('images/woodroof.jpg');
        this.roofMaterial.setTextureWrap('REPEAT', 'REPEAT');
	}

	deg2rad = function(degrees)
    {
        var pi = Math.PI;
        return degrees * (pi/180);
    }

	display() {
		this.bodyMaterial.apply();
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