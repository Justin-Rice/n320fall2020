

// let path20 =  document.getElementById("path45");
// path20.addEventListener("click",onClick);

// function onClick(event){
//     event.target.style.fill = "black"
//     console.log("pain")

// }
//tl, tm, tr, cl,c, cr, br, bc, bl,
// this.tl =  tl;
// this.tm =  tm;
// this.tr =  tr;
// this.cl =  cl;
// this.c =  c;
// this.cr =  cr;
// this.br =  br;
// this.bm =  bm;
// this.bl =  bl;

let count = 0;;

class Board {

    constructor(space){
        this.space = space
       
    }

    play(){



    }
    

}

class player {

    constructor(name, score, symbol){
        this.name = name;
        this.score =score;
        this.symbol = symbol;


    }

    //gives point to the player that won
    addPoint(){
        if(p1.checkWin == true){
        p1.score ++
        }else{
            p2.score ++;
        }
    }


}

class Symbols{
    constructor(p1, p2){
        this.p1 = new player("Steve",0, "X");
        this.p2 = new player("John", 0, 'O')
    }

    // fills the space thats cliked on with the right symbol
    fillSpace(){
        let turn = 0;
        let space = document.getElementsByClassName("SVGSux");
        for(let x = 0; x < space.length; x++){
            space[x].addEventListener('click',function(event){
              
                if(event.target.getAttribute("picked") == 1){
                if(turn % 2 == 0){
                    
                event.target.style.fill= "gray";
                    //changes the attribute number of picked so it cant be clicked again
                event.target.setAttribute("picked", 0)
                turn ++;
                }else{

                    event.target.style.fill= "black";
                    //changes the attribute number of picked so it cant be clicked again
                    event.target.setAttribute("picked", 0)

                    turn ++;
                }

            }

            
             }, false);
        }
        
    }
        
//for (var x = 0; x < space.length; x++)
        
    

    //checks to see if a player won 
    checkWin(){
        

    }
    // checks to see what spaces are filled 
    checkFilled(){

    }

    
}




let symbol = new Symbols();
symbol.fillSpace();






