const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;

var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight = 300;
var particle1;
var ground;

var gameState;
var END,PLAY;

var score = 0;
var turn = 5;


function setup() {
  var canvas = createCanvas(872,800);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(width/2,height,width,20);
  
  for(var k = 0; k<=width; k = k+80){
    divisions.push(new Division(k,height-divisionHeight/2,10,divisionHeight));
  }

  for(var j = 40; j<=width;j=j+40){
    plinkos.push(new Plinko(j,75));
  }

  for(var j=15; j<=width-10;j=j+50){
    plinkos.push(new Plinko(j,175))
  }

  for(var j = 40; j<=width;j=j+40){
    plinkos.push(new Plinko(j,275));
  }

  for(var j = 15; j<=width;j=j+40){
    plinkos.push(new Plinko(j,375));
  }

}

function draw() {
  background(0);  
 
  Engine.update(engine);
  ground.Display();
  for (var i = 0; i < plinkos.length; i++) {
     
    plinkos[i].display();
    
  }
 
  if(particle1!=null)
  {
       particle1.display();
       if(particle1.body.position.y > 760){
        if(particle1.body.position.x<300){
          score +=500;
          particle1 = null;
        }
        else if(particle1.body.position.x>301 && particle.body.position.x<600){
          score +=100;
          particle1 = null;
        }
        else if(particle1.body.position.x>601 && particle.body.position.x<900){
          score +=200;
          particle1 = null;
        }
       }
  }

  for(var k=0;k<divisions.length;k++){
    divisions[k].Display();
}

textSize(32);
text("Score:" + score,25,50);



  drawSprites(); 
}

function mousePressed () {
if (gameState!=="end") {
  count++;
  particle1 = new Particle (mouseX, 10, 10, 10);
}
}

function mouseReleased() {
 if (gameState!=="end") {
  particle1 = new Partical (mouseX,0,10); 
 } 
}