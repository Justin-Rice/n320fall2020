

// let space =  document.getElementById("space");
// space.addEventListener("click",onMouseOver);

// function onMouseOver(event){
//     event.target.style.fill = "#000000"
//     console.log("pain")

// }

let space = document.getElementById("space")

space.addEventListener("click", onTrailClick);
function onTrailClick(event){
    event.target.style.fill= "#00FF00"
}
