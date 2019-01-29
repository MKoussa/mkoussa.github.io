var osc1;
var vco1VolumeKnob;
var osc1Env;
//Set Keyboard position
let keyboardPositionRight = 70;
let keyboardPositionDown = 490;
  
  function setup(){
    createCanvas(windowWidth, windowHeight);
    background('#ffd8d4');
    
    osc1 = new p5.Oscillator();
    osc1.setType('sine');
    osc1.freq(440);
    let osc1AttackLevel = 0.5;
    let osc1ReleaseLevel = 0;
    let osc1Attack = 0.2;
    let osc1Decay = 0.2;
    let osc1Sustain = 0.2;
    let osc1Release = 0.5;
    osc1Env = new p5.Envelope();
    osc1Env.setADSR(osc1Attack, osc1Decay, osc1Sustain, osc1Release);
    osc1Env.setRange(osc1AttackLevel, osc1ReleaseLevel);
    osc1.amp(osc1Env);
    osc1.start();
    
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
  drawKeyboard(keyboardPositionDown, keyboardPositionRight);
}

function mousePressed() {
  if(mouseY > keyboardPositionDown){
    keyPressed(mouseX, mouseY, keyboardPositionRight);
  }
}

function mouseReleased(){
  //osc1.stop();
  osc2.stop();
}
 