

const resultadoContainer=document.createElement('div')
document.body.appendChild(resultadoContainer)

function mostrarResultado (mensaje) {
    resultadoContainer.innerHTML+=`<p>${mensaje}</p>`
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
        mostrarResultado(datos)=`<p>${datos}</p>`
    }

    acelerar(velocidad) {
        const mensaje= `<p> El vehículo de la marca ${this.#marca} ha acelerado ${velocidad} `
        mostrarResultado=`<p> ${mensaje}</p>`
    }
    arracar(){
        const mensaje=`<p> El vehículo de la marca ${this.#marca} ha arrancado`
        mostrarResultado=`<p> ${mensaje}</p>`
    }
    frenar(){
        const mensaje=`<p> El vehículo de la marca ${this.#marca} ha frenado`
        mostrarResultado=`<p> ${mensaje}</p>`
    }

    get marca () {
        return this.#marca
    }
    set marca (marca) {
        this.#marca=marca
    }
    get modelo () {
        return this.#modelo
    }
    set modelo (modelo) {
        this.#modelo=modelo
        
    }
    get color () {
        return this.#color
    }
    set color (color) {
        this.#color=color
    }
    get fabricacion(){
        return this.#fabricacion
    }
    set fabricacion(fabricacion) {
        this.#fabricacion=fabricacion
    }
    get cilindrada() {
        return this.#cilindrada
    }
    set cilindrada(cilindrada){
        this.#cilindrada=cilindrada
    }

}

class AutomovilDeportivo extends Vehiculo {
    #potenciaMotor
    constructor (marca,modelo,color,fabricacion,cilindrada,potenciaMotor) {
        super (marca,modelo,color,fabricacion,cilindrada)
        this.#potenciaMotor=potenciaMotor
    }

    activarModoDeportivo() {
        const mensaje= `<p> El modo deportivo ha sido activado </p>`
        mostrarResultado=`<p> ${mensaje}</p>`
    }
    get potenciaMotor() {
        return this.#potenciaMotor
    }
    set potenciaMotor(potenciaMotor) {
        this.#potenciaMotor=potenciaMotor
    }
}

const vehiculo1= new Vehiculo ('BMW', 'CLK', 'rojo', 1992, '2400')
mostrarResultado('---Vehiculo 1---')

vehiculo1.mostrarDatos() 
vehiculo1.arrancar()
vehiculo1.acelerar(140)
vehiculo1.frenar()