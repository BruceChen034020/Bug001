/* Global variables */
var button1; // (Button)

var timer; // (Timer array)

/* p5 functions */
function setup(){

    button1 = document.createElement("button");
    document.body.appendChild(button1);
    button1.innerHTML = "Confirm";
    button1.addEventListener("click", button1_Clicked);

}

function draw(){

}

/* User-defined functions */
function button1_Clicked(){ // onclick event (void)
    console.log("button1 clicked");
    
    
        timer = new Timer();
        timer.initialization();
    

}
