/*TMODJS:{"version":1,"md5":"e597e97d7106d8d44e2e92d8f1a92e4d"}*/
template('block-members',function($data,$filename
/**/) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$escape=$utils.$escape,block=$data.block,$each=$utils.$each,members=$data.members,$value=$data.$value,$index=$data.$index,$out='';$out+='<h1>members of ';
$out+=$escape(block);
$out+='</h1> <ul> ';
$each(members,function($value,$index){
$out+=' <li> <span href=\'javascript:void(0)\' data-id="';
$out+=$escape($value.id);
$out+='">';
$out+=$escape($value.name);
$out+='</span> ';
if($value.follow){
$out+=' <button class=\'btn btn-xs btn-primary js-follow\' data-id="';
$out+=$escape($value.id);
$out+='" disabled="disabled">follow</button> ';
}else{
$out+=' <button class=\'btn btn-xs btn-primary js-follow\' data-id="';
$out+=$escape($value.id);
$out+='">follow</button> ';
}
$out+=' </li> ';
});
$out+=' </ul> <button class="btn btn-s btn-week js-back-hoods">back</button> <script src=\'../js/hoods.js\'></script> ';
return new String($out);
});