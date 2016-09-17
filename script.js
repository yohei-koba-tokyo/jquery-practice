$(function() {
  $('form').on('submit', function(e) {
    var radios = $(this).find('input[type="radio"]');
    for (var i = 0; i < radios.length; i++) {
      var radio = $(radios[i]);
      if (radio.prop('checked')) {
        var sex = radio.attr('value');
        alert('あなたは「' + sex + '」を選択しました');
        return;
      }
    }
    e.preventDefault();
  });
});
