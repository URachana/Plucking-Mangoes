class Sling{

    constructor(body1,pt2){
        
       
        var options={
            bodyA: body1,
            pointB:pt2,
            stiffness : 0.005,
            length: 20
            
        }
        this.sling= Constraint.create(options);
        World.add(world,this.sling);
        this.ptB= pt2;
        
    }
     fly(){
         this.sling.bodyA=null;
     }

     attach(body){
         this.sling.bodyA=body;
     }
    display(){
        if(this.sling.bodyA){
        var ptAx= this.sling.bodyA.position.x;
        var ptAy = this.sling.bodyA.position.y;
        var ptBx = this.ptB.x
        var ptBy= this.ptB.y
        
            strokeWeight(4);
        
            line(ptAx,ptAy,ptBx,ptBy);
        }
    }




}