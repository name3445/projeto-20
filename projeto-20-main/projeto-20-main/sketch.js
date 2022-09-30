
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world

var bloco1,bloco2,bloco3


function setup() {
	createCanvas(550, 600);


	engine = Engine.create();
	world = engine.world;
// propriedade do solo
	var ground_options = {
		isStatic:true
	}
// corpo do solo
	ground = Bodies.rectangle(600,580,1200,2,ground_options)
	World.add(world,ground)
// propriedade do bloco1
	var bloco1_options = {
		restitution:0.5,
		friction:0.02,
		frictionAir:0
	  }
//crie a propriedade do bloco2 aqui
var bloco2_options = {
	restitution:0.8,
	friction:0.2,
	frictionAir:0
  }
//crie a propriedade do bloco3 aqui
var bloco3_options = {
	restitution:0.9,
	friction:0.12,
	frictionAir:4
  }

// corpo do bloco1
	bloco1 = Bodies.circle(250,10,10,bloco1_options);
	World.add(world,bloco1);

//crie o corpo do bloco2 e adicione ao mundo aqui
bloco2 = Bodies.rectangle(100,10,10,100,bloco2_options);
	World.add(world,bloco2);

//crie o corpo do bloco3 e adicione ao mundo aqui
bloco3 = Bodies.rectangle(400,10,10,50,bloco3_options);
	World.add(world,bloco3);


//estamos estilizando os corpos aqui
    fill(23);
	rectMode(CENTER);
	ellipseMode(RADIUS);
}


function draw() {
	
  background(23);
  Engine.update(engine)
	fill("green")
  //  desenhamos o retângulo do solo
  rect(ground.position.x,ground.position.y,1200);

  // desenhamos o ellipse do bloco1
  ellipse(bloco1.position.x,bloco1.position.y,30);
  
  //desenhe outro retangulo aqui para o bloco2
  rect(bloco2.position.x,bloco2.position.y,30);
  //desenhe outro retangulo aqui para o bloco3
  rect(bloco3.position.x,bloco3.position.y,30);


}



