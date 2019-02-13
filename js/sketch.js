/*jshint esversion: 6 */

let browserWidth = $(window).width();
let browserHeight = $(window).height();

//Set Keyboard position
let keyboardPositionRight;
let keyboardPositionDown;
  
  function setup(){
    browserWidth = $(window).width();
    browserHeight = $(window).height();

    keyboardPositionRight = 10;
    keyboardPositionDown = browserHeight - (Math.min(((browserWidth - 10) / 15) - 2, 50) * 4);

    createCanvas($(window).width() - 20, $(window).height() - 20);
    background('#ffd8d4');
    displayLabels();
    buildSliders();
    buildOscillators();

  }
  
  function draw(){
    background('#23543c');
    cursor(CROSS); // Draw cursor as cross
    drawKeyboard(keyboardPositionDown, keyboardPositionRight);
}

function mousePressed() {
  if (getAudioContext().state !== 'running') {
    getAudioContext().resume();
  }
  if(mouseY > keyboardPositionDown){
    keyPressed(mouseX, mouseY, keyboardPositionRight, keyboardPositionDown);
  }
}
 