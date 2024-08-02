// class A{
//     static x(){
//          return "static method"
//     }
// }

// console.log(A.x())

// class B{
//     static display(){
//         return "display using static"
//     }
    
//      static show(){
//         return "show using static"
//     }
// }

// console.log(B.display())
// console.log(B.show())


// class C{
//     static display(){
//         return "display using static"
//     }
    
//      static display(){
//         return "show using static"
//     }
// }

// console.log(C.display())

class E{
    static display(){
        return "display using static"
    }
    
     show(){
        console.log(E.display() , "hii")
    }
}

const t = new E();
t.show()
console.log(E.display())
// console.log(t.show())



// class D{
//     static display(){
//         return "display using static"
//     }
    
//      constructor(){
//         // console.log("constructor")
//         console.log(D.display())
//     }
// }

// console.log(D.display())

// const t = new D();

//     // console.log(this.constructor.display())



// // const t = new D();
// // console.log(D.display())
// // console.log(t)



