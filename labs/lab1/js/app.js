

//creating a circle class 
class Circle{
    constructor(cx,cy,radius,color){
    this.x = cx;
    this.y = cy;
    this.radius = radius;
    this.color = color;
    //sets a random falling speed for the circles
    this.speed =8 + Math.random() *8;
    }

    update(){
    
     //makes circles fall at varying speeds depending on what this.speed gets
    this.y = this.y +this.speed;

    //makes the circles accelorate
    this.speed =this.speed + .1;
    //sets the color to fill the circle objects with
    fill(this.color);
    //draws circle using data from mycircle object
    circle (this.x, this.y, this.radius);
    }


}
//creates a new array of circle objects 
var myCircles = [];
myCircles[0] = new Circle(20,0, 10, [166,214,222]);
myCircles[1] = new Circle(300,10, 100, [227,137,64]);

class Ground{
    constructor(gx, gy, gw, gh, color){
        this.x = gx;
        this.y = gy;
        this.w = gw;
        this.h = gh;
        this.color = color;
    }
    update(){
        //colors a rectangle
        fill(this.color);
        //creates a rectangle 
        rect(this.x, this.y, this.w, this.h);

    }
}

//creates the ground
var g1 = new Ground(0, 550, 1000, 100, [98,95,96]);

function setup(){

    //is the background and sets the size
createCanvas(1000,600);

}


//updates at 60fps
function draw(){
    background(34,32,79);
//runs update function that i made in circle class

  myCircles[0].update();
  myCircles[1].update();
  g1.update();

  //rect(500,500,500,500);

  


}