class Roof {
    constructor(x, y, width, height) {
        var options = {
            restitution: 0,
            friction: 0,
            density: 1
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
    }
    display() {
        fill("white");
        rect(this.body.x, this.body.y, this.width, this.height);
    }
}