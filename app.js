// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();
    const listaAmigos = document.getElementById("listaAmigos");
    
    if (nombre === "") {
        alert("Por favor, ingrese un nombre válido.");
        return;
    }
    
    if (amigos.includes(nombre)) {
        alert("Este nombre ya ha sido ingresado.");
        return;
    }
    
    amigos.push(nombre);
    
    const li = document.createElement("li");
    li.textContent = nombre;
    listaAmigos.appendChild(li);
    
    input.value = "";
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Debe ingresar al menos un nombre antes de sortear.");
        return;
    }
    
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = "";
    
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSecreto = amigos[indiceAleatorio];
    
    const li = document.createElement("li");
    li.textContent = `🎉 ¡El amigo secreto es: ${amigoSecreto}! 🎉`;
    resultado.appendChild(li);
}
