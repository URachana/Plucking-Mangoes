
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9;
var world,boy;
var stone,sling;
var fruit=[];
function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,100,30);
	mango2=new mango(1000,100,30);
	mango3=new mango(1050,150,30);
	mango4=new mango(900,200,30);
	mango5=new mango(1000,175,30);
	mango6=new mango(975,250,30);
	mango7=new mango(1200,250,30);
	mango8=new mango(1200,150,30);
	mango9=new mango(1150,200,30);

	/*for(var i=1; i<10;i++){
		fruit.push("mango"+i);
	}*/
	console.log(fruit);
	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	stone = new Stone(190,340,10);
	sling = new Sling(stone.body,{x:235,y:420});
	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  

  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
 
  stone.display();
  sling.display();
  groundObject.display();

  
  detectCollision(mango1,stone);
  detectCollision(mango2,stone);
  detectCollision(mango3,stone);
  detectCollision(mango4,stone);
  detectCollision(mango5,stone);
  detectCollision(mango6,stone);
  detectCollision(mango7,stone);
  detectCollision(mango8,stone);
  detectCollision(mango9,stone);
   
  
}

function mouseDragged(){
	Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
	sling.fly();
}

function keyPressed(){
	if(keyCode===32){
		Matter.Body.setPosition(stone.body,{x:190 ,y:340})
		sling.attach(stone.body)
	}
}

function detectCollision(m1,s){
	mangoBody = m1.body.position;
	stoneBody = s.body.position;

	var distance = dist(mangoBody.x,mangoBody.y,stoneBody.x,stoneBody.y);
	if(distance< m1.r + s.r){
		Matter.Body.setStatic(m1.body,false);
	}

}

