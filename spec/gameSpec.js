describe('Frame', function() {
  var frame = new Frame();

  describe('Frame', function() {
    it('should default roll 1 and 2 to nothing', function() {
      expect(frame.roll1).toEqual('-')
      expect(frame.roll2).toEqual('-')
    });
  });

  describe('#firstRoll', function() {
    it('should count number of pins down in Frame object', function() {
      frame.firstRoll(4);
      expect(frame.roll1).toEqual(4);
    });
    it('should end the frame if strike', function() {
      frame.firstRoll(10);
      expect(frame.roll2).toEqual(0);
    });
  });
});
