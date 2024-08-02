class person {
    constructor(roll_number , fname , lname){
      this.roll_number = roll_number,
      this.fname = fname,
      this.lname = lname
     
    }

    name = function(){
          return this.roll_number +  " " +  this.fname  + " " + this.lname
    }

    


}
const b = {
  makeSound() {
      console.log("Animal sound!");
  }
};

const Person1 =  new person(1 , "prerna" , "patel")
const d = Object.create(b);
d.fname = "cvehcbewb "

// console.log(d.name)
const dataArray = Person1.name()
const dta = dataArray

console.log(typeof dta)
console.log(Array.isArray(dta));

const C = dta.split()
console.log(C)
console.log(Array.isArray(C))

// const forEach = dta.forEach((e=>console.log(e[1])))

const arr = ["prerna" , "xyz" ,"pqr"]
// console.log(arr.forEach((e=>console.log(e))))
// console.log(arr)



const table = document.createElement("TABLE");
table.setAttribute("id", "myTable");
document.body.appendChild(table);



var tr = document.createElement("TR");
tr.setAttribute("id", "myTr");
document.getElementById("myTable").appendChild(tr)

var td = document.createElement("TD");
// td.innerHTML = `${Person1.name()}`
var t = document.createTextNode(`${Person1.name().toString().split()}`)

td.appendChild(t);
document.getElementById("myTr").appendChild(td);

class A{
  constructor(fname , lname){
        this.fname=fname;
        this.lname = lname
  }
  d(){
    return this.fname  + " " + this.lname
  }
}

const data = new A("patel" , "prerna");

// console.log(data.d())

// class A{

// }


//  unnamed class

const X = class A{
  constructor(id , name ,lname){
            this.id = id,
            this.name = name,
            this.lname = lname
  }
};

// console.log(X.name)