$(function() {
  var buttons = $('ol li button');
  for (var i = 0; i < buttons.length; i++) {
    var button = $(buttons[i]);
    button.click(function() {
      window.location = './' + $(this).attr('class') + '.html';
    });
  }

  $('.back').click(function() {
    window.history.back();
  });

  $('.forward').click(function() {
    window.history.forward();
  });
});
