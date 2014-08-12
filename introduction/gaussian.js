function setup() {
  createCanvas(512,  512);
}

function draw() {
  //var num = parseFloat(generator.nextGaussian());
  var sd = 50;
  var mean = 256;

  // location generators.
  var x = Math.floor(randomGaussian(mean, sd));
  var y = Math.floor(randomGaussian(mean, sd));
  
  // RGB generators.
  var r = Math.floor(randomGaussian(mean, sd));
  var g = Math.floor(randomGaussian(mean, sd));
  var b = Math.floor(randomGaussian(mean, sd));

  noStroke();
  fill(r, g, b, 180);
  ellipse(x, y, 16, 16);
}
