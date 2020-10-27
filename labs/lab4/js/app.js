

// let path20 =  document.getElementById("path45");
// path20.addEventListener("click",onClick);

// function onClick(event){
//     event.target.style.fill = "black"
//     console.log("pain")

// }


var count = 0;

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
        console.log(this.pWon);
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

let player = new Player();

class Board {

    constructor(space){
        this.space = space
       
    }
    // fills the space thats cliked on with the right symbol
    fillSpace(){
        let space = document.getElementsByClassName("SVGSux");
        for(let x = 0; x < space.length; x++){
            space[x].addEventListener('click',function(event){
              
                if(event.target.getAttribute("picked") == 0){
                if(count % 2 == 0){
                    
                event.target.style.fill= "orange";
                    //changes the attribute number of picked so it cant be clicked again
                event.target.setAttribute("picked", "1")
                count ++;
                }else{

                    event.target.style.fill= "green";
                    //changes the attribute number of picked so it cant be clicked again
                    event.target.setAttribute("picked", "2")


                    count ++;
                }

            }

             });
        }
        
    }

    reset(){
       // console.log(player.pWon);
        count = 0;
        pp1.pWon = 0;
        pp2.pWon = 0;


        let space = document.getElementsByClassName("SVGSux");
        let newThing = document.getElementsByTagName("rect");


        for(let x = 0; x < space.length; x++){
            
              
                    
                  newThing[x].style.fill= "white";
                  newThing[x].setAttribute("picked", "0");

                  

    

    }

    

}
}

let board = new Board();
let pp1 = new Player("Steve", 0, "X");
let pp2 = new Player("John", 0, 'O');
class Symbols {
    constructor(p1, p2){
        this.p1 = pp1
        this.p2 = pp2
    }

    
        
//gives point to the player that won
addPoint(){
    console.log(board.turn)
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



board.fillSpace();



//checks every click to see if a player has won
let space = document.getElementsByClassName("SVGSux");
for(let x = 0; x < space.length; x++){
    space[x].addEventListener('click',function(event){
      
                symbol.addPoint();
           
     });
}

function clickButton(){
    board.reset();
    player.pWon = 0;
    
    }