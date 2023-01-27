//   Promise in Js

let num1 = 10;
let num2 = 30;

// let myPromise = new Promise((fullfilled, notFullfilled) => {
//   let sum = num1 + num2;
//   if (sum > 30) {
//     fullfilled();
//   } else {
//     notFullfilled();
//   }
// });

// myPromise
//   .then(() => {
//     console.log("Promise is fullfilled");
//   })
//   .catch(() => {
//     console.log("Promise is not fullfilled");
//   });

function addTwoNumbers(num1, num2) {
  let sum = 0;
  setTimeout(() => {
    console.log(num1 + num2);
    sum = num1 + num2;
  }, 5000);
  console.log("Inside add Two Numbers");
  return sum;
}
