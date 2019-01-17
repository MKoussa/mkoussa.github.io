const knobArr = [];

function Knob(positionRight, positionDown, Radius){
      this.x = positionRight;
      this.y = positionDown;
      this.r = Radius;
      knobArr.push(this);
      this.display = function() {
        ellipse(this.positionRight, this.positionDown, this.Radius, this.Radius);
      };

}

drawKnobs = function() {
  //ellipse(left, down, width, height)
  fill(255);
  //VCO 1
  let vco1VolumeKnob = ellipse(100, 110, 50, 50);
  let vc01PitchKnob = ellipse(200, 110, 50, 50);
  let vco1ShapeKnob = ellipse(300,110,50,50);

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
}
