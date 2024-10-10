const lock = document.getElementById("Lock")
widthAndHeight = lock.getAttribute("data-dimensions")
lock.style.width = widthAndHeight + "px"
lock.style.height = widthAndHeight + "px"
numTicks = lock.getAttribute("data-lock-size")

radius = widthAndHeight / 2


tick = document.querySelector(".tick")
// tick.style.transform = `translateX(${radius - 10}px)`
tick.style.transform = `rotate(45deg)`

// tick.style.top = `${locktop + radius}px`
// tick.style.left = `${lockleft}px`

// function create_tick(){
//     add div
//     set class to tick

// }


