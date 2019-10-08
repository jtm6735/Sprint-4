"use strict";
export{createSprite, createObject};

class sprite{
    constructor(x,y,width,height,image,dest){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.image = image;
        this.boolValue = dest;
    }
    
    
    draw(ctx){
        ctx.save();
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
        ctx.restore();
    }
}

class seaThings{
    constructor(x,y,width,height,image){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.image = image;
    }
    
    seaDraw(ctx){
        ctx.save();
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
        ctx.restore();
    }
}

function createSprite(x,y,width,height,url,bool){
    let image = new Image();
    image.src = url;
    let playerChar = new sprite(x,y,width,height,image,bool);
    return playerChar;
}

function createObject(x,y,width,height,url){
    let image = new Image();
    image.src = url;
    let object = new seaThings(x,y,width,height,url);
    return object;
}