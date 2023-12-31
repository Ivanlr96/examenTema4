import { Vehiculo } from "../scripts/Vehiculo.js";
import { mostrarResultado } from "./main.js";

export class AutomovilDeportivo extends Vehiculo {
    #potenciaMotor;
    constructor(marca, modelo, color, fabricacion, cilindrada, potenciaMotor) {
        super(marca, modelo, color, fabricacion, cilindrada);
        this.#potenciaMotor = potenciaMotor;
    }

    activarModoDeportivo() {
        const mensaje = `<p> El modo deportivo ha sido activado </p>`;
        mostrarResultado = `<p> ${mensaje}</p>`;
    }
    get potenciaMotor() {
        return this.#potenciaMotor;
    }
    set potenciaMotor(potenciaMotor) {
        this.#potenciaMotor = potenciaMotor;
    }
}
