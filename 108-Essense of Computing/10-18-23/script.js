// Ask user to enter a list of numbers on single line separted by commas, Determine duplitcates, tell user either way at the end
let numbers = prompt("Enter numbers in a comma separated list");
let contDup = false;
let numArray = numbers.split(', ');
numArray.sort();
for (let i = 1; i < numArray.length; i++) {
    if (numArray[i] == numArray[i - 1]) {
        contDup = true
        break
    }
}
// for (let number of numArray) {
//     if (numArray.indexOf(number) != numbers.lastIndexOf(number)) {
//         contDup = true
//     }
// }
console.log(contDup)

