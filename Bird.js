class Bird extends BaseClass {
  constructor(x, y) {
    super(x, y, 50, 50);    //calling constructor of base class
    this.image = loadImage("sprites/bird.png"); //loading image of bird
    this.smokeImage = loadImage("sprites/smoke.png");  //loading image of smoke
   
    this.trajectory = []; //declaring an empty array with name : *trajectory*  by use of [ ] symbol
    //it will be used to store path of bird as it is released till the the point it collides with other game objects
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    super.display();


    //store positions of the bird object as it moves with speed greater than 10 AND horizontal position is beyond 200
    if (this.body.velocity.x > 10 && this.body.position.x > 200) {

      /*
      -every position has 2 coordinates: x and y, one position is extracted at on time 
        saved in position as array of 2 items
      -position is an array two items [x,y]
      -position[] =[x0,y0]
      -position[0] = x0 
      -position[1] = y0
      */
      var position = [this.body.position.x, this.body.position.y]; 
    
      /*
      - each time a new position is saved in variable position=[x,y] 
        it is pushed(stored) on array trajectory as one single item
      */
      this.trajectory.push(position);

    }


    /* 
    -created loop to go over each item in trajectory array
    -for each value i, smoke image will be added, i will be one value less than length  of array, i = index value

    -                  0        1        2        3        4        5        6        7
    -trajectory[] =[[x0,y0], [x1,y1], [x2,y2], [x3,y3], [x4,y4], [x5,y5], [x6,y6], [x7,y7]]
   
   
    -     index:      0    1   ----  [0 index of trajectory arra][0 index of inside array]     --- 1 index of trajectory array      1 index of array



    -trajectory[0] = [x0, y0]  ---    trajectory[0][0] = x0,           --- trajectory[0][1] = y0 
   
   
   
    -trajectory[6] = [x6, y6]  ---  trajectory[6]                    [0] = x6,          --- trajectory[6][1] = y6 

    -for value of 0: image(this.smokeImage, this.trajectory[0][0], this.trajectory[0][1])
    -for value of 0: image(this.smokeImage, x0, y0)
    -for value of 6: image(this.smokeImage, x6, y6)    
    -for value of 13: image(this.smokeImage, x13, y13)    
    -for value of 72: image(this.smokeImage, x72, y72)   
    

    */
    for (var i = 0; i < this.trajectory.length; i++) {
      image(this.smokeImage, this.trajectory[i][0], this.trajectory[i][1]);
    }
  }
}