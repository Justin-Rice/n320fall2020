let txtStatInput = document.getElementById("txtStatInput");
//making the textarea a var

//functino being invoked in html file 
function textFocus(){
    resetAnimation(txtStatInput);
    //applies class name deselected to textarea
    txtStatInput.classList.remove("deselected");
    //applies class name selected to text area
    txtStatInput.classList.add("selected");


}

function textLeave(){
    resetAnimation(txtStatInput);

    //applies class name deselected to textarea
    txtStatInput.classList.remove("selected");
    //applies class name deselected to textarea
    txtStatInput.classList.add("deselected");
}
function resetAnimation(el){
    el.style.animation = "none";
    el.offsetHeight; 
    el.style.animation = null;
}