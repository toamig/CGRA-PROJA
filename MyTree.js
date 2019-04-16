/**
 * MyTree
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyTree extends CGFobject {

	constructor(scene, trunkHeight, trunkRadius, treeTopHeight, treeTopRadius, trunkTexture,
treeTopTexture)
	{
		super(scene);
		this.trunkHeight = trunkHeight;
		this.trunkRadius = trunkRadius;
		this.treeTopHeight = treeTopHeight;
		this.treeTopRadius = treeTopRadius;
		this.trunkTexture = trunkTexture;
		this.treeTopTexture = treeTopTexture;
		this.trunk = new MyCylinder(scene, 15);
        this.top = new MyCone(scene, 15);
        
        this.initBuffers();
        this.initMaterials();
	}

	initMaterials() {
		this.trunkMaterial = new CGFappearance(this.scene);
		this.trunkMaterial.setAmbient(0.5,0.5,0.5,1);
		this.trunkMaterial.setDiffuse(0.6,0.6,0.6,1);
		this.trunkMaterial.setSpecular(0.1,0.1,0.1,1);
        this.trunkMaterial.loadTexture('images/' + this.trunkTexture);
        this.trunkMaterial.setTextureWrap('REPEAT', 'REPEAT');

        this.topMaterial = new CGFappearance(this.scene);
        this.topMaterial.setAmbient(0.5,0.5,0.5,1);
        this.topMaterial.setDiffuse(0.6,0.6,0.6,1);
        this.topMaterial.setSpecular(0.1,0.1,0.1,1);
        this.topMaterial.loadTexture('images/' + this.treeTopTexture);
        this.topMaterial.setTextureWrap('REPEAT', 'REPEAT');
	}

	display() {
		this.trunkMaterial.apply();
        this.scene.pushMatrix();
        this.scene.scale(this.trunkRadius,this.trunkHeight,this.trunkRadius);
        this.trunk.display();
        this.scene.popMatrix();

        this.topMaterial.apply();
        this.scene.pushMatrix();
        this.scene.translate(0,this.trunkHeight,0);
        this.scene.scale(this.treeTopRadius,this.treeTopHeight,this.treeTopRadius);
        this.top.display();
        this.scene.popMatrix();
	}

	updateBuffers(complexity){}
}