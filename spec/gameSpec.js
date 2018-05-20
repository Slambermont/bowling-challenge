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
});
