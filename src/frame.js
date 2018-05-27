function Frame() {
  this.roll1 = null;
  this.roll2 = null;
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

Frame.prototype.secondRoll = function(pinsDown) {
  if(pinsDown > 10-this.roll1) {
    throw 'Not enough pins left'
  } else if(pinsDown === 10-this.roll1) {
    return 'spare!'
  }
  this.roll2 = pinsDown
  this.completed = true
}
