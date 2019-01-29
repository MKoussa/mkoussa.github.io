
keyPressed = function(mouseX, mouseY, keyboardPositionRightPressedVar){
  let majorKeyWidth = 40;
  for(keyPressedMajorKeyIterator = 0; keyPressedMajorKeyIterator < 14; keyPressedMajorKeyIterator++){
    if(mouseX > (majorKeyWidth * keyPressedMajorKeyIterator + keyboardPositionRightPressedVar)
      && mouseX < majorKeyWidth * (keyPressedMajorKeyIterator + 1) + keyboardPositionRightPressedVar
      && mouseY < 623){
      osc1.freq(441 + 16 * keyPressedMajorKeyIterator);
      osc1Env.play();
    }
}
                  
}

drawKeyboard = function(keyboardPositionDown, keyboardPositionRightDrawVar) {
  fill(255);//Make the keys white
  let majorKeyWidth = 40;
  let majorKeyHeight = 133;

  let majorKeyIteration;
  for (majorKeyIteration = 0; majorKeyIteration < 14; majorKeyIteration++){
    rect((majorKeyWidth * majorKeyIteration) + keyboardPositionRightDrawVar, keyboardPositionDown, majorKeyWidth, majorKeyHeight);
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
