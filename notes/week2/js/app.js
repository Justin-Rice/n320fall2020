//object
var item = {
    name: "Shovel",
    graphic: "img/shovel.jpg"
}

// getting the template tag in html 
var temp = document.getElementById("iitem");
//cloning the content in the template
var clone = temp.content.cloneNode(true);

clone.querySelector(".name").innerHTML = item.name;


//chnages attribute to whatever the item graphic is
clone.querySelector(".igraphic").setAttribute("src", item.graphic);



document.body.appendChild(clone);





//console.log(clone);
//console.log(clone.querySelector(".igraphic"));