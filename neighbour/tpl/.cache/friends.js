/*TMODJS:{"version":1,"md5":"3b3372adb67252f03f8e5f11205e8dd8"}*/
template('friends',function($data,$filename
/**/) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$each=$utils.$each,friends=$data.friends,$value=$data.$value,$index=$data.$index,$escape=$utils.$escape,invitations=$data.invitations,$out='';$out+='<h1>Friends</h1> <ul> ';
$each(friends,function($value,$index){
$out+=' <li class="friend-item"> <span data-id="';
$out+=$escape($value.id);
$out+='">';
$out+=$escape($value.name);
$out+='</span> <button class=\'btn btn-xs btn-danger js-remove\' data-id="';
$out+=$escape($value.id);
$out+='">remove</button> </li> ';
});
$out+=' </ul> <h2>Add Friend</h2> <form class="form-add-friend" action=""> <input name="friend-name" type="text" class="form-control" placeholder="Input friend\'s name" required="" autofocus="true"> <button class="btn btn-success btn-block js-add-friend" >add friend</button> </form> <h2>Invitations</h2> <ul> ';
$each(invitations,function($value,$index){
$out+=' <li class="invitation-item"> <span data-id="';
$out+=$escape($value.id);
$out+='">';
$out+=$escape($value.name);
$out+='</span> <button class=\'btn btn-xs btn-success js-agree\' data-id="';
$out+=$escape($value.id);
$out+='">agree</button> <button class=\'btn btn-xs btn-danger js-reject\' data-id="';
$out+=$escape($value.id);
$out+='">reject</button> </li> ';
});
$out+=' </ul> <script src="./js/friends.js"></script>';
return new String($out);
});