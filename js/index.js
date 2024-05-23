function mostrarResultado(resultado) {
    document.getElementById("resultado").innerText = resultado;
}

function sumar() {
    let num1 = document.getElementById("num1");
    let num2 = document.getElementById("num2");

    let suma = parseFloat(num1.value) + parseFloat(num2.value);

    mostrarResultado(suma);
}

function restar() {
    let num1 = document.getElementById("num1");
    let num2 = document.getElementById("num2");

    let resta = parseFloat(num1.value) - parseFloat(num2.value);

    mostrarResultado(resta);
}

function multiplicar() {
    let num1 = document.getElementById("num1");
    let num2 = document.getElementById("num2");

    let producto = parseFloat(num1.value) * parseFloat(num2.value);

    mostrarResultado(producto);
}

function dividir() {
    let num1 = document.getElementById("num1");
    let num2 = document.getElementById("num2");

    let cociente = parseFloat(num1.value) / parseFloat(num2.value);

    mostrarResultado(cociente);
}
function potencia() {
    let num1 = document.getElementById("num1");
    let num2 = document.getElementById("num2");

    let producto = parseFloat(num1.value) ** parseFloat(num2.value);

    mostrarResultado(producto);
}




