// debugger
const lock = document.getElementById("Lock")
const tick = document.querySelector(".tick")
const numTicks = lock.getAttribute("data-lock-size")
const widthAndHeight = Number(lock.getAttribute("data-dimensions"))
const radius = widthAndHeight / 2
const degrees = 360 / numTicks 
const h1 = document.getElementById("lockNum")

lock.style.width = widthAndHeight + "px"
lock.style.height = widthAndHeight + "px"

// tick.style.transform = `translateX(${radius - 10}px)`
// tick.style.transform = `rotate(45deg)`

let mousex = 0
let mousey = 0

function addWidget() {
    let rotation = 0
    for (let i = 0; i < numTicks; i++) {
        const top = radius - 1 + (radius * Math.sin((rotation) * (Math.PI / 180)))
        const left = radius - 0 + (radius * Math.cos((rotation) * (Math.PI / 180)))
        const numTop = radius - 7 + ((radius - 30) * Math.sin((rotation) * (Math.PI / 180)))
        const numLeft = radius - 4 + ((radius - 30) * Math.cos((rotation) * (Math.PI / 180)))


        // creates new tick
        let newtick = document.createElement("div")
        newtick.classList.add("tick")
        newtick.style.top = `${top}px`
        newtick.style.left = `${left}px`
        newtick.style.transform = `rotate(${rotation + 180}deg)`
        newtick.style.transformOrigin = "center left"
        lock.appendChild(newtick)
        // debugger
        //Creates new Number
        let newNum = document.createElement("div")
        newNum.classList.add("tick-num")
        newNum.innerText = `${i}`
        newNum.style.top = `${numTop}px`
        newNum.style.left = `${numLeft}px`
        newNum.style.transform = `rotate(${rotation}deg)`
        lock.appendChild(newNum)


        rotation += degrees
    }
}
addWidget()
// lock.style.transform = "rotate(15deg)"

let mousedown = false
let clickX = 0
let clickY = 0
lock.addEventListener("mouseenter", () => {
    lock.style.cursor = "grab"
    overLock = true
    console.log("h1")
})


lock.addEventListener("mousemove", (event) => {
    let circle = lock.getBoundingClientRect();
    lockCenterX = circle.x + (circle.width / 2)
    lockcenterY = circle.y + (circle.height / 2)
    currentX = event.clientX
    currentY = event.clientY
    // xDelta = ( lockCenterX - clickX ) - ( lockCenterX - currentX )
    // yDelta =  ( lockcenterY - clickY ) - ( lockcenterY - currentY )
    testy = lockCenterX - currentX 
    testx = lockcenterY - currentY 
    if (mousedown){
        
        lockRotation = (Math.atan2(testy, testx) * 180 / Math.PI)
        lock.style.transform = `rotate(${(-1 *lockRotation)}deg)`
        h1.style.transform = `rotate(${lockRotation}deg)`
        // console.log(lockRotation)
        // console.log(currentX, currentY)
        // console.log(xDelta, yDelta)
        console.log(testx, testy)
    }})


lock.addEventListener("mousedown", (event) =>{
    mousedown = true
    clickX = event.clientX
    clickY = event.clientY
})
lock.addEventListener("mouseup", (event) => {
    mousedown = false
    // currentX = event.clientX
    // currentY = event.clientY
    // lockRotation = (Math.atan2((currentY-clickY), (currentX-clickX))) * 180 / Math.PI
    // lock.style.transform = `rotate(${lockRotation}deg)`
    // console.log(lockRotation)
})