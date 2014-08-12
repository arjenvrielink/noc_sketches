function setup() {
  createCanvas(512,  512);
  w = new Walker();
  background(255);
}

function draw() {
  //w.randomStep();
  //w.biasStep();
  //w.mouseStep(mouseX, mouseY);
  //w.gaussianStep();
  //w.customStep();
  //w.perlinStep();
  w.perlinSizeRandomStep();
  w.display();
}

/**
 * @class Walker.
 */
function Walker() {
  this.x = width / 2;
  this.y = height / 2;

  this.tx = 0;
  this.ty = 100000;
}

/**
 * Display the walkers position.
 */
Walker.prototype.display = function () {
  stroke(0);
  ellipse(this.x, this.y, 3, 3);
};

/**
 * Steps completely random.
 */
Walker.prototype.randomStep = function () {
  var stepx = random(-1, 1);
  var stepy = random(-1, 1);

  this.x += stepx;
  this.y += stepy;

};

/**
 * Steps to the right 40% of the time.
 */
Walker.prototype.biasStep = function () {
  
  var r = random(1);

  if (r < 0.4) {
    this.x++;
  } else if (r < 0.6) {
    this.x--;
  } else if (r < 0.8) {
    this.y++;
  } else {
    this.y--;
  }
  
};
  
/**
 * Step in direction of x, y 50% of the time.
 *
 * @param {integer} x direction to step to.
 * @param {integer} y direction to step to.
 */
Walker.prototype.mouseStep = function (x, y) {
  
  var r = random(1);

  if (r < 0.4) {
    if (this.x > x) {
      this.x--;
    } else {
      this.x++;
    }
    if (this.y > y) {
      this.y--;
    } else {
      this.y++;
    }
  } else if (r < 0.6) {
    this.x--;
  } else if (r < 0.8) {
    this.y++;
  } else {
    this.y--;
  }
  
};

Walker.prototype.gaussianStep = function () {

  var stepSizeX = randomGaussian(0);
  var stepSizeY = randomGaussian(0);

  this.x += stepSizeX;
  this.y += stepSizeY;
};

/**
 * Custom probability function. Likelihood that a value is picked is equal to the value squared.
 */
var customRandom = function () {
  while (true) {
    var r1 = random(1);
    var probability = r1;
    var r2 = random(2);

    if (r2 < Math.pow(probability, 2)) {
      return r1;
    }
  }
};

/**
 * Use a custom probability distribution to vary the size of a step taken by the random walker.
 */
Walker.prototype.customStep = function () {

  var stepSize = customRandom();

  var stepx = random(-stepSize, stepSize);
  var stepy = random(-stepSize, stepSize);

  this.x += stepx;
  this.y += stepy;
  
};

/**
 * Steps according to Perlin noise.
 */
Walker.prototype.perlinStep = function () {
  this.x = map(noise(this.tx), 0, 1, 0, width);
  this.y = map(noise(this.ty), 0, 1, 0, height);

  this.tx += 0.01;
  this.ty += 0.01;
};

/**
 * Excercise 1.7
 *
 * Stepsize according to Perlin noise.
 *
 */
Walker.prototype.perlinSizeRandomStep = function () {
  var stepSizeX = map(noise(this.tx), 0, 1, 0, width);
  var stepSizeY = map(noise(this.ty), 0, 1, 0, height);

  var stepx = random(-stepSizeX, stepSizeX);
  var stepy = random(-stepSizeY, stepSizeY);

  this.x += stepx;
  this.y += stepy;

  this.tx += 0.01;
  this.ty += 0.01;
};
