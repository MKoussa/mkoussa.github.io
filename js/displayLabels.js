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
    vco1VolumeLabel.class("smallLabels");

    let vco1PitchLabel = createP('Pitch');
    vco1PitchLabel.position(Math.floor(browserWidth / 80) + 60, 80);
    vco1PitchLabel.class("smallLabels");
    
    let vco1ShapeLabel = createP('Shape');
    vco1ShapeLabel.position(Math.floor(browserWidth / 80) + 105, 80);
    vco1ShapeLabel.class("smallLabels");

    let vco2VolumeLabel = createP('Volume');
    vco2VolumeLabel.position(Math.floor(browserWidth / 80),200);
    vco2VolumeLabel.class("smallLabels");

    let vco2PitchLabel = createP('Pitch');
    vco2PitchLabel.position(Math.floor(browserWidth / 80) + 60, 200);
    vco2PitchLabel.class("smallLabels");
    
    let vco2ShapeLabel = createP('Shape');
    vco2ShapeLabel.position(Math.floor(browserWidth / 80) + 105, 200);
    vco2ShapeLabel.class("smallLabels");

    let vcoAttackLabel = text('Attack', 432, vcoLabelsHeight);
    let vcoDecayLabel = text('Decay', 532, vcoLabelsHeight);
    let vcoSustainLabel = text('Sustain', 628, vcoLabelsHeight);
    let vcoReleaseLabel = text('Release', 725, vcoLabelsHeight);

    let vco1AttackLabel = createP('Attack');
    vco1AttackLabel.position(Math.floor(browserWidth / 80) + 205, 80);
    vco1AttackLabel.class("smallLabels");

    let vco1DecayLabel = createP('Decay');
    vco1DecayLabel.position(Math.floor(browserWidth / 80) + 255, 80);
    vco1DecayLabel.class("smallLabels");

    let vco1SustainLabel = createP('Sustain');
    vco1SustainLabel.position(Math.floor(browserWidth / 80) + 303, 80);
    vco1SustainLabel.class("smallLabels");

    let vco1ReleaseLabel = createP('Release');
    vco1ReleaseLabel.position(Math.floor(browserWidth / 80) + 350, 80);
    vco1ReleaseLabel.class("smallLabels");

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
