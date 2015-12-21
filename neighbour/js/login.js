(function() {
// listen events
var html_login = template('login');
var html_signup = template('signup');

$('.js-signin').on('click',function(e) {
  $.ajax({
    url: '/login',
    success: function(data) {
      console.log('success', data);
      if (data.status === 'success') {
        var user = data.user;
        $.cookie('is_login', true);
        $.cookie('nick_name', user.nick_name);
        $.cookie('email', user.email);
        location.href = '.';
      }
    }
  })
  return false;
})

$('.js-signup').on('click',function(e) {
  $('#main').html(html_signup);
  return false;
})

var html_login = template('login');
$('.js-back-login').on('click',function(e) {
  $('#main').html(html_login);
  return false;
});

})()
