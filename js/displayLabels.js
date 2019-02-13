/*jshint esversion: 6 */

function displayLabels(){
    //textSize() runs against all calls after it is used
    //Thus, all labels must be sized accordingly

    fill('#acafdd');
    textFont('sans-serif');

    //Small Labels
    textSize(13);
    let vcoLabelsHeight = 120;

    let vco1VolumeLabel = createP('Volume');
    vco1VolumeLabel.position(Math.floor(browserWidth / 80), 80);
    vco1VolumeLabel.class("smallLeftLabels");

    let vco1PitchLabel = createP('Pitch');
    vco1PitchLabel.position(Math.floor(browserWidth / 80) + 60, 80);
    vco1PitchLabel.class("smallLeftLabels");
    
    let vco1ShapeLabel = createP('Shape');
    vco1ShapeLabel.position(Math.floor(browserWidth / 80) + 105, 80);
    vco1ShapeLabel.class("smallLeftLabels");

    let vco2VolumeLabel = createP('Volume');
    vco2VolumeLabel.position(Math.floor(browserWidth / 80),200);
    vco2VolumeLabel.class("smallLeftLabels");

    let vco2PitchLabel = createP('Pitch');
    vco2PitchLabel.position(Math.floor(browserWidth / 80) + 60, 200);
    vco2PitchLabel.class("smallLeftLabels");
    
    let vco2ShapeLabel = createP('Shape');
    vco2ShapeLabel.position(Math.floor(browserWidth / 80) + 105, 200);
    vco2ShapeLabel.class("smallLeftLabels");

    let vco1AttackLabel = createP('Attack');
    vco1AttackLabel.position(Math.floor(browserWidth / 80) + 205, 80);
    vco1AttackLabel.class("smallLeftLabels");

    let vco1DecayLabel = createP('Decay');
    vco1DecayLabel.position(Math.floor(browserWidth / 80) + 255, 80);
    vco1DecayLabel.class("smallLeftLabels");

    let vco1SustainLabel = createP('Sustain');
    vco1SustainLabel.position(Math.floor(browserWidth / 80) + 303, 80);
    vco1SustainLabel.class("smallLeftLabels");

    let vco1ReleaseLabel = createP('Release');
    vco1ReleaseLabel.position(Math.floor(browserWidth / 80) + 350, 80);
    vco1ReleaseLabel.class("smallLeftLabels");

    let vco2AttackLabel = createP('Attack');
    vco2AttackLabel.position(Math.floor(browserWidth / 80) + 205, 200);
    vco2AttackLabel.class("smallLeftLabels");

    let vco2DecayLabel = createP('Decay');
    vco2DecayLabel.position(Math.floor(browserWidth / 80) + 255, 200);
    vco2DecayLabel.class("smallLeftLabels");

    let vco2SustainLabel = createP('Sustain');
    vco2SustainLabel.position(Math.floor(browserWidth / 80) + 303, 200);
    vco2SustainLabel.class("smallLeftLabels");

    let vco2ReleaseLabel = createP('Release');
    vco2ReleaseLabel.position(Math.floor(browserWidth / 80) + 350, 200);
    vco2ReleaseLabel.class("smallLeftLabels");

    //filter
    let filterEGAmountLabel = createP('EG Amount');
    filterEGAmountLabel.position(Math.floor(browserWidth / 80, 200) + 35, 325);
    filterEGAmountLabel.class("smallRightLabels");

    let filterEGResonanceLabel = createP('Resonance');
    filterEGResonanceLabel.position(Math.floor(browserWidth / 80, 200) + 90, 325);
    filterEGResonanceLabel.class("smallRightLabels");

    /*

    let lfoLabelHeight = 289;
    let lfoShapeLabel = text('Shape', 133, lfoLabelHeight);
    let lfoRateLabel = text('Rate', 237, lfoLabelHeight);
    let lfoIntensityLabel = text('Intensity', 329, lfoLabelHeight);
    let lfoRangeLabel = text('Range', 433, lfoLabelHeight);

    let filterLabelHeight = 400;
    let filterEGAmountLabel = text('EG Amount', 67, filterLabelHeight);
    let filterAttackLabel = text('Attack', 182, filterLabelHeight);
    let filterDecayLabel = text('Decay', 284, filterLabelHeight);
    let filterSustainLabel = text('Sustain', 378, filterLabelHeight);
    let filterReleaseLabel = text('Release', 477, filterLabelHeight);
    let filterReasonenceLabel = text('Reasonence', 564, filterLabelHeight);

    //Medium Labels
    textSize(20);
    let filterCutoffLabel = text('Cutoff', 573, 274);
    //Vertical Labels
    rotate(-PI/2);
    text('VCO 1', -140, 50);
    text('VCO 2', -250, 50);
    rotate(PI/2);


    //Large Labels
    textSize(35);
    let oscMainLabel = text('Oscillators', 120 ,45);
    let egMainLabel = text('Envelope Generators', 435, 45);

    //Vertical Labels
    rotate(-PI/2);
    text('LFO', -362, 90);
    rotate(PI/2);

    //Right Verical Labels
    rotate(PI/2);
    text('Filter', 340, -660);
    rotate(-PI/2);

    //Extra Large Labels
    textSize(65);
    //Vertical Labels
    rotate(PI/2);
    text('Blorp', 300, -730);
    rotate(-PI/2);
    */


}
