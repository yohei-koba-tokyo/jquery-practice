const API_KEY = '';
const ABS_TMP_DIFF = 273;

$(function() {
  var formSpinner = $('#form-spinner');
  var formError = $('#form-error');
  var formResult = $('#form-result');
  $('#weather-form').on('submit', function(e) {
    formSpinner.css('display', 'inline');
    var cityName = $(this).find('#weather-form-city').prop('value');
    var requestUrl = 'http://api.openweathermap.org/data/2.5/weather?q=';
    requestUrl += cityName + '&APPID=' + API_KEY;
    $.ajax(requestUrl);
    e.preventDefault();
  });
});
