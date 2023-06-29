let nombreCuenta = localStorage.getItem("cuenta_nombre");
let saldoCuenta = localStorage.getItem("cuenta_saldo");

if (nombreCuenta) {
document.getElementById("consultar").addEventListener("click", consultarSaldo);
document.getElementById("ingresar").addEventListener("click", ingresarMonto);
document.getElementById("retirar").addEventListener("click", retirarMonto);
}

function mostrarResultado(mensaje, saldo) {
  let resultadoElement = document.getElementById("resultado");
  resultadoElement.style.display = "block";

  let mensajeElement = document.getElementById("mensaje");
  mensajeElement.innerText = mensaje;

  let saldoElement = document.getElementById("saldo");
  saldoElement.innegrText = saldo ? "Nuevo saldo: $" + saldo : "";
}

function consultarSaldo() {
  mostrarResultado("Su saldo actual es: $" + saldoCuenta);
  let resultadoElement = document.getElementById("resultado");
  resultadoElement.style.display = "none";
}

function ingresarMonto() {
  let monto = parseInt(document.getElementById("monto"));
  if (isNaN(monto) || monto <= 0) {
    mostrarResultado("Ingresa un monto válido.");
    return;
  }

  let saldoActual = saldoCuenta;
  let nuevoSaldo = saldoActual + monto;

  if (nuevoSaldo > 990) {
    mostrarResultado("No puedes ingresar más de $990.");
    return;
  }

  saldoCuenta = nuevoSaldo;

  mostrarResultado("Monto ingresado: $" + monto, nuevoSaldo);
}

function retirarMonto() {

  let mensajeElement = document.getElementById("ingreso1");
  mensajeElement.textContent = "Ingrese el monto a retirar";
  let resultadoElement = document.getElementById("resultado");
  resultadoElement.style.display = "block";
  
  document.getElementById("aceptar"),addEventListener("click",oretirarMonto);    
}

  function oretirarMonto() {
  let monto = parseInt(document.getElementById("ingreso").value);
  if (monto <= 0) {
    mostrarResultado("Ingresa un monto válido.");
    return;
  }
  let saldoActual = saldoCuenta;
  let nuevoSaldo = saldoActual - monto;
  if (nuevoSaldo < 10) {
    mostrarResultado("No puedes retirar más de tu saldo actual.");
    return;
  }
  saldoCuenta = nuevoSaldo;
  mostrarResultado("Monto retirado: $" + monto, nuevoSaldo);
}