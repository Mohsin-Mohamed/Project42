const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var drops, umbrella, lightning

var drops = []
function preload(){
    lightningImg=loadImage("images/1.png")
}

function setup(){
   createCanvas(400,600)
   engine=Engine.create();
   world=engine.world;
   umbrella = new Umbrella(200,450,100,300);
    
}

function draw(){
    background(0)
    Engine.update(engine)
    umbrella.display()

    if(frameCount%2===0){
        drops.push(new Drops(random(width/2-200, width/2+200), 5,5));
    }

    for (var j = 0; j < drops.length; j++){
        drops[j].display();
    }

}

