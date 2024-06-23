"use strict"
function datosCliente(pregunta) {
    let respuesta = prompt(pregunta);
    document.write(respuesta);
    return respuesta;
}

let nombreCliente = "";

while (nombreCliente === "") {
    nombreCliente = datosCliente("¿Cuál es tu nombre?");
    if (nombreCliente === "") {
        alert("Por favor, escribe tu nombre.");
    }
}
let edadCliente = datosCliente("¿Cuál es tu edad?");
let Corrreo = datosCliente("¿Cuál es tu corrreo?");
let prendasArmario = datosCliente("¿Cuántas prendas tienes en tu armario?");

alert(`¡Hola, ${nombreCliente}! Bienvenido a nuestra página.`);

// Repetir la imagen 4 veces
const imagenRepetida = document.getElementById('imagenRepetida'); //se obtiene el elemento del contenedor
const imagen = "https://arocauniformes.com/wp-content/uploads/2021/07/PANTALON1.jpg";

for (let i = 0; i < 4; i++) {
     // Crear un elemento <img> en el DOM
    const img = document.createElement('img');
    img.src = imagen;
    img.alt = "pantalon";
     // el elemento <img> creado se agrega como hijo de div id"imagenRepetida"
    imagenRepetida.appendChild(img);
}

// let nombreCliente = datosCliente("Cual es tu nombre?");
// datosCliente("Cual es tu edad?");
// datosCliente("Ingrese tu correo electrónico");



// // Declaración y Asignación de "NombreCliente"
// let nombreCliente = "";
// nombreCliente = prompt("Cual es tu nombre?"); // valor ingresado a un cuadro de diálogo
// document.write("Bienvenido " + nombreCliente);

// // "${NombreCliente}" marcador usado para llamar a una variable
// if (nombreCliente != "") {
//     alert(`¡Hola, ${nombreCliente}! Bienvenido a nuestra página.`);
// } else {
//     prompt('Por favor, escribe tu nombre.');
// }

// // parseInt se utiliza para convertir la entrada del usuario en un número entero
// const edad = parseInt(prompt("Cual es tu edad?"));
// if (edad >= 18) {
//     alert("Cumples con el requisito de edad");
// } else {
//     alert("No cumples con el requisito de edad");
// }

// const correo = prompt("Ingrese tu correo electrónico");
// document.write(correo);