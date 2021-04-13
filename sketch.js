var starImg,bgImg;
var star, starBody;
//create variable for fairy sprite and fairyImg
var fairy, fairyImg;
var music;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");
	//load animation for fairy here
	fairyImg = loadImage("images/fairyImage1.png");
	music = loadSound("sound/JoyMusic.mp3");
}

function setup() {
	createCanvas(800, 750);

	//write code to play fairyVoice sound
     
	//create fairy sprite and add animation for fairy
	fairy = createSprite(400, 350, 40,30);
	fairy.addImage(fairyImg);
	fairy.scale = 0.2;

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;


	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);
    
	
}


function draw() {
  background(bgImg);

  star.x= starBody.position.x 
  star.y= starBody.position.y 

  music.play();

  console.log(star.y);

  //write code to stop star in the hand of fairy
	if (star.y>350 && starBody.position.y>350 ){
		Matter.Body.setStatic(starBody,true);
	    fairy.velocityX = 0;
		fairy.velcoityY = 0;
		music.stop();
	}
  drawSprites();
  keyPressed();

}

function keyPressed() {

	if (keyDown ("DOWN_ARROW")) {
		Matter.Body.setStatic(starBody,false); 
	}

	//writw code to move fairy left and right
	if(keyDown("LEFT_ARROW")){
		fairy.velocityX = -3;

	}
	if(keyDown("RIGHT_ARROW")){
		fairy.velocityX = 3;
	}
}
