// debugger
const lock = document.getElementById("Lock")
const tick = document.querySelector(".tick")
const numTicks = lock.getAttribute("data-lock-size")
const widthAndHeight = Number(lock.getAttribute("data-dimensions"))
const radius = widthAndHeight / 2
const degrees = 360 / numTicks 

lock.style.width = widthAndHeight + "px"
lock.style.height = widthAndHeight + "px"

// tick.style.transform = `translateX(${radius - 10}px)`
// tick.style.transform = `rotate(45deg)`


function addWidget() {
    let rotation = 0
    // debugger
    for (let i = 0; i < numTicks; i++) {
        let top = radius - 1 + (radius * Math.sin((rotation - 180) * (Math.PI / 180)))
        let left = radius - 0 + (radius * Math.cos((rotation - 180) * (Math.PI / 180)))

        // creates new tick
        let newtick = document.createElement("div")
        newtick.classList.add("tick")
        newtick.style.top = `${top}px`
        newtick.style.left = `${left}px`
        newtick.style.transform = `rotate(${rotation}deg)`
        newtick.style.transformOrigin = "center left"
        lock.appendChild(newtick)

        rotation += degrees
    }
}
addWidget()
lock.style.transform = "rotate(15deg)"