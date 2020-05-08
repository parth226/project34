const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;var value = 0;
var x = 0; var y = 0;
var s = 0; var t = 0;

function setup(){
    var canvas = createCanvas(800,400);
    engine = Engine.create();
    world = engine.world;

    
    
}

function draw(){
    background(205,255,255);
    Engine.update(engine);
   
        line(x,y,s,t);
      

}
function mouseReleased() {
    x = mouseX;
    y = mouseY;
}
function mousePressed() {
    s = mouseX;
    t = mouseY;
}
