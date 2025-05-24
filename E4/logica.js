function calcular(){
let inputPeso= document.getElementById("peso");
let inputAltura = document.getElementById("estatura");
let mensaje = document.getElementById("mensaje");
const peso = parseFloat(inputPeso.value);
const altura = parseFloat(inputAltura.value);
console.log(peso)
console.log(altura)
if (!isNaN(peso) && !isNaN(altura) && altura > 0) {
            const imc = peso / (altura * altura);
            mensaje.textContent = `Tu IMC es: ${imc.toFixed(2)}`;
        } else {
            mensaje.textContent = "Por favor, ingresa valores válidos.";
        }
}

