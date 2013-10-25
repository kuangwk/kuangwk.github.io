$(function(){
    $('*').mouseover(function(event){
        event.stopPropagation();
        $(this).css('border','2px solid red')
        var offset = $(this).offset();
        p.html( "left: " + offset.left + ", top: " + offset.top );
    }).mouseout(function(event) {
        event.stopPropagation();
        $(this).css('border','1px solid #000')
    }) 

    $box1 = $('div.box1')
    off = $box1.offset();
    console.log(off)

    var p = $( "p.sub" );
    var offset = p.offset();
    p.html( "left: " + offset.left + ", top: " + offset.top );
})
