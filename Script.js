// Array para almacenar los nombres de los amigos
let amigos = [];

// Función para agregar un nombre
function agregarNombre() {
    const input = document.getElementById('nombre');
    const nombre = input.value.trim();
    const error = document.getElementById('error');
    const lista = document.getElementById('listaAmigos');

    // Limpiar mensajes previos
    error.textContent = '';

    if (nombre === '') {
        error.textContent = 'Por favor ingrese un nombre válido.';
    } else {
        amigos.push(nombre);
        input.value = '';
        visualizarLista();
    }
}

// Función para visualizar la lista
function visualizarLista() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = ''; // Limpiar lista antes de agregar elementos

    amigos.forEach((amigo) => {
        const li = document.createElement('li');
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

// Función para sortear un amigo secreto
function sortearAmigo() {
    if (amigos.length < 2) {
        alert('Debe haber al menos 2 participantes para realizar el sorteo.');
        return;
    }
    const amigoSecreto = amigos[Math.floor(Math.random() * amigos.length)];
    document.getElementById('resultado').textContent = `El amigo secreto es: ${amigoSecreto}`;
}