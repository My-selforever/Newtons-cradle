class Top
{
  constructor(x,y,w,h)
  {
    var object_options=
    {
      isStatic:true
    }
    this.width = w;
    this.height = h;
    this.body = Bodies.rectangle(x,y,w,h,object_options);
    World.add(world,this.body);
  }

  display()
  {
    rectMode(CENTER)
    rect(this.body.position.x,this.body.position.y,this.width,this.height);
  }
}
