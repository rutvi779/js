/*let sum=(a,b)=>{
    return a+b;
}

let calculate = (c,b,callback)=>{
    return callback(c,b);
}

let output=calculate(1,2,sum);
console.log(output)*/

    
/*let sum=(a,b)=>{
    return a+b;
}

let calculate = (c,b,callback)=>{
    return callback(c,b);
}

let output=calculate(1,2,sum);
console.log(output)*/


let calculate = (c,b,callback)=>{
    return callback(c,b);
}
let output=calculate(1,2,(a,b)=>{
    return a-b
});
console.log(output)
