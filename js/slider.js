let sliderArr = [];

function buildSliders(){
    let vco1VolumeSlider = createSlider(0, 100, 0);
    vco1VolumeSlider.position(100,100);
    vco1VolumeSlider.class("slider");
    sliderArr.push(vco1VolumeSlider);


}

function drawSliders(){
    knobArr.forEach(element => {
        element.display();

        osc1AttackLevel = element.value() / 100;
    });



}


