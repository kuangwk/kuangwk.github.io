var PIC_WIDTH = 300
var PIC_HEIGHT = 533

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext("2d");

var img = new Image();

img.onload = function () {
    ctx.drawImage(img, 0, 0);
    img = ctx.getImageData(0, 0, 300, 533);
    img = setToGray(img);
    ctx.putImageData(img, PIC_WIDTH + 10, 0)
}

function setToGray (img) {
    for (var i=0; i < PIC_WIDTH * PIC_HEIGHT * 4; i+=4 ) {
        var red = img.data[i];
        var green = img.data[i+1];
        var blue = img.data[i+2];
        gray = parseInt((red + green + blue) / 3);
        img.data[i] = gray
        img.data[i+1] = gray
        img.data[i+2] = gray
    }
    return img
}

img.src = 'http://localhost:3000/hw1/1.png';