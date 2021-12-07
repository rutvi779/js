let employees=[{
    id:1,
    name:"toe",
    city:"rita"
},
{
    id:2,
    name:"roe",
    city:"eita"
},
{
    id:3,
    name:"oe",
    city:"yita"
}

]

let result=''
//es5
for(let index in employees){
    let employee=employees[index];
    result+=`${employee.name.toUpperCase()}`;
    
}
console.log(result)

result=''
//es6
for(let employee of employees){
    //let employee=employees[index];
    result+=`${employee.name.toUpperCase()}`;
    
}
console.log(result)

result=''

//es6 forEach errow
employees.forEach(employee=>{
    result+=employee.name.toUpperCase();
})
console.log(result)
