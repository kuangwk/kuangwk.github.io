/*TMODJS:{"version":1,"md5":"e68e12fa3a20ccee04688bcc85b6557c"}*/
template('blocks',function($data,$filename
/**/) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$each=$utils.$each,blocks=$data.blocks,$value=$data.$value,$index=$data.$index,$escape=$utils.$escape,$out='';$out+='<h1>blocks</h1> <ul> ';
$each(blocks,function($value,$index){
$out+=' <li class=\'js-blocks\'> <span href=\'javascript:void(0)\' data-id="';
$out+=$escape($value.id);
$out+='">';
$out+=$escape($value.name);
$out+='</span> <button class=\'btn btn-xs btn-primary js-join-block\' data-id="';
$out+=$escape($value.id);
$out+='">join</button> </li> ';
});
$out+=' </ul> <button class="btn btn-s btn-week js-back-hoods">back</button> <script src=\'./js/hoods.js\'></script> ';
return new String($out);
});