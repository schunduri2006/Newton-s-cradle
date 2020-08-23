const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	bobObject1 = new Bob(150,350,30);
	bobObject2 = new Bob(220,350,30);
	bobObject3 = new Bob(290,350,30);
	bobObject4 = new Bob(360,350,30);
	bobObject5 = new Bob(430,350,30);
	roof1 = new Roof(300,100,350,20);
	bobDiameter=40;


	var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
		  width: 1200,
		  height: 700,
		  wireframes: false
		}
	  });

	rope1 = new Rope(bobObject1.body,roof1.body,-143,0)
	rope2 = new Rope(bobObject2.body,roof1.body,-80,0)
	rope3 = new Rope(bobObject3.body,roof1.body,-10,0)
	rope4 = new Rope(bobObject4.body,roof1.body,60,0)
	rope5 = new Rope(bobObject5.body,roof1.body,130,0)
	
	

	Engine.run(engine);
  
}


function draw() {
	
  rectMode(CENTER);
  
  background("white");

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  roof1.display();
  
  
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-100,y:-80});

	}
}

 
function drawLine(constraint)
{
	bobBodyPosition=constraint.bodyA.position
	roofBodyPosition=constraint.bodyB.position

	roofBodyOffset=constraint.pointB;
	
	roofBodyX=roofBodyPosition.x+roofBodyOffset.x
	roofBodyY=roofBodyPosition.y+roofBodyOffset.y
	line(bobBodyPosition.x, bobBodyPosition.y, roofBodyX,roofBodyY);
}




