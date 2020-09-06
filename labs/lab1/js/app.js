

//creating a circle class 
class Raindrop{
    constructor(rx, ry, rw, rh, color){
    this.x = rx;
    this.y = ry;
    this.w = rw;
    this.h = rh;
    this.color = color;
    //sets a random falling speed for the raindrops
    this.speed =8 + Math.random() *8;
    }

    update(){
    
     //makes circles fall at varying speeds depending on what this.speed gets
   this.y = this.y +this.speed;
   

    //makes the circles accelorate
   this.speed =this.speed + .1;
    //sets the color to fill the circle objects with
    fill(this.color);
    //draws ellipse
    ellipse(this.x, this.y, this.w, this.h);

    if(this.y >= 550){
        this.y = -200;
        count ++;
        if(count % 100 == 0 && count != 0){
            notblue = notblue + 5;

        }

    }
    if(this.speed >= 35){
        this.speed = 25;
    }
    

    }

   

   


}
//creates a new array of raindrops

var drops = [];
var notblue = 5;
var count = 0;


class Ground{
    constructor(gx, gy, gw, gh){
        this.x = gx;
        this.y = gy;
        this.w = gw;
        this.h = gh;
    }
    make(){
        //colors a rectangle
        fill('rgb(0%,'+ notblue +'%,1%)');
        //fill(0,0,0)
        //creates a rectangle 
        rect(this.x, this.y, this.w, this.h);
        

    }
}

//creates the ground
var g1 = new Ground(0, 550, 1000, 100);

function setup(){

    //is the background and sets the size
createCanvas(1000,600);

//creat instances of raindrop

for(i = 0; i < 100; i++){
    var raindrops = new Raindrop(Math.random()*(1000 - 1)+ 1,-300,5,15,[166,214,222]);
    drops.push(raindrops);
}




}


//updates at 60fps
function draw(){
    background(34,32,79);
//runs update function that i made in circle class


  for( x = 0; x < drops.length; x++){
  drops[x].update();
  }
  g1.make();
  //rect(500,500,500,500);

  
  


}