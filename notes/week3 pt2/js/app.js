
class VirtualPet {
    constructor(name){
        this.name = name;
        this.hunger = 50;
        this.energy = 60;

    }

    render(){
        return `
        <div>${this.name}</div>
        <div>Hunger: ${this.hunger}</div>
        <div>Energy: ${this.energy}</div>
        `;
    }
    feed(){
        this.hunger --;
    }
}

let myPet = new VirtualPet("Gidget");
let petDiv = document.getElementById("petDiv");
petDiv.innerHTML = myPet.render();

//function refered to in html that feeds pet
function feedPet(){
    myPet.feed();
    //this line is necesary to update the front end so changes go live when fed
    petDiv.innerHTML = myPet.render();
}