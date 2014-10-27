var PIC_WIDTH = 300
var PIC_HEIGHT = 250

var percentageDom = document.getElementById('percentage');
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext("2d");
var btn = document.getElementById('scale-btn');

var img1 = new Image();
var img2 = new Image();

// 加载完两张图片才开始处理图片
img1.onload = function () {

    img2.onload = function () {

        ctx.drawImage(img1, 0, 0);
        img1Data = ctx.getImageData(0, 0, PIC_WIDTH, PIC_HEIGHT);
        ctx.drawImage(img2, 0, 0);
        img2Data = ctx.getImageData(0, 0, PIC_WIDTH, PIC_HEIGHT);

        mixImageData = getMixImageData(img1Data, img2Data, 0)

        ctx.putImageData(mixImageData, 0, 0);
    }

    img2.src = 'second.jpg';
}

img1.src = 'first.jpg';


// 计算得到两张图片像素按权重相加后的数据
function getMixImageData (img1Data, img2Data, percentage) {
    mixImageData = ctx.getImageData(0, 0, PIC_WIDTH, PIC_HEIGHT);

    for (var i=0; i < PIC_WIDTH * PIC_HEIGHT * 4; i+=4 ) {
        mixImageData.data[i] = img1Data.data[i] * percentage  + img2Data.data[i] * (1 - percentage)
        mixImageData.data[i+1] = img1Data.data[i+1] * percentage  + img2Data.data[i+1] * (1 - percentage)
        mixImageData.data[i+2] = img1Data.data[i+2] * percentage  + img2Data.data[i+2] * (1 - percentage)
    }
    return mixImageData
}

// 浏览器拖动条控件
var startX = 0;
var startLeft = 0;
btn.style.left = 0;

btn.addEventListener('mousedown', btnMouseDown);

function btnMouseDown (event) {
    startX = event.clientX;
    startLeft = parseInt(btn.style.left);
    document.addEventListener('mousemove', btnMouseMove);
    document.addEventListener('mouseup', btnMouseUp);
}

function btnMouseMove (event) {
    currentX = event.clientX;
    deltaX = currentX - startX;
    currentLeft = startLeft + deltaX;
    if (currentLeft >= 0 && currentLeft <= 100) {
        btn.style.left = currentLeft
        mixImageData = getMixImageData(img1Data, img2Data, currentLeft / 100)
        ctx.putImageData(mixImageData, 0, 0);
        percentageDom.innerHTML = currentLeft
    } 
}

function btnMouseUp (event) {
    document.removeEventListener('mousemove', btnMouseMove);
    document.removeEventListener('mouseup', btnMouseUp);
}
