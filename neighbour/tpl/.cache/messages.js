/*TMODJS:{"version":1,"md5":"75ecf9111800fb686130099469af5537"}*/
template('messages',function($data,$filename
/**/) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$each=$utils.$each,messages=$data.messages,$value=$data.$value,$index=$data.$index,$escape=$utils.$escape,$out='';$out+='<h1>Messages</h1> <ul> ';
$each(messages,function($value,$index){
$out+=' <li> <a href=\'javascript:void(0)\' data-id="';
$out+=$escape($value.id);
$out+='">';
$out+=$escape($value.title);
$out+='</a> <p>';
$out+=$escape($value.content);
$out+='</p> <p>';
$out+=$escape($value.from);
$out+='</p> </li> ';
});
$out+=' <script src=\'../js/hoods.js\'></script> </ul>';
return new String($out);
});