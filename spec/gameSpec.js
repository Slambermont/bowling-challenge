describe('Game', function() {
  var game

  beforeEach(function(){
    game = new Game;
  });

  describe('#scores', function() {
    it('should default to an empty array', function(){
      expect(game.scores).toEqual([]);
    });
  });

  describe('#frameScore', function() {
    it('should add both frame scores to the total counter', function() {
      game.frameScore(3, 4)
      expect(game.scores).toEqual([[3, 4]])
    });
  });
});
