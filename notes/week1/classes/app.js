// //dog object
// var myDog1 = {
//     name: "Jimbo",
//     height: 10,
//     color: "brown",
//     bark: function(){
//         console.log(this.name + " barks!")
//     }

// }
// myDog1.bark();

// animal class
class Animal{
    constructor(name,weight,color){
        this.name = name; 
        this.weight = weight;
        this.color = color;    }
}



class Dog extends Animal{
    constructor(name,weight,color){
        super(name,weight, color);
        this.kind = "dog";

    }
    bark(){
        console.log(this.name + " woofs!")
            }

}

let aDog = new Dog('Rex',45,'black');
console.log(aDog);
aDog.bark();

//dog class
// class Dog{
//     constructor(name,height,color){
//         this.name = name; 
//         this.height = height;
//         this.color = color;
//     }
//     bark(){
//         console.log(this.name + "woofs!")
//     }
// }


// creating instance of dog object
// var myDog = new Dog("giselle", 10 ,"yellow");

// //making clifford bark 400 times
// for( var i = 0; i < 400; i++){
// var myDog3 = new Dog("Clifford", 400, "red");
// myDog3.bark();
// }
// console.log(myDog);
// myDog.bark();
