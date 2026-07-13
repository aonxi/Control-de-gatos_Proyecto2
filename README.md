# Control de gastos
2do proyecto de java full stack.

## Descripcion
Aplicación de consola que permite administrar un presupuesto mediante el registro y consulta de gastos.

## Funcionalidades

- Ingresar saldo inicial.
- Definir objetivo de ahorro.
- Registrar gastos.
- Mostrar todos los gastos registrados.
- Filtrar gastos:
  - Menores a un monto.
  - Mayores a un monto.
  - Por motivo.
- Mostrar un resumen del presupuesto.
- Salir del programa.

## Tecnologías

- JavaScript
- Visual Studio Code

## Autor

Johan

# Estructura del proyecto

El programa se encuentra organizado mediante funciones independientes, donde cada una cumple una única responsabilidad:

- `iniciarPrograma()`
- `menu()`
- `registrarGasto()`
- `mostrarGastos()`
- `filtrarGastos()`
- `mostrarResumen()`
- `salir()`

Además, se implementaron funciones auxiliares para validar la información ingresada por el usuario:

- `validarSaldo()`
- `validarAhorro()`
- `validarMenu()`
- `validarString()`

---

# Validaciones implementadas

El programa considera distintas validaciones para evitar errores durante la ejecución:

- El saldo inicial debe ser mayor que cero.
- El objetivo de ahorro no puede superar el saldo inicial.
- El motivo del gasto debe contener al menos tres caracteres.
- El monto del gasto debe ser mayor que cero.
- El monto del gasto no puede superar el saldo disponible.
- Las opciones del menú deben estar entre 1 y 5.

---

# Análisis del proyecto

Durante el desarrollo de este proyecto se aplicaron los principales fundamentos aprendidos en el módulo 3.

Se trabajó con variables, funciones, objetos y arreglos para almacenar y administrar la información correspondiente a los gastos registrados.

También se utilizaron estructuras de control como condicionales (`if`), ciclos (`while`, `do...while` y `for...of`) y la estructura `switch`, permitiendo organizar el flujo del programa de manera clara y sencilla.

un aspecto importante fue dividir el código en funciones específicas para facilitar su lectura, mantenimiento y reutilización.