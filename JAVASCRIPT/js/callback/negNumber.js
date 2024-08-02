const num = [4,1,-20,5,-6,-8,-9]

removeNeg(num , function(e){
    return e>0
})
// console.log(x)

function removeNeg(num , callback){
const arr = []

for(let i of num){

    if(callback(i)){
        arr.push(i)
    }
}
console.log(arr)
}