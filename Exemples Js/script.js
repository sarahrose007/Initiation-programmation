document.getElementById("quote").addEventListener("click", () => {
  let auteur = document.getElementById("auteur");
  let texte = document.getElementById("texte");
  fetch("https://type.fit/api/quotes")
    .then((response) => response.json())
    .then((data) => data[Math.floor(Math.random() * 1643) + 1])
    .then((quote) => {
      texte.textContent = quote.text;
      auteur.textContent = quote.author;
    });
});

//console.log(data[Math.floor(Math.random() * 1643) + 1])
