import Character from "../Character/Character.js";
import { Util } from "../Util/Util.js";
export default class Warrior extends Character {
    constructor(_name, _energy, _lifeMaximum, _lifeCurrent, _attack, _defense, _armam) {
        super(_name, _energy, _lifeMaximum, _lifeCurrent, _attack, _defense, _armam);
        this._power = Util.randomizar(100, 1000);
        this._agility = Util.randomizar(100, 1000);
    }
    statusWarrior() {
        console.log(`Meu nome é: ${this._name}`);
        console.log(`Minha energia esta: ${this._energy}`);
        console.log(`Minha vida máxima: ${this._lifeMaximum}`);
        console.log(`Minha vida atual está: ${this._lifeCurrent}`);
        console.log(`Meu ataque é de: ${this._attack}`);
        console.log(`Minha defesa é de: ${this._defense}`);
        console.log(`Minha armadura está: ${this._armam}`);
        console.log(`Meu poder é: ${this._power}`);
        console.log(`Minha agilidade é: ${this._agility}`);
    }
    attack() {
        return "Warrior ataca com espada!";
    }
}
