//Control de gastos

/*=====================
    ingreso de datos
=====================*/

setTimeout(() => {
  let saldoInicial = Number(prompt("Ingrese su saldo inicial"));
while (!validarSaldo(saldoInicial)) {
  alert("Monto ingresado no puede ser menor o igual a 0");
  saldoInicial = Number(prompt("Ingrese su saldo inicial"));
}

let objetivoAhorro = Number(prompt("Ingrese su objetivo a ahorrar"));
while(!validarAhorro(saldoInicial, objetivoAhorro)){
  alert("Monto ingresado no puede ser menor o igual a 0 ni mayor que saldo");
  objetivoAhorro = Number(prompt("Ingrese su objetivo a ahorrar"));
}

let opcion = menu();
while(!validarMenu(opcion)){
  alert("Debe elegirun numero entre 1 y 5")
  opcion = menu();
}
},2000);

let saldoInicial = Number(prompt("Ingrese su saldo inicial"));
while (!validarSaldo(saldoInicial)) {
  alert("Monto ingresado no puede ser menor o igual a 0");
  saldoInicial = Number(prompt("Ingrese su saldo inicial"));
}

let objetivoAhorro = Number(prompt("Ingrese su objetivo a ahorrar"));
while(!validarAhorro(saldoInicial, objetivoAhorro)){
  alert("Monto ingresado no puede ser menor o igual a 0 ni mayor que saldo");
  objetivoAhorro = Number(prompt("Ingrese su objetivo a ahorrar"));
}

let opcion = menu();
while(!validarMenu(opcion)){
  alert("Debe elegirun numero entre 1 y 5")
  opcion = menu();
}

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

  var opcion = Number(prompt(opciones))
  return opcion;
}




/*=====================
    VALIDACIONES
=====================*/


function validarSaldo(saldo) {

  if (saldo <= 0 || isNaN(saldo)) {
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