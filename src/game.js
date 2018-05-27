function Game() {
  this.scores = []
}

Game.prototype.frameScore = function(roll1, roll2) {
  this.scores.push(roll1+roll2)
}

Game.prototype.finalScore = function() { 
  return eval(this.scores.join("+"))
}
