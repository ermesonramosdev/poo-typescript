import Character from "./Character.js";

const character1: Character = new Character("Ermeson", 100, 200, 50, 50);
const character2: Character = new Character("Rebeca", 50, 50, 50, 50);
const character3: Character = new Character("Miguel", 300, 400, 90, 40);

console.log(`Personagem 1: ${character1.name} | Personagem 2: ${character2.name} | Personagem 2: ${character3.name}`);

console.log(character1.showStatus());
console.log("--------------------------------");
console.log(character3.showStatus());
console.log("--------------------------------");
character1.trainingAttack();
console.log(character3.showStatus());
console.log("--------------------------------")