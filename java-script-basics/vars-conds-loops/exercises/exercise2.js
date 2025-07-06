// Build triangle using asterisk

function printTriangle(height){
    const asterisk = '* '
    for(let i = 1; i <= height; i++){
        console.log(asterisk.repeat(i));
    }
}
printTriangle(10);