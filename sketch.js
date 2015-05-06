function setup() {
  createCanvas(windowWidth, windowHeight);
  
}


var angelical_rotation = 0;
var demonic_rotation = Math.PI;
var rotation_step = Math.PI / 6;


var angelical_color = 'rgba(0,0,255,0.25)';
var demonic_color = 'rgba(255,0,0,0.25)';


var last_sec = null;

function draw() {
  clear();
  background(random(132, 255), random(132, 255), 0);


  var secs = second();
  console.log("current sec: ", secs);

  if (last_sec !== secs) {

    angelical_rotation += rotation_step;
    demonic_rotation -= rotation_step;

    last_sec = secs; 
  }

  noStroke();
  fill(angelical_color);
  generateTriangle(angelical_rotation);

  fill(demonic_color);
  generateTriangle(demonic_rotation);

}

function generateTriangle(rotation) {
  var zX = windowWidth/2;
  var zY = windowHeight/2;

  push();
  translate(zX, zY);
  rotate(rotation);

  var side = 100;
  var j = sqrt((side*side) - (side/2 * side/2));
 
  var aX = 0;
  var aY = 0 - j/2;
  var bX = 0 + side/2;
  var bY = 0 + j/2;
  var cX = 0 - side/2;
  var cY = 0 + j/2;

  triangle(aX, aY, bX, bY, cX, cY);
  pop();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}