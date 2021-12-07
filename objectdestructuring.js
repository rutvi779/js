//es6
const user = {
  id: 42,
  displayName: 'jdoe',
  fullName: {
    firstName: 'John',
    lastName: 'Doe',
    eat:{
    fruit:["apple","banana","mango"]
  }
  }
};

let {firstName,lastName}=user.fullName
let {fruit}=user.fullName.eat
console.log(firstName)
console.log(fruit)
