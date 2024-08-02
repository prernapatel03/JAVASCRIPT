const JSarr = [
    ['name', 'JSsnippets'],
    ['address', 'worldwide'],
    ['year', '2018'],
    ['followers', '15000']

];

// const a = JSarr.map((e)=>{ return (e[0] + ":"+ e[1])})




// const arr = Object.fromEntries(JSarr)

// console.log(arr)

// const JSarr = [
//     ['name', 'JSsnippets'],
//     ['address', 'worldwide'],
//     ['year', '2018'],
//     ['followers', '15000']

// ];
const x =JSarr.map(e=>{return( e[0] = e[1])})
console.log(x)

// const obj = []

// const y =  obj.push(x)
// console.log(obj)
// // obj.push(x)

// Object.defineProperties(obj ,
// {

// age :{
//     value : 20
// }}

// );


// console.log(obj.name)