function submeterFormulario() {
    let maoDeObra = document.getElementById("maoDeObra").value;
    let pecasVendidas = document.getElementById("pecasVendidas").value;
    let precoTotal = document.getElementById("precoTotal").value;

    let servicos = {
        'maoDeObra' : maoDeObra,
        'pecasVendidas' : pecasVendidas,
        'precoTotal' : precoTotal,
    };

    function reqListener () {
        let servicos = JSON.parse(this.responseText);
        adicionarEstoque(servicos);
    }

    let oReq = new XMLHttpRequest();
    oReq.onload = reqListener;
    oReq.open("POST", "servicos", true);
    oReq.setRequestHeader("Content-Type", "application/json");
    oReq.send(JSON.stringify(servicos));
}

function adicionarEstoque(servicos) {
    let container = document.createElement("div");
    container.classList.add("container");

    let nome = document.createElement("div");
    nome.classList.add("row");
    nome.innerHTML = "<h2>" + servicos.maoDeObra + "</h2>";

    let fabricante = document.createElement("div");
    fabricante.classList.add("row");
    let p = document.createElement("p");
    p.innerHTML = servicos.pecasVendidas;
    fabricante.appendChild(p);

    let quantidade = document.createElement("div");
    quantidade.classList.add("row");
    p = document.createElement("p");
    p.innerHTML = servicos.precoTotal;
    quantidade.appendChild(p);


    let edit = document.createElement("div");
    edit.classList.add("row");
    let e = document.createElement("button");
    e.innerHTML = `<a onClick="removerServico(this)">Delete</a>`;
    edit.appendChild(e);

    container.appendChild(nome);
    container.appendChild(fabricante);
    container.appendChild(quantidade);
    container.appendChild(edit);

    document.getElementById("servicos").appendChild(container);
}

function exibirEstoque() {
    let oReq = new XMLHttpRequest();
    oReq.onload = function() {
        let listaDeServicos = JSON.parse(this.responseText);
        for (let i = 0; i < listaDeServicos.length; i++) {
            adicionarEstoque(listaDeServicos[i]);
        }
    };
    oReq.open("GET", "servicos", true);
    oReq.setRequestHeader("Content-Type", "application/json");
    oReq.send();
}

window.addEventListener("load", function () {
    exibirEstoque();
});