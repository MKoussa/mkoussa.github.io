/*jshint esversion: 6 */

let knobArr = [];

function Knob(x, y, r, dragging, rollover, name){
      this.x = x;
      this.y = y;
      this.r = r;

      this.slider = createSlider(0, 100, 0, 0);
      //slider.position(this.x, this.y);
      //this.ellipse = ellipse(this.x, this.y, this.r, this.r);
      //this.name = name;

      /*
      if(knobArr.length == 0){
        knobArr.push(this);
      }
      else{
        knobArr.forEach(element => {
          if(element.name != name){
            knobArr.push(this);
          }
        });
      }
      */


      

}

drawKnobs = function() {
  //ellipse(left, down, width, height)
  fill(255);
  //VCO 1
  //let vco1VolumeSlider = new Knob(100, 110, 50, true, true, "vco1VolumeKnob");
  //vco1VolumeKnob.mousePressed(changeColor());
  
  let vco1VolumeKnob = createSlider(0, 127, 0, 0);
  ////vco1VolumeSlider.style('rotate', 90);
  //vco1VolumeSlider.style('position', 100, 110);
  
  
  let vc01PitchKnob = ellipse(200, 110, 50, 50);
  let vco1ShapeKnob = ellipse(300,110,50,50);

  //VCO2
  let vco2VolumeKnob = ellipse(100,220,50,50);
  let vco2PitchKnob = ellipse(200,220,50,50);
  let vco2ShapeKnob = ellipse(300,220,50,50);

  //VCO1 ADSR
  let vco1AttackKnob = ellipse(450, 110, 50, 50);
  let vco1DecayKnob = ellipse(550, 110, 50, 50);
  let vco1SustainKnob = ellipse(650, 110, 50, 50);
  let vco1ReleaseKnob = ellipse(750, 110, 50, 50);

  //VCO2 ADSR
  let vco2AttackKnob = ellipse(450, 220, 50, 50);
  let vco2DecayKnob = ellipse(550, 220, 50, 50);
  let vco2SustainKnob = ellipse(650, 220, 50, 50);
  let vco2ReleaseKnob = ellipse(750, 220, 50, 50);

  //LFO
  let lfoShapeKnob = ellipse(150, 330, 50, 50);
  let lfoRateKnob = ellipse(250, 330, 50, 50);
  let lfoIntensityKnob = ellipse(350, 330, 50, 50);
  let lfoRange = ellipse(450, 330, 50, 50);

  //Filter
  //eg = Envelope Generator
  let egIntesityKnob = ellipse(100, 440, 50, 50);
  let egAttackKnob = ellipse(200, 440, 50, 50);
  let egDecayKnob = ellipse(300, 440, 50, 50);
  let egSustainKnob = ellipse(400, 440, 50, 50);
  let egReleaseKnob = ellipse(500, 440, 50, 50);
  let egReasonenceKnob = ellipse(600, 440, 50, 50);
  let egCutoffKnob = ellipse(600, 330, 75, 75);

  knobArr.forEach(element => {
    element.display();
  });
};

/*
// Complicated Knob
// Daniel Shiffman <http://www.shiffman.net>

var dragging = false; // Is the slider being dragged?
var rollover = false; // Is the mouse over the slider?

// Circle variables for knob
var x = 160;
var y = 180;
var r = 40;

// Knob angle
var angle = 2.25;

var count = 0;

// Offset angle for turning knob
var offsetAngle = 0;


function draw() {
  background(255);

  if (count === 0) {
    
  // Is it being dragged?
  if (dragging) {
    var dx = mouseX - x;
    var dy = mouseY - y;
    var mouseAngle = atan2(dy, dx);
    angle = mouseAngle - offsetAngle;
  }

  // Fill according to state
  if (dragging) {
    fill (175);
  } 
  else {
    fill(255);
  }
  // Draw ellipse for knob
  push();
  translate(x, y);
  rotate(angle);
  ellipse(0, 0, r*2, r*2);
  line(0, 0, r, 0);
  pop();
  fill(0);


  // Map is an amazing function that will map one range to another!
  // Here we take the slider's range and map it to a value between 0 and 255
  // Our angle is either between
  var calcAngle = 0; 
  if (angle < 0) {
    calcAngle = map(angle, -PI, 0, PI, 0);
  } 
  else if (angle > 0) {
    calcAngle = map(angle, 0, PI, TWO_PI, PI);
  }

  textAlign(CENTER);
  text(int(degrees(calcAngle)), x, y+r+20);

  var degree = int(degrees(calcAngle));

  if (dragging && degree < 10) {
    count == 2;
  }
  }
  if (count === 2) {
    var b = map(calcAngle, 0, TWO_PI, 0, 255);
    fill(b);
    rect(320, 90, 160, 180);
  }
}

function mousePressed() {
  // Did I click on slider?
  if (dist(mouseX, mouseY, x, y) < r) {
    dragging = true;
    // If so, keep track of relative location of click to corner of rectangle
    var dx = mouseX - x;
    var dy = mouseY - y;
    offsetAngle = atan2(dy, dx) - angle;
  }
}

function mouseReleased() {
  // Stop dragging
  dragging = false;
}
*/