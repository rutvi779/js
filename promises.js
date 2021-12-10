let employees=[{id:1,name:"ajay",age:22},{id:2,name:"rt",age:45}]
//create emplyee
let createEmployee = (employee) =>{
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      employees.push(employee);
      let isDone=true;
      if(isDone){
        resolve()
      }else{
        reject('spmething went wrong')
      }
    },2000)
    
  })
}

let getEmployee = ()=>{
  setTimeout(()=>{
    
    let employeeRows=''
    employees.forEach((employee)=>{
      employeeRows+=`<tr>
        <td>${employee.id}</td>
        <td>${employee.name}</td>
        <td>${employee.age}</td>
      <\tr>`
    });
    document.querySelector('#table-body').innerHTML = employeeRows;
    
  },500)
}

createEmployee({id:3,name:'wilson',age:34}).then(()=>{
  getEmployee();
}).catch((err)=>{
  console.error(err);
})
