
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;

var rope1, rope2, rope3, rope4, rope5;

var bobObjectX, bobOjectY;

var roof;
function preload() {

}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;
	bobObjectX = width / 2;
	bobObjectY = height / 4 + 500;
	bobDiameter = 40;
	roofObject = new Roof(width / 2, height / 4, width / 7, 20);

	//Create the Bodies Here.
	bobObject1 = new Bob(bobObjectX - bobDiameter * 2, bobObjectY, bobDiameter);
	bobObject2 = new Bob(bobObjectX - bobDiameter, bobObjectY, bobDiameter);
	bobObject3 = new Bob(bobObjectX, bobObjectY, bobDiameter);
	bobObject4 = new Bob(bobObjectX + bobDiameter, bobObjectY, bobDiameter);
	bobObject5 = new Bob(bobObjectX + bobDiameter * 2, bobObjectY, bobDiameter);


	rope1 = new Rope(bobObject1.body, roofObject.body - bobDiameter * 2, 0);
	rope2 = new Rope(bobObject2.body, roofObject.body, bobDiameter * 1, 0);
	rope3 = new Rope(bobObject3.body, roofObject.body, bobDiameter * 0, 0);
	rope4 = new Rope(bobObject4.body, roofObject.body, bobDiameter * 1, 0);
	rope5 = new Rope(bobObject5.body, roofObject.body, bobDiameter * 2, 0);



	Engine.run(engine);


}


function draw() {
	rectMode(CENTER);
	background(0);

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
	roofObject.display();


	drawSprites();

}

function keyPressed() {
	if (keyDown === UP_ARROW) {
		Matter.Body.applyForce(bobObject1.body, bobObject1.body.position, { x: -50, y: -45 });

	}
}

function drawLine() {
	bobBody.position = Constraint.bodyA.position;
	roofBody.position = Constraint.bodyB.position;

	roofBodyOffset = constraint.pointB;
	line(bobBody.position.x, bobBodyY, roofBodyX, roofBodyY);
}




