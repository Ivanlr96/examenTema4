

const resultadoContaioner=document.createElement('div')
document.body.appendChild(resultadoContaioner)

function mostrarResultado (mensaje) {
    resultadoContainer.innerHTML=`<p>${mensaje}</p>`
}