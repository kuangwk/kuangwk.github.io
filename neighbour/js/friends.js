(function() {
    $('.js-remove').on('click', function(e) {
        var $this = $(this);
        var id = $this.data('id');
        var name = $this.closest('li').find('span').text();
        confirm('Are you sure?') && $.ajax({
            url: '/delete-friend',
            type: 'POST',
            data: {
                id: id
            },
            success: function() {
                $this.closest('li').remove();
            }
        });
    });

    $('.js-add-friend').on('click', function(e) {
        e.preventDefault();
        var $this = $(this);
        var name = $this.closest('form').find('input').val();
        name && $.ajax({
            url: '/add-friend',
            data: {
                name: name
            },
            success: function(data) {
                alert('add friend success');
            }
        });
        return false;
    });

    $('.js-agree').on('click', function(e) {
        var $this = $(this);
        var id = $this.data('id');
        var name = $this.closest('li').find('span').text();
        confirm('Are you sure?') && $.ajax({
            url: '/agree-friend',
            type: 'POST',
            data: {
                id: id
            },
            success: function() {
                $this.closest('li').remove();
            }
        });
    });


})();
