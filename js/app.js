import {
    templateInicio,
    templateProjetos,
    templateCadastro,
    templateConta
} from "./templates.js";

import { validarCadastro } from "./validacao.js";

import {
    obterCadastro,
    existeCadastro,
    sairCadastro
} from "./storage.js";

const app = document.querySelector("#app");
const links = document.querySelectorAll(".rota");

function atualizarNavegacao() {
    const linksCadastro = document.querySelectorAll(
        '.navegacao__link.rota'
    );

    linksCadastro.forEach(function(link) {

        const href = link.getAttribute("href");

        if (href === "#cadastro" || href === "#conta") {

            if (existeCadastro()) {
                link.textContent = "Minha conta";
                link.setAttribute("href", "#conta");
            } else {
                link.textContent = "Cadastre-se";
                link.setAttribute("href", "#cadastro");
            }

        }

    });
}

function configurarBotaoSair() {
    const botaoSair = document.querySelector(".conta__sair");

    if (!botaoSair) {
        return;
    }

    botaoSair.addEventListener("click", function() {
        sairCadastro();

        window.location.hash = "#inicio";
        renderizar("#inicio");
        atualizarNavegacao();
    });
}

function renderizar(pagina) {

    if (pagina === "#inicio") {
        app.innerHTML = templateInicio();
    }

    if (pagina === "#projetos") {
        app.innerHTML = templateProjetos();
    }

    if (pagina === "#cadastro") {
        app.innerHTML = templateCadastro();
        validarCadastro();
    }

    if (pagina === "#conta") {
    const dados = obterCadastro();

    if (!dados) {
        window.location.hash = "#cadastro";
        return;
    }

    app.innerHTML = templateConta(dados);

    configurarBotaoSair();
}
    
}

links.forEach(function(link) {
    link.addEventListener("click", function(event) {

        event.preventDefault();

        const pagina = link.getAttribute("href");

        window.location.hash = pagina;

        renderizar(pagina);

    });
});

window.addEventListener("hashchange", function() {

    renderizar(window.location.hash);

});

const paginaAtual = window.location.hash || "#inicio";

renderizar(paginaAtual);
atualizarNavegacao();