
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;
var bobOjectX, bobOjectY, roofObject, bobDiameter;

var rope1, rope2, rope3, rope4, rope5;

function preload() {

}

function setup() {
	createCanvas(800, 700);

	roof = createSprite(roofObject);

	engine = Engine.create();
	world = engine.world;

	bobDiamter = 40;
	bobObjectX = width / 2;
	bobObjectY = height / 4 + 500;

	//Create the Bodies Here.
	bobObject1 = new bob(bobObjectX - bobDiameter * 2, bobObjectY, bobDiameter);
	bobObject2 = new bob(bobObjectX - bobDiameter, bobObjectY, bobDiameter);
	bobObject3 = new bob(bobObjectX - bobObjectY, bobDiameter);
	bobObject4 = new bob(bobObjectX - bobDiameter, bobObjectY, bobDiameter);
	bobObject5 = new bob(bobObjectX - bobDiameter * 2, bobObjectY, bobDiameter);


	rope1 = new rope(bobObject1.body, roofObject.body, bobDiameter * 2, 0);
	rope2 = new rope(bobObject2.body, roofObject.body, bobDiameter * 1, 0);
	rope3 = new rope(bobObject3.body, roofObject.body, bobDiameter * 0, 0);
	rope4 = new rope(bobObject4.body, roofObject.body, bobDiameter * 1, 0);
	rope5 = new rope(bobObject5.body, roofObject.body, bobDiameter * 2, 0);



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


	drawSprites();

}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(bobObject1.body, bobObject1.body.position, { x: -50, y: -45 });

	}
}

function drawLine() {
	bobBody.position = Constraint.bodyA.position;
	roofBodyPosition = constraint.bodyB.position;
	roofBodyOffset = constraint.pointB;
	roofBodyX = roofBodyPosition.x + roofBodyOffset.x;
	roofBodyY = roofBodyPosition.y + roofbodyOffset.y;

	line(bobBody.position.x, bobBody.position.y, roofBodyX, roofBodyY);
}




