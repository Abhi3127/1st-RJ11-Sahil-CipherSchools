// In JavaScript  we can declare variables in three ways.
// 1.var GBlobal Scope because of this we can use it anywhere in the code.
// 2.let
// 3.const We can not redcalare the variable in const.

var constName = "Vaibhav";
console.log(constName);

// const myName = [];
// // myName = "vaibhav"; // we can not change the value of varaible in const.
// console.log(myName);
// myName.push("vaibhav");
// console.log(myName);
// const myName = "vaibhav"; // we can not redeclare the variable in const.

let letName = "vaibhav";
console.log(letName);
letName = 5; // we can change the value of variable in let but we can not use varaible again same as const.
console.log(letName);

// let letName = "vaibhav"; // we can not redeclare the variable in let.

var myName = "vaibhav"; // we can redeclare the variable in var or we can change name it is flexible.
console.log(myName);

// **String Polation**

let firstName = "Vaibhav";
let lastName = "Khandelwal";
console.log(firstName + " " + lastName);

// In ES6 we can use string polation to make it easy.
console.log(`${firstName} ${lastName}`); // This is advance javascript

// **Default Params**

// function addTwoNumbers(num1, num2) {mm
//   return num1 + num2;
// }
// console.log(addTwoNumbers(5, 5));

// let addTwoNumbers = (num1, num2) => {
//   return num1 + num2;
// };
// console.log(addTwoNumbers(5, 5));

// Or We can write in arrow function
// let addTwoNumbers = (num1, num2) => num1 + num2;
// console.log(addTwoNumbers(5, 5));

let addTwoNumbers = (num1, num2 = 5) => {
  console.log(num1);
  console.log(num2);
  return num1 + num2;
};
console.log(addTwoNumbers(5));

// ** Rest and Spread Operator are applicable in Array and Object in Js**
// Spread -> ...
// Rest -> ...

// **Spread Operator**
let array = [5, 10, 15, 20, 25];
console.log(array);

console.log(...array); // Spread Operator print the value of array

let newArray = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];
console.log(...newArray, 30, 35, 40, 45, 50); // Spread Operator print the value of array

// --**Rest Operator**--
let maxofTwoNumbers = (num1, num2) => Math.max(num1, num2);
console.log(maxofTwoNumbers(5, 10));

let maxofNumbers = (...numbers) => {
  let maximum = Number.MIN_VALUE;
  for (let number of numbers) {
    maximum = Math.max(maximum, number);
  }
  return maximum;
};
console.log(maxofNumbers(5, 10, 15, 20, 25, 30, 35, 40, 45, 50));

// --**For Objects**--

let object = {
  name: "Vaibhav",
  age: 20,
  address: {
    city: "Alwar",
    state: "Rajasthan",
    country: "India",
  },
};

let object2 = {
  ...object,
  name: "Vaibhav Khandelwal",
  hobbey: "To help Someone evrytime",
};
object2.address.city = "Meerut";

console.log(object2);

// -------------------------------------------------
// Object Destructuring

// ***Object Destructuring****

let details = {
  name: "Vaibhav",
  age: 20,
  address: {
    street: "Lohia pari",
    city: "Alwar",
    state: "Rajasthan",
    country: "India",
    passportDetails: {
      passportNumber: 1234567890,
    },
  },
};

console.log(details.address.passportDetails.passportNumber);

// let myName = details.name;
// let age = details.age;

// console.log(myName, age);

// let { name: myName, age } = details;
// console.log(myName, age);

// /-------------------------------------------------
// ***----Classes in JavaScript----***

class Animal {
  noOfLegs;
  color;
  family;
  sound;

  constructor(noOfLegs, color, family, sound) {
    this.noOfLegs = noOfLegs;
    this.color = color;
    this.family = family;
    this.sound = sound;
  }
  showAnimal() {
    console.log(`This is Animal" ${this.family}`);
  }
}
let animal = new Animal(4, "black", "mammal", "bark");
console.log(animal);
animal.showAnimal();
