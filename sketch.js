
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1,bob2,bob3,bob4,bob5,bob6;
var roof;
var connection1,connection2,connection3,connection4;
function preload()
{

}

function setup() {
	createCanvas(800,800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


  Engine.run(engine);
  var y=150;
  bob1 = new Bobs(100,y);
  bob2 = new Bobs(250,y);
  bob3 = new Bobs(400,y);
  bob4 = new Bobs(550,y);
  bob5 = new Bobs(700,y);
  roof = new Top(400,50,800,50)
  connection1 = new Attach(bob1.body,roof.body);
  connection2 = new Attach(bob2.body,roof.body);
  connection3 = new Attach(bob3.body,roof.body);
  connection4 = new Attach(bob4.body,roof.body);
  connection5 = new Attach(bob5.body,roof.body);
}


function draw() {
  //rectMode(CENTER);
  background(255);
  //Engine.update(engine);
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  roof.display();
  connection1.display();
  connection2.display();
  connection3.display();
  connection4.display();
  connection5.display();
}

function keyPressed ()
{
  if (keyCode === UP_ARROW)
  {
    Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:-50});
  }
}