var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions =[];
var divisionHeight=300;
var score =0;
function setup() {
  createCanvas(800, 600);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

  //create division objects
  for (var k = 0; k <=800; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }

  //create 1st row of plinko objects
  for (var j = 55; j <=width; j=j+50) { 
    plinkos.push(new Plinko(j,35));
  }

  //create 2nd row of plinko objects
  for (var a =30; a <=width-10; a=a+50) 
  {
    plinkos.push(new Plinko(a,75));
  }

  //create 3rd row of plinko objects
  for (var v =65; v <=width-20; v=v+50) 
  {
    plinkos.push(new Plinko(v,125));
  }
  
  //create 4th row of plinko objects

  for (var y =40; y <=width-25; y=y+50) 
  {
    plinkos.push(new Plinko(y,175));
  }
  
  //create particle objects
  




}
 


function draw() {
  background("black");
  textSize(20)
  
  Engine.update(engine);
  ground.display();
  console.log(frameCount);



  if(frameCount%60===0){
    particles.push(new Particle(random(width/2-10,width/2+10),10,10))}
  
  //display the plinkos 
  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();   
  }
  for (var p = 0; p < particles.length; p++) {
    particles[p].display();
      }

  //display the divisions
  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }

  



}
