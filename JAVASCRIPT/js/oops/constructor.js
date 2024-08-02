class A{
    constructor(name , age){
        this.name = name,
        this.age = age
    }

}

const x = new A("prerna" , 21)
// console.log(x.name + x.age) 


class data{
    constructor(name , age){
        this.name = name,
        this.age = age
    }

}

class companyData extends A{
   constructor(company , id){
    super();
    this.company = company,
    this.id = id
   }
}
const newData = new companyData("prerna" , 21)
console.log(newData.name + newData.age) 