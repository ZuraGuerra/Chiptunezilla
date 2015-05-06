function setup() {
  createCanvas(windowWidth, windowHeight);
  
}

var i = 1;

function draw() {
  clear();
  
  i += 1;

  
  background(random(132, 255), random(132, 255), 0);

  var zX = windowWidth/2;
  var zY = windowHeight/2;

  push();

  translate(zX, zY);
  rotate (PI/random(0,6));


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

//function windowResized() {
  //resizeCanvas(windowWidth, windowHeight);
//}