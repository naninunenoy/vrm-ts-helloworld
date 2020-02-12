"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http = require("http");
const BABYLON = require("@babylonjs/core");
const engine_1 = require("@babylonjs/core/Engines/engine");
const vrmLoaderScript = document.createElement('script');
vrmLoaderScript.src = 'https://cdn.jsdelivr.net/npm/babylon-vrm-loader/dist/index.js';
document.head.appendChild(vrmLoaderScript);
var createScene = function () {
    const debugProperties = getDebugProperties();
    const canvas = document.getElementById('main-canvas');
    const engine = new engine_1.Engine(canvas, true, {
        alpha: false,
        disableWebGL2Support: debugProperties.webgl1,
    });
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
function getDebugProperties() {
    const href = window.location.href;
    return {
        webgl1: href.includes('webgl1'),
        shadow: href.includes('shadow'),
        inspector: href.includes('inspector'),
    };
}
class Main {
    constructor() {
        // http�T�[�o�[��ݒ肷��
        const server = http.createServer((request, response) => this.requestHandler(request, response));
        // �T�[�o�[���N�����ă��N�G�X�g��҂��󂯏�Ԃɂ���
        server.listen('1337');
    }
    /*
    * �T�[�o�[�Ƀ��N�G�X�g�����������Ɏ��s�����֐�
    */
    requestHandler(request, response) {
        response.end('Hello! Node.js with TypeScript');
    }
}
const main = new Main();
//# sourceMappingURL=server.js.map