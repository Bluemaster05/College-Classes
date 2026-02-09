// Put your solution here
function divideArray(numbers) {
    let evenNumbers = []
    let oddNumbers = []
    let oddOutput = ""
    let evenOutput = ""
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 == 0) {
            evenNumbers.push(numbers[i])
        }
        else {
            oddNumbers.push(numbers[i])
        }
    }
    evenNumbers.sort((a, b) => a - b)
    oddNumbers.sort((a, b) => a - b)
    console.log("Even numbers:")
if (evenNumbers.length === 0) {
    console.log("None")
}
else{
    for (let i = 0; i < evenNumbers.length; i++) {
        console.log(evenNumbers[i])
    }
}
console.log("Odd numbers:")
if (oddNumbers.length === 0) {
    console.log("None")
}
else{
    for (let i = 0; i < oddNumbers.length; i++) {
        console.log(oddNumbers[i])
    }
}
}