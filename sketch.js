const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var paper,ground,box1,box2,box3;
var engine,world;


function setup() {
	createCanvas(800, 400);
	engine = Engine.create();
	world = engine.world;

	Engine.run(engine);

	paper = new Paper(150,100,20);
	ground = new Ground(400,350,800,20);
	box1 = new Box(650,335,150,10);
	box2 = new Box(570,320,10,40);
	box3 = new Box(730,320,10,40)
	
  
}


function draw() {
  rectMode(CENTER);
  background("yellow");

  paper.display();
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP-_ARROW){

		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
	}
}



