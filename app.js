let lista_Amigos = []; //Array da lista de amigos que será exibida

function adicionarAmigo() {
   let nomeAmigo = document.querySelector('#amigo').value.trim(); //Pega o valor do input 

    if(nomeAmigo !== "") {
        lista_Amigos.push(nomeAmigo); //Add na lista
        console.log("Amigos:", lista_Amigos);
    }
    else {
        alert("Campo vazio não aceito. Por favor, insira um nome.");
    }
    limparCampo();
    exibirLista();
}

function limparCampo(){
    nome = document.querySelector('input');
    nome.value = '';
}

function exibirLista() {
    document.getElementById("listaAmigos").innerHTML = "";
    lista_Amigos.forEach(amigo => {
        const item = document.createElement("li");
        item.textContent = amigo;
        document.getElementById("listaAmigos").appendChild(item);
    });
}

function sortearAmigo() {

    if(lista_Amigos.length === 0){
        alert("Lista vazia. Por favor, insira os nomes na lista para sortear.");
    }
    else if(lista_Amigos.length === 1 ){
        alert("A lista deve ter mais de um nome para realizar o sorteio.");
    }
    else{
        let indiceLista = Math.floor(Math.random() * lista_Amigos.length);
        let amigoSorteado = lista_Amigos[indiceLista];

        let ul = document.querySelector("#resultado");
        ul.innerHTML = "";
        let li = document.createElement("li");
        li.textContent = (`O amigo sorteado foi: ${amigoSorteado}`);
        ul.appendChild(li);
    }
    limparLista();
}

function limparLista(){
    document.getElementById("listaAmigos").innerHTML = ""
}

