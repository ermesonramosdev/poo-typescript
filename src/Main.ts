import Character from "./Character/Character.js";
import Mage from "./Mage/Mage.js";
import Priest from "./Priest/Priest.js";
import Warrior from "./Warrior/Warrior.js";

const warrior: Warrior = new Warrior("Ermeson", 100, 100, 100, 100, 100, 10);
const mage: Mage = new Mage("Miguel", 20, 100, 100, 100, 100, 100);
const priest: Priest = new Priest("Rebeca", 100, 100, 100, 100, 100, 10);

const characters: Character[] = [];
characters.push(warrior);
characters.push(mage);
characters.push(priest);

characters.forEach(character => console.log(character.attack()));

/* console.log(warrior.attack());
console.log(mage.statusMage());
console.log(priest.statusPriest());*/