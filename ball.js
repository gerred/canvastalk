function Ball(radius) {
    if (radius === undefined) this.radius = 50;
    this.xPos = 0;
    this.yPos = 0;
}

Ball.prototype.draw = function(context) {
    context.beginPath();
    context.save();
    context.arc(this.xPos, this.yPos, this.radius, 0, Math.PI*2, true);
    context.stroke();
    context.restore();
    context.closePath();
}

Ball.prototype.bounds = function() {
    return {
        x1: this.xPos - this.radius,
        y1: this.yPos - this.radius,
        x2: this.xPos + this.radius,
        y2: this.yPos + this.radius
    }
}