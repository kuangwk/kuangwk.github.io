var PIC_WIDTH = 600
var PIC_HEIGHT = 500

var percentageDom = document.getElementById('percentage');
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext("2d");

var img1 = new Image();
var img2 = new Image();

img1.onload = function () {

    img2.src = 'second.jpg';

    img2.onload = function () {

        ctx.drawImage(img1, 0, 0);
        img1Data = ctx.getImageData(0, 0, 600, 500);
        ctx.drawImage(img2, 0, 0);
        img2Data = ctx.getImageData(0, 0, 600, 500);

        mixImageData = getMixImageData(img1Data, img2Data, 0)

        ctx.putImageData(mixImageData, 0, 0);
    }
}

function getMixImageData (img1Data, img2Data, percentage) {
    mixImageData = ctx.getImageData(0, 0, 600, 500);

    for (var i=0; i < PIC_WIDTH * PIC_HEIGHT * 4; i+=4 ) {
        mixImageData.data[i] = img1Data.data[i] * percentage  + img2Data.data[i] * (1 - percentage)
        mixImageData.data[i+1] = img1Data.data[i+1] * percentage  + img2Data.data[i+1] * (1 - percentage)
        mixImageData.data[i+2] = img1Data.data[i+2] * percentage  + img2Data.data[i+2] * (1 - percentage)
    }
    return mixImageData

}

img1.src = 'first.jpg';

var currentPercentage = 0
canvas.addEventListener("mousewheel", function(event) {
    if (event.wheelDelta > 0) {
        if (currentPercentage < 100) {
            currentPercentage = currentPercentage + 5
            console.log(currentPercentage)
        }
    } else {
        if (currentPercentage > 0) { 
            currentPercentage = currentPercentage - 5
            console.log(currentPercentage)
        }
    }
    mixImageData = getMixImageData(img1Data, img2Data, currentPercentage / 100)

    ctx.putImageData(mixImageData, 0, 0);

    percentageDom.innerHTML = currentPercentage

});