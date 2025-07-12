import Character from "../Character/Character.js";
import { Util } from "../Util/Util.js";
class Mage extends Character {
    constructor(_name, _energy, _lifeMaximum, _lifeCurrent, _attack, _defense, _armam) {
        super(_name, _energy, _lifeMaximum, _lifeCurrent, _attack, _defense, _armam);
        this._intellect = Util.randomizar(100, 1000);
        this._speed = Util.randomizar(100, 1000);
    }
}
