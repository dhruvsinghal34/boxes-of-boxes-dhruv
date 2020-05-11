const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var box,box1,box2;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
    box=Bodies.rectangle(200,200,50,50);
    box1=Bodies.rectangle(200,200,50,50);
    box2=Bodies.rectangle(200,200,50,50);
   
    World.add(world,box);
    World.add(world,box1);
    World.add(world,box2);
}

function draw(){
    background(0);
    Engine.update(engine);
   
    rectMode(CENTER);
    rect (box.position.x,box.position.y,50,50);
    rect (box1.position.x,box1.position.y,50,50);
    rect (box2.position.x,box2.position.y,50,50);
    
    
   
}






















