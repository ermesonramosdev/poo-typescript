"use strict";
class Character {
    //Inicialização do objeto.
    constructor(name, energy, life, attack, defense) {
        this.name = name;
        this.energy = energy;
        this.life = life;
        this.attack = attack;
        this.defense = defense;
        this.name = name;
        this.energy = energy;
        this.life = life;
        this.attack = attack;
        this.defense = defense;
    }
}
const character1 = new Character("Ermeson", 100, 200, 50, 50);
const character2 = new Character("Miguel", 50, 50, 50, 50);
console.log(`Personagem 1: ${character1.name} | Personagem 2: ${character2.name}`);
