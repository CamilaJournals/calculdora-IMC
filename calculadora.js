function calcularImc() {
    let valorPeso = document.getElementById("Peso").value;
    let valorAltura = document.getElementById("Altura").value;

    if (valorPeso <= 0 || valorAltura <= 0) {
        document.getElementById("ResultadoIMC").textContent = "Por favor, insira valores válidos para peso e altura.";
        documento.getElementById("ClassificacaoIMC").textContent = "";
        return;
    }

    let calculoAltura = (valorAltura * valorAltura);
    let valorImc = valorPeso / calculoAltura;

    let classificacao = "";

    if (valorImc < 18.5) {
        classificacao = "Abaixo do peso";
    } else if (valorImc >= 18.5 && valorImc < 24.99) {
        classificacao = "Peso normal";
    } else if (valorImc >= 25 && valorImc < 29.99) {
        classificacao = "Sobrepeso";
    } else if (valorImc >= 30 && valorImc < 34.99) {
        classificacao = "Obesidade grau 1";
    } else if (valorImc >= 35 && valorImc < 39.99) {
        classificacao = "Obesidade grau 2";
    } else {
        classificacao = "Obesidade grau 3";
    }

    document.getElementById("ResultadoIMC").textContent = "Seu IMC é igual a: " + valorImc.toFixed(2);
    document.getElementById("ClassificacaoIMC").textContent = "Classificação: " + classificacao;
    
    document.getElementById("peso").value = "";
    document.getElementById("altura").value = "";
    document.getElementById("peso").focus();
}

function aoApertarEnter(event) {
    if (event.key === "Enter") {
        calcularImc();
    }
}

document.getElementById("peso").addEventListener("keydown", aoApertarEnter);
document.getElementById("altura").addEventListener("keydown", aoApertarEnter);