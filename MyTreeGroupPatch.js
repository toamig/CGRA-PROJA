/**
 * MyTreeGroupPatch
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyTreeGroupPatch extends CGFobject {

	constructor(scene, trunkHeight, trunkRadius, treeTopHeight, treeTopRadius, trunkTexture,
treeTopTexture)
	{
		super(scene);
		this.sizes = [];
		this.displacements = [];
		this.fillSizes();
		this.fillDisplacements();
        this.tree1 = new MyTree(scene, this.sizes[0], this.sizes[1], this.sizes[2], this.sizes[3], 'oakWood.jpg', 'oakLeaves.jpg');
        this.tree2 = new MyTree(scene, this.sizes[4], this.sizes[5], this.sizes[6], this.sizes[7], 'oakWood.jpg', 'oakLeaves.jpg');
        this.tree3 = new MyTree(scene, this.sizes[8], this.sizes[9], this.sizes[10], this.sizes[11], 'oakWood.jpg', 'oakLeaves.jpg');
        this.tree4 = new MyTree(scene, this.sizes[12], this.sizes[13], this.sizes[14], this.sizes[15], 'oakWood.jpg', 'oakLeaves.jpg');
        this.tree5 = new MyTree(scene, this.sizes[16], this.sizes[17], this.sizes[18], this.sizes[19], 'oakWood.jpg', 'oakLeaves.jpg');
        this.tree6 = new MyTree(scene, this.sizes[20], this.sizes[21], this.sizes[22], this.sizes[23], 'oakWood.jpg', 'oakLeaves.jpg');
        this.tree7 = new MyTree(scene, this.sizes[24], this.sizes[25], this.sizes[26], this.sizes[27], 'oakWood.jpg', 'oakLeaves.jpg');
        this.tree8 = new MyTree(scene, this.sizes[28], this.sizes[29], this.sizes[30], this.sizes[31], 'oakWood.jpg', 'oakLeaves.jpg');
        this.tree9 = new MyTree(scene, this.sizes[32], this.sizes[33], this.sizes[34], this.sizes[35], 'oakWood.jpg', 'oakLeaves.jpg');
        this.initBuffers();
	}

	fillSizes(){
		for(var i = 0; i < 9; i++){
			var height = (Math.random()*(50-35+1)+35)/10;
			var radius = (Math.random()*(9-6+1)+6)/10;
			this.sizes.push(height);
			this.sizes.push(radius);
			this.sizes.push(height);
			this.sizes.push(2.5 * radius);
		}
	}

	fillDisplacements(){
		for(var i = 0; i < 9; i++){
			this.displacements.push((Math.random()*(5+5+1)-5)/10);
			this.displacements.push((Math.random()*(5+5+1)-5)/10);
		}
	}

	display() {
        this.scene.pushMatrix();
        this.scene.translate(-5 + this.displacements[0], 0, 5 + this.displacements[1]);
        this.tree1.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-5 + this.displacements[2], 0, 0 + this.displacements[3]);
        this.tree2.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-5 + this.displacements[4], 0, -5 + this.displacements[5]);
        this.tree3.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0 + this.displacements[6], 0, 5 + this.displacements[7]);
        this.tree4.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0 + this.displacements[8], 0, 0 + this.displacements[9]);
        this.tree5.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0 + this.displacements[10], 0, -5 + this.displacements[11]);
        this.tree6.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(5 + this.displacements[12], 0, 5 + this.displacements[13]);
        this.tree7.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(5 + this.displacements[14], 0, 0 + this.displacements[15]);
        this.tree8.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(5 + this.displacements[16], 0, -5 + this.displacements[17]);
        this.tree9.display();
        this.scene.popMatrix();
	}

	updateBuffers(complexity){}
}