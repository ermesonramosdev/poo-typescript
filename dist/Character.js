export default class Character {
    //Inicialização do objeto.
    constructor(name, energy, life, attack, defense) {
        this.name = name;
        this.energy = energy;
        this.life = life;
        this.attack = attack;
        this.defense = defense;
    }
    // Toda vez que pensar em ler dados da classe - use parâmentros.
    // Toda vez que pensar em imprimir dados da classe - use retorn.
    trainingDefense() {
        this.defense += Math.random() * 5;
        this.energy -= Math.random() * 10;
        if (this.energy < 0) {
            console.log("Você morreu!");
            return;
        }
        else {
            if (this.defense > 100)
                this.defense = 0;
        }
    }
    trainingAttack() {
        this.attack += Math.random() * 2;
        this.energy += Math.random() * 10;
        if (this.energy < 0) {
            console.log("Você morreu!");
            return;
        }
        else {
            if (this.defense > 100)
                this.defense = 0;
        }
    }
    showStatus() {
        console.log("Guerreiro");
        console.log(`Nome: ${this.name}`);
        console.log(`Energia: ${this.energy}`);
        console.log(`Ataque: ${this.attack}`);
        console.log(`Defesa: ${this.defense}`);
    }
}
