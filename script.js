function calcularIMC() {
    var altura = parseFloat(document.getElementById("altura").value);
    var peso = parseFloat(document.getElementById("peso").value);

    if (isNaN(altura) || isNaN(peso)) {
        alert("Por favor, insira valores válidos para altura e peso.");
        return;
    }

    var imc = peso / (altura * altura);
    var resultado = "Calculo do IMC: " + imc.toFixed(2);

 
    if (imc > 40.0) {
        resultado += "\nObesidade grau III";
    } else if (imc >= 35.0 && imc <= 39.9) {
        resultado += "\nObesidade grau II";
    } else if (imc >= 30.0 && imc <= 34.9) {
        resultado += "\nObesidade grau I";
    } else if (imc >= 25.0 && imc <= 29.9) {
        resultado += "\nSobrepeso ";
    } else if (imc >= 18.6 && imc <= 24.9) {
        resultado += "\nNormal";
    } else if (imc <= 18.5) {
        resultado += "\nAbaixo do normal";
    }

    document.getElementById("resultado").innerText = resultado;
}
