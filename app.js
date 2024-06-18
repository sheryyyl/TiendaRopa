"use strict"
function datosCliente(pregunta) {
    let respuesta = prompt(pregunta);
    document.write(respuesta);
    return respuesta;
}
let nombreCliente = datosCliente("Cual es tu nombre?");
datosCliente("Cual es tu edad?");
// datosCliente("Ingrese tu correo electrónico");



// // Declaración y Asignación de "NombreCliente"
// let nombreCliente = "";
// nombreCliente = prompt("Cual es tu nombre?"); // valor ingresado a un cuadro de diálogo
// document.write("Bienvenido " + nombreCliente);

// // "${NombreCliente}" marcador usado para llamar a una variable
if (nombreCliente != "") {
    alert(`¡Hola, ${nombreCliente}! Bienvenido a nuestra página.`);
 } else {
     prompt('Por favor, escribe tu nombre.');
 }

// // parseInt se utiliza para convertir la entrada del usuario en un número entero
// const edad = parseInt(prompt("Cual es tu edad?"));
// if (edad >= 18) {
//     alert("Cumples con el requisito de edad");
// } else {
//     alert("No cumples con el requisito de edad");
// }

// const correo = prompt("Ingrese tu correo electrónico");
// document.write(correo);