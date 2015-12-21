// mocks data
window.MOCKS = {
    hoods: [{
        id: 1,
        name: 'hood1'
    }, {
        id: 2,
        name: 'hood2'
    }],
    list: ['文艺', '博客', '摄影', '电影', '民谣', '旅行', '吉他'],

    blocks: [{
        id: 3,
        name: 'block1',
    }, {
        id: 4,
        name: 'block2'
    }],

    members: [{
        id: 3,
        name: 'Shabi',
        follow: false,
    }, {
        id: 4,
        name: 'Kitt',
        follow: true,
    }],

    messages: [{
        title: 'this is a title',
        content: 'i am a content',
        from: 'jijilong',
        from_id: '1',
        type: 'block'
    }, {
        title: 'this is a title2',
        content: 'i am a content2',
        from: 'jijilong',
        from_id: '1',
        type: 'priviate'
    }],
    friends: [{
        id: 5,
        name: 'jiji'        
    },{
        id: 6,
        name: 'hu'
    }],
    invitations: [{
        id: 3,
        name: 'jiji'
    },{
        id: 4,
        name: 'tt'
    }]
};

// mock ajax server
$.mockjax({
  url: "/login",
  responseText: {
    status: "success",
    user: {
      id: 1,
      nick_name: 'jijilong',
      email: 'q@qq.com'
    }
  }
});

$.mockjax({
    url: "/delete-friend",
    responseText: {
        status: "success",
    }
});
$.mockjax({
    url: "/add-friend",
    responseText: {
        status: "success",
    }
});
$.mockjax({
    url: "/agree-friend",
    responseText: {
        status: "success",
    }
});
