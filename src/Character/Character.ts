import { Util } from "../Util/Util.js";

export default abstract class Character {

    //Inicialização do objeto.
    constructor(
        protected _name: string, 
        protected _energy: number, 
        protected _lifeMaximum: number, 
        protected _lifeCurrent: number,
        protected _attack: number,
        protected _defense: number,
        protected _armam : number
    ) { 
        this._energy = Util.randomizar(100, 1000);
        this._lifeMaximum = Util.randomizar(100, 1000);
        this._lifeCurrent = Util.randomizar(100, this._lifeMaximum);
        this._attack = Util.randomizar(100, 1000);
        this._defense = Util.randomizar(100, 1000);
        this._armam = Util.randomizar(100, 1000);
    }

    public abstract attack(): string;
    // Toda vez que pensar em ler dados da classe - use parâmentros.
    // Toda vez que pensar em imprimir dados da classe - use return.

}