const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies
const Body=Matter.Body


var ground

function preload(){
dustbinIMG=loadImage("dustbingreen.png")

}

function setup(){
createCanvas(800,600)
engine=Engine.create()
world=engine.world


ground=new Ground(400,600,800,20)
paper=new Paper(200,400,40)
//dustbin=new Dustbin(550,600,80,100)





boxleft=createSprite(500,540,20,100)
boxleftBody=Bodies.rectangle(500,540,20,100,{isStatic:true})
World.add(world,boxleftBody)

boxRight=createSprite(600,540,20,100)
boxRightBody=Bodies.rectangle(600,540,20,100,{isStatic:true})
World.add(world,boxRightBody)

boxbottom=createSprite(550,600,100,30)
boxbottomBody=Bodies.rectangle(600,540,20,100,{isStatic:true})
World.add(world,boxbottomBody)

dustbinObj=createSprite(550,525,100,100)
dustbinObj.addImage(dustbinIMG)
dustbinObj.scale=0.4



}

function draw(){
background("pink")
Engine.update(engine)

paper.display()
ground.display()
dustbinObj.display()
//dustbin.display()


drawSprites()
}

function keyPressed(){

if(keyCode === UP_ARROW){

Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85})
}

}