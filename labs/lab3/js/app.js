class VendingMachine {
    constructor(candyName1, candyName2, chipName ){
        this.candyName1 = candyName1;
        this.candyCount1 = 30;
        this.candyName2 = candyName2;
        this.candyCount2 = 25;
        this.chipName = chipName;
        this.chipCount = 15;
    }
    render(){
        return `
        <div>${this.candyName1}: ${this.candyCount1}</div>
        <button onclick="purchaseC1()">Buy ${this.candyName1}</button>

        <div>${this.candyName2}: ${this.candyCount2}</div>
        <button onclick="purchaseC2()">Buy ${this.candyName2}</button>

        <div>${this.chipName}: ${this.chipCount}</div>
        <button onclick="purchaseChips()">Buy ${this.chipName}</button>
    
        `;
    }

    purchaseCandy1(){
        if(this.candyCount1 > 0){
        this.candyCount1 --;
        }
        
    }
    purchaseCandy2(){
        if(this.candyCount2 > 0){
        this.candyCount2 --;
        }
        
    }
    purchaseChip(){
        if(this.chipCount > 0){
        this.chipCount --;
        }
        
    }
    
}
let snackMachine = new VendingMachine("Hersheys","M&M's","Doritos");

let snackDiv = document.getElementById("snackDiv");
snackDiv.innerHTML = snackMachine.render();

function purchaseC1(){
    snackMachine.purchaseCandy1();
    snackDiv.innerHTML = snackMachine.render();
}

function purchaseC2(){
    snackMachine.purchaseCandy2();
    snackDiv.innerHTML = snackMachine.render();
}

function purchaseChips(){
    snackMachine.purchaseChip();
    snackDiv.innerHTML = snackMachine.render();
}