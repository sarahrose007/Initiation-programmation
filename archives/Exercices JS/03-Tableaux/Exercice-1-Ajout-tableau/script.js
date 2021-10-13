let castArray = ["Robin", "Barney", "Lily", "Marshal"];

castArray.push("Ted");
console.log(castArray);

document.getElementById("submit").addEventListener("click", function () {
  let user = document.getElementById("user").value;
  castArray.push(user);
  console.log(castArray);
});
