var set = new Set();

set.add("JS");
set.add("py");
set.add("CSS")


for(let el of set){
    // console.log(el)
}

// set.clear();

// console.log(set.size)

// console.log(set.has('JS'))

// set.delete("JS")

// console.log(set.size)

var itr = set.values();

for(let i of set){

    console.log(itr.next().value)
}

// for(let i of itr){
//     console.log(i)
// }

// forEach

// values

