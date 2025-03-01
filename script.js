let amigos = [];

function adicionarAmigo() {
    
    let nome = document.getElementById('nomeAmigo').value;

    if (nome.trim() === "") {
        alert("Por favor, insira um nome.");
        return; 
    }

    amigos.push(nome);

    document.getElementById('nomeAmigo').value = "";

    exibirListaAmigos();
}


function exibirListaAmigos() {
    let lista = document.getElementById('listaAmigos');

    lista.innerHTML = "";

    amigos.forEach(function(amigo) {
        let li = document.createElement('li');
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    console.log("Botão clicado"); 

    if (amigos.length === 0) {
        alert("Não há amigos para sortear.");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];

    document.getElementById('resultado').innerHTML = "O amigo sorteado é: " + amigoSorteado;
}

document.getElementById('nomeAmigo').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') { 
        adicionarAmigo();
    }
});