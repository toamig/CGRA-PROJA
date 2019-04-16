/**
* MyScene
* @constructor
*/
class MyScene extends CGFscene {
    constructor() {
        super();
    }
    init(application) {
        super.init(application);
        this.initCameras();
        this.initLights();

        //Background color
        this.gl.clearColor(0.0, 0.0, 0.0, 1.0);

        this.gl.clearDepth(100.0);
        this.gl.enable(this.gl.DEPTH_TEST);
        this.gl.enable(this.gl.CULL_FACE);
        this.gl.depthFunc(this.gl.LEQUAL);
        this.enableTextures(true);

        //Initialize scene objects
        this.axis = new CGFaxis(this);
        this.treegroup = new MyTreeGroupPatch(this);
        this.house = new MyHouse(this);
        this.hill = new MyVoxelHill(this, 10);
        this.treerow = new MyTreeRowPatch(this);
        this.cubemap = new MyCubeMap(this);

        //Materials
		this.dayMaterial = new CGFappearance(this);
        this.dayMaterial.loadTexture('images/dayMap.png');
        this.dayMaterial.setTextureWrap('CLAMP_TO_EDGE', 'CLAMP_TO_EDGE');
        this.dayMaterial.setAmbient(1,1,1,1);
        this.dayMaterial.setEmission(1,1,1,1);

        this.nightMaterial = new CGFappearance(this);
        this.nightMaterial.loadTexture('images/testnight.png');
        this.nightMaterial.setTextureWrap('CLAMP_TO_EDGE', 'CLAMP_TO_EDGE');
        this.nightMaterial.setAmbient(1,1,1,1);
        this.nightMaterial.setEmission(1,1,1,1);

        //Objects connected to MyInterface
    }
    initLights() {
        this.lights[0].setPosition(15, 2, 5, 1);
        this.lights[0].setDiffuse(1.0, 1.0, 1.0, 1.0);
        this.lights[0].setVisible(true);
        //this.lights[0].enable();
        this.lights[0].update();

        this.lights[1].setPosition(0, 0, 0, 1);
        this.lights[1].setDiffuse(1, 1, 1, 1);
        this.lights[1].setSpecular(1, 1, 1, 1);
        this.lights[1].setVisible(true);
        //this.lights[1].enable();
        this.lights[1].update();
    }
    initCameras() {
        this.camera = new CGFcamera(0.4, 0.1, 500, vec3.fromValues(15, 15, 15), vec3.fromValues(0, 0, 0));
    }
    setDefaultAppearance() {
        this.setAmbient(0.2, 0.4, 0.8, 1.0);
        this.setDiffuse(0.2, 0.4, 0.8, 1.0);
        this.setSpecular(0.2, 0.4, 0.8, 1.0);
        this.setShininess(10.0);
    }
    display() {
        // ---- BEGIN Background, camera and axis setup
        // Clear image and depth buffer everytime we update the scene
        this.gl.viewport(0, 0, this.gl.canvas.width, this.gl.canvas.height);
        this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);
        // Initialize Model-View matrix as identity (no transformation
        this.updateProjectionMatrix();
        this.loadIdentity();
        // Apply transformations corresponding to the camera position relative to the origin
        this.applyViewMatrix();

        this.lights[0].update();
        this.lights[1].update();

        // Draw axis
        this.axis.display();

        //Apply default appearance
        this.setDefaultAppearance();

        // ---- BEGIN Primitive drawing section
        
       /*this.pushMatrix();
        this.translate(15,0,0);
        this.treegroup.display();
        this.popMatrix();

        this.pushMatrix();
        this.translate(15,0,15);
        this.treegroup.display();
        this.popMatrix();

        this.pushMatrix();
        this.translate(15,0,-15);
        this.treegroup.display();
        this.popMatrix();

        this.pushMatrix();
        this.translate(-15,0,0);
        this.treegroup.display();
        this.popMatrix();

        this.pushMatrix();
        this.translate(-15,0,15);
        this.treegroup.display();
        this.popMatrix();

        this.pushMatrix();
        this.translate(-15,0,-15);
        this.treegroup.display();
        this.popMatrix();*/

        this.pushMatrix();
        this.translate(15,0,15);
        this.treegroup.display();
        this.popMatrix();

        this.pushMatrix();
        this.dayMaterial.apply();
        this.scale(60,60,60);
        this.cubemap.display();
        this.popMatrix();
        
        this.house.display();

        // ---- END Primitive drawing section
    }
}