let fizzBuzzArray = [];

for (let i = 0; i <= 100; i++) {
  fizzBuzzArray.push(i);
}

fizzBuzzArray.forEach((el) => {
  if (el % 3 === 0 && el % 5 === 0) {
    console.log("fizzBuzz");
  } else if (el % 5 === 0) {
    console.log("Buzz");
  } else if (el % 3 === 0) {
    console.log("fizz");
  } else {
    console.log(el);
  }
});
