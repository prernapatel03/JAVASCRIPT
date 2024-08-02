const P = new Promise((res , rej)=>{
        rej("reject")
})

P.then((e)=>{console.log(e)}).catch((e)=> console.log(e))