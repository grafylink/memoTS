"use strict";
// Les tableaux et les objets
//LES TABLEAUX
const fruits = ["pommes", "poires"];
//TS déduit que mon typage correspond à un tableau de String, il ne me permmettra pas d'autres types
// ex :
//fruits.push(4); provoque erreur
fruits.push("cerises");
//accepte les tableaux personnalisé
const mixedArray = [1, "trois", [1, 2, 3]];
//TS reste strict
// le push   :  mixedArray.push([2,3 "5"]); provoque une erreur en revanche mixedArray.push([2,3,5]); sera possible
mixedArray.push([2, 3, 5]);
let nums;
//nums.push(1) provoquera une erreur car je n'ai pas encore déclaré un tableau mais uniquement son typage 
nums = [1, 2, 3]; //est en revanche une declaration de tableau
//ou encore let nums : 
let num = [];
//pour déclarer le tableau en même temps que la variable.
num.push(1);
// est donc possible
//Déclarer un typage tableau qui acceptera plusieurs type
let random;
random = [1, "Pierre", true, [1, 2, 3]];
random.push([1, 2, "six"]); //même si je varie les types dans mon push il n'y a pas d'erreur
//LES OBJETS
const car = {
    name: "Audi",
    model: "A1",
    km: 70000
};
// car.name = 1; //erreur
// car.name = "Renault"; est accepté par TS d'après sa déduction implicite des typages (String, String, number)
// Autre façon de déclarer : 
let profile;
profile = {
    name: "Charles",
    age: 74
};
//un type de déclaration très peu utilisé car typeScript permet d'utiliser des types personnalisé : 
let user = {
    name: "Joe",
    age: 25,
    favoriteFood: ['pasta', 'cheese'],
    data: 50
};
//je peux déclarer un objet simplement
let obj;
obj = { name: "Grafylink" };
