const obj ={
    name : "prerna"
}

const obj2 = {
    name : "xyz",
    data : function(age , course){
          return this.name + " " + age+ " " + course
    }
}

// binding
const x = obj2.data.bind(obj , 21 , "JS");

console.log(x())


// calling

console.log(obj2.data.call(obj , 21 , "JS"))

// apply


console.log(obj2.data.apply(obj , [21 , "JS"]))

