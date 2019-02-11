/*jshint esversion: 6 */

let sliderArr = [];

drawSliders = function(){
    fill(230);
    let vco1VolumeSlider = createSlider(0, 127, 0, 0);
    vco1VolumeSlider.style('rotate', 90);
    vco1VolumeSlider.style('position', 100, 110);
    sliderArr.push(vco1VolumeSlider);

    /*
    sliderArr.forEach(element => {
        element.display();
    });
    */
};