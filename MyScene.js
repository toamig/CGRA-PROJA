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

        // Background color
        this.gl.clearColor(0.0, 0.0, 0.0, 1.0);
        this.gl.clearDepth(100.0);
        this.gl.enable(this.gl.DEPTH_TEST);
        this.gl.enable(this.gl.CULL_FACE);
        this.gl.depthFunc(this.gl.LEQUAL);
        this.enableTextures(true);

        // Initialize scene objects
        this.axis = new CGFaxis(this);
        this.cubemap = new MyCubeMap(this);
        this.quad = new MyQuad(this, 60, 60);
        this.treerow1 = new MyTreeRowPatch(this);
        this.treerow2 = new MyTreeRowPatch(this);
        this.treegroup1 = new MyTreeGroupPatch(this);
        this.treegroup2 = new MyTreeGroupPatch(this);
        this.hill1 = new MyVoxelHill(this, 5);
        this.hill2 = new MyVoxelHill(this, 4);
        this.house = new MyHouse(this);
        this.campfire = new MyCampfire(this);
        this.bucket = new MyBucket(this);

        // Materials
        this.mapMaterial = new CGFappearance(this);
        this.mapMaterial.loadTexture('images/dayMap.png')
        this.mapMaterial.setTextureWrap('CLAMP_TO_EDGE', 'CLAMP_TO_EDGE');
        this.mapMaterial.setEmission(0.9,0.9,0.9);

        this.groundMaterial = new CGFappearance(this);
        this.groundMaterial.loadTexture('images/snow.png');
        this.groundMaterial.setTextureWrap('REPEAT', 'REPEAT');
        this.groundMaterial.setDiffuse(0.5,0.5,0.5,1);        

        // Textures
        this.dayTexture = new CGFtexture(this, 'images/dayMap.png');
        this.nightTexture = new CGFtexture(this, 'images/nightMap.png');

        // Objects connected to MyInterface
        this.mode = 0;

        this.textures = [this.dayTexture, this.nightTexture];
        this.modeIds = {'Day': 0, 'Night': 1};
        
    }

    initLights() {
        this.lights[0].setPosition(15, 2, 5, 1);
        this.lights[0].setDiffuse(1.0, 1.0, 1.0, 1.0);
        //this.lights[0].setVisible(true);
        //this.lights[0].enable();
        this.lights[0].update();

        // Day light (sun)
        this.lights[1].setPosition(29, 22, 0, 1);
        this.lights[1].setAmbient(0.9, 0.8, 0.5, 1);
        this.lights[1].setDiffuse(0.9, 0.8, 0.5, 1);
        this.lights[1].setSpecular(0.9, 0.8, 0.5, 1);
        this.lights[1].setConstantAttenuation(0.12);
        this.lights[1].enable();
        this.lights[1].setVisible(false);
        this.lights[1].update();

        // Night light (moon)
        this.lights[2].setPosition(29, 29, -29, 1);
        this.lights[2].setAmbient(0.1, 0.35, 0.65, 1);
        this.lights[2].setDiffuse(0.1, 0.35, 0.65, 1);
        this.lights[2].setSpecular(0.1, 0.35, 0.65, 1);
        this.lights[2].setConstantAttenuation(1.5);
        this.lights[2].setVisible(false);
        this.lights[2].update();

        // Night light (campfire)
        this.lights[3].setPosition(10, 0.5, 3, 1);
        this.lights[3].setAmbient(0.9, 0.6, 0.1, 1);
        this.lights[3].setDiffuse(0.9, 0.6, 0.1, 1);
        this.lights[3].setSpecular(0.9, 0.6, 0.1, 1);
        this.lights[3].setLinearAttenuation(0.1);
        this.lights[3].setVisible(false);
        this.lights[3].update();
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

    updateMapTexture(){
        this.mapMaterial.setTexture(this.textures[this.mode]);
        if(this.mode == 0){
            this.lights[2].disable();
            this.lights[3].disable();
            this.lights[1].enable();
        }
        else{
            this.lights[1].disable();
            this.lights[2].enable();
            this.lights[3].enable();
        }
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
        this.lights[2].update();
        this.lights[3].update();

        // Draw axis
        this.axis.display();

        // Apply default appearance
        //this.setDefaultAppearance();

        // ---- BEGIN Primitive drawing section
        var toRad = Math.PI / 180;

        this.pushMatrix();
        this.mapMaterial.apply();
        this.scale(60,60,60);
        this.cubemap.display();
        this.popMatrix();
       
        this.pushMatrix();
        this.groundMaterial.apply();
        this.rotate(-90*toRad,1,0,0);
        this.quad.display();
        this.popMatrix();

        this.pushMatrix();
        this.translate(-13,0,-10);
        this.treegroup1.display();
        this.popMatrix();

        this.pushMatrix();
        this.translate(5,0,14);
        this.treegroup2.display();
        this.popMatrix();

        this.pushMatrix();
        this.translate(-13,0,7);
        this.rotate(90*toRad,0,1,0);
        this.treerow1.display();
        this.popMatrix();

        this.pushMatrix();
        this.translate(13,0,-7);
        this.rotate(90*toRad,0,1,0);
        this.treerow1.display();
        this.popMatrix();

        this.pushMatrix();
        this.translate(0, 0, -16);
        this.hill1.display();
        this.popMatrix();

        this.pushMatrix();
        this.translate(-14, 0, 16);
        this.hill2.display();
        this.popMatrix();
        
        this.house.display();

        this.pushMatrix();
        this.translate(10, 0, 3);
        this.scale(1.2, 1.2, 1.2);
        this.campfire.display();
        this.popMatrix();

        this.pushMatrix();
        this.translate(2, 0, 2.5);
        this.bucket.display();
        this.popMatrix();

        // ---- END Primitive drawing section
    }
}