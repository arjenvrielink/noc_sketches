function Walker() {
  this.x = width / 2;
  this.y = height / 2;
}

Walker.prototype.display = function () {
  stroke(0);
  point(this.x, this.y);
};

Walker.prototype.randomStep = function () {
  var stepx = random(-1, 1);
  var stepy = random(-1, 1);

  this.x += stepx;
  this.y += stepy;

};

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
  
Walker.prototype.mouseStep = function (x, y) {
  
  var r = random(1);
  console.log(this.x, x, this.y, y);

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

function setup() {
  createCanvas(512,  512);
  w = new Walker();
  background(255);
}

function draw() {
  //w.randomStep();
  //w.biasStep();
  w.mouseStep(mouseX, mouseY);
  w.display();
}
