class Bob {
  constructor(x,y,radius) {
    var options = {
        isStatic: false,
        restitution:1.4,
        friction:0.5,
        density:0.5
    }
    this.body = Bodies.circle(x,y,radius,options);
    this.radius = radius;
    World.add(world, this.body);
  }
  display(){
  
    var pos =this.body.position;
    ellipseMode(RADIUS)
    fill("black");
    noStroke();
    ellipse(pos.x, pos.y, this.radius,this.radius);
    
  }
}