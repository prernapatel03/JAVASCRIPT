function myFun(fname , lname){
      this.fname = fname,
      this.lname = lname


}
myFun.prototype.age = 21;
const x =new myFun("patel" , "prerna")
console.log(x.fname + x.lname + x.age)


