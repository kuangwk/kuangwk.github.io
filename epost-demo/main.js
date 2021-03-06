window.onload = function () {
  $('#loading').fadeOut();
}

pageHeight = window.innerHeight;
var currentHeight = 0;


window.addEventListener('resize', function () {
  pageHeight = window.innerHeight;
  console.log(pageHeight)
  
  alert('pageHeight', pageHeight);
})

var snap = {
  y: function (endHeight) {
    if (endHeight > 0) {
      return 0;
    }
    endHeight = Math.abs(endHeight);
    if (Math.abs(endHeight - currentHeight) / pageHeight >= 0.3) {
      if (endHeight - currentHeight > 0) {
        currentHeight += pageHeight;
        return currentHeight;
      } else {
        currentHeight -= pageHeight;
        return currentHeight
      }
    } else {
      return currentHeight;
    }
  }
}

Draggable.create('main', {type:'scrollTop',
                          edgeResistance:0.5,
                          throwProps:true,
                          snap: snap, 
                          ease: Quart.easeOut,
                          maxDuration: 0.7 
                        });
