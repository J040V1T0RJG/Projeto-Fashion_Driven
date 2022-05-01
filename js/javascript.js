let usuario = prompt("Digite o seu nome: ")
let nomeModelo;
let nomeGola;
let nomeTecido;
let dados = {};
let inputLink;
let validacaoDados;
let listaPedidoSelecionado = {};

chamarRenderizarUltimosPedidos()

function chamarRenderizarUltimosPedidos() {
    const pegarUltimosPedidos = axios.get("https://mock-api.driven.com.br/api/v4/shirts-api/shirts")
    pegarUltimosPedidos.then(renderizarUltimosPedidos);
}


function renderizarUltimosPedidos(resposta) {
    lista = resposta.data;
    console.log(lista)
    
    const itemSelecionado = document.querySelector(".ultimosPedidos");
    itemSelecionado.innerHTML = "";
    for (let i = 0; i < lista.length; i++) {
        itemSelecionado.innerHTML += `
            <div class="pedido posicao${i}" onclick="selecionarPedido(${i})">
                <img src="${lista[i].image}" alt="" srcset="">
                <p><strong>Criador: </strong>${lista[i].owner}</p>
            </div>
        `
        console.log(lista[i])
    }

}

function selecionarPedido(acessarPosicao) {
    listaPedidoSelecionado = lista[acessarPosicao]

    let text = `Confirme seu pedido: camisa N°${acessarPosicao + 1}
model: ${listaPedidoSelecionado.model},
neck: ${listaPedidoSelecionado.neck},
material: ${listaPedidoSelecionado.material},
image: ${listaPedidoSelecionado.image},
owner: ${usuario},
author: ${listaPedidoSelecionado.owner}
    `
    if(confirm(text) == true) {

        dados = {
            model: `${listaPedidoSelecionado.model}`,
            neck: `${listaPedidoSelecionado.neck}`,
            material: `${listaPedidoSelecionado.material}`,
            image: `${listaPedidoSelecionado.image}`,
            owner: `${usuario}`,
            author: `${listaPedidoSelecionado.owner}`
        }
        const enviarDados = axios.post("https://mock-api.driven.com.br/api/v4/shirts-api/shirts", dados);
        enviarDados.then(sucesso);
        enviarDados.catch(erro);

        function sucesso() {
            chamarRenderizarUltimosPedidos();
            alert(" Voce confirmou o seu pedido e o pedido foi enviado com sucesso.")
        }
        function erro() {
            alert("Ops, não conseguimos processar sua encomenda.")
        }
    }
    else {
        alert("Voce cancelou o seu pedido")
    }
}



function selecionarModelo(elemento) {
    const itemSelecionado = document.querySelector(".modelo .selecionado");

    if (itemSelecionado !== null) {
        itemSelecionado.classList.remove("selecionado");
      }
    elemento.classList.add("selecionado");
     
    let valorElemento1 = (elemento.outerHTML == "<div class=\"opcao tshirt selecionado\" onclick=\"selecionarModelo(this)\"><img src=\"img/tshirt.png\" alt=\"\" srcset=\"\"></div>");
    let valorElemento2 = (elemento.outerHTML == "<div class=\"opcao camiseta selecionado\" onclick=\"selecionarModelo(this)\"><img src=\"img/Camiseta.png\" alt=\"\" srcset=\"\"></div>");
    let valorElemento3 = (elemento.outerHTML == "<div class=\"opcao mangalonga selecionado\" onclick=\"selecionarModelo(this)\"><img src=\"img/Mangalonga.png\" alt=\"\" srcset=\"\"></div>");

    if(valorElemento1) {
        nomeModelo = "t-shirt";
    }
    else if(valorElemento2) {
        nomeModelo = "long";
    }
    else if(valorElemento3) {
        nomeModelo = "top-tank";
    }
    ativarBotao();
}

function selecionarGola(elemento) {
    const itemSelecionado = document.querySelector(".gola .selecionado");

    if (itemSelecionado !== null) {
        itemSelecionado.classList.remove("selecionado");
      }
    elemento.classList.add("selecionado");

    let valorElemento1 = (elemento.outerHTML == "<div class=\"opcao golaV selecionado\" onclick=\"selecionarGola(this)\"><img src=\"img/GolaV.png\" alt=\"\" srcset=\"\"></div>");
    let valorElemento2 = (elemento.outerHTML == "<div class=\"opcao golaRedonda selecionado\" onclick=\"selecionarGola(this)\"><img src=\"img/GolaRedonda.png\" alt=\"\" srcset=\"\"></div>");
    let valorElemento3 = (elemento.outerHTML == "<div class=\"opcao golaPolo selecionado\" onclick=\"selecionarGola(this)\"><img src=\"img/GolaPolo.png\" alt=\"\" srcset=\"\"></div>");

    if(valorElemento1) {
      nomeGola = "v-neck";
    }
    else if(valorElemento2) {
        nomeGola = "round";
    }
    else if(valorElemento3) {
        nomeGola = "polo";
    }
    ativarBotao();
}

function selecionarTecido(elemento) {
    const itemSelecionado = document.querySelector(".tecido .selecionado");

    if (itemSelecionado !== null) {
        itemSelecionado.classList.remove("selecionado");
      }
    elemento.classList.add("selecionado");

    let valorElemento1 = (elemento.outerHTML == "<div class=\"opcao seda selecionado\" onclick=\"selecionarTecido(this)\"><img src=\"img/Seda.png\" alt=\"\" srcset=\"\"></div>");
    let valorElemento2 = (elemento.outerHTML == "<div class=\"opcao algodao selecionado\" onclick=\"selecionarTecido(this)\"><img src=\"img/Algodão.png\" alt=\"\" srcset=\"\"></div>");
    let valorElemento3 = (elemento.outerHTML == "<div class=\"opcao poliester selecionado\" onclick=\"selecionarTecido(this)\"><img src=\"img/Poliester.png\" alt=\"\" srcset=\"\"></div>");

    if(valorElemento1) {
      nomeTecido = "silk";
    }
    else if(valorElemento2) {
        nomeTecido = "cotton";
    }
    else if(valorElemento3) {
        nomeTecido = "polyester";
    }
    ativarBotao();
}


function ativarBotao() {
    inputLink = document.querySelector("input").value;
    validacaoDados = (nomeModelo !== undefined && nomeGola !== undefined && nomeTecido !== undefined && inputLink !== "" && (inputLink.includes("https://") || inputLink.includes("http://") ) );

    if(validacaoDados) {
        const itemSelecionado = document.querySelector(".footer button");
        itemSelecionado.classList.add("ativo")
    }
}
setInterval(ativarBotao, 1000);

function confirmarPedido() {
    let validacaoUsuario = (usuario !== "" && usuario !== null)
    if (validacaoUsuario) {
        if(validacaoDados) {
            dados = {
                model: `${nomeModelo}`,
                neck: `${nomeGola}`,
                material: `${nomeTecido}`,
                image: `${inputLink}`,
                owner: `${usuario}`,
                author: `${usuario}`
            }
            const enviarDados = axios.post("https://mock-api.driven.com.br/api/v4/shirts-api/shirts", dados);
            enviarDados.then(sucesso);
            enviarDados.catch(erro);

            function sucesso() {
                chamarRenderizarUltimosPedidos();
                alert("Pedido enviado com sucesso.")
            }
            function erro() {
                alert("Ops, não conseguimos processar sua encomenda")
            }
        }
        else {
            alert("Preencha todas as informações")
        }
    }
    else {
        alert("Nome do usuario não foi digitado.")
        usuario = prompt("Digite o seu nome: ")

    }

}

