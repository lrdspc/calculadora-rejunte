function calcularConsumo() {
    const tipoRejunte = document.getElementById('tipoRejunte').value;
    const juntaAssentamento = document.getElementById('juntaAssentamento').value;
    const ladoA = document.getElementById('ladoA').value;
    const ladoB = document.getElementById('ladoB').value;
    const area = document.getElementById('area').value;

    if (!tipoRejunte || !juntaAssentamento || !ladoA || !ladoB || !area) {
        alert('Preencha todos os campos!');
        return;
    }

    const consumoPorM2 = 0.5;  // Coeficiente fictício
    const consumoTotal = consumoPorM2 * area;

    document.getElementById('resultado').innerText = `Consumo Total: ${consumoTotal} Kg`;
}
