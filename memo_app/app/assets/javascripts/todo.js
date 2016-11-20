$(function() {
  $('.js-form').on('submit', function(e) {
    e.preventDefault();
    todo = $('.js-form__text-field').val();
    $.ajax({
      type: 'POST',
      url: '/todos.json',
      data: {
        content: todo
      },
      dataType: 'json'
    })
    .done(function(data) {
      alert('success');
    })
    .fail(function() {
      alert('error');
    });
  });
});
