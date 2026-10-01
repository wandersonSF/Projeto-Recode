export function templateInicio() {
    return `
        <!-- Seção principal -->
        <section class="principal">

            <div class="principal__conteudo">

                <h1 class="principal__titulo">
                    Tecnologia que transforma vidas
                </h1>

                <p class="principal__texto">
                    A Recode capacita jovens e comunidades em situação
                    de vulnerabilidade digital, transformando tecnologia
                    em ferramentas reais de empregabilidade e cidadania.
                </p>

                <div class="principal__botoes">

                    <a href="#projetos" class="botao botao--secundario">
                        Projetos
                    </a>

                    <a href="#cadastro" class="botao botao--primario">
                        Faça Parte
                    </a>

                </div>

            </div>

            <div class="principal__imagem">

                <img
                    src="../img/jovens-estudando.webp"
                    alt="Professor voluntário e alunos da ONG Recode sorrindo para a foto em uma sala de informática"
                >

            </div>

        </section>


        <!-- Seção de apresentação -->
        <section class="apresentacao">

            <div class="container">

                <h2 class="titulo-secao titulo-secao--claro">
                    Mais do que inclusão digital, criamos oportunidades.
                </h2>

                <div class="apresentacao__video">

                    <iframe
                        src="https://www.youtube.com/embed/LGX3h0L7ZXs?si=8DPAxohWSe_YKLcT"
                        title="Vídeo de apresentação da Recode"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerpolicy="strict-origin-when-cross-origin"
                        allowfullscreen>
                    </iframe>

                </div>

                <div class="apresentacao__texto">

                    <p>
                        A Recode é uma organização social que há anos
                        democratiza o acesso ao universo digital e à
                        programação. Acreditamos que toda pessoa,
                        independentemente de sua origem, tem o potencial
                        de se tornar protagonista de sua própria história
                        e agente de transformação em sua comunidade.
                    </p>

                    <p>
                        <strong>Objetivo:</strong>
                        Reduzir a desigualdade social através da
                        capacitação em tecnologia, estimulando o
                        pensamento crítico, a empregabilidade e o
                        empreendedorismo.
                    </p>

                </div>

            </div>

        </section>


        <!-- Seção de metodologia -->
        <section class="metodologia">

            <div class="container">

                <h2 class="titulo-secao">
                    Como transformamos o futuro na prática
                </h2>

                <ul class="metodologia__lista">

                    <li class="metodologia__item">

                        <div class="metodologia__icone">
                            ✓
                        </div>

                        <h3>
                            Capacitação em Tecnologia
                        </h3>

                        <p>
                            Cursos gratuitos de programação, cidadania
                            digital e ferramentas de mercado para jovens.
                        </p>

                    </li>


                    <li class="metodologia__item">

                        <div class="metodologia__icone">
                            ✓
                        </div>

                        <h3>
                            Estímulo ao Empreendedorismo
                        </h3>

                        <p>
                            Formação focada em dar autonomia para que
                            os alunos criem seus próprios negócios ou
                            ingressem no mercado de trabalho.
                        </p>

                    </li>


                    <li class="metodologia__item">

                        <div class="metodologia__icone">
                            ✓
                        </div>

                        <h3>
                            Rede de Impacto
                        </h3>

                        <p>
                            Conexão entre alunos, mentores, empresas
                            parceiras e comunidades locais.
                        </p>

                    </li>

                </ul>

            </div>

        </section>


        <!-- Seção de apoio -->
        <section class="apoio">

            <div class="container">

                <h2 class="titulo-secao titulo-secao--claro">
                    O futuro digital de milhares de pessoas depende de você
                </h2>

                <h3 class="apoio__subtitulo">
                    Existem várias formas de fazer parte dessa rede de
                    transformação. Escolha a sua:
                </h3>


                <div class="apoio__cartoes">

                    <!-- Apoiador -->
                    <article class="apoio__cartao">

                        <h3>
                            Seja um Apoiador Mensal
                        </h3>

                        <p>
                            Com uma contribuição recorrente, você nos ajuda
                            a manter as turmas ativas e expandir nosso
                            alcance para novas comunidades.
                        </p>

                        <a href="https://recode.org.br/seja-um-apoiador/" target="_blank"
                    rel="noopener noreferrer" class="botao botao--apoio">
                            Apoiar com Doação
                        </a>

                    </article>


                    <!-- Voluntário -->
                    <article class="apoio__cartao">

                        <h3>
                            Seja um Voluntário ou Mentor
                        </h3>

                        <p>
                            Compartilhe seu conhecimento técnico ou sua
                            experiência profissional para guiar nossos
                            alunos rumo ao mercado de trabalho.
                        </p>

                        <a href="#cadastro" class="botao botao--apoio">
                            Quero Ser Voluntário
                        </a>

                    </article>


                    <!-- Empresa -->
                    <article class="apoio__cartao">

                        <h3>
                            Leve a Recode para sua Empresa
                        </h3>

                        <p>
                            Descubra como sua marca pode patrocinar projetos,
                            contratar talentos formados por nós ou engajar
                            colaboradores.
                        </p>

                        <a href="https://recode.org.br/ceds/" target="_blank" rel="noopener noreferrer" class="botao botao--apoio">
                            Seja uma Empresa Parceira
                        </a>

                    </article>

                </div>

            </div>

        </section>
    `;
}

