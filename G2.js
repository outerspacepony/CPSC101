var canvas;
var ctx;

var dx = 5, dy = 5;
var x = 200, y = 5 ;
var width = 600, height = 600;

var mazeimg = new Image();

var collision = 0 ;

var myMousePiece;

function clear() {
    ctx.clearRect(0,0,width,height);
    ctx.drawImage(mazeimg,0,0);
}

function startGame() {
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");
    mazeimg.src = "maze.gif";
    //mouse character
    return setInterval(draw, 5);
}

function keyDown(e) {
    switch(e.keyCode) {
        //up arrow    
        case 38: if (y - dy > 0 ){
            y -=dy;
            clear();
            checkCollision();
            if(collision == 1) {
                y += dy;
                collision = 0;
            }
        }
        break;
        //down arrow
        case 40: if (y+ dy <height) {
            y+=dy;
            clear();
            checkCollision();
            if(collision == 1) {
                y-=dy;
                collision = 0;
            }
        }
        break;
        //right
        case 39: if((x + dx < width)) {
        x += dx;
        clear();
        checkCollision();
        if (collision == 1) {
        x-=dx;
        collision = 0;
            }
        }
        break;
        //left
        case 37: if(x - dx >0){
        x -= dx;
        clear();
        checkCollision();
        if (collision == 1) {
        x += dx;
        collision = 0;
            }
        }
        break;
        }
    }


function checkCollision() {
    var imgd = ctx.getImageData(x,y,10,10);
    var pixel = imgd.data;
    for (var i = 0; j = pixel.length, i < j; i+=4 ) {
        if (pixel[i] == 0) {
            collision = 1;
        }
    }    
}

function rect(x,y,w,h) {
    ctx.beginPath();
ctx.rect(x,y,w,h);
ctx.closePath();
ctx.fill();
}


function draw() {
clear();
ctx.fillStyle = "black";
rect(x, y, 15,15);
    
}


startGame();
window.addEventListener("keydown",keyDown,true);

/* 
var mouseimg = new image();
function draw() {
    clear();
    ctx.drawImage(mouseimg,x,y,15,15); 
    mouseimg.src = "mouse.jpg";
} 
*/

