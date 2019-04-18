/**
* MyInterface
* @constructor
*/
class MyInterface extends CGFinterface {
    constructor() {
        super();
    }

    init(application) {
        // call CGFinterface init
        super.init(application);
        // init GUI. For more information on the methods, check:
        // http://workshop.chromeexperiments.com/examples/gui
        this.gui = new dat.GUI();

        var obj = this;

        // Dropdown for day and night modes
        this.gui.add(this.scene, 'mode', this.scene.modeIds).name('Mode').onChange(this.scene.updateMapTexture.bind(this.scene));

        return true;
    }
}