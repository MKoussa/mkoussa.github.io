var isKeyPressed = false;

keyPressed = function(mouseX, mouseY){
  if(mouseX > 50 && mouseX < 90 && mouseY < 623){
    if(!isKeyPressed) { osc1.start(); isKeyPressed = true;}
  }
  else {osc1.stop(); isKeyPressed = false;}
};
