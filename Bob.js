        class Bobs
        {
            constructor(x,y)
            {
                this.radius =40
                var object_options=
                {
                    isStatic:false,
                    restitution: 1,
                    friction: 0,
                    density:1.2
                }
                this.body = Bodies.circle(x,y,this.radius/2,object_options);
                World.add(world,this.body);
                }

                display()
                {
                    push();
                    translate(this.body.position.x,this.body.position.y);
                    ellipseMode(CENTER);
                    fill("blue")
                    ellipse(0,0,this.radius);
                    pop();
                }
        }