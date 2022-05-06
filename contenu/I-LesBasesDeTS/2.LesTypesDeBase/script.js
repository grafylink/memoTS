"use strict";
let strTdb = "Hello type de bases";
console.log(strTdb);
/* Les types de base
Déduit de manière automatique le type de données souhaité :
La modification ne pourra plus être modifiée.
*/
let str = "str";
let num = 5;
let array = [];
let obj = {
    a: 5
};
let toogle = true;
//Je peux faire une varaible "ouverte" où je ne spécifie pas le typage :
let anything;
// je peux donc mettre n'importe quel typage.
anything = [3, 5, 8, "paul"];
console.log(anything[3]);
// A l'inverse je peux spécifier un typage précis :
let myNumber;
//je ne pourrais donc n'attribuer que des types nombre :
myNumber = 1;
// Exemple avec une fonction qui convertit les degrés celsius en degré fareinheit
//Si je ne lui attribue pas un type il va provoquer une erreur. Je lui indique donc qu'il s'agit d'un number.
// cette erreur n'aurait pas lieu si j'étais dans un script js classique
const conversion = (celsius) => {
    return (celsius * 9 / 5) + 32;
};
console.log(conversion(10));
