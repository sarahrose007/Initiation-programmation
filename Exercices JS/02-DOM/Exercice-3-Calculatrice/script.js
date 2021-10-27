//Crée une fonction calculatrice: A l'aide des attributs name des éléments HTML input, récupère la valeur entrée par l'utilisateur dans ces entrées à l'aide de la méthode .value; Ensuite, à l'aide des id des éléments button, effectue l'opération se rapportant au signe du bouton sur les valeurs récupérées des input. Pour terminer, affiche le résultat dans une boite de dialogue alert().
//Utilisez le bout de code suivant pour ajouter un événement sur chaque bouton en remplaçant le paramètre de getElementById par l'ID correspondant au bouton

document.getElementById("addition").addEventListener("click", () => {
  let firstNumber = Number(document.getElementById("op-one").value);
  let secondNumber = Number(document.getElementById("op-two").value);
  console.log(firstNumber+secondNumber);
});

document.getElementById("substraction").addEventListener("click", () => {
  let firstNumber = Number(document.getElementById("op-one").value);
  let secondNumber = Number(document.getElementById("op-two").value);
  console.log(firstNumber-secondNumber);
});

document.getElementById("division").addEventListener("click", () => {
    let firstNumber = Number(document.getElementById("op-one").value);
    let secondNumber = Number(document.getElementById("op-two").value);
    console.log(firstNumber/secondNumber);
});

document.getElementById("multiplication").addEventListener("click", () => {
     let firstNumber = Number(document.getElementById("op-one").value);
     let secondNumber = Number(document.getElementById("op-two").value);
     console.log(firstNumber*secondNumber);
});

//Crée une fonction calculatrice: A l'aide des attributs name des éléments HTML input, récupère la valeur entrée par l'utilisateur dans ces entrées à l'aide de la méthode .value; Ensuite, à l'aide des id des éléments button, effectue l'opération se rapportant au signe du bouton sur les valeurs récupérées des input. Pour terminer, affiche le résultat dans une boite de dialogue alert().
//Utilisez le bout de code suivant pour ajouter un événement sur chaque bouton en remplaçant le paramètre de getElementById par l'ID correspondant au bouton
// let firstNumber = document.getElementById("op-one");
// let secondNumber = document.getElementById("op-two");

// document
//   .getElementById("addition")
//   .addEventListener("click", function addition() {
//     console.log("op-one" + op - two);
//   });

// //fonction qui évalue le chiffre et renvoie la sortie
// function addition() {
//   let one = document.getElementById("addition").value;
//   let two = eval(a);
//   document.getElementById("op-one").value = b;
// }
// //fonction qui affiche la valeur
// function afficher(val) {
//   document.getElementById("output").value += val;
// }
// //fonction qui efface l'écran
// function effacer() {
//   document.getElementById("output").value = "";
// }

// // // fonction  additionSurClic ( )  {
// //     documenter . getElementById ( " addition " ) . addEventListener ( " clic " ,  ajout de fonction  ( ) {
// //         // Insérez ici le bout de code nécessaire à la réalisation de l'exercice

// //             laisser  résultat  =  parseInt ( firstNumber . La valeur ,  10 )  +  parseInt ( secondNumber . La valeur ,  10 ) ;
// //             console . log ( résultat ) ;
// // } )  ;

// // function additionSurClic(op-one) {
// //     let firstNumber = document . getElementById ( "op-one" );
// //     console.log("Salut" + " " + op-one);
// // };

// // // helloWhenConnected("Thomas");

// // // additionOnClick ( ) ;
// // // fonction  soustractionSurClic ( )  {
// // //     documenter . getElementById ( "soustraction" ) . addEventListener ( "clic" ,  fonction  soustraire ( )  {
// // //         // Insérez ici le bout de code nécessaire à la réalisation de l'exercice
// // //             laisser  résultat  =  parseInt ( firstNumber . La valeur ,  10 )  -  parseInt ( secondNumber . La valeur ,  10 ) ;
// // //             console . log ( résultat ) ;
// // // } ) } ;
// // // soustractionSurClic ( ) ;
// // // fonction  divisionSurClic ( )  {
// // //     documenter . getElementById ( " division " ) . addEventListener ( "clic" ,  division de fonction  ( ) {
// // //         // Insérez ici le bout de code nécessaire à la réalisation de l'exercice
// // //             laisser  résultat  =  parseInt ( firstNumber . La valeur ,  10 )  /  parseInt ( secondNumber . La valeur ,  10 ) ;
// // //             console . log ( résultat ) ;
// // // } ) } ;
// // // divisionSurClic ( ) ;
// // // fonction  multiplicationSurClic ( )  {
// // //     documenter . getElementById ( "multiplication" ) . addEventListener ( "clic" ,  multiplication de fonction  ( ) {
// // //         // Insérez ici le bout de code nécessaire à la réalisation de l'exercice
// // //             laisser  résultat  =  parseInt ( firstNumber . La valeur ,  10 )  *  parseInt ( secondNumber . La valeur ,  10 ) ;
// // //             console . log ( résultat ) ;
// // // } ) } ;
// // // multiplicationSurClic ( ) ;

// // function multiplication(op-one, op-two){
// //     return op-one * op-two;
// // };
// // multiplication(2, 4);`

// // console.log
