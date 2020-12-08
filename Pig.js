class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");
    this.Visiblity = 255;
  }

 display(){
   if(this.body.speed < 3){
    super.display();
   }
   else{
     World.remove(userWorld, this.body);
     push();
     this.Visiblity = this.Visiblity - 5;
     tint(255,this.Visiblity);//diminishing the solid appearance of pig by adding a transparent layer over it.
     image(this.image, this.body.position.x, this.body.position.y, 50, 50);
     pop();
   } 
 }
};

//Colors / transparency is often measured between 0 to 255.
//In Programming we use binary digits.(0 and 1)
//Also a unit of memory is 1 byte = 8 bits.
//  0 means 1 fully OFF byte (00000000)
//255 means 1 fully ON byte (11111111)