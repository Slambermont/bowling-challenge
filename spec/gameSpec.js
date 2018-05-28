describe('Game', function() {
  var game

  beforeEach(function(){
    game = new Game;
  });

  describe('play', function() {

    it('should log frame 1 roll 1 result', function() {
      game.play(3);
      expect(game.scores[`frame 1`][`roll 1`]).toEqual(3)
    });
    it('should log frame 1 roll 2 result', function() {
      game.play(3);
      game.play(4);
      expect(game.scores[`frame 1`][`roll 2`]).toEqual(4)
    });
    it('should log frame 2 roll 1 result', function() {
      game.play(3);
      game.play(4);
      game.play(2);
      expect(game.scores[`frame 2`][`roll 1`]).toEqual(2)
    });
    it('should add up roll 1 and 2', function() {
      game.play(3);
      game.play(4);
      expect(game.total[1]).toEqual(7)
    });
    it('should add total from previous frame to current frame total', function(){
      game.play(3);
      game.play(4);
      game.play(3);
      game.play(4);
      expect(game.total[2]).toEqual(14)
    });
    it('should add extra points after a spare', function(){
      game.play(3);
      game.play(7);
      game.play(4);
      game.play(2);
      expect(game.total[1]).toEqual(14)
      expect(game.total[2]).toEqual(20)
    });
    it('should add extra points after a strike', function(){
      game.play(10);
      game.play(0);
      game.play(4);
      game.play(2);
      expect(game.total[1]).toEqual(16)
      expect(game.total[2]).toEqual(22)
    });
  });
});
