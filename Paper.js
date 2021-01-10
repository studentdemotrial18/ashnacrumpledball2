
class Paper
{
    constructor(x,y){
        var options={
            
            restitution:0.3,
            friction:2.5,
            density:1.2
        }
        this.radius=70;
        this.x=x;
        this.y=y;
        this.body=Bodies.circle(this.x,this.y,30,options);
        this.image=loadImage("paper.png");
        World.add(world,this.body);


    }
    display()
    { 
       var pos=this.body.position;
       imageMode (CENTER);
       image (this.image,pos.x,pos.y,this.radius,this.radius);
       
    }
}
