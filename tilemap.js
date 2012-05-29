function Tilemap(src, tileSize) {
    this.ready = false;
    this.tileSize = tileSize;
    this.image = new Image();
    this.image.src = src
    this.image.onload = function() {
        this.ready = true;
    }
}

Tilemap.prototype.tileAtIndex = function(index) {
    return this.tileSize * index;
}