function enviarFormulario() {
    // Obtener los valores del formulario
    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const fechaNacimiento = document.getElementById("fechaNacimiento").value;

    // Crear un objeto con los datos del formulario
    const datos = {
        nombre: nombre,
        apellido: apellido,
        fechaNacimiento: fechaNacimiento
    };

    // Realizar la solicitud POST utilizando fetch
    fetch('https://jsonplaceholder.typicode.com/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(datos)
    })
    .then(response => response.json())
    .then(data => {
        // Mostrar la respuesta del servidor
        document.getElementById("respuesta").innerText = JSON.stringify(data, null, 2);
    })
    .catch(error => {
        console.error('Error al realizar la solicitud:', error);
    });
}
