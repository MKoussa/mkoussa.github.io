/*jshint esversion: 6 */

let vco1VolumeSlider;
let vco1PitchSlider;
let vco1ShapeSlider;

let vco2VolumeSlider;
let vco2PitchSlider;
let vco2ShapeSlider;

let sliderArr = [];

function buildSliders(){
    vco1VolumeSlider = createSlider(0, 100, 0, 0);
    vco1VolumeSlider.position(Math.floor(browserWidth / 80), 80);
    vco1VolumeSlider.class("slider");
    sliderArr.push(vco1VolumeSlider);

    vco1PitchSlider = createSlider(-100, 100, 0, 1);
    vco1PitchSlider.position(Math.floor(browserWidth / 80) + 50, 80);
    vco1PitchSlider.class("slider");
    sliderArr.push(vco1PitchSlider);

    vco1ShapeSlider = createSlider(0, 100, 0, 0);
    vco1ShapeSlider.position(Math.floor(browserWidth / 80) + 100, 80);
    vco1ShapeSlider.class("slider");
    sliderArr.push(vco1PitchSlider);

    vco2VolumeSlider = createSlider(0, 100, 0, 0);
    vco2VolumeSlider.position(Math.floor(browserWidth / 80), 200);
    vco2VolumeSlider.class("slider");
    sliderArr.push(vco2VolumeSlider);

    vco2PitchSlider = createSlider(-100, 100, 0, 1);
    vco2PitchSlider.position(Math.floor(browserWidth / 80) + 50, 200);
    vco2PitchSlider.class("slider");
    sliderArr.push(vco2PitchSlider);

    vco2ShapeSlider = createSlider(0, 100, 0, 0);
    vco2ShapeSlider.position(Math.floor(browserWidth / 80) + 100, 200);
    vco2ShapeSlider.class("slider");
    sliderArr.push(vco2PitchSlider);


}

function drawSliders(){
    knobArr.forEach(element => {
        element.display();

        osc1AttackLevel = element.value() / 100;
    });



}


