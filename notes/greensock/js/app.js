// let exampleDiv = document.getElementById("txtCool");
// TweenMax.to(exampleDiv,{duration: 2, x:100 , y:100})
// //moves tect of hello world 100 down to the right
// //any css can go insde tweenmax.to

let navItems = document.getElementsByClassName("navitem");

for(let i = 0; i< navItems.length; i++){
    TweenLite.from(navItems[i], 
        {duration: 0.6, x: -100, alpha: 0, delay: i *0.1})
}