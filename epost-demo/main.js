// $('.page').on('touchstart', function (a) {
//   console.log(a)
//   console.log(a.touches[0].pageX);
// })



// $('.page').on('touchend', function (event) {
//   console.log(event.pageX);
// })
console.log(TweenMax)

pageHeight = window.innerHeight;
var currentHeight = 0;

var snap = {
  y: function (endHeight) {
    endHeight = Math.abs(endHeight);
    if (Math.abs(endHeight - currentHeight) / pageHeight >= 0.5) {
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
                          edgeResistance:0.8,
                          throwProps:true,
                          snap: snap, 
                          ease: Quart.easeOut,
                          maxDuration: 0.7 

                        });
