
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var world;
var db,dbimg;
var dustbin1;
var p,pimg;
var paper123;
var gr;


function preload(){
dbimg=loadImage("dustbingreen.png");
pimg=loadImage("paper.png");

}

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;


	
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,550);
    paper1= new Paper(200,600);

	Engine.run(engine);
	
}


function draw() {
  rectMode(CENTER);
  background("white");
 

 drawSprites();
  groundObject.display();
  dustbinObj.display();
paper1.display();
}

function keyPressed() {
	if(keyCode===UP_ARROW){
	
		Body.applyForce(paper1.body,paper1.body.position,{x:130,y:-135});
	
	}
	
	}