class Paper
{
    constructor(){
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        this.body=Bodies.circle(100,550,20,options);
        this.width=20;
        this.height=20;
        this.image=loadImage("paper.png");

        World.add(world,this.body);


    }
    display()
    { 
        imageMode (CENTER);
        image (this.image,100,550,this.width,this.height);
        
        
    }
}