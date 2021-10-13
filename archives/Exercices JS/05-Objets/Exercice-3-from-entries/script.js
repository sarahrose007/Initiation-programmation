const keys = ["nom", "espece", "age", "genre", "couleur"];
const values = ["Pixel", "chat", 3, "male", "tigré"];

let objet = [];
for (i = 0; i < keys.length; i++) {
  objet[i] = [keys[i], values[i]];
  console.log(objet[i]);
}
console.table(objet);
console.log(Object.fromEntries(objet));

const objetDeux = keys.map((_, i) => [keys[i], values[i]]);
console.log(Object.fromEntries(objetDeux));
