function setup() {
  createCanvas(512,  512);
  t = 0;
  perlinPixels();
}

function draw() {
  //perlinEllipse();
}

/**
 * Draw ellipse at Perlin x.
 */
var perlinEllipse = function () {
  var n = noise(t);
  var x = map(n, 0, 1, 0, width);
  t += 0.01;

  ellipse(x, 256, 16, 16);
};

/**
 * Color pixels with Perlin noise.
 */
var perlinPixels = function () {
  loadPixels();
  var bright, x, y;
  for (x = 0; x < width; x++) {
    for (y = 0; y < height; y++) {
      bright = Math.floor(random(255));
      console.log(bright);
      pixels[x + y * width] = color(128);
    }
  }
  updatePixels();
  console.log("done");
};
