class Paper {
    constructor(x,y){

 var options={
'isStatic':false,
'restitution':0.5,
'friction':1,
'density':2
 }
this.body= Bodies.circle(x,y,50,options);
this.image=loadImage("paper.png")
this.r=50;
World.add(world,this.body);

}
display(){

var pos=this.body.position;

var angle= this.body.angle;
push ();
translate(pos.x,pos.y);
rotate(angle);
imageMode(CENTER);
image(this.image,0,0,this.r,this.r);
pop();
}

    
    }
