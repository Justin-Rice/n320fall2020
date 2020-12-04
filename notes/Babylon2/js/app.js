let canvas = document.getElementById("myCanvas");

//create the 3D engine 
//setup stuff
var engine = new BABYLON.Engine(canvas, true);
var camera, scene, sphere, light, mat ;
//gravity n physics stuff
var gravityVector = new BABYLON.Vector3(0,-9.81, 0);
var physicsPlugin = new BABYLON.CannonJSPlugin();



scene = createScene();

//render
engine.runRenderLoop(function(){

   // mat.diffuseTexture.vScale += .01;

    scene.render();

});

function createScene(){

  //create the scene space
  var scene = new BABYLON.Scene(engine);

  scene.enablePhysics(gravityVector, physicsPlugin);


  // adds camera to the scene and binds it to the canvas
  camera = new BABYLON.ArcRotateCamera("Camera", Math.PI /2,Math.PI / 4,4, BABYLON.Vector3.Zero(), scene);
  camera.attachControl(canvas, true);

// general setup

  light = new BABYLON.HemisphericLight("HemiLight", new BABYLON.Vector3(1, 1, 0), scene);
 
  //adding a texture to the sphere I created
   mat = new BABYLON.StandardMaterial("base", scene);
  mat.diffuseTexture = new BABYLON.Texture("img/jordo.jpg", scene);
//   //makes less shiny?
//   mat.specularColor = new BABYLON.Color3(0.1,0.1,0.1);

//sphere
  sphere = BABYLON.MeshBuilder.CreateSphere("sphere", {diameter:1}, scene);
  sphere.position = new BABYLON.Vector3(1,2,1)
  sphere.material = mat;
//restitution = bounciness
sphere.physicsImpostor = new BABYLON.PhysicsImpostor(sphere, BABYLON.PhysicsImpostor.SphereImpostor, { mass: 1, restitution: 0.9 }, scene);

sphere.physicsImpostor.physicsBody.linearDamping = .6;
sphere.physicsImpostor.physicsBody.angularDamping = .5;
sphere.friction = 2;


//ground
var ground = BABYLON.MeshBuilder.CreateGround("ground", {height: 4, width: 4, subdivisions: 4}, scene);
ground.physicsImpostor = new BABYLON.PhysicsImpostor(ground, BABYLON.PhysicsImpostor.BoxImpostor, { mass: 0, restitution: 0.9 }, scene);

ground.physicsImpostor.friction = 10;
  
sphere.physicsImpostor.applyForce(
        new BABYLON.Vector3(0,0,2000),
        sphere.getAbsolutePosition()
     );
    


return scene;


};


