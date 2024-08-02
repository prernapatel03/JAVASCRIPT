const P = Promise.resolve(5);

const P1 = new Promise((res , rej)=>{
    setTimeout(rej, 2000 , "prerna")
})
const P2 = 50;

const P3 = Promise.all([P , P1 , P2]).then((values)=>{
     console.log(values)
}).catch((e)=>{ 
    console.log(e)
})

