function setup(){
  createCanvas(windowWidth, windowHeight);
  background('#ffd8d4');
}

function draw(){
  let display = displayLabels();
  //ellipse(left, down, width, height)
  fill(255);
  //VCO 1
  let vco1VolumeKnob = ellipse(100, 110, 50, 50);
  let vc01PitchKnob = ellipse(200, 110, 50, 50);
  let vco1ShapeKnob = ellipse(300,110,50,50);
  //VCO horizontal line seperator
  rect(75,160, 250, 10);
  //VCO2
  let vco2VolumeKnob = ellipse(100,220,50,50);
  let vco2PitchKnob = ellipse(200,220,50,50);
  let vco2ShapeKnob = ellipse(300,220,50,50);

  //VCO1 ADSR
  let vco1AttackKnob = ellipse(500, 110, 50, 50);
  let vco1DecayKnob = ellipse(600, 110, 50, 50);
  let vco1SustainKnob = ellipse(700, 110, 50, 50);
  let vco1ReleaseKnob = ellipse(800, 110, 50, 50);

  //VCO2 ADSR
  let vco2AttackKnob = ellipse(500, 220, 50, 50);
  let vco2DecayKnob = ellipse(600, 220, 50, 50);
  let vco2SustainKnob = ellipse(700, 220, 50, 50);
  let vco2ReleaseKnob = ellipse(800, 220, 50, 50);
}
