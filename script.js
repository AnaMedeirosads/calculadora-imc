
const caucular = document.getElementById("calcular");


function imc () {
    
    const name = document.getElementById("name").value;
    const altura = document.getElementById("altura").value;
    const peso = document.getElementById("peso").value;
    const resultado = document.getElementById("resultado");

    if (name !== '' && altura !== '' && peso !== '') {
        //calculo do IMC
        const valorIMC = (peso / (altura * altura)).toFixed(1);

        let classificacao = '';

        if (valorIMC < 18.5) {
            classificacao = "abaixo do peso. Atenção!";
        }else if (valorIMC < 25) {
            classificacao = "com peso ideal. Parabêns!";
        }else if (valorIMC < 30) {
            classificacao = "levemente acima do peso.";
        }else if (valorIMC < 35){
            classificacao = "obesidade grau I.";
        }else if (valorIMC < 40){
            classificacao = "obesidade grau II.";
        }else {
            classificacao = "obesidade grau III. Cuidao!";
        }

        resultado.textContent = `${name}, seu IMC é ${valorIMC} e você está ${classificacao}`;

    }else {
        resultado.textContent = 'Preencha todos os campos';
    }
}

calcular.addEventListener('click', imc);