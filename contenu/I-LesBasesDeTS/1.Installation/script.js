"use strict";
/* installer typeScript de manière glabale (tous les fichiers, tous les dossiers) : npm install -g typescript
 tsc script.ts -> compiler le typeScript en js instant T (choisir le bon dossier)
Utiliser le watch (compilation en temps réel) :
- Tout d'abord lancer la commande tsc --init pour obtenir le fichier de configuration
- Modifier la version js si besoin
- lancer le watch : ts -w
*/
let str = "Hello World";
function foo() {
    return "hello world";
}
