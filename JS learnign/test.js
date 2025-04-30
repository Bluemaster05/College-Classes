function completeDiv(divstring) {
    let divArray = divstring.split("<div>")
    let fixedDiv = ""
    let slashTurn = false

    for(let i = 0; i < divArray.length - 2; i++){
        fixedDiv += divArray[i]
        if (slashTurn) {
            fixedDiv += '</div>'
            slashTurn = false
        } else {
            slashTurn + '<div>'
            slashTurn = true
        }
    }
    fixedDiv += divArray[divArray.length - 1]
    return fixedDiv
}

console.log(completeDiv("<div>here in them<div><div>this is more stuff<div>"))