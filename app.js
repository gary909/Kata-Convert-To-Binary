function toBinary(n){
    let myNum = n.toString(2); //convert to dec & string
    myNum = parseInt(myNum); // convert back to number
    return myNum;
}

console.log(toBinary(1)); // 1
console.log(toBinary(2)); // 10
console.log(toBinary(3)); // 11
console.log(toBinary(5)); // 101