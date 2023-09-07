
//camera
let cs = -50;

//vektor
vektorX = height/2;
vektorY = width/2;

//punkt 1
let py1 = 10;
let px1 = 10;
let pz1 = -20;
//punktkoordinater 1
let ys1 = 0;
let xs1 = 0;

//punkt 2
let py2 = -10;
let px2 = 10;
let pz2 = -20;
//punktkoordinater 2
let ys2 = 0;
let xs2 = 0;

//punkt 3
let py3 = 10;
let px3 = -10;
let pz3 = -20;
//punktkoordinater 3
let ys3 = 0;
let xs3 = 0;

//punkt 4
let py4 = -10;
let px4 = -10; 
let pz4 = -20;
//punktkoordinater 4
let ys4 = 0;
let xs4 = 0;

//punkt 5 (ligesom 1 men bagved)
let py5 = 10;
let px5 = 10;
let pz5 = -40;
//punktkoordinater 5
let ys5 = 0;
let xs5 = 0;

//punkt 6 (ligesom 2 men bagved)
let py6 = -10;
let px6 = 10;
let pz6 = -40;
//punktkoordinater 6
let ys6 = 0;
let xs6 = 0;

//punkt 7 (ligesom 3 men bagved)
let py7 = 10;
let px7 = -10;
let pz7 = -40;
//punktkoordinater 7
let ys7 = 0;
let xs7 = 0;

//punkt 8 (ligesom 4 men bagved)
let py8 = -10;
let px8 = -10;
let pz8 = -40;
//punktkoordinater 8
let ys8 = 0;
let xs8 = 0;

function setup() {
  createCanvas(540, 600);

  sliderX = createSlider(0, width,width/2);
  sliderX.position(420, 10);

  sliderY = createSlider(0,height,height/2);
  sliderY.position(420, 40);

  sliderZ = createSlider(-120,0,-50);
  sliderZ.position(420, 70);

}

function draw() {
  background(220);

  skalarX=sliderX.value();
  skalarY=sliderY.value();

  //Beregner punkter
  ys1 = (py1 * cs) / pz1 + vektorY * skalarY; //Punkt 1
  xs1 = (px1 * cs) / pz1 + vektorX * skalarX;
  ys2 = (py2 * cs) / pz2 + vektorY * skalarY; //Punkt 2
  xs2 = (px2 * cs) / pz2 + vektorX * skalarX;
  ys3 = (py3 * cs) / pz3 + vektorY * skalarY; //Punkt 3
  xs3 = (px3 * cs) / pz3 + vektorX * skalarX;
  ys4 = (py4 * cs) / pz4 + vektorY * skalarY; //Punkt 4
  xs4 = (px4 * cs) / pz4 + vektorX * skalarX;
  ys5 = (py5 * cs) / pz5 + vektorY * skalarY; //Punkt 5
  xs5 = (px5 * cs) / pz5 + vektorX * skalarX;
  ys6 = (py6 * cs) / pz6 + vektorY * skalarY; //Punkt 6
  xs6 = (px6 * cs) / pz6 + vektorX * skalarX;
  ys7 = (py7 * cs) / pz7 + vektorY * skalarY; //Punkt 7
  xs7 = (px7 * cs) / pz7 + vektorX * skalarX;
  ys8 = (py8 * cs) / pz8 + vektorY * skalarY; //Punkt 8
  xs8 = (px8 * cs) / pz8 + vektorX * skalarX;


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
