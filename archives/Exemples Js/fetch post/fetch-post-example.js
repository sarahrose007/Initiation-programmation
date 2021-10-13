document.getElementById("submit").addEventListener("click", (e) => {
  e.preventDefault();
  let valeurNom = document.getElementById("nom").value;
  let valeurPrenom = document.getElementById("prenom").value;
  let valeurAge = document.getElementById("age").value;

  const data = {
    nom: valeurNom,
    prenom: valeurPrenom,
    age: valeurAge,
  };
  console.log(JSON.stringify(data));
  fetch("http://localhost:1337/send", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((response) => {
      console.log("Server data", response.data);
    })
    .catch((error) => {
      console.log(error);
    });
});
