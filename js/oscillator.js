/*jshint esversion: 6 */
let osc1;
let osc1Env;

let osc1AttackLevel;
let osc1ReleaseLevel = 0;
let osc1Attack;
let osc1Decay;
let osc1Sustain;
let osc1Release;

setOscParameters = function(){
  osc1AttackLevel = (vco1VolumeSlider.value() / 100);
  osc1Attack =  (vco1AttackSlider.value() / 100);
  osc1Decay = (vco1DecaySlider.value() / 100);
  osc1Sustain = (vco1SustainSlider.value() / 100);
  osc1Release = (vco1ReleaseSlider.value() / 100);
            
  osc1Env.setADSR(osc1Attack, osc1Decay, osc1Sustain, osc1Release);
  osc1Env.setRange(osc1AttackLevel, osc1ReleaseLevel);
  osc1.amp(osc1Env);
  osc1.start();
};


buildOscillators = function(){
  
    osc1 = new p5.Oscillator();
    osc1.setType('sine');

    osc1AttackLevel = (vco1VolumeSlider.value() / 100);

    let osc1ReleaseLevel = 0;
    osc1Attack =  (vco1AttackSlider.value() / 100);
    osc1Decay = (vco1DecaySlider.value() / 100);
    osc1Sustain = (vco1SustainSlider.value() / 100);
    osc1Release = (vco1ReleaseSlider.value() / 100);
    osc1Env = new p5.Envelope();

    //osc1Env.setADSR(osc1Attack, osc1Decay, osc1Sustain, osc1Release);
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

};