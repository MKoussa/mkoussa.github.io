function setup(){
  createCanvas(windowWidth, windowHeight);
  background('#ffd8d4');
}

function draw(){
  let display = displayLabels();
  //ellipse(left, down, width, height)
  fill(255);
  //VCO 1
  let vco1Volume = ellipse(100, 110, 50, 50);
  let vc01Pitch = ellipse(200, 110, 50, 50);
  let vco1Shape = ellipse(300,110,50,50);
  //VCO horizontal line seperator
  rect(75,160, 250, 10);
  //VCO2
  let vco2Volume = ellipse(100,220,50,50);
  let vco2Pitch = ellipse(200,220,50,50);
  let vco2Shape = ellipse(300,220,50,50);
}
