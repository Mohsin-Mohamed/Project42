class Umbrella{
    constructor(x, y, w, h) {
        var options ={
            isStatic:true
        }
        this.width=w
        this.height=h
        this.body = Bodies.rectangle(x, y, this.width, this.height, options)
        this.image=loadImage("images/walking_1.png")
        World.add(world, this.body)
    }
    display() {
        var pos = this.body.position

        push()
        translate(pos.x,pos.y)
        noStroke()
        fill("white")
        imageMode(CENTER)
        image(this.image,0, 0, this.width, this.height)
        pop()
    }
}