export function templateProjetos() {
    return `
                <!-- Introdução -->
        <section class="projetos-introducao">

            <div class="projetos-introducao__conteudo">

                    <div class="projetos-introducao__texto">

                        <span class="projetos-introducao__destaque">
                            Nossos projetos
                        </span>

                        <h1 class="projetos-introducao__titulo">
                            Tecnologia que transforma vidas e oportunidades.
                        </h1>

                        <p class="projetos-introducao__descricao">
                            Conheça iniciativas que levam educação, tecnologia
                            e novas oportunidades para pessoas e comunidades
                            em diferentes contextos.
                        </p>

                        <a href="cadastro.html" class="botao botao--primario">
                            Faça parte
                        </a>

                    </div>

                    <div class="projetos-introducao__chamada">

                        <h2>
                            Projetos que ajudam a reprogramar futuros
                        </h2>

                        <p>
                            Da programação à inteligência artificial, nossas
                            iniciativas utilizam a tecnologia como ferramenta
                            de transformação social, educação e desenvolvimento
                            profissional.
                        </p>

                    </div>

            </div>

        </section>


        <!-- Projetos -->
        <section class="lista-projetos">

                <div class="lista-projetos__cabecalho">

                    <span class="lista-projetos__destaque">
                        Conheça nossas iniciativas
                    </span>

                    <h2 class="titulo-secao titulo-secao--claro">
                        Projetos realizados pela Recode
                    </h2>

                </div>

            <div class="container">


                <div class="lista-projetos__cartoes">

                    <!-- Movimento Comunicadoras Indígenas -->
                    <article class="projeto">

                        <figure class="projeto__imagem">

                            <a
                                href="https://recode.org.br/comunicadoras-indigenas/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img
                                    src="../img/movimento-comunicadoras-indigenas.webp"
                                    alt="Ilustração relacionada ao Movimento Comunicadoras Indígenas"
                                >
                            </a>

                            <figcaption class="projeto__status projeto__status--andamento">
                                Em andamento
                            </figcaption>

                        </figure>

                        <div class="projeto__conteudo">

                            <h3 class="projeto__titulo">
                                Movimento Comunicadoras Indígenas
                            </h3>

                            <p class="projeto__descricao">
                                Iniciativa realizada em parceria com a
                                L'Oréal para capacitar mulheres indígenas
                                em ferramentas digitais e produção de conteúdo.
                            </p>

                            <a
                                href="https://recode.org.br/comunicadoras-indigenas/"
                                target="_blank"
                                rel="noopener noreferrer"
                                class="projeto__link"
                            >
                                Conheça o projeto
                                <span aria-hidden="true">→</span>
                            </a>

                        </div>

                    </article>


                    <!-- impactAI -->
                    <article class="projeto">

                        <figure class="projeto__imagem">

                            <a
                                href="https://recode.org.br/trilha-de-inteligencia-artificial-generativa-impactai/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img
                                    src="../img/inpact-ai.webp"
                                    alt="Ilustração relacionada ao projeto impactAI"
                                >
                            </a>

                            <figcaption class="projeto__status projeto__status--andamento">
                                Em andamento
                            </figcaption>

                        </figure>

                        <div class="projeto__conteudo">

                            <h3 class="projeto__titulo">
                                impactAI
                            </h3>

                            <p class="projeto__descricao">
                                Formação em inteligência artificial generativa
                                voltada principalmente para pessoas de baixa
                                renda e em situação de vulnerabilidade social.
                            </p>

                            <a
                                href="https://recode.org.br/trilha-de-inteligencia-artificial-generativa-impactai/"
                                target="_blank"
                                rel="noopener noreferrer"
                                class="projeto__link"
                            >
                                Conheça o projeto
                                <span aria-hidden="true">→</span>
                            </a>

                        </div>

                    </article>


                    <!-- Recode Pro Aldeia -->
                    <article class="projeto">

                        <figure class="projeto__imagem">

                            <a
                                href="https://recode.org.br/aldeia/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img
                                    src="../img/recode-pro-aldeia.webp" srcset="../img/recode-pro-aldeia-400w.webp 400w, ../img/recode-pro-aldeia-600w.webp 600w" sizes="(max-width: 768px) 100vw, 600px"
                                    alt="Ilustração relacionada ao projeto Recode Pro Aldeia"
                                 width="700" height="700" loading="eager" fetchpriority="high">
                            </a>

                            <figcaption class="projeto__status projeto__status--realizado">
                                Realizado
                            </figcaption>

                        </figure>

                        <div class="projeto__conteudo">

                            <h3 class="projeto__titulo">
                                Recode Pro Aldeia
                            </h3>

                            <p class="projeto__descricao">
                                Iniciativa gratuita de formação em programação
                                full stack destinada a representantes dos
                                povos indígenas.
                            </p>

                            <a
                                href="https://recode.org.br/aldeia/"
                                target="_blank"
                                rel="noopener noreferrer"
                                class="projeto__link"
                            >
                                Conheça o projeto
                                <span aria-hidden="true">→</span>
                            </a>

                        </div>

                    </article>


                    <!-- Estação Hack -->
                    <article class="projeto">

                        <figure class="projeto__imagem">

                            <a
                                href="https://recode.org.br/estacao-hack/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img
                                    src="../img/estacao-hack.webp" srcset="../img/estacao-hack-400w.webp 400w, ../img/estacao-hack-600w.webp 600w" sizes="(max-width: 768px) 100vw, 600px"
                                    alt="Ilustração relacionada ao projeto Estação Hack"
                                 width="700" height="700" loading="eager" fetchpriority="high">
                            </a>

                            <figcaption class="projeto__status projeto__status--realizado">
                                Realizado
                            </figcaption>

                        </figure>

                        <div class="projeto__conteudo">

                            <h3 class="projeto__titulo">
                                Estação Hack
                            </h3>

                            <p class="projeto__descricao">
                                Parceria entre Recode e Meta que promoveu
                                formações presenciais relacionadas à
                                tecnologia em São Paulo.
                            </p>

                            <a
                                href="https://recode.org.br/estacao-hack/"
                                target="_blank"
                                rel="noopener noreferrer"
                                class="projeto__link"
                            >
                                Conheça o projeto
                                <span aria-hidden="true">→</span>
                            </a>

                        </div>

                    </article>


                    <!-- Games4Good -->
                    <article class="projeto">

                        <figure class="projeto__imagem">

                            <a
                                href="https://recode.org.br/games4good"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img
                                    src="../img/games4good.webp" srcset="../img/games4good-400w.webp 400w, ../img/games4good-600w.webp 600w" sizes="(max-width: 768px) 100vw, 600px"
                                    alt="Ilustração relacionada ao projeto Games4Good"
                                 width="700" height="700" loading="eager" fetchpriority="high">
                            </a>

                            <figcaption class="projeto__status projeto__status--realizado">
                                Realizado
                            </figcaption>

                        </figure>

                        <div class="projeto__conteudo">

                            <h3 class="projeto__titulo">
                                Games4Good
                            </h3>

                            <p class="projeto__descricao">
                                Iniciativa realizada pela Recode e Meta para
                                pessoas interessadas em entrar no universo
                                dos games e criar jogos com propósito.
                            </p>

                            <a
                                href="https://recode.org.br/games4good"
                                target="_blank"
                                rel="noopener noreferrer"
                                class="projeto__link"
                            >
                                Conheça o projeto
                                <span aria-hidden="true">→</span>
                            </a>

                        </div>

                    </article>


                    <!-- Recode Bibliotecas -->
                    <article class="projeto">

                        <figure class="projeto__imagem">

                            <a
                                href="https://recode.org.br/bibliotecas-2/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img
                                    src="../img/recode-bibliotecas.webp" srcset="../img/recode-bibliotecas-400w.webp 400w, ../img/recode-bibliotecas-600w.webp 600w" sizes="(max-width: 768px) 100vw, 600px"
                                    alt="Ilustração relacionada ao projeto Recode Bibliotecas"
                                 width="700" height="700" loading="eager" fetchpriority="high">
                            </a>

                            <figcaption class="projeto__status projeto__status--realizado">
                                Realizado
                            </figcaption>

                        </figure>

                        <div class="projeto__conteudo">

                            <h3 class="projeto__titulo">
                                Recode Bibliotecas
                            </h3>

                            <p class="projeto__descricao">
                                Programa nacional que utiliza bibliotecas
                                como espaços de transformação social e
                                digital, fortalecendo o protagonismo das
                                comunidades.
                            </p>

                            <a
                                href="https://recode.org.br/bibliotecas-2/"
                                target="_blank"
                                rel="noopener noreferrer"
                                class="projeto__link"
                            >
                                Conheça o projeto
                                <span aria-hidden="true">→</span>
                            </a>

                        </div>

                    </article>

                </div>

            </div>

        </section>


        <!-- Chamada final -->
        <section class="apoio">

            <div class="container">

                

                    <h2 class="titulo-secao titulo-secao--claro">
                        Reprograme o futuro com a gente.
                    </h2>

                    <p class="apoio__subtitulo">
                        Seja aluno, voluntário, organização parceira ou
                        empresa. Existem diferentes maneiras de fazer parte
                        dessa transformação.
                    </p>

                    <div class="botao--centralizado">
                        
                        <a href="cadastro.html" class="botao botao--apoio">
                        Quero participar
                    </a>

                    </div>

                    

                

            </div>

        </section>
    `;
}

