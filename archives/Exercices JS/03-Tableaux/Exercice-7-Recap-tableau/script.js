let multiplicationArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let array = [];

multiplicationArray.forEach((el) => array.push(el * 2));
console.log(array);

console.log(multiplicationArray.map((el) => el * 2));

// multiplicationArray.map((el) => {
//   if (el < 10) {
//     console.log(el * 2);
//   }

//   if (el >= 10) {
//     console.log(el * 768);
//   }
// });
