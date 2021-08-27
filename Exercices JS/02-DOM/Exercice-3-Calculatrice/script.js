document.getElementById("addition").addEventListener("click", () => {
  let nbr1 = Number(document.getElementById("op-one").value);
  let nbr2 = Number(document.getElementById("op-two").value);
  alert(nbr1 + nbr2);
});

document.getElementById("substraction").addEventListener("click", () => {
  let nbr1 = Number(document.getElementById("op-one").value);
  let nbr2 = Number(document.getElementById("op-two").value);
  let result = nbr1 - nbr2;
  alert(`Le résultat de ${nbr1} - ${nbr2} est ${result}`);
});

document.getElementById("division").addEventListener("click", () => {
  let nbr1 = Number(document.getElementById("op-one").value);
  let nbr2 = Number(document.getElementById("op-two").value);
  alert(nbr1 / nbr2);
});

document.getElementById("multiplication").addEventListener("click", () => {
  let nbr1 = Number(document.getElementById("op-one").value);
  let nbr2 = Number(document.getElementById("op-two").value);
  alert(nbr1 * nbr2);
});
