const medicamento = document.querySelector('#medicamento')

const disponivel = document.querySelector('#doseDisponivel');
const diluicao = document.querySelector('#diluicao');
const prescrito = document.querySelector('#dosePrescrita');
const resultado = document.querySelector('h4');


function calc(event) {
    resultado.innerHTML += ((parseFloat(prescrito.value) * parseFloat(diluicao.value)) / parseFloat(disponivel.value)).toFixed(2)
    event.preventDefault()
}
