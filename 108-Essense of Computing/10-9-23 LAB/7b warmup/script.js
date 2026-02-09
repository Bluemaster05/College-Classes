function isStrongPassword() {
   // Your solution goes here 
   userP = prompt("Password to check?")
   let charCheck = false
   let passCheck = false
   let upperCheck = false
   let i = 0

   if (userP.length >= 8) {
      charCheck = true
   }
   if (userP.indexOf("password") < 0) {
      passCheck = true
   }
   while (i <= userP.length){
      if (userP.charCodeAt(i) >= 65 && userP.charCodeAt(i) <= 90) {
         upperCheck = true
      }
      i++
   }
   if (charCheck == false){
      console.log("Weak password - too short")
   }
   else if (passCheck == false){
      console.log('Weak password - contains "password"')
   }
   else if (upperCheck == false){
      console.log("Weak password - no uppercase characters")
   }
   else {
      console.log("Strong password")
   }
}
