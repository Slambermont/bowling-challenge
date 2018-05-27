function Game() {
  this.scores = {};
  this.counter = 0;
  this.total = [0]
}

Game.prototype.play = function(pins) {
  this.counter += 1
  this.points(pins)
  if(this.roll()=== 'roll 2') {
    this.total.push(this.totalFrame())
  }
}

Game.prototype.totalFrame = function() {
  return (this.scores[`frame ${this.frame()}`]['roll 1'] +
  this.scores[`frame ${this.frame()}`]['roll 2'] +
  this.total[this.frame() - 1])
}

Game.prototype.points = function(pins) {
  if(this.roll()==='roll 1'){
    this.scores[`frame ${this.frame()}`] = {}
  }
  this.scores[`frame ${this.frame()}`][this.roll()] = pins
}

Game.prototype.roll = function() {
  if(this.counter % 2 === 0){
    return 'roll 2'
  } else {
    return 'roll 1'
  }
}

Game.prototype.frame = function() {
  if(this.counter % 2 === 0){
    return this.counter/2
  } else {
    return Math.round(this.counter/2)
  }
}
