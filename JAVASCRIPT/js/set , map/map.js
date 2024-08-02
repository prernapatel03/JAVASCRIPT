var map = new Map();


map.set(1 , "JS")
map.set(2 , "py")

// console.log(map.get(1))

// map.clear()


// console.log(map.delete(2))

// console.log(map.has(1))
// console.log(map.size)

// const itr = map.values();

// for(let i of itr){
//     console.log(i)
// }

// const key = map.keys();

// for(let i of key){
//     console.log(i)
// }

// const entries = map.entries();

// for(let i of entries){
//     console.log(i)
// }

map.forEach((element , i )=> {
  console.log(i , element)   
});