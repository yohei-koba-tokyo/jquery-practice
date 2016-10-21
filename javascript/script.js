$(function() {
  var buildHTML = function(word) {
    var html = '<li class="list">' + word + '</li>'
    return html
  };

  $('#form-js').on('submit', function(e) {
    e.preventDefault();
    var textField = $('#keyword-js')
    var value = textField.val();
    console.log(value);
    html = buildHTML(value);
    $('#lists-js').append(html);
    textField.val('');
  });
});
