function displayLabels(){
    //textSize() runs against all calls after it is used
    //Thus, all labels must be sized accordingly

    fill('#acafdd');
    textFont('sans-serif');

    //Small Labels
    textSize(13);
    let vcoLabelsHeight = 70;
    let vcoVolume = text('Volume', 79, vcoLabelsHeight);
    let vcoPitch = text('Pitch', 184, vcoLabelsHeight);
    let vcoShape = text('Shape', 281, vcoLabelsHeight);


    //Medium Labels
    textSize(20);
    //Vertical Labels
    rotate(-PI/2);
    text("VCO 1", -140, 50);
    text("VCO 2", -250, 50);
    rotate(PI/2);


    //Large Labels
    textSize(35);
    let oscMain = text('Oscillators', 120 ,45);




}
