//  `http://localhost:3000/heroes`

document.getElementById("run").addEventListener("click", async function () {
  const hero = {
    name: "Test",
    alterEgo: "test",
    abilities: ["test", "test2", "test3"],
  };

  await fetch(`http://localhost:3000/heroes`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(hero),
  });

  await fetch(`http://localhost:3000/heroes`)
    .then((res) => res.json())
    .then((data) => console.log(data));
});
