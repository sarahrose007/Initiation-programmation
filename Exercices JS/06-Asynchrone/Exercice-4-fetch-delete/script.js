//  `http://localhost:3000/heroes`

document.getElementById("run").addEventListener("click", async () => {
  let id = document.getElementById("index").value;

  let modifPATCH = {
    name: "blablablablablablablablabla",
  };

  let modifPUT = {
    id: 3,
    name: "blablablablablablablablabla",
    alterEgo: "bliblibli",
    abilities: ["bla", "bla"],
  };

  if (id === "") {
    alert("Entrez un nombre");
  }

  if (Math.sign(id) === -1) {
    alert("Entrez un id positif");
  }

  // DELETE supprime l'élément choisi

  await fetch(`http://localhost:3000/heroes/${id}`, {
    method: "DELETE",
  });

  //PUT modifie l'élément choisi (la structure doit être respectée)

  await fetch(`http://localhost:3000/heroes/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(modifPUT),
  });

  //PATCH modifie une ou plusieurs clé(s) d'un élément

  await fetch(`http://localhost:3000/heroes/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(modifPATCH),
  });

  await fetch(`http://localhost:3000/heroes`)
    .then((res) => res.json())
    .then((data) => console.log(data));
});
