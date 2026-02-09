
function playGuessingGame(numToGuess,totalGuesses = 10 ) {
    let userGuess
    let turns
    for (let i = 1; i <= totalGuesses; i++){
        if (i == 1) {
            userGuess = prompt("Enter a number between 1 and 100.")
            if (userGuess == numToGuess){
                
                return (i)
            } 
            else if (isNaN(userGuess)) {
                while (isNaN(userGuess)) {
                userGuess = prompt("Please enter a number.")
                if (userGuess == numToGuess){
                    
                    return(i)
                } 
                }
                
            }
            else if (userGuess == null) {
                return (0)
            }
                    } 
        else if (userGuess < numToGuess) {
            userGuess = prompt(`${userGuess} is too small. Guess a larger number.`)
            if (userGuess == numToGuess){
                
                return(i)
            }
            else if (isNaN(userGuess)) {
                while (isNaN(userGuess)) {
                userGuess = prompt("Please enter a number.")
                if (userGuess == numToGuess){
                    
                    return(i)
                } 
                }
                
            }
            else if (userGuess == null) {
                return (0)
            }
        }   
        else if (userGuess > numToGuess){
            userGuess = prompt(`${userGuess} is too large. Guess a smaller number.`)
            if (userGuess == numToGuess){
                
                return(i)
            }
            else if (isNaN(userGuess)) {
                while (isNaN(userGuess)) {
                userGuess = prompt("Please enter a number.")
                if (userGuess == numToGuess){
                    
                    return(i)
                } 
                }
                
            }
        }
    }
    return (0)
}