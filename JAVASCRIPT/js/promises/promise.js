// const p = new Promise(function(res , rej){
//     var x = 2+3;
//     if(x==5){
//         setTimeout(function(){
//             res("excepted");
//         },5000
//         //   {  res("excepted")},5000

//         )
//     }
//     else{
//         rej("rejected")
//     }
// })
// p.then(function(res1){
//    console.log("Promise " + res1)
// }).catch(function(rej1){
//      console.log("Promise " + rej1)
// })



// const P = new Promise(function( res, rej ){
//         var x =5;
//           if(x==5){
//             setTimeout(()=>{
//                 res("resolve")

//             } , 5000)
//           }
//           else{
//             rej("rejected")
//           }
// }
// )
// P.then((res)=>{
//   console.log(res)
// })

// P.catch((rej)=>{
//     console.log(rej)
// })

// const data = 40;

// // const data2;

// Promise.all([data , P]).then((values)=>{
//         console.log(values)
// })



const P = new Promise(function(res,rej){
  var x=5
  if(x==5){
     res("res")
  }
  else{
    rej("rej")
  }
})

P.then((res)=>{
    console.log(res)
})

P.catch((rej)=>{
  console.log(rej)
})