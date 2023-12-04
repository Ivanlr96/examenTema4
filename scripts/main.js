
import {Vehiculo} from "../scripts/Vehiculo.js"
import { AutomovilDeportivo } from "./AutomovilDeportivo.js"
const resultadoContainer=document.createElement('div')
document.body.appendChild(resultadoContainer)

export function mostrarResultado (mensaje) {
    resultadoContainer.innerHTML+=`<p>${mensaje}</p>`
}


const vehiculo1= new Vehiculo ('BMW', 'CLK', 'rojo', 1992, '2400')
mostrarResultado('---Vehiculo 1---')

vehiculo1.mostrarDatos() 
vehiculo1.arrancar()
vehiculo1.acelerar(140)
vehiculo1.frenar()

const deportivo1=new AutomovilDeportivo('Ferrari','Spider','Amarillo',2020,'4000','500')
mostrarResultado('--Deportivo 1--')
deportivo1.mostrarDatos()
mostrarResultado(`El vehículo tiene una potencia de motor de -> ${deportivo1.potenciaMotor}`)
deportivo1.arrancar()
deportivo1.acelerar(140)
deportivo1.frenar()
