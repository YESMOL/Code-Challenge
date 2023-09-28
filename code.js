
const formulario = document.getElementById("formulario");
// Agrego un evento "submit" al formulario

document.addEventListener("DOMContentLoaded", function(){

console.log("cargó la pág");
formulario.addEventListener("submit", function (evento) {
evento.preventDefault(); // Prevenir el envío predeterminado del formulario

    // aquí defino las constantes donde almaceno los valores de los campos
    //del formulario
const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const fecha = document.getElementById("fecha");

    // Creo un objeto 'data' con los valores ingresados por el usuario
const data = { nombre: nombre.value, apellido: apellido.value, fecha_de_nacimiento: fecha.value};

    // Realizo la solicitud Fetch utilizando los valores de 'data'
const data_end = "https://jsonplaceholder.typicode.com/users";

    fetch(data_end, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(response => {
            if (!response.ok) {
                console.log('Error en la solicitud');
            }
            return response.json();
        })
        .then(data => {
            console.log('Respuesta del servidor:', data);
        })
        .catch(error => {
            console.error('Error:', error);
        });
})
console.log("data_end");
});