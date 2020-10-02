var socket;

function setup() {
  createCanvas(400, 400)
  socket = io.connect('http://localhost:3000')
}

function draw() {
  background(53);
  rectMode(CENTER);
  rect(mouseX, mouseY, 60, 60);
}