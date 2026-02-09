const rect = document.querySelector("rect")
const rectSVG = document.getElementById("rectSVG")
const circle = document.querySelector("circle")
const circleSVG = document.getElementById("circleSVG")
const line = document.querySelector('line')
const lineSVG = document.getElementById('lineSVG')


// RECTANGLE CODE
function changeRectSVGWidth() {
    let newSVGWidth = document.getElementById("rectSVGW").value
    rectSVG.setAttribute('width', newSVGWidth)
}
document.getElementById("rectSVGW").addEventListener('change', changeRectSVGWidth)

function changeRectSVGHeight() {
    let newSVGHeight = document.getElementById("rectSVGW").value
    rectSVG.setAttribute('height', newSVGHeight)
}
document.getElementById("rectSVGH").addEventListener('change', changeRectSVGHeight)

function changeRectWidth() {
    let newWidth = document.getElementById("rectWidth").value
    rect.setAttribute('width', newWidth)
}
document.getElementById("rectWidth").addEventListener('change', changeRectWidth)

function changeRectHeight() {
    let newHeight = document.getElementById("rectHeight").value
    rect.setAttribute('height', newHeight)
}
document.getElementById("rectHeight").addEventListener('change', changeRectHeight)

function changeRectx() {
    let newX = document.getElementById("rectX").value
    rect.setAttribute('x', newX)
}
document.getElementById("rectX").addEventListener('change', changeRectx)

function changeRecty() {
    let newY = document.getElementById("rectY").value
    rect.setAttribute('y', newY)
}
document.getElementById("rectY").addEventListener('change', changeRecty)

function changeRectRx() {
    let newRx = document.getElementById("rectRX").value
    rect.setAttribute('rx', newRx)
}
document.getElementById("rectRX").addEventListener('change', changeRectRx)

function changeRectFill() {
    let newRectFill = document.getElementById("rectFill").value
    rect.setAttribute('fill', newRectFill)
}
document.getElementById("rectFill").addEventListener('change', changeRectFill)

function changeRectStrokeWidth() {
    let newRectStrokeW = document.getElementById("rectStrokeWidth").value
    rect.setAttribute('stroke-width', newRectStrokeW)
}
document.getElementById("rectStrokeWidth").addEventListener('change', changeRectStrokeWidth)

function changeRectStrokeColor() {
    let newRectStrokeColor = document.getElementById("rectStrokeColor").value
    rect.setAttribute('stroke', newRectStrokeColor)
}
document.getElementById("rectStrokeColor").addEventListener('change', changeRectStrokeColor)

//CIRCLE CODE

function changeCircleSVGW() {
    
    let newCircleSVGW = document.getElementById("circleSVGW").value
    console.log(newCircleSVGW)
    circleSVG.setAttribute('width', newCircleSVGW)
}
document.getElementById("circleSVGW").addEventListener('change', changeCircleSVGW)

function changeCircleSVGH() {
    let newCircleSVGH = document.getElementById("circleSVGH").value
    circleSVG.setAttribute('height', newCircleSVGH)
}
document.getElementById("circleSVGH").addEventListener('change', changeCircleSVGH)

function changeCircleRx() {
    let newRx = document.getElementById("circleR").value
    circle.setAttribute('r', newRx)
}
document.getElementById("circleR").addEventListener('change', changeCircleRx)

function changeCirclex() {
    let newX = document.getElementById("circlex").value
    circle.setAttribute('cx', newX)
}
document.getElementById("circlex").addEventListener('change', changeCirclex)

function changeCircley() {
    
    let newY = document.getElementById("circley").value
    circle.setAttribute('cy', newY)
}
document.getElementById("circley").addEventListener('change', changeCircley)
 
function changeFill() {
    
    let newFill = document.getElementById("circleFill").value
    circle.setAttribute('fill', newFill)
}
document.getElementById("circleFill").addEventListener('change', changeFill)

function changeStrokeWidth() {
    
    let newStrokeWidth = document.getElementById("circleStrokeWidth").value
    circle.setAttribute('stroke-width', newStrokeWidth)
}
document.getElementById("circleStrokeWidth").addEventListener('change', changeStrokeWidth)

function changeStroke() {
    
    let newStokeWidth = document.getElementById("circleStrokeColor").value
    circle.setAttribute('stroke', newStokeWidth)
}
document.getElementById("circleStrokeColor").addEventListener('change', changeStroke)

//Line Code

function changeLineSVGW() {
    
    let newLineSVGW = document.getElementById("lineSVGW").value
    console.log(newLineSVGW)
    lineSVG.setAttribute('width', newLineSVGW)
}
document.getElementById("lineSVGW").addEventListener('change', changeLineSVGW)

function changeLineSVGH() {
    let newLineSVGH = document.getElementById("lineSVGH").value
    lineSVG.setAttribute('height', newLineSVGH)
}
document.getElementById("lineSVGH").addEventListener('change', changeLineSVGH)

function changeX1() {
    let newLineX1 = document.getElementById("lineX1").value
    line.setAttribute('x1', newLineX1)
}
document.getElementById("lineX1").addEventListener('change', changeX1)

function changeX2() {
    let newLineX2 = document.getElementById("lineX2").value
    line.setAttribute('x2', newLineX2)
}
document.getElementById("lineX2").addEventListener('change', changeX2)

