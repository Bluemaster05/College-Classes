let newLogName
let NewLogCal
let newLogType
let newLogStr
let currentCalCount
let currentCalValue
let assignNum
const template = document.querySelector("#logTemplate")
const section = document.querySelector("section")
let logType


function addLog() {
    newLogName = document.getElementById("logName").value
    NewLogCal = parseInt(document.getElementById("calVal").value)
    currentCalValue = parseInt(document.getElementById("calCount").innerText)
    //Set logType variable
    if (newLogName == ""){
        alert("Please input log name")
    }
    else if (isNaN(NewLogCal)) {
        alert("please enter a valid number")
    }
    else  {
    if (document.getElementById("logType").selectedIndex == 0) {
        logType = "Food Log"
    }
    if (document.getElementById("logType").selectedIndex == 1) {
        logType = "Exercise Log"
    }
    // Make the New Element with the New Variables
    if (newLogName != "") {

    const tempClone = template.content.cloneNode(true)
    const pElement = tempClone.querySelector('p');
    pElement.innerHTML = `${newLogName} - ${NewLogCal} Calories <span class="rightAlign">${logType}</span>`;
    // template.innerHTML = `<p>${newLogName}-${NewLogCal} Calories<span>yay</span></p>`;
    section.appendChild(tempClone)
    }
    //Alert User if fields are empty
    if (newLogName == "") {
        alert("Please enter the Log Name")
    }
    else if (isNaN(NewLogCal)) {
        alert("Please enter the Calorie Count")
    }
    //Change Total Cal Count
    if (newLogName != "") {
        if (document.getElementById("logType").selectedIndex == 0) {
            assignNum = currentCalValue + NewLogCal
            document.getElementById("calCount").textContent = assignNum
            console.log(assignNum)
        }
        else if (document.getElementById("logType").selectedIndex == 1) {
            assignNum = currentCalValue - NewLogCal
            document.getElementById("calCount").textContent = assignNum
            console.log(assignNum)
        }

    }
    //Clear User Input
    if (newLogName != "" && NewLogCal != ""){
        document.getElementById("logName").value = "";
        document.getElementById("calVal").value = "";
        }
    //Test
}
}
function changeType() {
    // Food Log values
    if (document.getElementById("logType").selectedIndex == 0) {
        document.getElementById("lnLabel").innerText = "Food Name"
        document.getElementById("cvLabel").innerText = "Calorie Count"
    }
    //Exersices Log Values
    if (document.getElementById("logType").selectedIndex == 1) {
        document.getElementById("lnLabel").innerText = "Exercise Name"
        document.getElementById("cvLabel").innerText = "Calories Burned"
    }
}
document.getElementById("submit").addEventListener('click', addLog)
document.getElementById("logType").addEventListener('click', changeType)