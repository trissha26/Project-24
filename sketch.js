
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;
var ground;
var dustbinSide1,dustbinSide2,dustbinSide3;


function preload()
{
	
}

function setup() {
	createCanvas(700, 400);


	engine = Engine.create();
	world = engine.world;

	paper = new Paper(200,200,20)
	ground = new Ground(500,380,1000,20)

	dustbinSide1= new Dustbin(600,380,150,20);
	dustbinSide2= new Dustbin(530,340,20,100);
	dustbinSide3= new Dustbin(680,340,20,100);
	
	 

	//Create the Bodies Here.


	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(0);
  
  paper.display();
  ground.display();

  fill("lightblue");

  dustbinSide1.display();
  dustbinSide2.display();
  dustbinSide3.display();

  drawSprites();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper.body,paper.body.position,{x:50,y:-50});
	}

	
}




