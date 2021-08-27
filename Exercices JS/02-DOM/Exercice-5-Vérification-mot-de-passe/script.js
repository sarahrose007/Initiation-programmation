document.getElementById("run").addEventListener("click", () => {
  let pass1 = document.getElementById("pass-one");
  let pass2 = document.getElementById("pass-two");
  if (pass1.value !== pass2.value) {
    pass1.style.borderColor = "red";
    pass2.style.borderColor = "red";
  }

  //   pass1.value !== pass2.value
  //     ? (pass1.style.borderColor = "red") && (pass2.style.borderColor = "red")
  //     : alert("Bienvenue");
});
