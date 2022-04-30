let nomeModelo;
let nomeGola;
let nomeTecido;

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

function ativarBotao(elemento) {
    let validacao = (nomeModelo !== undefined && nomeGola !== undefined && nomeTecido !== undefined);
    if(validacao) {
        const itemSelecionado = document.querySelector(".montagem").querySelector("button");
        itemSelecionado.classList.add("ativarBotao")
        console.log(itemSelecionado)
        //elemento.classList.add("ativarBotao");
    }
    debugger
}

