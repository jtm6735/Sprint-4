"use strict";
import{createPlayerSprite} from './classes.js';
export{init};
let player;
let mouseX;
let mouseY;
let backGroundImage = new Image();
let imageData;
let delta = 0;
let lastFrameTimeMS = 0;
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const screenWidth = 800;
const screenHeight = 700;
const keyboard = Object.freeze({
    LEFT:   37,
    UP:     38,
    RIGHT:  39,
    DOWN:   40
});
const keys = [];



function init(argImageData){
    //backGroundImage.src
    imageData = argImageData;
    
    player = createPlayerSprite(400,350,50,50,"face.png",.3);

    loop();
}

/*
    Functions go below here
*/

function loop(timestamp){
    requestAnimationFrame(loop);
    delta=timestamp-lastFrameTimeMS;
    lastFrameTimeMS=timestamp;
    drawHUD(ctx);
}

function drawHUD(ctx){

    /*
    getMousePos();
    callDrawPlayer();
    */
    // Partial controls for arrow keys
// Up and down arrow keys
if(keys[keyboard.DOWN]){
    console.log("down check #1");
    if(player.y+player.height+player.dy <= 800){
        player.dy=player.speed;
        
    }
} else if(keys[keyboard.UP]){
    console.log("up check #1");
    if(player.y >= 0){
        player.dy = -player.speed;
        
    }
} else{
    player.dy = 0;
}

// Left and right arrow keys
if(keys[keyboard.RIGHT]){
    console.log("right check #1");
    if(player.x+player.width+player.dx <= 700){
        player.dx=player.speed;
        
    }
} else if(keys[keyboard.LEFT]){
    console.log("left check #1");
    if(player.x >= 0){
        player.dx = -player.speed;
        
    }
}
    
if(player.x+player.width+player.dx>= 810){
    player.dx = -player.speed/2;
    //console.log("right check #2");
}
if(player.x <= 0){
    player.dx = player.speed/2;
    //console.log("left check #2");
}
if(player.y <= 0){
    player.dy = player.speed/2;
    //console.log("up check #2");
}
if(player.y+player.height+player.dy >= 710){
    player.dy = -player.speed/2;
    //console.log("down check #2");
}
   
ctx.save();
player.draw(ctx);    
ctx.restore();

player.update(delta); 
}

window.onkeyup = (e) => {
    keys[e.keyCode] = false;
    e.preventDefault();
}


window.onkeydown = (e) =>{
    var char = String.fromCharCode(e.keyCode);
    keys[e.keyCode] = true;
}
/*
function getMousePos(){
    canvas.addEventListener('mousemove', function(m){
        mouseX = m.x;
        mouseY = m.y;
    })
}

function callDrawPlayer(){
    player.x = mouseX;
    player.y = mouseY;
    player.draw(ctx);
}
*/