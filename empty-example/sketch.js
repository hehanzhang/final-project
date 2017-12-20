var img;
var bubblelist=[]

function preload() {
    
    soundFormats('mp3', 'ogg');
    whaleSound = loadSound('../whale.mp3');
    spongeSound=loadSound('../sponge.mp3');
    img = loadImage("../assets/bg.jpg");
}
function setup(){
    
    
    
    createCanvas(1800,1000);
    haimian = createSprite(200,800);
    haimian.addAnimation("normal","../assets/Sponge1.png")
    haimian.visible=false;
    circle=createSprite(500,700);
    circle.addAnimation("normal","../assets/fish1.png");
    circle.visible=false;
    jingyu=createSprite(900,500); 
    jingyu.addAnimation("normal","../assets/whale1.png");
    jingyu.visible=false;
    submarine=createSprite();
    submarine.addAnimation("normal","../assets/submarine1.png");
    for(var i=0;i<10;i++){
        tmp=createSprite(400+random(-180,180)*i,700+random(-40,40));
        tmp.addAnimation("normal","../assets/b5.png");
        bubblelist.push(tmp);
        
    }
}


function draw(){
    background(img,1450,1100);
    
    submarine.position.x=mouseX;
    submarine.position.y=mouseY;
    if(submarine.overlap(circle))
        circle.visible=true;
    else
        circle.visible=false;
    if(submarine.overlap(jingyu))
        {jingyu.visible=true;
        whaleSound.setVolume(0.1);
        whaleSound.play();
        }
    else{
        jingyu.visible=false
        whaleSound.stop();}
    if(submarine.overlap(haimian))
        {haimian.visible=true;
        spongeSound.setVolume(0.1);
        spongeSound.play();
        }
    else
        {haimian.visible=false
        spongeSound.stop();
        }
    drawSprites();
    
}