$(function() {
  $('form').on('submit', function(e) {
    var output = '';
    var boxes = $(this).find('input[type="checkbox"]');
    for (var i = 0; i < boxes.length; i++) {
      var box = $(boxes[i]);
      if (box.prop('checked')) {
        output += box.attr('value') + '\n';
      }
    }
    alert('あなたが選んだ果物:\n' + output);
    e.preventDefault();
  });
});
