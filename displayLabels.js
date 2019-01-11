function displayLabels(){
    //textSize() runs against all calls after it is used
    //Thus, all labels must be sized accordingly

    fill('#acafdd');
    textFont('sans-serif');

    //Small Labels
    textSize(13);
    let vcoLabelsHeight = 70;
    let vcoVolumeLabel = text('Volume', 79, vcoLabelsHeight);
    let vcoPitchLabel = text('Pitch', 184, vcoLabelsHeight);
    let vcoShapeLabel = text('Shape', 281, vcoLabelsHeight);

    let vcoAttackLabel = text('Attack', 432, vcoLabelsHeight);
    let vcoDecayLabel = text('Decay', 532, vcoLabelsHeight);
    let vcoSustainLabel = text('Sustain', 628, vcoLabelsHeight);
    let vcoReleaseLabel = text('Release', 725, vcoLabelsHeight);


    //Medium Labels
    textSize(20);
    //Vertical Labels
    rotate(-PI/2);
    text("VCO 1", -140, 50);
    text("VCO 2", -250, 50);
    rotate(PI/2);


    //Large Labels
    textSize(35);
    let oscMainLabel = text('Oscillators', 120 ,45);
    let egMainLabel = text('Envelope Generator', 450, 45);




}
