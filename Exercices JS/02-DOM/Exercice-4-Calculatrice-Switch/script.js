function calculate(operator) {
  let nbr1 = Number(document.getElementById("op-one").value);
  let nbr2 = Number(document.getElementById("op-two").value);

  switch (operator) {
    case "addition":
      alert(nbr1 + nbr2);
      break;
    case "substraction":
      alert(nbr1 - nbr2);
      break;
    case "multiplication":
      alert(nbr1 * nbr2);
      break;
    case "division":
      alert(nbr1 / nbr2);
      break;
    default:
      alert("Error");
      break;
  }
}

let boutonsTableau = Array.from(document.getElementsByClassName("operator"));
boutonsTableau.forEach((bouton) => {
  bouton.addEventListener("click", () => {
    calculate(bouton.id);
  });
});

// methode array.forEach()
