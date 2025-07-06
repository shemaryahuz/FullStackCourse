// Lesson task 1
let arr = [];
arr.push("Hello");
arr.push(true);
arr.push(5.5);
console.log(arr);
arr.pop();
console.log(arr);

// Lesson task 2
let str = 'beesoafQdzxTFPPaXnSoBdShzhoYRTeZpOxRLcpQgmhpkEhKcCWJUrnxCysxbxgBRiFfTchmLETPHnvNuvOAHaDAljUVwaDCRHGg'.split('');
let indices = [];
for (let i = 0; i < str.length; i++){
    if (str[i] >= 'A' && str[i] <= 'Z'){
        indices.push(i);
    }
}
console.log('Indices of uppercase letters:', indices);
for (let i = indices.length - 1; i >= 0 ; i--){
        str.splice(indices[i], 1);
}
console.log('Final result:', str.join(''));