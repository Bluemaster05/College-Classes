function drawTriangle(triangleSize) {
   let i = 1
    let triangle = ""
    let n = 1
    while ( i <= triangleSize ) {
       while ( n <= i ){
            triangle = triangle + "*"
            n++
        }
        n = 1
        if(i < triangleSize){
        triangle = triangle + "\n"
        }
        i++
    }
    console.log(triangle)
}