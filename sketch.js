// angry birds game by aarnav.

//declaring variables of different data types

// string
var string = "this is a string";
console.log(string);

// number
var num = 100;
console.log(num);

// bullian
var bool = true;
console.log(bool);

// undefined
var object;
console.log(object);

// reasigning the same undefined object to null.
//null.
object = null;
console.log(object);

// examples of aray
// array holding same data type
var array1 =[1,2,3,4,5];
console.log(array1);
// array holding different data type
var array2 =["hello",12,true,null];
console.log(array2);



const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, userWorld;


var bird;
var pig1, pig2;
var ground, platform, bg;
var log1, log2, log3, log4;
var box1, box2, box3, box4, box5;

var constrainedLog,chain;

function preload() {
    bg = loadImage("sprites/bg.png");
}

function setup() {
    var canvas = createCanvas(1200, 400);
    engine = Engine.create();
    userWorld = engine.world;

    ground = new Ground(600, height, 1200, 20);
    platform = new Ground(100, 305, 300, 172);

    box1 = new Box(700, 350, 70, 70);    //calling constructor function of BOX class to create new object
    box2 = new Box(920, 350, 70, 70);
    pig1 = new Pig(810, 350);
    log1 = new Log(810, 305, 300, PI / 2);

    box3 = new Box(700, 270, 70, 70);
    box4 = new Box(920, 270, 70, 70);
    pig3 = new Pig(810, 265);

    log2 = new Log(810, 210, 300, PI / 2);

    box5 = new Box(810, 160, 70, 70);
    log3 = new Log(760, 120, 150, PI / 7);
    log4 = new Log(870, 120, 150, -PI / 7);

    bird = new Bird(200, 50);
    
    constrainedLog = new Log(230,180,80,PI / 2);
    chain = new SlingShot(bird.body, {x:200,y:50});

}

function draw() {
    background(bg);
    Engine.update(engine);
   
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    log2.display();

    box5.display();
    log3.display();
    log4.display();

    bird.display();
    platform.display();

    
   
    
    chain.display();
}

function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
    chain.fly();
}