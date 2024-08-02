function data(){
     return new Promise((res,rej)=>{
          if(res==false){
            res("resolve")
          }
          else{
            rej("reject")
          }
     })
}

data().then((e)=>{
    console.log(e)
})
.catch((e)=>{
    console.log(e)
})
.finally(()=>{
    console.log("finally completed")
})