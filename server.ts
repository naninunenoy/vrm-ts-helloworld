const vrmLoaderScript = document.createElement('script');
vrmLoaderScript.src = 'https://cdn.jsdelivr.net/npm/babylon-vrm-loader/dist/index.js';
document.head.appendChild(vrmLoaderScript);

var createScene = function () {

    // This creates a basic Babylon Scene object (non-mesh)
    var scene = new BABYLON.Scene(engine);

    // This creates and positions a free camera (non-mesh)
    var camera = new BABYLON.ArcRotateCamera("camera1", -Math.PI / 2, Math.PI / 2, 2, new BABYLON.Vector3(0, 1.3, 0), scene);

    // This targets the camera to scene origin
    // camera.setTarget(new BABYLON.Vector3(0, 1.5, 0));

    // This attaches the camera to the canvas
    camera.attachControl(canvas, true);

    // This creates a light, aiming 0,1,0 - to the sky (non-mesh)
    var light = new BABYLON.DirectionalLight("light", new BABYLON.Vector3(0.3, -1, 0.3), scene);

    // Our built-in 'ground' shape.
    var ground = BABYLON.MeshBuilder.CreateGround("ground", { width: 6, height: 6 }, scene);

    vrmLoaderScript.onload = () => {
        BABYLON.SceneLoader.Append('https://raw.githubusercontent.com/vrm-c/UniVRM/master/Tests/Models/Alicia_vrm-0.51/', 'AliciaSolid_vrm-0.51.vrm', scene, () => {

        });
    };

    return scene;

};
