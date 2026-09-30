export function salvarCadastro(dados) {

    localStorage.setItem(
        "cadastroRecode",
        JSON.stringify(dados)
    );

}

export function obterCadastro() {

    const dados = localStorage.getItem("cadastroRecode");

    return JSON.parse(dados);

}

export function existeCadastro() {
    return localStorage.getItem("cadastroRecode") !== null;
}

export function sairCadastro() {
    localStorage.removeItem("cadastroRecode");
}