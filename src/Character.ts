class Character {

    //Inicialização do objeto.
    constructor(
        public name: string, 
        public energy: number, 
        public life: number, 
        public attack: number,
        public defense: number
    ) {
        this.name = name;
        this.energy = energy;
        this.life = life;
        this.attack = attack;
        this.defense = defense;
    }

}

const character1: Character = new Character("Ermeson", 100, 200, 50, 50);

const character2: Character = new Character("Miguel", 50, 50, 50, 50);

console.log(`Personagem 1: ${character1.name} | Personagem 2: ${character2.name}`);