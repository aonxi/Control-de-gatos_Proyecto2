//Control de gastos

/*=====================
    ingreso de datos
=====================*/

let saldoInicial = Number(prompt("Ingrese su saldo inicial"));
while (!validarSaldo(saldoInicial)) {
  alert("Monto ingresado no puede ser menor o igual a 0");
  saldoInicial = Number(prompt("Ingrese su saldo inicial"));
}

let saldo = saldoInicial;

let objetivoAhorro = Number(prompt("Ingrese su objetivo a ahorrar"));
while (!validarAhorro(saldoInicial, objetivoAhorro)) {
  alert("Monto ingresado no puede ser menor o igual a 0 ni mayor que saldo");
  objetivoAhorro = Number(prompt("Ingrese su objetivo a ahorrar"));
}

let opcion = menu();
while (!validarMenu(opcion)) {
  alert("Debe elegirun numero entre 1 y 5")
  opcion = menu();
}

/*=====================
    Arreglos
=====================*/

let gastos = [];

/*=====================
    Conjunto de funciones agrupadas
=====================*/

function iniciarPrograma() {

  menu();

}

/*=====================
    Mostrar menú
=====================*/

function menu() {

  const opciones = `
    Eliga la acción que desea realizar
    1 Registrar gasto
    2 Mostrar gastos
    3 Filtrar gastos
    4 Resumen
    5 Salir  
  `

  let opcion = Number(prompt(opciones));

  return opcion;
}

/*=====================
    Registrar gastos (opcion 1)
=====================*/

function registrarGasto() {

  let motivo = prompt("Ingrese motivo del gasto");
  while (!validarString(motivo)) {
    alert("Debe ingresar un motivo de al menos 3 caracteres.");
    motivo = prompt("Ingrese motivo del gasto");
  }

  let monto = Number(prompt("Ingrese monto a gastar"));
  while (!validarSaldo(monto, saldo)) {
    alert("debe ingresar el monto a gastar no mayor a su saldo actual.")
    monto = Number(prompt("Ingrese monto a gastar"));
  }

  let gasto = {
    motivo: motivo,
    monto: monto
  }

  gastos.push(gasto);

  saldo -= monto;

  alert("Se realizo el gasto de forma exitosa");

}

/*=====================
    Mostrar gastos (opcion 2)
=====================*/

function mostrarGastos() {

  if (gastos.length === 0) {
    alert("No hay gastos registrados");
    return;
  }

  let lista = "Lista de gastos: \n\n";
  let contador = 1;


  for (let gasto of gastos) {

    lista +=
      contador + ": " +
      gasto.motivo + " -> $" +
      gasto.monto + "\n";
    contador++;
  }

  alert(lista);

}

/*=====================
    Filtrar gastos (opcion 3)
=====================*/

function filtrarGastos() {

  if (gastos.length === 0) {
    alert("No hay gastos registrados");
    return;
  }

  let opcion = Number(prompt("Si desea filtrar por monto menor a N° ingresado elija 1\n" + "Si desea filtrar por monto mayor a N° ingresado elija 2\n" + "Si desea filtrar por montivo elija 3\n"));

  let limite;

  let lista = "";

  if (opcion < 1 || opcion > 3) {
    alert("Debe ingresar una opcion correcta")
    return;
  }

  switch (opcion) {

    case 1:
      //Monto menor a
      limite = Number(prompt("Ingrese limite, se mostraran los gastos menores a este"));
      while (!validarSaldo(limite)) {
        alert("Debe ingresar un monto mayor a 0");
        limite = Number(prompt("Ingrese limite, se mostraran los gastos menores a este"));
      }

      for (let gasto of gastos) {

        if (gasto.monto < limite) {
          lista += gasto.motivo + "-> $" +
            gasto.monto + "\n"
        }
      }

      if (lista === "") {
        alert("No se encontraron gastos.")
      } else {
        alert(lista);
      }

      break;

    case 2:
      //monto mayor a

      limite = Number(prompt("Ingrese limite, se mostraran los gastos mayores a este"));

      while (!validarSaldo(limite)) {
        alert("Debe ingresar un monto mayor a 0");
        limite = Number(prompt("Ingrese limite, se mostraran los gastos mayores a este"));
      }

      for (let gasto of gastos) {

        if (gasto.monto > limite) {
          lista += gasto.motivo + " -> $" +
            gasto.monto + "\n";
        }

      }

      if (lista === "") {
        alert("No se encontraron gastos.");
      } else {
        alert(lista);
      }

      break;

    case 3:
      //motivo

      let buscar = prompt("Ingrese el motivo a buscar").trim().toLowerCase();

      while (!validarString(buscar)) {
        alert("Debe ingresar un motivo válido.");
        buscar = prompt("Ingrese el motivo a buscar").trim().toLowerCase();
      }

      for (let gasto of gastos) {

        if (gasto.motivo.toLowerCase().includes(buscar)) {
          lista += gasto.motivo + " -> $" +
            gasto.monto + "\n";
        }

      }

      if (lista === "") {
        alert("No se encontraron gastos.");
      } else {
        alert(lista);
      }

      break;

    default:

      alert("Opción no válida.");
      break;

  }

}

/*=====================
    Mostrar resumen (opcion 4)
=====================*/

function mostrarResumen() {

  let totalGastado = saldoInicial - saldo;
  let restante = saldo - objetivoAhorro;

  if (restante <= 0) {
    restante = "El objetivo de ahorro ya se perdio, intentalo mejor la proxima vez"
  }
  else {
    restante = "$" + restante;
  }

  let lista =
    "saldo inicial: $" + saldoInicial + "\n" +
    "saldo actual: $" + saldo + "\n" +
    "Total gastado: $" + totalGastado + "\n" +
    "Objetivo ahorro: $" + objetivoAhorro + "\n" +
    "Dinero restante cumpliendo el objetivo: " + restante + "\n";

  alert(lista);

}

/*=====================
    VALIDACIONES
=====================*/

function validarString(texto) {

  if (texto.trim().length < 3) {
    return false;
  }
  return true;
}

function validarSaldo(saldo, limite) {

  if (saldo <= 0 || isNaN(saldo)) {
    return false;
  }

  if (limite !== undefined && saldo > limite) {
    return false;
  }

  return true;

}

function validarAhorro(saldo, objetivo) {

  if (objetivo <= 0) {
    return false;
  }

  if (objetivo > saldo) {
    return false;
  }

  return true;
}

function validarMenu(opcion) {

  if (opcion >= 1 && opcion <= 5) {
    return true;
  }

  return false;

}


//console.log(saldoInicial, objetivoAhorro, opcion);