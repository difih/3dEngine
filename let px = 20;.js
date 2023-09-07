let px = 20;
let py = 20;
let pz = 20;
let v = 0;

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);

  v = atan(px/py);

}

function draw() {
  background(220);


  px = sqrt(sq(px) + sq(py)) * cos(v);
  py = sqrt(sq(px) + sq(py)) * sin(v);

  v = v + 1;

  strokeWeight(5);
  point(px,py);
}
