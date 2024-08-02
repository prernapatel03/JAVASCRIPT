const P1 = new Promise(function(res, rej ){
    if(res){
        throw new Error('error') 

    }
})
P1.then((e)=>{
    console.log(e)
})
P1.catch((e)=>{
    setTimeout(()=>{
        console.log(e.message)
    },2000)
}).finally(()=>{
    console.log("finally block")
})