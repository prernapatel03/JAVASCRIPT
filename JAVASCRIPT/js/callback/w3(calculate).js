// function display(some){
//     console.log(some)
// }

// function myCalc(a,b){
//     const c = a+b;
//     return c;
// }

// const data = myCalc(5,4);

// display(data)


//  2nd

// function display(some){
//        console.log(some)
// } 


// function calC(a,b){
//     const c= a+b;
//     display(c)
// }

// calC(6,5)


//  3rd


function display(some){
       console.log(some)
} 


function calC(a,b , callback){
    const c= a+b;
    callback(c)
}

calC(6,5 , display)