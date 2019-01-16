const knobArr = [];

function Knob(positionRight, positionDown, Radius){
      this.x = positionRight;
      this.y = positionDown;
      this.r = Radius;
      knobArr.push(this);
      this.display = function() {
        ellipse(this.positionRight, this.positionDown, this.Radius, this.Radius);
      };

}
