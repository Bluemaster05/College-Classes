let currentID = 0
let editID
let editState = false
let oldcal
let oldType

const addLog = () => {
    let localID = currentID
    const logName = document.getElementById("logName").value
    const logType = document.getElementById("logType").value
    const calorieCount = document.getElementById("calorieCount").value
    if (logName == "" || logName == null || calorieCount == "" || calorieCount == null){
        alert("Please make sure all fields are vaild")
    } 
    else {
    if (editState == false){
        // make a new log
        const newLog = document.querySelector("template").content.cloneNode(true)
        const deleteLog = newLog.querySelector(".deleteLog")
        const editLog = newLog.querySelector(".modifyLog")
        newLog.querySelector("h1").innerText = logName
        newLog.querySelector(".type").innerText = logType
        newLog.querySelector(".count").innerText = calorieCount
        newLog.querySelector(".logContainer").id = localID
        //Background color class
        newLog.querySelector(".type").classList.add(logType);
        //Event Listener adding
        deleteLog.addEventListener("click", () => handleRemove(localID) )
        editLog.addEventListener("click",() => changeState(localID)) 
        currentID++

        // update the existing calorie count
        const calorieCountText = document.getElementById("calorieCountText")
        // placing the + sign in front of a value converts it to a number
        if(logType === "Exercise") {
            calorieCountText.innerText = +(calorieCountText.innerText) - +(calorieCount)
        } else {
            calorieCountText.innerText = +(calorieCountText.innerText) + +(calorieCount)
        }
        

        // add the new log to the interface
        document.getElementById("logs").appendChild(newLog)
    }
    else if (editState = true){
        let editIDLocal = editID
        const editElement = document.getElementById(editIDLocal)
        const calorieCountText = document.getElementById("calorieCountText")
        editElement.querySelector("h1").innerText = logName
        editElement.querySelector(".type").innerText = logType
        editElement.querySelector(".count").innerText = calorieCount
        //New background color
        editElement.querySelector(".type").classList.remove(oldType);
        editElement.querySelector(".type").classList.add(logType);
        // NEW TOTAL
        if(oldType == "Exercise") {
            if (logType == "Exercise"){
                calorieCountText.innerText = +(calorieCountText.innerText) - +(calorieCount) + +(oldcal)
            } 
            else {
                calorieCountText.innerText = +(calorieCountText.innerText) + +(calorieCount) + +(oldcal)  
            }
        } else {
            if (logType == "Exercise"){
                calorieCountText.innerText = +(calorieCountText.innerText) - +(calorieCount) - +(oldcal)
            }
            else {
                calorieCountText.innerText = +(calorieCountText.innerText) + +(calorieCount) - +(oldcal)
            }
        }
        editState = false
        document.getElementById("logButton").innerText = "Add Log"
    }
}

function handleRemove(id){
    const element = document.getElementById(id);
    //Change cal Count
    let count = element.querySelector(".count").innerText
    let remOldType = element.querySelector(".type").innerText
    let currentCalCount = document.querySelector("#calorieCountText").innerText
    if (remOldType == "Exercise") {
        document.querySelector("#calorieCountText").innerText = +(currentCalCount) + +(count)
    } else {
        document.querySelector("#calorieCountText").innerText = +(currentCalCount) - +(count)
    }
    //Animation out
    element.classList.remove("slide-right")
    element.classList.add("slide-left")
    //remove element
    sleep(1000, ()=> element.remove())
    
    }
}

async function sleep(timeInMs, action){
    await new Promise(resolve => {
        setTimeout(() =>{
            action()
            resolve()
        },timeInMs)
    })
}

function changeState(id){
    const element = document.getElementById(id);
    document.getElementById("logButton").innerText = "Modify Log"
    oldcal = element.querySelector(".count").innerText
    oldType = element.querySelector(".type").innerText
    editState = true
    editID = id
}

const logButton = document.getElementById("logButton")
logButton.addEventListener("click", addLog)