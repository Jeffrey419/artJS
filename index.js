class canv() {
  constructor __init__(width, height, color='white') {
    this.width = width;
    this.height = height;
    this.color = color
    this.canvas = document.createElement('canvas');
    this.canvas.width = this.width;
    this.canvas.height = this.height;
  }
}
