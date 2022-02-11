// function Animal(animalType) {
//   this.animalType = animalType;
//   return "Animal";
// }

// Animal.prototype.getType = function () {
//   return this.animalType;
// };

// Animal.prototype.omni = function () {
//   return true;
// };

// string, boolean, number, BigInt, Symbol,

class Animal {
  constructor(animalType, totalLegs) {
    this.animalType = animalType;
    this.totalLegs = totalLegs;
  }

  getType() {
    return this.animalType;
  }

  omni() {
    return false;
  }
}

const cat = new Animal("Cat", 4);
const dog = new Animal("Dog", 4);

// console.log(cat.getType());
//console.log(cat instanceof Object);

// console.log(animal);
//console.log(cat.omni());
// {a: 1}

Array.prototype.isAllEven = function () {
  return this.every((e) => e % 2 === 0);
};

const arr = [2, 4, 6, 7];
console.log(arr.isAllEven());

// const addTodo = {
//   type: "ADD_TODO",
//   payload: { id: 1, status: false, title: "Learn Redux" },
// };

// const deleteTodo = {
//   type: "DELETE_TODO",
//   payload: 1,
// };
