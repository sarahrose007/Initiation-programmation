let year = prompt("Entrez une année");
for (let month = 0; month < 12; month++) {
  let date = new Date(year, month, 13);
  if (date.getDay() === 5) {
    console.log(date);
    let vendrediTreize = date.toLocaleString("fr", {
      month: "long",
      day: "numeric",
    });
    console.log(`Le vendredi ${vendrediTreize} `);
  }
}
