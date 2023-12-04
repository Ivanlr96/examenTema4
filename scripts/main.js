

const resultadoContaioner=document.createElement('div')
document.body.appendChild(resultadoContaioner)

function mostrarResultado (mensaje) {
    resultadoContainer.innerHTML=`<p>${mensaje}</p>`
}


class Vehiculo {
    #marca
    #modelo
    #color
    #fabricacion
    #cilindrada

    constructor (marca,modelo,color,fabricacion,cilindrada) {
        this.#marca=marca;
        this.#modelo=modelo;
        this.#color=color;
        this.#fabricacion=fabricacion;
        this.#cilindrada=cilindrada;
    }
    mostrarDatos() {
        const datos=`
        <p> La marca del vehículo  es -> ${this.#marca}</p>
        <p> El modelo del vehículo es -> ${this.#modelo}</p>
        <p> El color del vehículo es -> ${this.#color}</p>
        <p> El vehiculo se fabricó en -> ${this.#fabricacion}</p>
        <p> El vehiculo tiene una cilindrada de -> ${this.#cilindrada}</p>
        `
        mostrarResultado()=`<p>${datos}</p>`
    }
}