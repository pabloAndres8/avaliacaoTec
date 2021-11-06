function submeterFormulario() {
    let nome = document.getElementById("nome").value;
    let fabricante = document.getElementById("fabricante").value;
    let quantidade = document.getElementById("quantidade").value;
    let preco = document.getElementById("preco").value;

    let estoque = {
        'nome' : nome,
        'fabricante' : fabricante,
        'quantidade' : quantidade,
        'preco': preco,
    };

    function reqListener () {
        let estoque = JSON.parse(this.responseText);
        adicionarEstoque(estoque);
    }

    let oReq = new XMLHttpRequest();
    oReq.onload = reqListener;
    oReq.open("POST", "estoque", true);
    oReq.setRequestHeader("Content-Type", "application/json");
    oReq.send(JSON.stringify(estoque));
}

function adicionarEstoque(estoque) {
    let container = document.createElement("div");
    container.classList.add("container");

    let nome = document.createElement("div");
    nome.classList.add("row");
    nome.innerHTML = "<h2>" + estoque.nome + "</h2>";

    let fabricante = document.createElement("div");
    fabricante.classList.add("row");
    let p = document.createElement("p");
    p.innerHTML = estoque.fabricante;
    fabricante.appendChild(p);

    let quantidade = document.createElement("div");
    quantidade.classList.add("row");
    p = document.createElement("p");
    p.innerHTML = estoque.quantidade;
    quantidade.appendChild(p);

    let preco = document.createElement("div");
    preco.classList.add("row");
    p = document.createElement("p");
    p.innerHTML = estoque.preco;
    preco.appendChild(p);

    container.appendChild(nome);
    container.appendChild(fabricante);
    container.appendChild(quantidade);
    container.appendChild(preco);
    document.getElementById("estoque").appendChild(container);
}

function exibirEstoque() {
    let oReq = new XMLHttpRequest();
    oReq.onload = function() {
        let listaDeEstoque = JSON.parse(this.responseText);
        for (let i = 0; i < listaDeEstoque.length; i++) {
            adicionarEstoque(listaDeEstoque[i]);
        }
    };
    oReq.open("GET", "estoque", true);
    oReq.setRequestHeader("Content-Type", "application/json");
    oReq.send();
}

window.addEventListener("load", function () {
    exibirEstoque();
});