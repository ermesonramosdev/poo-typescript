import Character from "../Character/Character.js";
import { Util } from "../Util/Util.js";
export default class Warrior extends Character {
    constructor(_name, _energy, _lifeMaximum, _lifeCurrent, _attack, _defense, _armam) {
        super(_name, _energy, _lifeMaximum, _lifeCurrent, _attack, _defense, _armam);
        this._power = Util.randomizar(100, 1000);
        this._agility = Util.randomizar(100, 1000);
    }
}
