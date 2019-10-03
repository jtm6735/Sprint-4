"use strict";
export{createPlayerSprite};

class PlayerSprite{
    constructor(x,y,width,height,image,speed){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.image = image;
        
        this.speed = speed;
        this.dx = 0;
        this.dy = 0;
    }
    
    update(dt){
        this.x += this.dx * dt;
        this.y += this.dy * dt;
    }
    
    draw(ctx){
        ctx.save();
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
        ctx.restore();
    }
}

function createPlayerSprite(x,y,width,height,url){
    let image = new Image();
    image.src = url;
    let playerChar = new PlayerSprite(x,y,width,height,image);
    return playerChar;
}