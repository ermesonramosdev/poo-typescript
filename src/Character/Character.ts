import { Util } from "../Util/Util.js";

export default class Character {

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
        this._armam = Util.randomizar(100, 1000);
    }

    // Toda vez que pensar em ler dados da classe - use parâmentros.
    // Toda vez que pensar em imprimir dados da classe - use return.

}