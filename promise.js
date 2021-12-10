let cleaning = new Promise((resolve,reject)=>{
    let isDone=true;
    if(isDone){
        resolve('Cleaning is done');
    }else{
        reject('Clean is not done');
    }
});

cleaning.then((message)=>{
    console.log(message);
}).catch((err)=>{
    console.error(err);
});
