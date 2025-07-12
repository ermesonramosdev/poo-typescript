import { Util } from "../Util/Util.js";
export default class Character {
    //Inicialização do objeto.
    constructor(_name, _energy, _lifeMaximum, _lifeCurrent, _attack, _defense, _armam) {
        this._name = _name;
        this._energy = _energy;
        this._lifeMaximum = _lifeMaximum;
        this._lifeCurrent = _lifeCurrent;
        this._attack = _attack;
        this._defense = _defense;
        this._armam = _armam;
        this._armam = Util.randomizar(100, 1000);
    }
}
