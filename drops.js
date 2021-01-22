class Drops{
    constructor(x, y, r) {
        var options ={
            restitution:0.4,
            density:0.8,
            isStatic:false
        }
        this.radius=r
        this.body = Bodies.circle(x, y, this.radius, options)
        World.add(world,this.body)
    }
    update(){
        drops.position
    }
    display() {
        var pos = this.body.position
        var angle = this.body.angle
        push()
        translate(pos.x,pos.y)
        rotate(angle)
        noStroke()
        fill("blue")
        ellipseMode(RADIUS)
        ellipse(0, 0, this.radius, this.radius)
        pop()
    }
}