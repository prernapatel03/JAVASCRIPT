class data{
            constructor(name , age ){
                   this.name = name,
                   this.age = age
            }
}

const newData = new data("prerna" , 21)

// console.log(newData.name + newData.age)


//  function

function Data(name , age){
      this.name = name,
      this.age = age,

    //    d = function(){
    //     return this.name + " " + this.age
    //   }
     this.d = function(){
     return name + " " +age 
 }
}

const new_Data = new Data("prerna" , 21)
// new_Data.name = "prerna"
console.log(new_Data.d())












