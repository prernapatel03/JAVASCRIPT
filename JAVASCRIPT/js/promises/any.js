const promise =  Promise.reject(new Error(5));

const P1 = new Promise(function(res , rej){
      setTimeout(res , 2000 , "prerna")
})  

const P2 = new Promise(function(res , rej){
    setTimeout(res , 2000 , "XYZ")
})  

const p = [ P1 , P2 , promise]

Promise.any(p).then(values=>{
    console.log(values)
}).catch((e)=>{
    console.log(e)
})