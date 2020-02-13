var menu_state = false

function menuToggle(){
    if (menu_state === false){
    document.querySelector("#menu_contents").style.maxHeight = "500px";
        menu_state = true;
}   else{
    document.querySelector("#menu_contents").style.maxHeight = "0px";
    menu_state = false;
    }   
}