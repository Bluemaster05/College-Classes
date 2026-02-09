// Your solution goes here 
function isStrongPassword(userP) {
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
   while (i <= userP.length) {
      if (userP.charCodeAt(i) >= 65 && userP.charCodeAt(i) <= 90) {
         upperCheck = true
      }
      i++
   }
   if (charCheck == false) {
      return (false)
   }
   else if (passCheck == false) {
      return (false)
   }
   else if (upperCheck == false) {
      return (false)
   }
   else {
      return (true)
   }

}