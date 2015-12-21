/*TMODJS:{"version":1,"md5":"45358af01aa7fba62f9c03ed0b773f5f"}*/
template('header',function($data,$filename
/**/) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$escape=$utils.$escape,nick=$data.nick,$out='';$out+='<nav class="navbar navbar-inverse navbar-fixed-top"> <div class="container"> <div class="navbar-header"> <a class="navbar-brand" href=".">Neighbour</a> </div> <div id="navbar" class="collapse navbar-collapse"> <ul class="nav navbar-nav"> <li class="active"><a href=".">Hoods</a></li> <li><a href="javascript:void(0)" class=\'js-tab-message\'>Messages</a></li> <li><a href="javascript:void(0)" class=\'js-post\'>Post</a></li> <li><a href="javascript:void(0)" class=\'js-friends\'>Friends</a></li> </ul> </div> <div class=\'userinfo\'>';
$out+=$escape(nick);
$out+=' <a href="javascript:void(0)" class="js-logout">logout</a> </div> </div> </nav> <script src="./js/header.js"></script> ';
return new String($out);
});