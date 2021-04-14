class Bob {
    constructor(x, y, radius) {
        var options = {
            isStatic: false,
            restitution: 0.3,
            friction: 0.5,
            density: 1.2

        }
        this.body = Bodies.circle(x, y, radius / 2, options);
        this.radius = radius;
        World.add(world, this.body);
    }
    display() {
        fill(255);
        ellispeMode(RADIUS);
        ellispe(this.body.position.x, this.body.position.y, this.radius);
        pop();

    }
}