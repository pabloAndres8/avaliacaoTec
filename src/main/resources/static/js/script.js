function loadTable() {
    const req = new XMLHttpRequest();
    req.open("GET", "estoque", true);
    req.send();
    req.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText);
            var trHTML = '';
            const objects = JSON.parse(this.responseText);
            for (let object of objects) {
                trHTML += '<tr>';
                trHTML += '<td>'+object['nome']+'</td>';
                trHTML += '<td>'+object['fabricante']+'</td>';
                trHTML += '<td>'+object['quantidade']+'</td>';
                trHTML += '<td>'+object['preco']+'</td>';
                trHTML += '<td><button type="button" class="btn btn-primary" onclick="janelaEditarPeca('+object['id']+')">Editar</button></td>';
                trHTML += '<td><button type="button" class="btn btn-danger" onclick="removerPeca('+object['id']+')">Remover</button></td>';
                trHTML += "</tr>";
            }
            document.getElementById("estoque").innerHTML = trHTML;
        }
    };

}

loadTable();

function janelaCriarPeca(){
    Swal.fire({
        title: 'Adcionar peça',
        html:
            '<input id="id" type="hidden">' +
            '<input id="nome" class="swal2-input" placeholder="Nome">' +
            '<input id="fabricante" class="swal2-input" placeholder="fabricante">' +
            '<input id="quantidade" type="number" class="swal2-input" placeholder="quantidade em estoque">' +
            '<input id="preco" type="number" class="swal2-input" placeholder="preço">',
        focusConfirm: false,
        preConfirm: () => {
            adcionarPeca();
        }
    })

}

function adcionarPeca(){
    const id = document.getElementById("id").value;
    const nome = document.getElementById("nome").value;
    const fabricante = document.getElementById("fabricante").value;
    const quantidade = document.getElementById("quantidade").value;
    const preco = document.getElementById("preco").value;

    const req = new XMLHttpRequest();
    req.open("POST", "estoque", true);
    req.setRequestHeader("Content-Type", "application/json");
    req.send(JSON.stringify({
        "nome": nome,
        "fabricante": fabricante,
        "quantidade": quantidade,
        "preco": preco,

    }));
    req.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            Swal.fire({
                title: "Peça Adicionada"
            });
            loadTable();
        }
    }

}


function removerPeca(id) {
    const req = new XMLHttpRequest();
    req.open("DELETE", `estoque/${id}`);
    req.setRequestHeader("Content-Type", "application/json");
    req.send(JSON.stringify({
        "id": id
    }));
    req.onreadystatechange = function() {
        if (this.readyState == 4) {
            Swal.fire({
                title: "Peça excluida"
            });
            loadTable();
        }
    };
}

function janelaEditarPeca(id) {
    const req = new XMLHttpRequest();
    req.open("PUT", `estoque/${id}`);
    req.send();
    req.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            const object = JSON.parse(this.responseText);
            Swal.fire({
                title: 'Editar',
                html:
                    '<input id="nome" class="swal2-input" value="'+object['nome']+'">' +
                    '<input id="fabricante" class="swal2-input" value="'+object['fabricante']+'">' +
                    '<input id="quantidade" type="number" class="swal2-input" value="'+object['quantidade']+'">' +
                    '<input id="preco" type="number" class="swal2-input" value="'+object['preco']+'">',
                focusConfirm: false,
                preConfirm: () => {
                    editarPeca();
                }
            })
        }
    };
}

function editarPeca(){
    let nome = document.getElementById("nome").value;
    let fabricante = document.getElementById("fabricante").value;
    let quantidade = document.getElementById("quantidade").value;
    let preco = document.getElementById("preco").value;

    let req = new XMLHttpRequest();
    req.open("PUT", `estoque/${id}`, true);
    req.setRequestHeader("Content-Type", "application/json");
    req.send(JSON.stringify({
        "nome": nome,
        "fabricante": fabricante,
        "quantidade": quantidade,
        "preco": preco,

    }));
    req.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            Swal.fire({
                title: "Edicao concluida"
            });
            loadTable();
        }a
    }

}
