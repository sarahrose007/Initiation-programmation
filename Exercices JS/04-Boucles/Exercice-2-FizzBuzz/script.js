let fizzBuzzArray = [];
let array = [];

for (let i = 0; i <= 100; i++) {
  fizzBuzzArray.push(i);
}

fizzBuzzArray.forEach((el) => {
  if (el % 3 === 0 && el % 5 === 0) {
    console.log("fizzBuzz");
    array.push("fizzBuzz");
  } else if (el % 5 === 0) {
    console.log("Buzz");
    array.push("Buzz");
  } else if (el % 3 === 0) {
    console.log("fizz");
    array.push("fizz");
  } else {
    console.log(el);
    array.push(el);
  }
});
console.log(array);
