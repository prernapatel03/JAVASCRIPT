const  P1 = new Promise(function(res , rej){
       setTimeout(rej,1000,"prerna")
})

const P2 = new Promise(function(res , rej){
    setTimeout(res,2000,"XYZ")
})

const P3 = Promise.resolve(5);

const P = [P1 , P2 , P3]

Promise.race(P).then((e)=>{
    console.log(e)
}).catch((e)=>{
    console.log(" e :" , e)
})

