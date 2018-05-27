function Game() {
  this.scores = []
  this.counter = 0
}

Game.prototype.frameScore = function(roll1, roll2) {
  this.scores.push(roll1+roll2)
  this.counter += 1
  if(this.counter === 10) {
    return 'Game finished!'
  }
}

Game.prototype.finalScore = function() {
  return eval(this.scores.join("+"))
}
