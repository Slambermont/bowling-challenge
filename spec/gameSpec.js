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

  describe('#counter', function() {
    it('should increase by 1 every frame', function() {
      game.frameScore(3,4)
      expect(game.counter).toEqual(1);
    });
    it('should end game after 10 frames', function() {
      for(var i = 0; i < 9; i++){
        game.frameScore(3,4);
      }
      expect(game.frameScore(3,4)).toEqual('Game finished!')
    });
  });

  describe('#frameScore', function() {
    it('should add both frame scores to the total counter', function() {
      game.frameScore(3, 4)
      expect(game.scores).toEqual([7])
    });
  });

  describe('#finalScore', function() {
    it('should add add all scores together', function() {
      for(var i = 0; i < 10; i++){
        game.frameScore(3,4);
      }
      expect(game.finalScore()).toEqual(70)
    });
  });
});
