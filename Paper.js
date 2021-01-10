class Paper
{
    constructor(){
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        this.body=Bodies.circle(100,550,40,options);
        this.r=40;
      
        this.image=loadImage("paper.png");

        World.add(world,this.body);


    }
    display()
    { 
        imageMode (CENTER);
        image (this.image,100,550,this.r);
        
        
    }
}
