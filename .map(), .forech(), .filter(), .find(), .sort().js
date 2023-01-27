// ---** 1. .map()**---

// let array = [5, 10, 15, 20, 25];
// let newArray = [];
// for (let i = 0; i < array.length; i++) {
//   newArray[i] = array[i] * array[i];
// }
// console.log(newArray);

// -------------------------------------------------------
// let array = [5, 10, 15, 20, 25];

// let functioFormap = (element) => element * element;

// let newArray = array.map(functioFormap);
// console.log(newArray);

// ----------------------------------------------
// let array = [5, 10, 15, 20, 25];

// let newArray = array.map((element, index) => {
//   console.log(index);
//   return element * element;
// });
// console.log(newArray);

// -------------------------------------------------
// Difference between .map() and .forEach() is that .map() return the new array and .forEach() return the undefined . Foe each not return the array
// / ---**.forEach()**---
// let array = [1, 2, 3, 4, 5];
// array.forEach((Element, index) => {
//   console.log(Element);
// });

// let array = [1, 2, 3, 4, 5];
// array.forEach((Element) => {
//   Element *= Element;
//   console.log(Element);
// });
// console.log(array);

// --------------------------------------------
// ---**.filter()**---

// let array = [10, 20, 30, 40, 50];
// let newArray = array.filter((element) => element >= 30);
// console.log(newArray);

// -----------------------------------------------
// ---**.find()**---
// let array = [10, 20, 30, 40, 50];
// let temp = array.find((value) => {
//   return value > 20;  // return the first value which is greater than 20 in array . Once the value is found it will not check for other values.
// });
// console.log(temp);

// -----------------------------------------------
// ---**.sort()**---

// let array = [50, 40, 30, 20, 10];
// let newArray = array.sort();
// console.log(newArray);

// let array = [50, 40, 30, 20, 10, 111];
let sortedArray = array.sort((el1, el2) => {
  el1 = Number(el1);
  el2 = Number(el2);
  return el1 - el2;
});
console.log(sortedArray);
