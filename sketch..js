function preload(){
    bgImg = loadImage("chocolatecake.jpg");
}

function draw(){
    var bg = createsprite(200,200,50,50);
    bg.addImage("cakeImage",bgImg);

    drawSprites();
}