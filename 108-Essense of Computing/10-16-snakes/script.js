function makeASnake(sizeOfSnake, snakeSymbol){
    let o = 1;
    let sym = "";
    while (o <= sizeOfSnake){
        if (o % 2 == 1){
                sym = sym + snakeSymbol.toLowerCase();
            }
            else{
                sym = sym + snakeSymbol.toUpperCase();
            }
            o++;
        }
    if (sizeOfSnake > 0){
        // console.log(` ~<:=${sym}=++`);
        return(`~<:=${sym}=++`)
    }
    else {
        // console.log("");
        return ("")
    }
}


function makeATriangle(triangleHeight, triangleSymbol) {
    let i = 1
    let triangle = ""
    let n = 1
    while ( i <= triangleHeight ) {
       while ( n <= i ){
            triangle = triangle + triangleSymbol
            n++
        }
        n = 1
        if(i < triangleHeight){
        triangle = triangle + "\n"
        }
        i++
    }
    return (triangle)
}