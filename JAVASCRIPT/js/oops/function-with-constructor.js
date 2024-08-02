// function Cat(name, color) {
//     this.name = name;
//     this.color = color;
 
//   }
//   Cat.prototype.age = 0;
  
//   var catC = new Cat("Fluffy", "White");

  // console.log(catC)

//  without 
function Animal(species) {
  this.species = species;
}

function Animal3(name) {
  this.name = name;
}
const a = {
  makeSound() {
      console.log("Animal sound!");
  }
};


const dog = Object.create(a);
dog.species= "haha"
dog.name = "p"
// dog.makeSound();
// console.log(dog.species)
// console.log(dog.name)

function Cat(name, color) {
  this.name = name;
  this.color = color;

}
var catC = new Cat("Fluffy", "White");
console.log(catC.name);
const b = {
  makeSound() {
      console.log("Animal sound!");
  }
};
const dog1 = Object.create(b);

dog1.name = "xyz"
dog1.color = "blue"
console.log(catC.name)




