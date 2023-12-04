

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
}