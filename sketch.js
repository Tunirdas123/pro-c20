var backgroundImage
var cat,mouse
var catImage1,catImage2,catImage3,catImage4
var mouseImage1,mouseImage2,mouseImage3,mouseImage4
function preload() {
    backgroundImage=loadImage("images/garden.png");
    catImage1=loadAnimation("images/cat1.png");
    catImage2=loadAnimation("images/cat2.png","images/cat3.png");
    catImage4=loadAnimation("images/cat4.png");
    mouseImage1=loadAnimation("images/mouse1.png");
    mouseImage2=loadAnimation("images/mouse2.png","images/mouse3.png");
    mouseImage4=loadAnimation("images/mouse4.png");

}

function setup(){
    createCanvas(1000,800);
    cat=createSprite(700,650,60,50);
    mouse=createSprite(150,650,40,30);
    cat.addAnimation("standingcat",catImage1);
    mouse.addAnimation("standingmouse",mouseImage1);
    cat.scale=0.2;
    mouse.scale=0.2;
}

function draw() {

    background(backgroundImage);
    if(cat.x-mouse.x<cat.width/2-mouse.width/2){
        cat.addAnimation("collidingcat",catImage4);
        mouse.addAnimation("collidingmouse",mouseImage4);
        cat.velocityX=0;
        cat.x=260;
        cat.changeAnimation("collidingcat");
        mouse.changeAnimation("collidingmouse");
    }

    drawSprites();
}


function keyPressed(){

  if(keyCode===LEFT_ARROW){
      cat.velocityX=-5;
    cat.addAnimation("runningcat",catImage2);
    cat.changeAnimation("runningcat");
    mouse.addAnimation("teasingmouse",mouseImage2);
    mouse.changeAnimation("teasingmouse");
    }


}
