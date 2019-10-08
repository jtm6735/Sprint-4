"use strict";
import{createPlayerSprite, createObject} from './classes.js';
export{init};
let player;
let mouseX;
let mouseY;
let backGroundImage = new Image();
let imageData;
let delta = 0;
let canvasObject = document.getElementById("canvasContent")
let lastFrameTimeMS = 0;
let fish0;
let fish1;
let fish2;
let fish3;
let fish4;
let fish5;
let fish6;
let plastic;
let objectContainer = [];
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");




function init(argImageData){
    backGroundImage.src = "media/deepSeaBG.png";
    canvas.width = canvasObject.offsetWidth;
    canvas.height = canvasObject.offsetHeight;
    fish0 = createObject((Math.floor(Math.random()*canvas.width)),(Math.floor(Math.random()*canvas.height)),"media/Animals2_blobfish-grey.png");
    fish1 = createObject((Math.floor(Math.random()*canvas.width)),(Math.floor(Math.random()*canvas.height)),"media/Animals2_octopus-grey.png");
    fish2 = createObject((Math.floor(Math.random()*canvas.width)),(Math.floor(Math.random()*canvas.height)),"media/coelacanth-grey.png");
    fish3 = createObject((Math.floor(Math.random()*canvas.width)),(Math.floor(Math.random()*canvas.height)),"media/firefly-squid-grey.png");
    fish4 = createObject((Math.floor(Math.random()*canvas.width)),(Math.floor(Math.random()*canvas.height)),"media/henricia_bloodstar-grey.png");
    fish5 = createObject((Math.floor(Math.random()*canvas.width)),(Math.floor(Math.random()*canvas.height)),"media/sea-toad-grey.png");
    fish6 = createObject((Math.floor(Math.random()*canvas.width)),(Math.floor(Math.random()*canvas.height)),"media/sixgill-shark-grey.png");
    plastic = "./media/plastic-grey.png";
    objectContainer[0] = fish0;
    objectContainer[1] = fish1;
    objectContainer[2] = fish2;
    objectContainer[3] = fish3;
    objectContainer[4] = fish4;
    objectContainer[5] = fish5;
    objectContainer[6] = fish6;
    objectContainer[7] = plastic;
    imageData = argImageData;

    player = createPlayerSprite(400,350,60,60,"media/angler-fish.png",.3);

    loop();
}


function loop(timestamp){
    requestAnimationFrame(loop);
    delta=timestamp-lastFrameTimeMS;
    lastFrameTimeMS=timestamp;
    drawHUD(ctx);
}

function drawHUD(ctx){
    ctx.drawImage(backGroundImage,0,0);
    getMousePos();
    callDrawPlayer();
 
function getMousePos(){
    canvas.addEventListener('mousemove', function(m){
        mouseX = m.x;
        mouseY = m.y;
    })
}

function callDrawPlayer(){
    player.x = mouseX - 32;
    player.y = mouseY - 130;
    player.draw(ctx);
}
    
function aabbCollision(xPos,xPos2,yPos,yPos2, width, width2, height, height2){
    if(xPos < xPos2 + width2 &&
       xPos + width > xPos2 &&
       yPos < yPos2 + height2 &&
       height + yPos > yPos2){
        return true;
    }
}
}