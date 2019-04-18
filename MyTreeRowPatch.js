/**
 * MyTreeRowPatch
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyTreeRowPatch extends CGFobject {

	constructor(scene, trunkHeight, trunkRadius, treeTopHeight, treeTopRadius, trunkTexture,
treeTopTexture)
	{
		super(scene);
		this.sizes = [];
		this.displacements = [];
		this.fillSizes();
		this.fillDisplacements();
        this.tree1 = new MyTree(scene, this.sizes[0], this.sizes[1], this.sizes[2], this.sizes[3], 'birchWood.png', 'snowbirch.jpg');
        this.tree2 = new MyTree(scene, this.sizes[4], this.sizes[5], this.sizes[6], this.sizes[7], 'snowbark.png', 'snowleaves.jpg');
        this.tree3 = new MyTree(scene, this.sizes[8], this.sizes[9], this.sizes[10], this.sizes[11], 'snowbark.png', 'snowleaves.jpg');
        this.tree4 = new MyTree(scene, this.sizes[12], this.sizes[13], this.sizes[14], this.sizes[15], 'birchWood.png', 'snowbirch.jpg');
        this.tree5 = new MyTree(scene, this.sizes[16], this.sizes[17], this.sizes[18], this.sizes[19], 'snowbark.png', 'snowleaves.jpg');
        this.tree6 = new MyTree(scene, this.sizes[20], this.sizes[21], this.sizes[22], this.sizes[23], 'snowbark.png', 'snowleaves.jpg');

        this.initBuffers();
	}

	fillSizes(){
		for(var i = 0; i < 6; i++){
			var height = (Math.random()*(30-25+1)+25)/10;
			var radius = (Math.random()*(4-2+1)+2)/10;
			this.sizes.push(height);
			this.sizes.push(radius);
			this.sizes.push(height);
			this.sizes.push(2.5 * radius);
		}
	}

	fillDisplacements(){
		for(var i = 0; i < 6; i++){
			this.displacements.push((Math.random()*(5+5+1)-5)/10);
			this.displacements.push((Math.random()*(5+5+1)-5)/10);
		}
	}

	display() {
        this.scene.pushMatrix();
        this.scene.translate(0 + this.displacements[0], 0, 8.75 + this.displacements[1]);
        this.tree1.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0 + this.displacements[2], 0, 5.25 + this.displacements[3]);
        this.tree2.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0 + this.displacements[4], 0, 1.75 + this.displacements[5]);
        this.tree3.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0 + this.displacements[6], 0, -1.75 + this.displacements[7]);
        this.tree4.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0 + this.displacements[8], 0, -5.25 + this.displacements[9]);
        this.tree5.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0 + this.displacements[10], 0, -8.75 + this.displacements[11]);
        this.tree6.display();
        this.scene.popMatrix();
	}

	updateBuffers(complexity){}
}