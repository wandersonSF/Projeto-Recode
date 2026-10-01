# Projeto Recode — Front-End

Projeto acadêmico desenvolvido para apresentar a atuação da ONG Recode no combate à exclusão digital, destacando seus projetos e incentivando a participação de alunos, voluntários e empresas.

## Sobre o projeto

O site foi desenvolvido como parte de um projeto acadêmico relacionado ao tema **exclusão digital**. A aplicação apresenta informações sobre a ONG Recode, seus projetos e formas de participação.

O projeto possui páginas para apresentação da organização, visualização dos projetos e cadastro de usuários. Também foram implementados recursos de acessibilidade, modo escuro, validação de formulário e armazenamento local dos dados de cadastro.

## Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript (ES6 Modules)
- Vite
- Git
- GitHub
- Vercel

## Estrutura do projeto

```text
Projeto Recode - Front End/
├── css/
│   └── style2.css
├── html/
│   ├── index.html
│   ├── projetos.html
│   └── cadastro.html
├── img/
│   ├── logo-recode.webp
│   ├── estacao-hack.webp
│   ├── games4good.webp
│   ├── inpact-ai.webp
│   ├── jovens-estudando.webp
│   ├── movimento-comunicadoras-indigenas.webp
│   ├── recode-bibliotecas.webp
│   ├── recode-pro.webp
│   └── recode-pro-aldeia.webp
├── js/
│   ├── app.js
│   ├── storage.js
│   ├── templates.js
│   └── validacao.js
├── .gitignore
├── package.json
├── vite.config.js
└── README.md
```

## Funcionalidades

### Página inicial

Apresenta a proposta do projeto e informações introdutórias sobre a atuação da Recode.

### Projetos

Apresenta projetos relacionados à atuação da organização, permitindo que os usuários conheçam iniciativas desenvolvidas pela Recode.

### Cadastro

Possui um formulário para cadastro de usuários, com validação dos campos utilizando recursos nativos do HTML5 e validações adicionais em JavaScript.

### Minha conta

Após o cadastro, os dados podem ser consultados na seção "Minha conta". As informações são armazenadas no `localStorage` do navegador.

### Modo escuro

O site possui um modo escuro que pode ser ativado pelo usuário. A preferência de tema é armazenada no navegador para ser mantida entre acessos.

### Acessibilidade

Foram implementadas melhorias de acessibilidade, incluindo:

- navegação por teclado;
- indicação visual de foco;
- uso de elementos HTML semânticos;
- atributos e informações adequadas para elementos interativos;
- contraste de cores compatível com os requisitos definidos para o projeto;
- suporte à preferência de redução de movimento.

## Responsividade

A interface foi desenvolvida para se adaptar a diferentes tamanhos de tela, permitindo a utilização do site em computadores, tablets e dispositivos móveis.

## Otimização

As imagens utilizadas no projeto foram otimizadas para o formato WebP e foram disponibilizadas versões responsivas quando necessário.

Também foram utilizados recursos como:

- `srcset`;
- `sizes`;
- `loading="lazy"` para imagens que não são prioritárias;
- `width` e `height` nas imagens;
- carregamento prioritário para a imagem principal.

O projeto utiliza o Vite para gerar uma versão otimizada para produção.

## Como executar o projeto

### Pré-requisitos

É necessário ter instalado:

- [Node.js](https://nodejs.org/)
- npm

### Instalação

Clone o repositório:

```bash
git clone https://github.com/wandersonSF/Projeto-Recode.git
```

Entre na pasta do projeto:

```bash
cd Projeto-Recode
```

Instale as dependências:

```bash
npm install
```

### Desenvolvimento

Execute o servidor de desenvolvimento:

```bash
npm run dev
```

O Vite fornecerá uma URL local para acessar a aplicação pelo navegador.

### Build de produção

Para gerar os arquivos de produção:

```bash
npm run build
```

Os arquivos serão gerados no diretório:

```text
dist/
```

### Preview da versão de produção

Para testar localmente os arquivos gerados pelo build:

```bash
npm run preview
```

## Deploy

O projeto está configurado para publicação na **Vercel**, integrada ao repositório GitHub.

Configuração utilizada:

```text
Plataforma: Vercel
Repositório: wandersonSF/Projeto-Recode
Branch de produção: main
Framework: Vite
Install Command: npm install
Build Command: npm run build
Output Directory: dist
```

O fluxo de publicação funciona da seguinte maneira:

```text
Alteração no código
        ↓
Git commit
        ↓
Git push
        ↓
GitHub — main
        ↓
Vercel
        ↓
npm install
        ↓
npm run build
        ↓
dist/
        ↓
Deploy de produção
```

Após o envio de alterações para a branch `main`, a Vercel realiza automaticamente um novo processo de build e deploy.

## Controle de versão

O projeto utiliza **Git** e **GitHub** para controle e versionamento do código-fonte.

Foi utilizada uma organização baseada em **GitFlow**, com branches para desenvolvimento, funcionalidades e correções.

Também foram utilizados commits seguindo o padrão **Conventional Commits**, facilitando a identificação das alterações realizadas no projeto.

### Versão atual

```text
v1.2.0
```

## Repositório

O código-fonte do projeto está disponível no GitHub:

https://github.com/wandersonSF/Projeto-Recode

## Licença

Projeto desenvolvido para fins acadêmicos.