export function templateCadastro() {
    return `
        <!-- Seção de cadastro -->
        <section class="cadastro">

            <div class="container">

                <div class="cadastro__cabecalho">

                    <span class="cadastro__destaque">
                        Faça parte da Recode
                    </span>

                    <h1 class="cadastro__titulo">
                        Crie sua Conta
                    </h1>

                </div>


                <!-- Formulário -->
                <form class="formulario">

                    <div id="cadastro-concluido" class="cadastro__sucesso">

                        <div class="cadastro__sucesso-conteudo">

                            <span class="cadastro__sucesso-icone" aria-hidden="true">
                                ✓
                            </span>

                            <h2 class="cadastro__sucesso-titulo">
                                Cadastro concluído!
                            </h2>

                            <p class="cadastro__sucesso-texto">
                                Seu cadastro foi realizado com sucesso.
                            </p>

                            <a href="index.html" class="botao botao--primario">
                                Voltar para o início
                            </a>

                        </div>

                    </div>

                    <!-- Dados Pessoais -->
                    <fieldset class="formulario__grupo">

                        <legend class="formulario__legenda">
                            Dados Pessoais
                        </legend>

                        <div class="formulario__campos">

                            <div class="formulario__campo">
                                <label for="nome">
                                    Nome:
                                </label>

                                <input
                                    type="text"
                                    id="nome"
                                    name="nome"
                                    autocomplete="given-name"
                                    required
                                >
                            </div>


                            <div class="formulario__campo">
                                <label for="sobrenome">
                                    Sobrenome:
                                </label>

                                <input
                                    type="text"
                                    id="sobrenome"
                                    name="sobrenome"
                                    autocomplete="family-name"
                                    required
                                >
                            </div>


                            <div class="formulario__campo formulario__campo--inteiro">
                                <label for="cpf">
                                    CPF:
                                </label>

                                <input
                                    type="text"
                                    id="cpf"
                                    name="cpf"
                                    placeholder="000.000.000-00"
                                    pattern="[0-9]{3}\.[0-9]{3}\.[0-9]{3}-[0-9]{2}"
                                    autocomplete="tax-id"
                                    required
                                >
                            </div>

                        </div>

                    </fieldset>


                    <!-- Contato e Endereço -->
                    <fieldset class="formulario__grupo">

                        <legend class="formulario__legenda">
                            Contato e Endereço
                        </legend>

                        <div class="formulario__campos">

                            <div class="formulario__campo formulario__campo--inteiro">
                                <label for="email">
                                    E-mail:
                                </label>

                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    autocomplete="email"
                                    required
                                >
                            </div>


                            <div class="formulario__campo">
                                <label for="telefone">
                                    Telefone:
                                </label>

                                <input
                                    type="tel"
                                    id="telefone"
                                    name="telefone"
                                    placeholder="(DDD) Telefone"
                                    pattern="\([0-9]{2}\)[0-9]{4,5}-[0-9}{4}"
                                    autocomplete="tel"
                                    required
                                >
                            </div>


                            <div class="formulario__campo">
                                <label for="cep">
                                    CEP:
                                </label>

                                <input
                                    type="text"
                                    id="cep"
                                    name="cep"
                                    placeholder="00000-000"
                                    pattern="[0-9]{5}-[0-9]{3}"
                                    autocomplete="postal-code"
                                    required
                                >
                            </div>


                            <div class="formulario__campo formulario__campo--inteiro">
                                <label for="endereco">
                                    Endereço:
                                </label>

                                <input
                                    type="text"
                                    id="endereco"
                                    name="endereco"
                                    autocomplete="street-address"
                                    required
                                >
                            </div>

                        </div>

                    </fieldset>


                    <!-- Segurança -->
                    <fieldset class="formulario__grupo">

                        <legend class="formulario__legenda">
                            Segurança
                        </legend>

                        <div class="formulario__campos">

                            <div class="formulario__campo">
                                <label for="senha">
                                    Senha:
                                </label>

                                <input
                                    type="password"
                                    id="senha"
                                    name="senha"
                                    placeholder="Mínimo de 6 caracteres"
                                    minlength="6"
                                    autocomplete="new-password"
                                    required
                                >
                            </div>


                            <div class="formulario__campo">
                                <label for="confirmar-senha">
                                    Confirmar Senha:
                                </label>

                                <input
                                    type="password"
                                    id="confirmar-senha"
                                    name="confirmar_senha"
                                    placeholder="Mínimo de 6 caracteres"
                                    minlength="6"
                                    autocomplete="new-password"
                                    required
                                >
                            </div>

                        </div>

                    </fieldset>


                    <div class="formulario__acoes">

                        <button type="submit" class="botao botao--primario">
                            Cadastrar
                        </button>

                    </div>

                </form>

            </div>

        </section>
    `;
}

export function templateConta(dados) {
    return `
        <section class="conta">
            <div class="container">
                <div class="conta__cabecalho">
                    <span class="conta__destaque">Minha conta</span>

                    <h1 class="conta__titulo">
                        Dados cadastrais
                    </h1>
                </div>

                <div class="conta__dados">
                    <p><strong>Nome:</strong> ${dados.nome}</p>
                    <p><strong>Sobrenome:</strong> ${dados.sobrenome}</p>
                    <p><strong>CPF:</strong> ${dados.cpf}</p>
                    <p><strong>E-mail:</strong> ${dados.email}</p>
                    <p><strong>Telefone:</strong> ${dados.telefone}</p>
                    <p><strong>CEP:</strong> ${dados.cep}</p>
                    <p><strong>Endereço:</strong> ${dados.endereco}</p>
                </div>

                <button type="button" class="conta__sair">
                    Sair da conta
                </button>
            </div>
        </section>
    `;
}