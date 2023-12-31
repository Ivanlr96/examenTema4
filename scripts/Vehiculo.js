
import { mostrarResultado } from "../scripts/main.js";
export class Vehiculo {
    #marca;
    #modelo;
    #color;
    #fabricacion;
    #cilindrada;

    constructor(marca, modelo, color, fabricacion, cilindrada) {
        this.#marca = marca;
        this.#modelo = modelo;
        this.#color = color;
        this.#fabricacion = fabricacion;
        this.#cilindrada = cilindrada;
    }
    mostrarDatos() {
        const datos = `
        <p> La marca del vehículo  es -> ${this.#marca}</p>
        <p> El modelo del vehículo es -> ${this.#modelo}</p>
        <p> El color del vehículo es -> ${this.#color}</p>
        <p> El vehiculo se fabricó en -> ${this.#fabricacion}</p>
        <p> El vehiculo tiene una cilindrada de -> ${this.#cilindrada}</p>

        `;
        mostrarResultado(`<p>${datos}</p>`);
    }

    acelerar(velocidad) {
        const mensaje = `<p> El vehículo de la marca ${this.#marca} ha acelerado ${velocidad} khm/h `;
        mostrarResultado(`<p> ${mensaje}</p>`);
    }
    arrancar() {
        const mensaje = `<p> El vehículo de la marca ${this.#marca} ha arrancado`;
        mostrarResultado(`<p> ${mensaje}</p>`);
    }
    frenar() {
        const mensaje = `<p> El vehículo de la marca ${this.#marca} ha frenado`;
        mostrarResultado(`<p> ${mensaje}</p>`);
    }

    get marca() {
        return this.#marca;
    }
    set marca(marca) {
        this.#marca = marca;
    }
    get modelo() {
        return this.#modelo;
    }
    set modelo(modelo) {
        this.#modelo = modelo;

    }
    get color() {
        return this.#color;
    }
    set color(color) {
        this.#color = color;
    }
    get fabricacion() {
        return this.#fabricacion;
    }
    set fabricacion(fabricacion) {
        this.#fabricacion = fabricacion;
    }
    get cilindrada() {
        return this.#cilindrada;
    }
    set cilindrada(cilindrada) {
        this.#cilindrada = cilindrada;
    }

}
