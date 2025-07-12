import Character from "../Character/Character.js";
import { Util } from "../Util/Util.js";

class Mage extends Character {
    private _intellect: number;
    private _speed: number;

    constructor(
        _name: string,
        _energy: number,
        _lifeMaximum: number,
        _lifeCurrent: number,
        _attack: number,
        _defense: number,
        _armam: number

    ) {
        super(_name, _energy, _lifeMaximum, _lifeCurrent, _attack, _defense, _armam);

        this._intellect = Util.randomizar(100, 1000);
        this._speed = Util.randomizar(100, 1000);
    }
}