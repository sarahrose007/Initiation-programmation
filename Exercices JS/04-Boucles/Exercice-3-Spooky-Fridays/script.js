// https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Date

for (let month = 0; month < 12; month++) {
  let date = new Date(2021, month, 13);
  if (date.getDay() == 5) {
    console.log(date);
    console.log(date.toLocaleString("fr", { month: "long" })); //traduire le chiffre du mois en nom
  }
}