function changeY1() {
    let newLineY1 = document.getElementById("lineY1").value
    line.setAttribute('y1', newLineY1)
}
document.getElementById("lineY1").addEventListener('change', changeY1)

function changeY2() {
    let newLineY2 = document.getElementById("lineY2").value
    line.setAttribute('y2', newLineY2)
}
document.getElementById("lineY2").addEventListener('change', changeY2)

function changeLineWidth() {
    let newStrokeWidth = document.getElementById("lineStrokeWidth").value
    line.setAttribute('stroke-width', newStrokeWidth)
}
document.getElementById("lineStrokeWidth").addEventListener('change', changeLineWidth)

function changeLineColor() {
    let newStrokeColor = document.getElementById("lineStrokeColor").value
    line.setAttribute('stroke', newStrokeColor)
}
document.getElementById("lineStrokeColor").addEventListener('change', changeLineColor)

const slider = document.getElementById('SliderVector');
slider.addEventListener('input', handleChange);


function handleChange(e) {
  const img = document.getElementById("VectorZoom");
  const {value, max} = e.target;
  img.style.width = `${value*max}px`;
  img.style.height = `${value*max}px`;
}

const slider2 = document.getElementById('SliderBitmap');
slider2.addEventListener('input', handleChange2);


function handleChange2(e) {
  const img = document.getElementById("BitmapZoom");
  const {value, max} = e.target;
  img.style.width = `${value*max}px`;
  img.style.height = `${value*max}px`;
}

//ZOOM Function
function imageZoom(imgID, resultID) {
    var img, lens, result, cx, cy;
    img = document.getElementById(imgID);
    result = document.getElementById(resultID);
    /*create lens:*/
    lens = document.createElement("DIV");
    lens.setAttribute("class", "img-zoom-lens");
    /*insert lens:*/
    img.parentElement.insertBefore(lens, img);
    /*calculate the ratio between result DIV and lens:*/
    cx = result.offsetWidth / lens.offsetWidth;
    cy = result.offsetHeight / lens.offsetHeight;
    /*set background properties for the result DIV:*/
    result.style.backgroundImage = "url('" + img.src + "')";
    result.style.backgroundSize = (img.width * cx) + "px " + (img.height * cy) + "px";
    /*execute a function when someone moves the cursor over the image, or the lens:*/
    lens.addEventListener("mousemove", moveLens);
    img.addEventListener("mousemove", moveLens);
    /*and also for touch screens:*/
    lens.addEventListener("touchmove", moveLens);
    img.addEventListener("touchmove", moveLens);
    function moveLens(e) {
      var pos, x, y;
      /*prevent any other actions that may occur when moving over the image:*/
      e.preventDefault();
      /*get the cursor's x and y positions:*/
      pos = getCursorPos(e);
      /*calculate the position of the lens:*/
      x = pos.x - (lens.offsetWidth / 2);
      y = pos.y - (lens.offsetHeight / 2);
      /*prevent the lens from being positioned outside the image:*/
      if (x > img.width - lens.offsetWidth) {x = img.width - lens.offsetWidth;}
      if (x < 0) {x = 0;}
      if (y > img.height - lens.offsetHeight) {y = img.height - lens.offsetHeight;}
      if (y < 0) {y = 0;}
      /*set the position of the lens:*/
      lens.style.left = x + "px";
      lens.style.top = y + "px";
      /*display what the lens "sees":*/
      result.style.backgroundPosition = "-" + (x * cx) + "px -" + (y * cy) + "px";
    }
    function getCursorPos(e) {
      var a, x = 0, y = 0;
      e = e || window.event;
      /*get the x and y positions of the image:*/
      a = img.getBoundingClientRect();
      /*calculate the cursor's x and y coordinates, relative to the image:*/
      x = e.pageX - a.left;
      y = e.pageY - a.top;
      /*consider any page scrolling:*/
      x = x - window.pageXOffset;
      y = y - window.pageYOffset;
      return {x : x, y : y};
    }
  }

// Initiate zoom effect:
imageZoom("myimage", "myresult");




//Map Game functions
const riddle1 = document.getElementById('r1')
const riddle2 = document.getElementById('r2')
const riddle3 = document.getElementById('r3')
const riddle4 = document.getElementById('r4')
const riddle5 = document.getElementById('r5')


function onclickCheck(){
let r1val = document.getElementById('r1').value
let r2val = document.getElementById('r2').value
let r3val = document.getElementById('r3').value
let r4val = document.getElementById('r4').value
let r5val = document.getElementById('r5').value
//riddle 1
if (r1val == '10011'){
    riddle1.style.backgroundColor = 'green'
}
else {
    riddle1.style.backgroundColor = 'red'
}
//riddle 2
if (r2val == '000111'){
    riddle2.style.backgroundColor = 'green'
}
else {
    riddle2.style.backgroundColor = 'red'
}
//riddle 3
if (r3val == '00001'){
    riddle3.style.backgroundColor = 'green'
}
else {
    riddle3.style.backgroundColor = 'red'
}
//riddle 4
if (r4val == '10000'){
    riddle4.style.backgroundColor = 'green'
}
else {
    riddle4.style.backgroundColor = 'red'
}
//riddle 5
if (r5val == '00010'){
    riddle5.style.backgroundColor = 'green'
}
else {
    riddle5.style.backgroundColor = 'red'
}
}



document.getElementById("mapButton").addEventListener('click', onclickCheck)