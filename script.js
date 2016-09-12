$(function() {
  $('form').on('submit', function(e) {
    var output = '';
    var boxes = $(this).find('input[type="checkbox"]');
    $.each(boxes, function() {
      if ($(this).prop('checked')) {
        output += $(this).attr('value') + '\n';
      }
    });
    alert('あなたが選んだ果物:\n' + output);
    e.preventDefault();
  });
});
