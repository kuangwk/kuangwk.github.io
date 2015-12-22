/* global template */
(function() {

var isLogin = $.cookie('is_login');

if (!isLogin || isLogin === 'false') {
  var html_login = template('login');
  $('#main').html(html_login);
  return;
}

window.UserInfo = {
  nick: $.cookie('nick_name')
}

var html_header = template('header', UserInfo);

$('#header').html(html_header);

var html_hoods = template('hoods', {hoods: MOCKS.hoods});
$('#main').html(html_hoods);

// listen events
$('.js-logout').on('click', function(e) {
  $.cookie('is_login', false);
  location.href = '.';
})

})();
