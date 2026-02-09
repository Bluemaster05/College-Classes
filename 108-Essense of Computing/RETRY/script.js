const button = document.getElementById("submit")
// button.style.backgroundColor = "blue"
const logName = document.getElementById("name")
const calAmount = document.getElementById("num")
const logType = document.getElementById("type")
const calCounter = document.getElementById("calCounter")
let totalCals = 0


button.addEventListener('click', ()=> {
    debugger
    if (logType.value == "Food"){
        totalCals += Number(calAmount.value)
    }
    if (logType.value == "Exercise"){
        totalCals -= Number(calAmount.value)
    }
    calCounter.innerText = totalCals
})