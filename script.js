'use strict';

// (function($){
// 	$('#mobile-menu').on('click', function(){
// 		$('.navbar').slideToggle()
// 	})
// })(jQuery);

// ページの読み込みを待つ
window.addEventListener('load', init);

function init() {
    // let rot = 0;

    // レンダラーを作成
    const renderer = new THREE.WebGLRenderer({
        canvas: document.querySelector('#title-canvas'),
        antialias: true
    });

    // シーンを作成
    const scene = new THREE.Scene();

    // カメラを作成
    var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.x = 0;
    camera.position.y = 0;
    camera.position.z = 100;
    camera.lookAt(scene.position);
    scene.add(camera);

    // AmbientLightの作成
    // AmbientLightはシーン全体を明るく照らす
    var ambientLight = new THREE.AmbientLight(0xffffff, 1.0);
    scene.add(ambientLight);

    // PointLightの追加
    // var pointLight = new THREE.PointLight("#ff9933");
    // pointLight.position.set(0, 0, 50);
    // scene.add(pointLight);

    // 球体を作成
    // const geometry = new THREE.SphereGeometry(25, 30, 30);
    // const material = new THREE.MeshStandardMaterial({color: 0xffff00});
    // const mesh = new THREE.Mesh(geometry, material);
    // scene.add(mesh);

    // マテリアルを作成する
    const material = new THREE.SpriteMaterial({
        map: new THREE.TextureLoader().load('images/logo1.png')
    });

    const sprite = new THREE.Sprite(material);
    sprite.scale.set(176, 83, 1);
    scene.add(sprite);

    // 地面を作成
    const plane = new THREE.GridHelper(300, 10, 0x888888, 0x888888);
    plane.position.y = -40;
    scene.add(plane);

    // Obj形式のモデルデータを読み込む
    // var loader = new THREE.OBJLoader();
    // loader.load('Title.obj', function (loadedMesh) {
    //     var material = new THREE.MeshLambertMaterial({color: 0xffbf1f});
    //     loadedMesh.children.forEach(function (child) {
    //         child.material = material;
    //         child.geometry.computeFaceNormals();
    //         child.geometry.computeVertexNormals();
    //     });

    //     loadedMesh.scale.set(1.5, 1.5, 1.5);
    //     loadedMesh.position.x = -50;
    //     loadedMesh.position.y = -15;
    //     // ラジアンで角度を指定
    //     loadedMesh.rotation.x = Math.PI / 2;
    //     scene.add(loadedMesh);
    // });

    // デバッグ用の座標軸を表示
    // var axis = new THREE.AxisHelper(20);
    // scene.add(axis);

    tick();

    // ループイベント
    function tick() {
        // rot += 0.5;
        // // ラジアンに変換
        // const radian = (rot * Math.PI) / 180;
        // // 角度に応じてカメラの位置を設定
        // camera.position.x = 100 * Math.sin(radian);
        // camera.position.z = 100 * Math.cos(radian);
        // // 原点方向を見つめる
        // camera.lookAt(new THREE.Vector3(0, 0, 0));

        // カメラの自動移動
        camera.position.x = 100 * Math.sin(Date.now() / 2000);
        camera.position.z = 100 * Math.cos(Date.now() / 2000);
        camera.position.y = 50 * Math.sin(Date.now() / 1000) + 60;
        camera.lookAt(new THREE.Vector3(0, 0, 0));

        renderer.render(scene, camera); // レンダリング
        requestAnimationFrame(tick);
    }

    // 初期化のために実行
    onResize();
    // リサイズイベント発生時に実行
    window.addEventListener('resize', onResize);

    function onResize() {
        // サイズを取得
        // const width = window.innerWidth;
		// const height = window.innerHeight / 4;
		
		const headerInner = document.getElementsByClassName('header-inner');
		const width = headerInner[0].clientWidth;
		const height = headerInner[0].clientHeight;

        // レンダラーのサイズを調整する
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(width, height);

        // カメラのアスペクト比を正す
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
    }
}