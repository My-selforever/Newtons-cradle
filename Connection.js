class Attach
{
    constructor(a,b)
    {
        var constraint_Options =
        {
            bodyA:a,
            bodyB:b,
            stiffness:0.07,
            length:200
        }
        this.attach = Constraint.create(constraint_Options);
        World.add(world,this.attach);
       
    }
    
    display()
    {
      line(this.attach.bodyA.position.x,
        this.attach.bodyA.position.y,
        this.attach.bodyB.position.x,
        this.attach.bodyB.position.y)
    }
}