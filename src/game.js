function Frame() {
  this.roll1 = '-';
  this.roll2 = '-';
}

Frame.prototype.firstRoll = function(pinsDown) {
  this.roll1 = pinsDown;
  if(pinsDown === 10) {
    this.roll2 = 0
    return 'strike!'
  }
}
