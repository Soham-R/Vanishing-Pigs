class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.07,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    
        this.sling1 = loadImage("sprites/sling1.png");
        this.sling2 = loadImage("sprites/sling2.png");
        this.sling3 = loadImage("sprites/sling3.png");
    }

    fly(){
        this.sling.bodyA = null;
    }

    attach(body){
        this.sling.bodyA=body
    }

    display(){
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(7);
            stroke(86, 0, 0)
            if(pointA.x<200){
            line(pointA.x-20, pointA.y, pointB.x-10, pointB.y+10)
            line(pointA.x-20, pointA.y, pointB.x+10, pointB.y+10)
            image(this.sling3,pointA.x-30,pointA.y-10, 15,30);
            } 
        else{line(pointA.x+20, pointA.y, pointB.x-10, pointB.y+10)
            line(pointA.x+20, pointA.y, pointB.x+10, pointB.y+10)
            image(this.sling3,pointA.x+20,pointA.y-10, 15,30);}
        
        }

        image(this.sling1,150,120);
        image(this.sling2,125,120);
        
    }
    
}