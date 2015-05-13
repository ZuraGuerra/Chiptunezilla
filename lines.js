
var bg_images = [];
var bg;

function preload() {
  bg_images.push( loadImage('gzback.jpg') );
  bg_images.push( loadImage('gzback1.gif') );
  bg_images.push( loadImage('gzback2.jpg') );
  bg_images.push( loadImage('gzback3.jpg') );
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}


function draw() {
  var millis = new Date().getMilliseconds();
  var mirand = _.sample([23, 15, 12, 7]);

  if (millis % mirand == 0) {
    clear();
    image(bg, 0, 0, windowWidth, windowHeight);
    points();
  }

  if (millis % 36 == 0) {
    bg = gzBackground();
  }

}

function gzBackground() {
  var bg = _.sample(bg_images);
  image(bg, 0, 0, windowWidth, windowHeight);
  return bg;
}


function points() {
  var n = random(3, 15);
  var points = _.times(n, randXY);

  _.inject(points, function (a, b) {
    randStyle(a, b);
    drawLine(a, b);
    return b;
  });
}

function drawLine(a, b) {
  stroke(random(255), random(255), random(255));
  line(a.x, b.y, b.x, a.y);
}

function randStyle(a, b) {
  if (random(10, 1000) % 25 == 0) {
    noFill();
  }  else {
    fill(random(0,255), random(0,255), random(0,255), random(0, 255));
  }
}


function randXY() {
  return {
    x: random(0, windowWidth),
    y: random(0, windowHeight)
  }
}