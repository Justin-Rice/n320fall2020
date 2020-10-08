

    let thing = document.getElementById("all");
    TweenLite.from(thing, {duration: 1, alpha:0, x: 200 })

   let column = document.getElementsByClassName("column");
   

   for(var x = 0; x < column.length; x++){
       column[x].addEventListener('mouseover', function(event){
           TweenLite.to(event.target,{duration: 1, scale: 1.25});},false);
       
       column[x].addEventListener('mouseout', function(event){
        TweenLite.to(event.target,{duration: 1, scale: 1});},false);

        column[x].addEventListener('click', function(event){
            TweenLite.to(event.target,{ duration:1 ,scale: 2, alpha: 0});},false);
    }