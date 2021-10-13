// `https://handlers.education.launchcode.org/static/planets.json`
let image = document.getElementById("image");
let name = document.getElementById("name");
let diam = document.getElementById("diameter");
let star = document.getElementById("star");
let distance = document.getElementById("distance");

document.getElementById("random").addEventListener("click", () => {
  fetch(`https://handlers.education.launchcode.org/static/planets.json`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      let planet = data[Math.floor(Math.random() * 6)];
      console.log(planet);
      name.innerHTML = `<p>Name : ${planet.name}</p>`;
      diam.innerHTML = `<p>Diameter : ${planet.diameter}</p>`;
      star.innerHTML = `<p>Star : ${planet.star}</p>`;
      distance.innerHTML = `<p>Distance : ${planet.distance}</p>`;
      image.innerHTML = `<img style="width: 200px" src="${planet.image}"/>`;
      // image.setAttribute("src", `${planet.image}`);
    });
});

// image.innerHTML = `<img style="width: 200px" src="${planet.image}">`;
// nameIt.innerHTML = `<p>Name : ${planet.name}</p>`;
// diam.innerHTML = `<p> Diameter : ${planet.diameter}</p>`;
// star.innerHTML = `<p>Star : ${planet.star}</p>`;
// distance.innerHTML = `<p>Distance : ${planet.distance}</p>`;
