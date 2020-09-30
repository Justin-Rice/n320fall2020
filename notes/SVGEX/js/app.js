let mainRect = document.getElementById("mainRect")

mainRect.addEventListener("click", onTrailClick);
function onTrailClick(event){
    event.target.style.fill= "#00FF00"
}

let t =0;
//start animation
drawFrame();

function drawFrame(){

    t++;
    let recty = Number(mainRect.getAttribute("y"));
//change the value of recty
recty +=Math.sin(t/10);
//set the value of rect y to what it was changed to moving the rect
mainRect.setAttribute("y", recty);



//animation function   
requestAnimationFrame(drawFrame);
}