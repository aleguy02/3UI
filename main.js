import * as THREE from "three";

function Cube(color = 0xff0000, wireframe = false) {
    const geometry = new THREE.BoxGeometry()
    const material = new THREE.MeshToonMaterial({
        color: color,
        wireframe: wireframe
    })

    return new THREE.Mesh( geometry, material )
}

function Sphere(color = 0xff0000, wireframe = false) {
    const geometry = new THREE.SphereGeometry(); 
    const material = new THREE.MeshToonMaterial({
        color: color,
        wireframe: wireframe
    }); 
    
    return new THREE.Mesh( geometry, material )
}

function Diamond(color = 0xff0000, wireframe = false) {
    const geometry = new THREE.OctahedronGeometry(); 
    const material = new THREE.MeshToonMaterial({
        color: color,
        wireframe: wireframe
    }); 
    

    return new THREE.Mesh( geometry, material )
}

// Scene
function Scene(color = 0xffffff) {
    const scene = new THREE.Scene();
    const backgroundColor = new THREE.Color(color);
    scene.background = backgroundColor;


    return scene
}
// -------------------

function createScene(shape, scene, id) {
    const element = document.getElementById(id)
    

    const camera = new THREE.PerspectiveCamera(
        75,
        
        element.clientWidth / element.clientHeight,
        0.1,
        1000
    );


    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(element.clientWidth, element.clientHeight);
    // renderer.setSize(100, 100);
    element.appendChild(renderer.domElement);

    scene.add(shape);

    camera.position.z = 5;

    const directionalLightTop = new THREE.DirectionalLight(0xffffff, 1)
    directionalLightTop.position.set( 10, 10, 10 )

    const directionalLightBottom = new THREE.DirectionalLight(0xffffff, 0.3)
    directionalLightBottom.position.set( -10, -10, 10 )

    scene.add(directionalLightTop)
    scene.add(directionalLightBottom)


    animate(renderer, scene, camera, shape, element)
}

function animate(renderer, scene, camera, shape, element) {
    let targetX = 0;
    let targetY = 0;
    let mouseDown = false;


    function updateShapePosition() {
        shape.position.x += (targetX - shape.position.x) * 0.07;
        shape.position.y += (targetY - shape.position.y) * 0.07;
    }

    function spawnShape() {
        requestAnimationFrame(spawnShape);  
        if (!mouseDown) updateShapePosition();  // Shape's position will only update if the mouse button is up
        renderer.render(scene, camera);
    }

    // Rotate Shape
    element.onmousedown = (event) => {
        event.preventDefault();
        mouseDown = true;

        document.onmouseup = () => {
            mouseDown = false;
            document.onmouseup = null;
            document.onmousemove = null;
        };

        document.onmousemove = (event) => {
            let deltaX = event.movementX;
            let deltaY = event.movementY;
            
            shape.rotation.y += deltaX * 0.005;
            shape.rotation.x += deltaY * 0.005;
        };
    };

    // Move Shape
    element.onmousemove = (event) => {
        const rect = element.getBoundingClientRect()
        const dOfY = rect.top
        const lOfY = event.clientY
        const distYFromTop = lOfY - dOfY
        const dOfX = rect.left
        const lOfX = event.clientX
        const distXFromLeft = lOfX - dOfX
        
        // the effect works best when the container is a square ratio
        const denomX = rect.width/rect.height
        const denomY = rect.height/rect.width

        const X = rect.width / (denomX * 5)
        const Y = rect.height / (denomY * 5)
        
        targetX = (distXFromLeft - (rect.width / 2)) / X;
        targetY = -(distYFromTop - (rect.height / 2)) / Y;
    };


    spawnShape();    
}


module.exports = {
    Cube,
    Sphere,
    Diamond,
    Scene,
    createScene,
    animate
}

