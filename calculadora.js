function calcularImc() {
    let valorPeso = document.getElementById("Peso").value;
    let valorAltura = document.getElementById("Altura").value;

    let calculoAltura = (valorAltura * valorAltura);
    let valorImc = valorPeso / calculoAltura;

    document.getElementById("ResultadoIMC").textContent = "Seu IMC é igual a: " + valorImc;
}
