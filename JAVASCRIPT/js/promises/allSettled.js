const P1 = 50

const P2 = new Promise((res, rej)=>{
    setTimeout(res , 2000 , "prerna")
})

const P3 =  Promise.resolve(5);

const data = Promise.allSettled([P1 , P2 , P3]).then((values)=>{
    console.log(values.map((e)=> {return e.status + " "+ e.value}));
})