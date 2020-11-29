const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;


function preload()
{
	var roof,rope1,bobobj1,bobobj2,bobobj3,bobobj4,bobobj5;
}
function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

   roof=new Roof (350,100,300,30);
   World.add(world,roof);

   bobobj1=new Bob (250,300);
   bobobj2=new Bob (300,300);
   bobobj3=new Bob (350,300);
   bobobj4=new Bob (400,300);
   bobobj5=new Bob (450,300);

   rope1=new Rope (bobobj1.body,roof.body,-100,0);
   World.add(world,rope1);

   rope2=new Rope (bobobj2.body,roof.body,-50,0);
   World.add(world,rope2);

   rope3=new Rope (bobobj3.body,roof.body,0,0);
   World.add(world,rope3);

   rope4=new Rope (bobobj4.body,roof.body,50,0);
   World.add(world,rope4);

   rope5=new Rope (bobobj5.body,roof.body,100,0);
   World.add(world,rope5);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  Engine.update(engine);

  roof.display();

  bobobj1.display();
  bobobj2.display();
  bobobj3.display();
  bobobj4.display();
  bobobj5.display();
 
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  

  
  drawSprites();
 
}
function keyPressed(){
	if(keyCode===32){
		Matter.Body.applyForce(bobobj1.body,bobobj1.body.position,{x:-730,y:0});
	}
}



