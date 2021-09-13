// `https://goweather.herokuapp.com/weather/${city}` => ${city}correspond à la ville choisie
document.getElementById("run").addEventListener("click", () => {
  let city = prompt("Entre une ville");
  fetch(`https://goweather.herokuapp.com/weather/${city}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
});
