

// let path20 =  document.getElementById("path45");
// path20.addEventListener("click",onClick);

// function onClick(event){
//     event.target.style.fill = "black"
//     console.log("pain")

// }


let space = document.getElementsByClassName("SVGSux")
let i = space.length;
while (i -- )
space[i].addEventListener('mouseover',onMouseOver);

//space.addEventListener("click", onTrailClick);
function onMouseOver(event){
    event.target.style.fill= "gray"
    
}


