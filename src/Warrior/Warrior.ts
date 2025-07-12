import Character from "../Character/Character.js";
import { Util } from "../Util/Util.js";

export default class Warrior extends Character {
    private _power: number;
    private _agility: number;
    
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

        this._power = Util.randomizar(100, 1000);
        this._agility = Util.randomizar(100, 1000);
    }
}