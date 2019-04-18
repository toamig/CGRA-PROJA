/**
 * MyCampfire
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyCampfire extends CGFobject {

	constructor(scene) {
		super(scene);
        this.rock = new MyUnitCubeQuad(scene, 'granite.jpg', 'granite.jpg', 'granite.jpg','granite.jpg');
        this.fire = new MyCone(scene, 15);
        this.trunk = new MyCylinder(scene, 15);

        this.initBuffers();
        this.initMaterials();
    }

    initMaterials() {
        this.woodMaterial = new CGFappearance(this.scene);
        this.woodMaterial.setDiffuse(0.6,0.6,0.6,1);
        this.woodMaterial.setSpecular(0.1,0.1,0.1,1);
        this.woodMaterial.loadTexture('images/wood.jpg');
        this.woodMaterial.setTextureWrap('REPEAT', 'REPEAT');

        this.fireMaterial = new CGFappearance(this.scene);
        this.fireMaterial.setDiffuse(0.6,0.6,0.6,0.1);
        this.fireMaterial.setSpecular(0.1,0.1,0.1,0.1);
        this.fireMaterial.setEmission(1,1,1,1);
        this.fireMaterial.loadTexture('images/fire.jpg');
        this.fireMaterial.setTextureWrap('REPEAT', 'REPEAT');
        
    	}

    display() {
        var toRad = Math.PI / 180;
		
        

        for (var i = 0; i < 12; i++)
        {
            this.woodMaterial.apply();
            this.scene.pushMatrix();
            this.scene.rotate(((360*i)/12)*toRad, 0, 1, 0);
            this.scene.translate(0, 0, -0.8);
            this.scene.rotate(32*toRad, 1, 0, 0);
            this.scene.scale(0.07, 1, 0.07);
            this.trunk.display();
            this.scene.popMatrix();

            this.scene.pushMatrix();
            this.scene.rotate(((360*i)/12)*toRad, 0, 1, 0);
            this.scene.translate(0, 0.125, -1);
            this.scene.scale(0.25,0.25,0.25);
            this.rock.display();
            this.scene.popMatrix();
        }      

        if(this.scene.mode == 1){
            this.fireMaterial.apply();
            this.scene.pushMatrix();
            this.scene.scale(0.65,1,0.65);
            this.fire.display();
            this.scene.popMatrix();
        }
    }
    updateBuffers(complexity){}
}