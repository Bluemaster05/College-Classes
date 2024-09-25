export function fixed() {
  return 2
}

export function countO(word){
  let numOs = 0
  // let Arr = [...word]
  for(let i = 0; i < word.length; i++){
    if (word[i] === "o") {
      numOs += 1
    }  
  }
  return numOs
}

console.log(countO("food"))