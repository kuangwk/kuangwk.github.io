(function() {

    $('.js-hood').on('click', function(e) {
        var id = $(e.target).data('id');
        var html_block = template('blocks', {
            blocks: MOCKS.blocks
        });
        $('#main').html(html_block);
    })

    $('.js-back-hoods').on('click', function(e) {
        var html_hoods = template('hoods', {
            hoods: MOCKS.hoods
        });
        $('#main').html(html_hoods);
    })

    $('.js-join-block').on('click', function(e) {
        var id = $(this).data('id');
        var html_blockmembers = template('block-members', {
            members: MOCKS.members,
            block: 'block1'
        });
        $('#main').html(html_blockmembers);
    })

    $('.js-follow').on('click', function(e) {
        var id = $(this).data('id');
        var name = $(this).closest('li').find('span').text();
        console.log('send follow', id);
        alert('follow ' + name + ' success');
        $(this).attr('disabled', 'disabled');
    })

})()
