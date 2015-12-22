(function() {
    // listen events
    var html_signup = template('signup');
    var html_login = template('login');

    $('.js-signin').on('click', function(e) {
        e.preventDefault();
        var formData = getAndCheckSigninData();
        formData && $.ajax({
            url: '/login',
            data: formData,
            success: function(data) {
                console.log('success', data);
                if (data.status === 'success') {
                    setUserLogin(data.user);
                } else {
                    alert('email or password error')
                }
            }
        })
        return false;
    })

    $('.js-to-signup').on('click', function(e) {
        $('#main').html(html_signup);
        return false;
    })

    $('.js-back-login').on('click', function(e) {
        $('#main').html(html_login);
        return false;
    });

    $('.js-signup').on('click', function(e) {
        e.preventDefault();
        var formData = getAndCheckSignupData();
        formData && $.ajax({
            url: '/signup',
            type: 'post',
            data: formData,
            success: function(data) {
                setUserLogin(data.user);
            }
        })
        return false;
    });

    function getAndCheckSigninData(arguments) {
        var email = getAndCheckEmail();
        var password = email ? getAndCheckPassword(false) : false;
        return (email && password) ? {
            email: email,
            password: password
        } : false;
    }

    function getAndCheckSignupData() {
        var email = getAndCheckEmail();
        var nickName = email ? getAdnCheckNickname() : false;
        var password = nickName ? getAndCheckPassword(true) : false;
        return (email && nickName && password) ? {
            email: email,
            nickName: nickName,
            password: password
        } : false;
    }

    function getAndCheckEmail() {
        // body...
        var email = $('#inputEmail').val();
        if (email === '') {
            alert('email not empty');
            return false;
        } else if (!validateEmail(email)) {
            alert('email not valid');
            return false
        }
        return email;
    }
    function validateEmail(email) {
        var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }
    function getAdnCheckNickname() {
        var nick = $('#inputNickname').val();
        if (!nick) {
            alert('nick name not empty');
        }
        return nick ? nick : false;
    }

    function getAndCheckPassword(hasConfirm) {
        var password = $('#inputPassword').val();
        if (hasConfirm) {
            var confirm =  $('#inputConfirm').val();
            if (password !== confirm) {
                alert('password not the same');
                return false;
            }
        }
        if (!password) {
            alert('password not empty');
        }
        return password ? password : false

    }

    function setUserLogin(user) {
        $.cookie('is_login', true);
        $.cookie('nick_name', user.nick_name);
        $.cookie('email', user.email);
        location.href = '.';
    }

})()
