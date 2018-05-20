function Frame() {
  this.roll1 = '-';
  this.roll2 = '-';
  this.completed = false
}

Frame.prototype.firstRoll = function(pinsDown) {
  if(pinsDown > 10) {
    throw 'Not enough pins left'
  } else if(pinsDown === 10) {
    this.roll2 = 0;
    this.completed = true;
    return 'strike!'
  }
  this.roll1 = pinsDown;
}
