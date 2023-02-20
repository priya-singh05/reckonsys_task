var top = 0;
var left = 0;
const circles  = document.getElementsByClassName("circle");

function colorChange() {
    var redSlider = document.getElementById("red");
    var greenSlider = document.getElementById("green");
    var blueSlider = document.getElementById("blue");
    var redValue = document.getElementById("text-input-red");
    var greenValue = document.getElementById("text-input-green");
    var blueValue = document.getElementById("text-input-blue");
    var red = redSlider.value;
    var green = greenSlider.value;
    var blue = blueSlider.value;
    redValue.value = red;
    greenValue.value = green;
    blueValue.value = blue;
   
    document.getElementById("display").style.backgroundColor="rgb("+red+","+green+","+blue+")";
}

function colorChangeNI() {
    var redSlider = document.getElementById("red");
    var greenSlider = document.getElementById("green");
    var blueSlider = document.getElementById("blue");
    var redValue = document.getElementById("text-input-red");
    var greenValue = document.getElementById("text-input-green");
    var blueValue = document.getElementById("text-input-blue");
    var red = redValue.value;
    var green = greenValue.value;
    var blue = blueValue.value;
    redSlider.value = red;
    greenSlider.value = green;
    blueSlider.value = blue;
   
    document.getElementById("display").style.backgroundColor="rgb("+red+","+green+","+blue+")";
}