const elementoBotonAgredar = document.getElementById('botonAgredar');
const elementoBotonSumar = document.getElementById('botonSumar');
let sumar = 0;

function botonAgredar(evento) {
    evento.preventDefault();
    let numero = document.getElementById('numero').value;
    let lista = document.getElementById('lista');
    let li = document.createElement('li');
    li.innerText = 'Sumar numero: ' + numero;
    lista.appendChild(li);
    sumar += Number(numero);
}
function botonSumar() {
    let contenedor = document.getElementById('contenido');
    contenedor.innerText = 'El resultado de la sumatoria es ' + sumar;
}
elementoBotonAgredar.addEventListener('click', botonAgredar);
elementoBotonSumar.addEventListener(`click`, botonSumar);
console.log('hola prueba como estas asd')
