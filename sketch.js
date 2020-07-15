
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;

var dustbinObj, paperObject,groundObject	
var world;
var launcher1;

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	dustbinObj=new dustbin(1200,650);
	paperObject=new paper(200,450,40);
	groundObject=new ground(width/2,670,width,20);
	//Create a Ground
	

	var render = Render.create({
	  element: document.body,
	  engine: engine,
	  options: {
	    width: 1200,
	    height: 700,
	    wireframes: false
	  }
	});

	Engine.run(engine);
	//Render.run(render);

	launcher1 =new Launcher (paperObject.body,{x: 230, y: 450});
  
}


function draw() {
  rectMode(CENTER);
  background(0);
 
  dustbinObj.display();
  paperObject.display();
  groundObject.display();
  launcher1.display();
  
  
 
}

//function keyPressed() {
//  	if (keyCode === UP_ARROW) {
//
//    	Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
//   
// 	}
//}

function mouseDragged() {
	Matter.Body.setPosition(paperObject.body, {x: mouseX, x: mouseY })
}

function mouseReleased () {
	launcher1.fly();
}

