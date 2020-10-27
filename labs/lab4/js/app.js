

// let path20 =  document.getElementById("path45");
// path20.addEventListener("click",onClick);

// function onClick(event){
//     event.target.style.fill = "black"
//     console.log("pain")

// }


let count = 0;;

class Board {

    constructor(space){
        this.space = space
       
    }
    // fills the space thats cliked on with the right symbol
    fillSpace(){
        let turn = 0;
        let space = document.getElementsByClassName("SVGSux");
        for(let x = 0; x < space.length; x++){
            space[x].addEventListener('click',function(event){
              
                if(event.target.getAttribute("picked") == 0){
                if(turn % 2 == 0){
                    
                event.target.style.fill= "orange";
                    //changes the attribute number of picked so it cant be clicked again
                event.target.setAttribute("picked", "1")
                turn ++;
                }else{

                    event.target.style.fill= "green";
                    //changes the attribute number of picked so it cant be clicked again
                    event.target.setAttribute("picked", "2")


                    turn ++;
                }

            }

             }, false);
        }
        
    }

    reset(){

        player.pWon = 0;

        let space = document.getElementsByClassName("SVGSux");
        let newThing = document.getElementsByTagName("rect");


        for(let x = 0; x < space.length; x++){
            
              
                    
                  newThing[x].style.fill= "white";
                  newThing[x].setAttribute("picked", "0");

                  

    

    }

    

}
}
class Player {

    constructor(name, score, symbol){
        this.name = name;
        this.score =score;
        this.symbol = symbol;
         this.pWon = 0;

    }

     //checks to see if a player won 
     checkWin() {
        let space = document.getElementsByClassName("SVGSux");
        
         if(this.pWon == 0){
        if (space[0].getAttribute("picked") == 1 && space[1].getAttribute("picked") == 1 && space[2].getAttribute("picked") == 1 ||
            space[3].getAttribute("picked") == 1 && space[4].getAttribute("picked") == 1 && space[5].getAttribute("picked") == 1 ||
            space[6].getAttribute("picked") == 1 && space[7].getAttribute("picked") == 1 && space[8].getAttribute("picked") == 1 ||
            /*checks for horizontal matches for orange ( X ) */
            space[0].getAttribute("picked") == 1 && space[3].getAttribute("picked") == 1 && space[6].getAttribute("picked") == 1 ||
            space[1].getAttribute("picked") == 1 && space[4].getAttribute("picked") == 1 && space[7].getAttribute("picked") == 1 ||
            space[2].getAttribute("picked") == 1 && space[5].getAttribute("picked") == 1 && space[8].getAttribute("picked") == 1 ||
            /*checks for vertical matches for orange ( X ) */
            space[0].getAttribute("picked") == 1 && space[4].getAttribute("picked") == 1 && space[8].getAttribute("picked") == 1 ||
            space[2].getAttribute("picked") == 1 && space[4].getAttribute("picked") == 1 && space[6].getAttribute("picked") == 1
            /*checks for diagonal matches for orange ( X ) */
        ) {

            console.log("nice");
            this.pWon = 1;
            return 1;

        }

        if (space[0].getAttribute("picked") == 2 && space[1].getAttribute("picked") == 2 && space[2].getAttribute("picked") == 2 ||
            space[3].getAttribute("picked") == 2 && space[4].getAttribute("picked") == 2 && space[5].getAttribute("picked") == 2 ||
            space[6].getAttribute("picked") == 2 && space[7].getAttribute("picked") == 2 && space[8].getAttribute("picked") == 2 ||
            /*checks for horizontal matches for green ( 0 ) */
            space[0].getAttribute("picked") == 2 && space[3].getAttribute("picked") == 2 && space[6].getAttribute("picked") == 2 ||
            space[1].getAttribute("picked") == 2 && space[4].getAttribute("picked") == 2 && space[7].getAttribute("picked") == 2 ||
            space[2].getAttribute("picked") == 2 && space[5].getAttribute("picked") == 2 && space[8].getAttribute("picked") == 2 ||
            /*checks for vertical matches for green ( 0 ) */
            space[0].getAttribute("picked") == 2 && space[4].getAttribute("picked") == 2 && space[8].getAttribute("picked") == 2 ||
            space[2].getAttribute("picked") == 2 && space[4].getAttribute("picked") == 2 && space[6].getAttribute("picked") == 2
            /*checks for diagonal matches for green ( O ) */
        ) {

            console.log("nice2");
            this.pWon = 1;
            return 2;



        }

        }
    }



}

class Symbols {
    constructor(p1, p2){
        this.p1 = new Player("Steve", 0, "X");
        this.p2 = new Player("John", 0, 'O');
    }

    
        
//gives point to the player that won
addPoint(){

    if(this.p1.checkWin() == 1){
    this.p1.score ++ ;

    document.getElementById("p1score").innerHTML = this.p1.score; 
    }else if(this.p2.checkWin() == 2){
        this.p2.score ++;
        document.getElementById("p2score").innerHTML= this.p2.score; 
        console.log("stank")

    }
    console.log(this.p1.checkWin())
    console.log(this.p2.checkWin())

    
}
    

   
}




let symbol = new Symbols();
let board = new Board();
let player = new Player();

board.fillSpace();



//checks every click to see if a player has won
let space = document.getElementsByClassName("SVGSux");
for(let x = 0; x < space.length; x++){
    space[x].addEventListener('click',function(event){
      
                symbol.addPoint();
           
     }, false);
}

function clickButton(){
    board.reset();
    player.pWon = 0;
    
    }