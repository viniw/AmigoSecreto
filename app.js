

//Array para armazenar os nomes
let amigos = [];


//Função para adicionar amigo na lista e atualizar
function adicionarAmigo() {
    let input = document.getElementById("amigo");
    let nome = input.value.trim();
    
    if (!nome) {
        alert("Por favor, insira um nome.");
        return;
    }
    
    if (!amigos.includes(nome)) {
        amigos.push(nome);
        atualizarListaAmigos();
        input.value = "";
    }
}


//Função para atualizar a lista
function atualizarListaAmigos() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    
    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li");
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}


//Função para sortear um amigo e exibir
function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Adicione pelo menos dois amigos para sortear.");
        return;
    }

    let sorteadoIndex = Math.floor(Math.random() * amigos.length);
    let sorteado = amigos[sorteadoIndex];
    
    exibirResultado(sorteado);
}


//Função para exibir o resultado do sorteio
function exibirResultado(sorteado) {
    let listaResultado = document.getElementById("resultado");
    listaResultado.innerHTML = "";
    
    let li = document.createElement("li");
    li.textContent = `Amigo sorteado: ${sorteado}`;
    listaResultado.appendChild(li);
}
