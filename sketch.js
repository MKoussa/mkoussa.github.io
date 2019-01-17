  var osc1;
  var vco1VolumeKnob;

function setup(){
  createCanvas(windowWidth, windowHeight);
  background('#ffd8d4');

  osc1 = new p5.Oscillator();
  osc1.setType('sine');
  osc1.freq(440);
  osc1.amp(0.5, 0.05);
  osc1.attackTime = 50;
  //osc1.start();

  osc2 = new p5.Oscillator();
  osc2.setType('square');
  osc2.freq(441);
  osc2.amp(20);
  //osc2.start();

  vco1VolumeKnob = new Knob(100, 110, 50);
  //osc3 = new Oscillator(440);

}

function draw(){
  displayLabels();
  drawKnobs();
  drawKeyboard(490, 70);
}

function mousePressed() {
  if(mouseY > 490){
    keyPressed(mouseX, mouseY);
  }
}

function mouseReleased(){
  osc1.stop();
  osc2.stop();
}
