"use strict";
import{createSprite, createObject} from './classes.js';
export{init};
let player;
let fish0;
let fish1;
let fish2;
let fish3;
let fish4;
let fish5;
let fish6;
let plastic;
let mouseX;
let mouseY;
let nextPage = 'https://www.google.com/webhp?hl=en&sa=X&ved=0ahUKEwimhcHA74vlAhXxY98KHYkODKgQPAgH';
let backGroundImage = new Image();
let delta = 0;
let canvasObject = document.getElementById("canvasContent")
let lastFrameTimeMS = 0;
let root = document.documentElement;

let objectContainer = [];
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");




function init(argImageData){
    backGroundImage.src = "media/deepSeaBG.png";
    canvas.width = canvasObject.offsetWidth;
    canvas.height = canvasObject.offsetHeight;
    

    player = createSprite(400,350,104,86,"media/angler-fish.png");

    fish0 = createSprite((Math.floor(Math.random()*canvasObject.offsetWidth-80)),(Math.floor(Math.random()*canvasObject.offsetHeight-40)),95,60,"media/Animals2_blobfish-grey.png",false);
    fish1 = createSprite((Math.floor(Math.random()*canvasObject.offsetWidth-80)),(Math.floor(Math.random()*canvasObject.offsetHeight-40)),90,70,"media/Animals2_octopus-grey.png",false);
    fish2 = createSprite((Math.floor(Math.random()*canvasObject.offsetWidth-80)),(Math.floor(Math.random()*canvasObject.offsetHeight-40)),100,80,"media/coelacanth-grey.png",false);
    fish3 = createSprite((Math.floor(Math.random()*canvasObject.offsetWidth-80)),(Math.floor(Math.random()*canvasObject.offsetHeight-40)),80,80,"media/firefly-squid-grey.png",false);
    fish4 = createSprite((Math.floor(Math.random()*canvasObject.offsetWidth-80)),(Math.floor(Math.random()*canvasObject.offsetHeight-40)),80,60,"media/henricia_bloodstar-grey.png",false);
    fish5 = createSprite((Math.floor(Math.random()*canvasObject.offsetWidth-80)),(Math.floor(Math.random()*canvasObject.offsetHeight-40)),100,80,"media/sea-toad-grey.png",false);
    fish6 = createSprite((Math.floor(Math.random()*canvasObject.offsetWidth-80)),(Math.floor(Math.random()*canvasObject.offsetHeight-40)),95,82,"media/sixgill-shark-grey.png",false);
    plastic = createSprite((Math.floor(Math.random()*canvasObject.offsetWidth-80)),(Math.floor(Math.random()*canvasObject.offsetHeight-40)),80,80,"media/plastic-grey.png",false);
    objectContainer[0] = fish0;
    objectContainer[1] = fish1;
    objectContainer[2] = fish2;
    objectContainer[3] = fish3;
    objectContainer[4] = fish4;
    objectContainer[5] = fish5;
    objectContainer[6] = fish6;
    objectContainer[7] = plastic;

    
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

        root.style.setProperty('--mouse-x',m.clientX + "px");
        root.style.setProperty('--mouse-y',m.clientY + "px");
    })
}

function callDrawPlayer(){
    player.x = mouseX - 32;
    player.y = mouseY - 130;
    player.draw(ctx);
    fish0.draw(ctx);
    fish1.draw(ctx);
    fish2.draw(ctx);
    fish3.draw(ctx);
    fish4.draw(ctx);
    fish5.draw(ctx);
    fish6.draw(ctx);
    plastic.draw(ctx);
}   
    
function aabbCollision(xPos,xPos2,yPos,yPos2, width, width2, height, height2){
    if(xPos < xPos2 + width2 &&
       xPos + width > xPos2 &&
       yPos < yPos2 + height2 &&
       height + yPos > yPos2){
        return true;
    }
}
   
    if(aabbCollision(fish0.x,player.x,fish0.y,player.y, fish0.width, player.width, fish0.height, player.height)){
        fish0.boolValue = true;
        document.getElementById("blob").style.visibility = "visible";
        
    }
    if(aabbCollision(fish1.x,player.x,fish1.y,player.y, fish1.width, player.width, fish1.height, player.height)){
        fish1.boolValue = true;
        document.getElementById("dumbo").style.visibility = "visible";
    }
    if(aabbCollision(fish2.x,player.x,fish2.y,player.y, fish2.width, player.width, fish2.height, player.height)){
        fish2.boolValue = true;
        document.getElementById("coela").style.visibility = "visible";
    }
    if(aabbCollision(fish3.x,player.x,fish3.y,player.y, fish3.width, player.width, fish3.height, player.height)){
        fish3.boolValue = true;
        document.getElementById("firefly").style.visibility = "visible";
    }
    if(aabbCollision(fish4.x,player.x,fish4.y,player.y, fish4.width, player.width, fish4.height, player.height)){
        fish4.boolValue = true;
        document.getElementById("star").style.visibility = "visible";
    }
    if(aabbCollision(fish5.x,player.x,fish5.y,player.y, fish5.width, player.width, fish5.height, player.height)){
        fish5.boolValue = true;
        document.getElementById("toad").style.visibility = "visible";
    }
    if(aabbCollision(fish6.x,player.x,fish6.y,player.y, fish6.width, player.width, fish6.height, player.height)){
        fish6.boolValue = true;
        document.getElementById("shark").style.visibility = "visible";
    }
    if(aabbCollision(plastic.x,player.x,plastic.y,player.y, plastic.width, player.width, plastic.height, player.height)){
        plastic.boolValue = true;
        document.getElementById("plas").style.visibility = "visible";
        document.getElementById("textbox1").style.visibility = "visible";
    } else {
        document.getElementById("textbox1").style.visibility = "hidden";
    }
    
   if(fish0.boolValue == true){
       if(fish1.boolValue == true){
           if(fish2.boolValue == true){
               if(fish3.boolValue == true){
                   if(fish4.boolValue == true){
                       if(fish5.boolValue == true){
                           if(fish6.boolValue == true){
                               if(plastic.boolValue == true){
                                   location.replace("./endScreen.html");
                               }
                           }
                       }
                   }
               }
           }
       }
   }

   
}