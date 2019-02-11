/*jshint esversion: 6 */

let browserWidth = $(window).width();
let browserHeight = $(window).height();

let osc1;
let vco1VolumeKnob;
let osc1Env;

//Set Keyboard position
let keyboardPositionRight = 10;
let keyboardPositionDown = browserHeight - (Math.min(((browserWidth - 10) / 15) - 2, 50) * 4);

let osc1AttackLevel;
  
  function setup(){
    createCanvas($(window).width() - 20, $(window).height() - 20);
    background('#ffd8d4');
    
    osc1 = new p5.Oscillator();
    osc1.setType('sine');

    //osc1AttackLevel = 0.95;

    let osc1ReleaseLevel = 0;
    let osc1Attack = 0.2;
    let osc1Decay = 0.2;
    let osc1Sustain = 0.2;
    let osc1Release = 0.2;
    osc1Env = new p5.Envelope();

    osc1Env.setADSR(osc1Attack, osc1Decay, osc1Sustain, osc1Release);
    osc1Env.setRange(osc1AttackLevel, osc1ReleaseLevel);
    osc1.amp(osc1Env);
    osc1.start();
    
    osc2 = new p5.Oscillator();
    osc2.setType('square');
    let osc2AttackLevel = 0.5;
    let osc2ReleaseLevel = 0;
    let osc2Attack = 0.2;
    let osc2Decay = 0.2;
    let osc2Sustain = 0.2;
    let osc2Release = 0.2;
    osc2Env = new p5.Envelope();
    osc2Env.setADSR(osc1Attack, osc1Decay, osc1Sustain, osc1Release);
    osc2Env.setRange(osc1AttackLevel, osc1ReleaseLevel);
    osc2.amp(osc2Env);
    osc2.start();
    
    
    displayLabels();
    //drawKnobs();
    buildSliders();
    //let vco1VolumeSlider = new Slider(60, 60, 0, 100, 0, 80);
    //vco1VolumeSlider.display();
    drawSliders();
  }
  
  function draw(){
    background('#ffd8d4');
    cursor(CROSS); // Draw cursor as cross
    line(mouseX, 0, mouseX, windowHeight);
    line(0, mouseY, windowWidth, mouseY);
    drawKeyboard(keyboardPositionDown, keyboardPositionRight);
    
    //
}

function mousePressed() {
  if (getAudioContext().state !== 'running') {
    getAudioContext().resume();
  }
  if(mouseY > keyboardPositionDown){
    keyPressed(mouseX, mouseY, keyboardPositionRight, keyboardPositionDown);
  }
}

/*

//Experimental
function touchstart(){
  if(touch.pageY > keyboardPositionDown){
    keyPressed(touch.pageX, touch.pageY, keyboardPositionRight);
  }
}
*/
function mouseReleased(){
}
 