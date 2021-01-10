var ball,side1,side2,side3,ground,paper,binImg,bin;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){

	binImg=loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(1400, 600);

	engine = Engine.create();
	world = engine.world;
	
    fill("yellow");
	ground= Bodies.rectangle(700,470,1400,20, {isStatic:true});
	World.add(world,ground);

	//bin = createSprite(1100,470,20,20);
	//bin.addImage(binImg);
	//bin.scale=0.5;
	
	paper=new Paper(465,450);


	side1= new Box(1100,470,120,160);
	side2= new Box(1050,470,20,160);
	side3= new Box(1150,470,20,160);


	Engine.run(engine);
  
}


function draw() {
  
  background("lightgrey");
  Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,1400,20);
   
  side1.display();
  paper.display();
  //side2.display();
 // side3.display();
  
  drawSprites();
  text("X"+mouseX+","+"Y"+mouseY,mouseX,mouseY);
}
function keyPressed(){
	
	if(keyCode === UP_ARROW){

		Matter.Body.applyForce(paper.body,paper.body.position,{x:140,y:-145})
	}
}











