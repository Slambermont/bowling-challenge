$('document').ready(function() {

  var game = new Game();

  function setDisplay() {
    $('#1-1').text(game.scores[`frame 1`]['roll 1'])
    $('#1-2').text(game.scores[`frame 1`]['roll 2'])
    $('#1-t').text(game.total[1])
    $('#2-1').text(game.scores[`frame 2`]['roll 1'])
    $('#2-2').text(game.scores[`frame 2`]['roll 2'])
    $('#2-t').text(game.total[2])
    $('#3-1').text(game.scores[`frame 3`]['roll 1'])
    $('#3-2').text(game.scores[`frame 3`]['roll 2'])
    $('#3-t').text(game.total[3])
    $('#4-1').text(game.scores[`frame 4`]['roll 1'])
    $('#4-2').text(game.scores[`frame 4`]['roll 2'])
    $('#4-t').text(game.total[4])
    $('#5-1').text(game.scores[`frame 5`]['roll 1'])
    $('#5-2').text(game.scores[`frame 5`]['roll 2'])
    $('#5-t').text(game.total[5])
    $('#6-1').text(game.scores[`frame 6`]['roll 1'])
    $('#6-2').text(game.scores[`frame 6`]['roll 2'])
    $('#6-t').text(game.total[6])
    $('#7-1').text(game.scores[`frame 7`]['roll 1'])
    $('#7-2').text(game.scores[`frame 7`]['roll 2'])
    $('#7-t').text(game.total[7])
    $('#8-1').text(game.scores[`frame 8`]['roll 1'])
    $('#8-2').text(game.scores[`frame 8`]['roll 2'])
    $('#8-t').text(game.total[8])
    $('#9-1').text(game.scores[`frame 9`]['roll 1'])
    $('#9-2').text(game.scores[`frame 9`]['roll 2'])
    $('#9-t').text(game.total[9])
    $('#10-1').text(game.scores[`frame 10`]['roll 1'])
    $('#10-2').text(game.scores[`frame 10`]['roll 2'])
    $('#10-t').text(game.total[10])
  };

  $('button').click(function() {
    game.play()
    setDisplay();
  });
})
