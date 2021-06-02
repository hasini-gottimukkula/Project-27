class Bob {
    constructor(x, y, radius) {
        var options = {
            isStatic: false,
            restitution: 1.28,
            friction: 0,
            density: 1

        }
        this.body = Bodies.circle(x, y, 70, options);
        this.radius = this.radius;
        World.add(world, this.body);
    }
    display() {
        push();
        fill("red");
        ellispe(this.body.position.x, this.body.position.y, this.radius);
        pop();

    }
}