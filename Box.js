class Box
{
    constructor(x,y,width,height){
        var options={
            isStatic:true
        }
        this.width=width;
        this.height=height;
        this.body=Bodies.rectangle(x,y,width,height,options);
        
        this.image=loadImage("dustbingreen.png");
        World.add(world,this.body);
    }
    display()
    {
        var pos=this.body.position;
        push();
       translate(pos.x, pos.y);
       rotate (this.angle);
        imageMode (CENTER);
        image (this.image,0,-70,this.width,this.height);
        pop ();
    
    }
}
