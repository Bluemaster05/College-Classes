const lock = document.getElementById("Lock")
const tick = document.querySelector(".tick")
const numTicks = lock.getAttribute("data-lock-size")
const widthAndHeight = Number(lock.getAttribute("data-dimensions"))
const radius = widthAndHeight / 2
const degrees = 360 / numTicks 
const h1 = document.getElementById("lockNum")
lock.style.width = widthAndHeight + "px"
lock.style.height = widthAndHeight + "px"

function addWidget() {
    let rotation = 0
    for (let i = 0; i < numTicks; i++) {
        const top = radius - 1 + (radius * Math.sin((rotation) * (Math.PI / 180)))
        const left = radius - 0 + (radius * Math.cos((rotation) * (Math.PI / 180)))
        const numTop = radius - 7 + ((radius - 30) * Math.sin((rotation) * (Math.PI / 180)))
        const numLeft = radius - 7 + ((radius - 30) * Math.cos((rotation) * (Math.PI / 180)))

        // creates new tick
        let newtick = document.createElement("div")
        newtick.classList.add("tick")
        newtick.style.top = `${top}px`
        newtick.style.left = `${left}px`
        newtick.style.transform = `rotate(${rotation + 180}deg)`
        newtick.style.transformOrigin = "center left"
        lock.appendChild(newtick)

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

let mousedown = false
let referenceRotate = 0
let currentRotation = 0

const circle = lock.getBoundingClientRect();
let lockCenterX = circle.x + (circle.width / 2)
let lockcenterY = circle.y + (circle.height / 2)

lock.addEventListener("mouseover", () => {
    lock.style.cursor = "grab"
    overLock = true
})

lock.addEventListener("mousedown", (event) =>{
    mousedown = true
    lock.style.cursor = "grabbing"
    let clickX = event.clientX
    let clickY = event.clientY
    referenceRotate = Math.atan2(clickY - lockcenterY, clickX - lockCenterX) * 180 / Math.PI


})


lock.addEventListener("mousemove", (event) => {
    
    let currentX = event.clientX
    let currentY = event.clientY
    
    if (mousedown){
        // Rotate Lock
        newRotation = Math.atan2(currentY - lockcenterY, currentX - lockCenterX) * 180 / Math.PI
        currentRotation += (newRotation - referenceRotate)
        if (currentRotation >= 360){
            currentRotation %= 360
        } 
        else if(currentRotation < 0){
            currentRotation %= 360
            currentRotation += 360
        }
        console.log(`Diffeerence: ${newRotation - referenceRotate}`)
        console.log(referenceRotate)
        referenceRotate = newRotation

        lock.style.transform = `rotate(${(currentRotation)}deg)`
        h1.style.transform = `rotate(${-currentRotation}deg)`
        
        let h1Num = Math.round(Math.abs(currentRotation - 360) / degrees, 0)
        if (h1Num == numTicks){
            h1Num = 0
        }
        h1.innerText = `${h1Num}`
    }})


lock.addEventListener("mouseup", (event) => {
    mousedown = false
    lock.style.cursor = "grab"
})
lock.addEventListener("mouseleave", () => {
    mousedown = false
})