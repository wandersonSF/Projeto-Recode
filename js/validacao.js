import { salvarCadastro, obterCadastro } from "./storage.js";

export function validarCadastro() {

    const formulario = document.querySelector("form");

    formulario.addEventListener("submit", function(event) {

        console.log("SUBMIT DETECTADO!");

        event.preventDefault();

        const senha = document.querySelector("#senha");
        const confirmarSenha = document.querySelector("#confirmar-senha");

        if (senha.value !== confirmarSenha.value) {

            const mensagem = document.createElement("p");

            mensagem.textContent = "As senhas não são iguais.";

            mensagem.classList.add("formulario__erro");

            confirmarSenha.parentElement.appendChild(mensagem);

            return;
        }

        const dados = {
            nome: document.querySelector("#nome").value,
            sobrenome: document.querySelector("#sobrenome").value,
            cpf: document.querySelector("#cpf").value,
            email: document.querySelector("#email").value,
            telefone: document.querySelector("#telefone").value,
            cep: document.querySelector("#cep").value,
            endereco: document.querySelector("#endereco").value
        };

        salvarCadastro(dados);

        const sucesso = document.querySelector("#cadastro-concluido");

        sucesso.style.display = "flex";

        console.log(obterCadastro());

    });
}