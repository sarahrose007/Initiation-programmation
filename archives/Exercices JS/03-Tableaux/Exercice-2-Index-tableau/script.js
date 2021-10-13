let castArray = ["Robin", "Barney", "Lily", "Marshal", "Ted"];

console.log(castArray.indexOf("Robin"));
console.log(castArray.indexOf("Ted"));

console.log(castArray.findIndex((el) => el === "Robin"));
console.log(castArray.findIndex((el) => el === "Ted"));
