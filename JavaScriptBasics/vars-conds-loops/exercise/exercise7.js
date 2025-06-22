// Print a numbers pyramid

function printNumsPyramid(height){
    for (let i = 1; i <= height; i++){
        console.log(String(i).repeat(i));
    }
}
const height = 9;

printNumsPyramid(height);