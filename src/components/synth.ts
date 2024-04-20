// https://codesandbox.io/p/sandbox/p5js-with-typescript-8rgs6?file=%2Fsrc%2Fapp.ts%3A15%2C4
//
import P5 from 'p5';
// import "p5/lib/addons/p5.sound" - https://github.com/processing/p5.js/issues/4479 - possible solution

const sketch = (p: P5) => {
  p.setup = () => {
    p.createCanvas(300, 300)
    console.log('Hello p5')
  }
  p.draw = () => { };
};
new P5(sketch);
