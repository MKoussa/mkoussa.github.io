
keyPressed = function(mouseX, mouseY){
  if(mouseX > 50 && mouseX < 90 && mouseY < 623){
    osc1.start();
  }
}

drawKeyboard = function(keyboardPositionDown, keyboardPositionRight) {
  fill(255);//Make the keys white
  let majorKeyWidth = 40;
  let majorKeyHeight = 133;

  let majorKeyIteration;
  for (majorKeyIteration = 0; majorKeyIteration < 14; majorKeyIteration++){
    rect((majorKeyWidth * majorKeyIteration) + keyboardPositionRight, keyboardPositionDown, majorKeyWidth, majorKeyHeight);
  }

  fill(0);//Make the keys black
  let minorKeyWidth = majorKeyWidth / 1.6;
  let minorKeyHeight = majorKeyHeight / 2;
  let minorKeyPosition = majorKeyWidth;
  let minorKeyPositionRight = keyboardPositionRight + (majorKeyWidth / 1.5);

  let minorKeysToSkip = [2,6,9,13];
  let minorKeyIteration;
  for (minorKeyIteration = 0; minorKeyIteration < 14; minorKeyIteration++){
    if(!minorKeysToSkip.includes(minorKeyIteration)){
        rect(minorKeyPosition * minorKeyIteration + minorKeyPositionRight, keyboardPositionDown, minorKeyWidth, minorKeyHeight);
      }
  }
}
