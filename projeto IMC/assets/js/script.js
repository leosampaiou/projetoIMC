function meuescopo() {
    const form = document.querySelector('.formulario');
    const resultado = document.querySelector('.formulario');

    function RecebeEventoForm(evento) {
        evento.preventDefault();

        const inputPeso = form.querySelector('.Peso');
        const inputAltura = form.querySelector('.Altura');

        const peso = Number(inputPeso.value);
        const altura = Number(inputAltura.value);
        const imc = peso / ((altura / 100) ** 2);

        if (!peso) {
            resultado.innerHTML = `<p class="vermelho">Seu <strong>peso</strong> esta incorreto. Digite apenas numero!</p>`;
            resultado.innerHTML += `<input onclick="window.location.reload()" type="button" value="Novo Calculo">`;
        }

        if (!altura) {
            resultado.innerHTML = `<p class="vermelho">Sua <strong>altura</strong> esta incorreta. Digite apenas numero!</p>`;
            resultado.innerHTML += `<input onclick="window.location.reload()" type="button" value="Novo Calculo">`;
        }


        if (imc < 18.5) {
            resultado.innerHTML = `<p class="amarelo">Seu IMC: ${imc.toFixed(2)}. Classificaçao: <strong>MAGREZA</strong>. Grau de obesidade: 0</p>`;
            resultado.innerHTML += `<input onclick="window.location.reload()" type="button" value="Novo Calculo">`;
        } else if (imc >= 18.5 && imc <= 24.9) {
            resultado.innerHTML = `<p class="verde">Seu IMC: ${imc.toFixed(2)}. Classificaçao: <strong>Normal</strong>. Grau de obesidade: 0</p>`;
            resultado.innerHTML += `<input onclick="window.location.reload()" type="button" value="Novo Calculo">`;
        } else if (imc >= 25 && imc <= 29.9) {
            resultado.innerHTML = `<p class="amarelo">Seu IMC: ${imc.toFixed(2)}. Classificaçao: <strong>SOBREPESO</strong>. Grau de obesidade: I</p>`;
            resultado.innerHTML += `<input onclick="window.location.reload()" type="button" value="Novo Calculo">`;
        } else if (imc >= 30 && imc <= 39.9) {
            resultado.innerHTML = `<p class="amarelo">Seu IMC: ${imc.toFixed(2)}. Classificaçao: <strong>OBESIDADE</strong>. Grau de obesidade: II</p>`;
            resultado.innerHTML += `<input onclick="window.location.reload()" type="button" value="Novo Calculo">`;
        } else if (imc > 40) {
            resultado.innerHTML = `<p class="amarelo">Seu IMC: ${imc.toFixed(2)}. Classificaçao: <strong>OBESZIDADE GRAVE</strong>. Grau de obesidade: III</p>`;
            resultado.innerHTML += `<input onclick="window.location.reload()" type="button" value="Novo Calculo">`;
        }
    }
    form.addEventListener('submit', RecebeEventoForm)

}
meuescopo();

