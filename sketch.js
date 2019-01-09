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
  let vco1AttackKnob = ellipse(450, 110, 50, 50);
  let vco1DecayKnob = ellipse(550, 110, 50, 50);
  let vco1SustainKnob = ellipse(650, 110, 50, 50);
  let vco1ReleaseKnob = ellipse(750, 110, 50, 50);

  //VCO2 ADSR
  let vco2AttackKnob = ellipse(450, 220, 50, 50);
  let vco2DecayKnob = ellipse(550, 220, 50, 50);
  let vco2SustainKnob = ellipse(650, 220, 50, 50);
  let vco2ReleaseKnob = ellipse(750, 220, 50, 50);

  //LFO
  let lfoShapeKnob = ellipse(150, 330, 50, 50);
  let lfoRateKnob = ellipse(250, 330, 50, 50);
  let lfoIntensityKnob = ellipse(350, 330, 50, 50);
  let lfoRange = ellipse(450, 330, 50, 50);

  //Filter
  //eg = Envelope Generator
  let egIntesityKnob = ellipse(100, 440, 50, 50);
  let egAttackKnob = ellipse(200, 440, 50, 50);
  let egDecayKnob = ellipse(300, 440, 50, 50);
  let egSustainKnob = ellipse(400, 440, 50, 50);
  let egReleaseKnob = ellipse(500, 440, 50, 50);
  let egReasonenceKnob = ellipse(600, 440, 50, 50);
  let egCutoffKnob = ellipse(600, 330, 75, 75);

  //Keyboard
  //Major (White) Keys
  let c1Key = rect(50,490,40,133);
  let d1Key = rect(90,490,40,133);
  let e1Key = rect(130,490,40,133);
  let f1Key = rect(170,490,40,133);
  let g1Key = rect(210,490,40,133);
  let a2Key = rect(250,490,40,133);
  let b2Key = rect(290,490,40,133);
  let c2Key = rect(330,490,40,133);
  let d2Key = rect(370,490,40,133);
  let e2Key = rect(410,490,40,133);
  let f2Key = rect(450,490,40,133);
  let g2Key = rect(490,490,40,133);
  let a3Key = rect(530,490,40,133);
  let b3Key = rect(570,490,40,133);
  let c3Key = rect(610,490,40,133);
  let d3Key = rect(650,490,40,133);
  let e3Key = rect(690,490,40,133);
  let f3Key = rect(730,490,40,133);
  let g3Key = rect(770,490,40,133);

  //Minor (Black) Keys 77
  fill(0);
  let c1sKey = rect(75,490,25,66);
  let d1sKey = rect(120,490,25,66);
  let f1sKey = rect(195,490,25, 66);
  let g1sKey = rect(238,490,25,66);
  let a1sKey = rect(280,490,25,66);




  //
}
