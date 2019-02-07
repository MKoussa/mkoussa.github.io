const majorKeys4 = [261.63, 293.66, 329.63, 349.23, 392.00, 440.00, 493.88];
const minorKeys4 = [277.18, 311.13, 369.99, 415.30, 466.16];

const majorKeys5 = [523.25, 587.33, 659.25, 698.46, 783.99, 880.00, 987.77];
const minorKeys5 = [554.37, 622.25, 739.99, 830.61, 932.33];

const majorKeys6 = [1046.50];

//
let majorKeyWidth = (($(window).width() - 10) / 15) - 2;//40;
let majorKeyHeight = majorKeyWidth * 3;
//

keyPressed = function(mouseX, mouseY, keyboardPositionRightPressedVar, keyboardPositionDown){
  let minorKeyWidth = majorKeyWidth / 1.6;
  let minorKeyHeight = majorKeyHeight / 2;
  let minorKeyPosition = majorKeyWidth;
  let minorKeyPositionRight = keyboardPositionRightPressedVar + (majorKeyWidth / 1.5);
  let minorKeysToSkip = [2,6,9,13];

  for(keyPressedMajorKeyIterator = 0; keyPressedMajorKeyIterator < 15; keyPressedMajorKeyIterator++){
    if(mouseX > minorKeyPosition * keyPressedMajorKeyIterator + minorKeyPositionRight
      && mouseX < (minorKeyPosition * keyPressedMajorKeyIterator + minorKeyPositionRight) + minorKeyWidth * 2
      && mouseY < keyboardPositionDown + minorKeyHeight 
      && !minorKeysToSkip.includes(keyPressedMajorKeyIterator)){
        if(keyPressedMajorKeyIterator > 9){
          osc1.freq(minorKeys5[keyPressedMajorKeyIterator - 8]);
          osc2.freq(minorKeys5[keyPressedMajorKeyIterator - 8]);
          osc1Env.play();
          osc2Env.play();
        }
        else if(keyPressedMajorKeyIterator > 6 && keyPressedMajorKeyIterator < 9){
          osc1.freq(minorKeys5[keyPressedMajorKeyIterator - 7]);
          osc2.freq(minorKeys5[keyPressedMajorKeyIterator - 7]);
          osc1Env.play();
          osc2Env.play();
        }
        else if(keyPressedMajorKeyIterator > 2 && keyPressedMajorKeyIterator < 6){
          osc1.freq(minorKeys4[keyPressedMajorKeyIterator - 1]);
          osc2.freq(minorKeys4[keyPressedMajorKeyIterator - 1]);
          osc1Env.play();
          osc2Env.play();
        }
        else{
          osc1.freq(minorKeys4[keyPressedMajorKeyIterator]);
          osc2.freq(minorKeys4[keyPressedMajorKeyIterator]);
          osc1Env.play();
          osc2Env.play();
        }
      }
    else if(mouseX > (majorKeyWidth * keyPressedMajorKeyIterator + keyboardPositionRightPressedVar) 
    && mouseX < majorKeyWidth * (keyPressedMajorKeyIterator + 1) + keyboardPositionRightPressedVar 
    && mouseY < majorKeyHeight + keyboardPositionDown)
    {
      if(keyPressedMajorKeyIterator == 14) {
        osc1.freq(majorKeys6[keyPressedMajorKeyIterator - 14]);
        osc2.freq(majorKeys6[keyPressedMajorKeyIterator - 14]);
        osc1Env.play();
        osc2Env.play();
      }
      else if(keyPressedMajorKeyIterator > 6 && keyPressedMajorKeyIterator <=13){
        osc1.freq(majorKeys5[keyPressedMajorKeyIterator - 7]);
        osc2.freq(majorKeys5[keyPressedMajorKeyIterator - 7]);
        osc1Env.play();
        osc2Env.play();
      }
      else if(keyPressedMajorKeyIterator <= 6){
        osc1.freq(majorKeys4[keyPressedMajorKeyIterator]);
        osc2.freq(majorKeys4[keyPressedMajorKeyIterator]);
        osc1Env.play();
        osc2Env.play();
        
      }
    }
}
                  
};

drawKeyboard = function(keyboardPositionDown, keyboardPositionRightDrawlet) {
  fill(255);//Make the keys white

  let majorKeyIteration;
  for (majorKeyIteration = 0; majorKeyIteration < 15; majorKeyIteration++){
    rect((majorKeyWidth * majorKeyIteration) + keyboardPositionRightDrawlet, keyboardPositionDown, majorKeyWidth, majorKeyHeight);
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
};
