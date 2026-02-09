function formLetter() {
let firstName = prompt("What is your first name?");
let lastName = prompt("What is your last name?");
let salutation = prompt("Which salutation do you prefer (Ms., Miss, Mr., Dr., Pr., Rev., etc.)?");
let phoneNumber =prompt("What is your phone number?");
let streetAddress =prompt("What is your street address (123 Some Street)?");
let city =prompt("What city or town do you live in?");
let state =prompt("What state do you live in (please use the 2-letter abbreviation)?");
let zipCode =prompt("What is your ZIP (or ZIP+4) code?");
console.log(`Dear ${salutation} ${lastName}:`)
console.log("")
console.log(`I regret to inform you that you were not selected as a winner in our sweepstakes.`)
console.log(`Since I can imagine that this is very disappointing to you,`)
console.log(`and I feel a certain affinity to you because we share a first name,`)
console.log(`I'd like to offer you a consolation prize.`)
console.log("")
console.log(`All you have to do is confirm the following information for us:`)
console.log("")
console.log(`${salutation} ${firstName} ${lastName}`)
console.log(`${streetAddress}`)
console.log(`${city}, ${state} ${zipCode}`)
console.log("")
console.log(`We will call you at ${phoneNumber} to let you know when we've shipped your prize.`)
console.log("")
console.log(`Sincerely,`)
console.log("")
console.log(`${firstName}`)
}