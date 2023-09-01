
//camera
let cs = -50;

//punkt 1
let py1 = 200;
let px1 = 20;
let pz1 = -100;
//punktkoordinater 1
let ys1 = 0;
let xs1 = 0;

//punkt 2
let py2 = 400;
let px2 = 20;
let pz2 = -100;
//punktkoordinater 2
let ys2 = 0;
let xs2 = 0;

//punkt 3
let py3 = 200;
let px3 = 200;
let pz3 = -100;
//punktkoordinater 3
let ys3 = 0;
let xs3 = 0;

//punkt 4
let py4 = 400;
let px4 = 200;
let pz4 = -100;
//punktkoordinater 4
let ys4 = 0;
let xs4 = 0;

//punkt 5 (ligesom 1 men bagved)
let py5 = 190;
let px5 = 90;
let pz5 = -130;
//punktkoordinater 5
let ys5 = 0;
let xs5 = 0;

//punkt 6 (ligesom 2 men bagved)
let py6 = 390;
let px6 = 90;
let pz6 = -130;
//punktkoordinater 6
let ys6 = 0;
let xs6 = 0;

//punkt 7 (ligesom 3 men bagved)
let py7 = 190;
let px7 = 290;
let pz7 = -130;
//punktkoordinater 7
let ys7 = 0;
let xs7 = 0;

//punkt 8 (ligesom 4 men bagved)
let py8 = 390;
let px8 = 290;
let pz8 = -130;
//punktkoordinater 8
let ys8 = 0;
let xs8 = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  //Beregner punkter
  ys1=(py1*cs)/pz1;   //Punkt 1
  xs1 = (px1*cs)/pz1;
  ys2=(py2*cs)/pz2;   //Punkt 2
  xs2 = (px2*cs)/pz2;
  ys3=(py3*cs)/pz3;   //point 3
  xs3 = (px3*cs)/pz3;
  ys4=(py4*cs)/pz4;   //point 4
  xs4 = (px4*cs)/pz4;
  ys5=(py5*cs)/pz5;   //point 5
  xs5 = (px5*cs)/pz5;
  ys6=(py6*cs)/pz6;   //point 6
  xs6 = (px6*cs)/pz6;
  ys7=(py7*cs)/pz7;   //point 7
  xs7 = (px7*cs)/pz7;
  ys8=(py8*cs)/pz8;   //point 8
  xs8 = (px8*cs)/pz8;

  //tegn punkter
  point(xs1,ys1); //punkt 1
  point(xs2,ys2); //punkt 2
  point(xs3,ys3); //punkt 3
  point(xs4,ys4); //punkt 4
  point(xs5,ys5); //punkt 5
  point(xs6,ys6); //punkt 6
  point(xs7,ys7); //punkt 7
  point(xs8,ys8); //punkt 8

  //Tegn linjer
  line(xs1,ys1,xs2,ys2); //punkt 1 (venstre øverst forrest) - 2 (venstre, nederst forrest)
  line(xs1,ys1,xs3,ys3); //punkt 1 (venstre øverst forrest)- 3 (højre øverst forrest)
  line(xs3,ys3,xs4,ys4); //punkt 3 (højre øverst forrest)- 4 (venstre øverst forrest)
  line(xs2,ys2,xs4,ys4); //punkt 2 (venstre, nederst forrest) - 4 (venstre øverst forrest)
  line(xs1,ys1,xs5,ys5); //punkt 1 (venstre øverst forrest) - 5 (venstre øverst bagerst)
  line(xs2,ys2,xs6,ys6); //punkt 2 (venstre, nederst forrest) - 6 (venstre,nederst, bagerst)
  line(xs5,ys5,xs6,ys6); //punkt 5 (venstre øverst bagerst) - 6(venstre,nederst, bagerst)
  line(xs5,ys5,xs7,ys7); //punkt 5 (venstre øverst bagerst) - 7 (højre, øverst bagerst)
  line(xs3,ys3,xs7,ys7); //punkt 3 (højre øverst forrest) - 7 (højre, øverst bagerst)
  line(xs7,ys7,xs8,ys8); //punkt 7 (højre, øverst bagerst) - 8 (højre, nederst bagerst)
  line(xs4,ys4,xs8,ys8); //punkt 4 (venstre øverst forrest) - 8 (højre, nederst bagerst)
  line(xs6,ys6,xs8,ys8); //punkt 6 (venstre,nederst, bagerst) - 8 (højre, nederst bagerst)
}
