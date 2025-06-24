// Triangular of astrerisks

function printTriangular(height){
    const astrerisk = '*';
    for (let i = 1; i <= height; i++){
        console.log(astrerisk.repeat(i));  
    }
}

printTriangular(5);