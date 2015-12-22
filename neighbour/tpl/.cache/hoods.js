/*TMODJS:{"version":1,"md5":"bef40a49f8eb035f8c6745020bc65bf5"}*/
template('hoods',function($data,$filename
/**/) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$each=$utils.$each,hoods=$data.hoods,$value=$data.$value,$index=$data.$index,$escape=$utils.$escape,$out='';$out+='<h1>hoods</h1> <ul> ';
$each(hoods,function($value,$index){
$out+=' <li class=\'js-hood\'><a href=\'javascript:void(0)\' data-id="';
$out+=$escape($value.id);
$out+='">';
$out+=$escape($value.name);
$out+='</a></li> ';
});
$out+=' <script src=\'./js/hoods.js\'></script> </ul>';
return new String($out);
});