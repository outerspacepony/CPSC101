function toRad(angle) {
    var radians = angle * ((Math.PI/180));
    return radians
}

var validMin = 1;
var validMax = 10;

function isValidNumber(inputNum, validMin, validMax) {
    if ((isNaN(inputNum)) || (isNaN(validMax)) || (isNaN(validMin))) {
        var number = false;
    } else if ( (inputNum >= validMin) || (inputNum <= validMax) ) {
        var number = true;
    }  else {
        var number = false;
    }
    return number
}


function drawObject(x, y) {    
    var canvas = document.getElementById("canvas1");
    var ctx = canvas.getContext("2d");
    var radius = 100;
    ctx.save();  
    ctx.fillStyle = "brown";
    ctx.beginPath();
    ctx.arc(x,y,radius,0, 2 * Math.PI );
    ctx.fill();
    ctx.restore();
    //head
    ctx.save();
    ctx.fillStyle = "brown";
    ctx.beginPath();
    ctx.translate(50,-radius-20);
    ctx.arc(x,y,radius-55,0, 2 * Math.PI );
    ctx.fill();
    ctx.restore();
    //ear
    ctx.save();
    ctx.fillStyle = "brown";
    ctx.beginPath();
    ctx.translate(-50,-radius-20);
    ctx.arc(x,y,radius-55,0, 2 * Math.PI );
    ctx.fill();
    ctx.restore();
    //ear
}

var N = prompt("How many bears would you like?");

while (isValidNumber(N,validMin,validMax)){ 
    continue;
}
var R = prompt("What is the radius (0 to 200)?")

while (isValidNumber(R,validMin,validMax)) {
    break;
}

for (var i=0; i < N; i++){
    var ang = i * ((Math.PI * 2) / N);
    var x = Math.cos(toRad(ang)) * R + 300;
    var y = Math.sin(toRad(ang)) * R + 300;
    drawObject(x, y);
}

