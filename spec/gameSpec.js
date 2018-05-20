describe('Frame', function() {
  var frame

  beforeEach(function () {
    frame = new Frame();
  });

  describe('Frame', function() {
    it('should default roll 1 and 2 to nothing', function() {
      expect(frame.roll1).toEqual('-')
      expect(frame.roll2).toEqual('-')
    });
    it('should default to not completed until roll2 happens', function() {
      expect(frame.completed).toEqual(false)
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
      expect(frame.firstRoll(10)).toEqual('strike!')
    });
    it('should throw error if knocking more pins than there are', function() {
      expect(function() {
        frame.firstRoll(11)
      }).toThrow('Not enough pins left');
    });
  });

  describe('#secondRoll', function() {
    it('should count number of pins down in Frame object', function() {
      frame.secondRoll(4);
      expect(frame.roll2).toEqual(4);
    });
    it('should throw error if knocking more pins than there are', function() {
      expect(function() {
        frame.firstRoll(4);
        frame.secondRoll(7);
      }).toThrow('Not enough pins left');
    });
    it('should give a spare message if rolling a spare', function() {
      frame.firstRoll(4);
      expect(frame.secondRoll(6)).toEqual('spare!');
    });
  });
});
