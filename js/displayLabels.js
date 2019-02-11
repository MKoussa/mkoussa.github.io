/*jshint esversion: 6 */

function displayLabels(){
    //textSize() runs against all calls after it is used
    //Thus, all labels must be sized accordingly

    fill('#acafdd');
    textFont('sans-serif');

    //Small Labels
    textSize(13);
    let vcoLabelsHeight = 120;
    let vcoVolumeLabel = createP('Volume');
    vcoVolumeLabel.position(100,100);
    vcoVolumeLabel.class("smallLabels");
    let vcoPitchLabel = text('Pitch', 184, vcoLabelsHeight);
    let vcoShapeLabel = text('Shape', 281, vcoLabelsHeight);

    let vcoAttackLabel = text('Attack', 432, vcoLabelsHeight);
    let vcoDecayLabel = text('Decay', 532, vcoLabelsHeight);
    let vcoSustainLabel = text('Sustain', 628, vcoLabelsHeight);
    let vcoReleaseLabel = text('Release', 725, vcoLabelsHeight);

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



}
