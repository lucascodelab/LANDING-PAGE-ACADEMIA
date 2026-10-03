# Landing Page para Academia

Projeto conceitual de uma landing page para uma academia.

A ideia foi criar uma interface moderna, responsiva e com foco na experiência do usuário, indo além de uma página apenas visual. O projeto conta com apresentação da academia, modalidades interativas, galeria com lightbox, planos, depoimentos e formulário de contato com validação e diferentes estados de interação.

## Sobre o projeto

Neste projeto trabalhei principalmente a parte visual e a interação da página.

A interface foi pensada para apresentar a academia de forma clara, valorizar as imagens do espaço e dos treinos e deixar a navegação simples tanto no computador quanto no celular.

Também quis explorar o JavaScript criando modal de detalhes das modalidades, galeria com lightbox, contadores animados, seleção de planos com feedback, botão voltar ao topo e validação dos dados do formulário antes do envio.

## Funcionalidades

* Hero section
* Navbar fixa com scrollspy
* Navegação suave
* Menu mobile hambúrguer
* Botão voltar ao topo
* Scroll reveal
* Contadores animados
* Cards de modalidades
* Modal com detalhes das modalidades
* Galeria da estrutura
* Lightbox com ampliação das imagens
* Seleção de planos
* Feedback com toast
* Formulário de contato
* Máscara de telefone
* Validação dos campos
* Indicação visual de erros
* Feedback visual das ações
* Skip-link para o conteúdo
* Layout responsivo
* Animações e transições
* Suporte a `prefers-reduced-motion`
* Navegação por teclado
* Fechamento com `ESC`
* Restauração do foco
* Recursos de acessibilidade

## Tecnologias

* HTML5
* CSS3
* JavaScript
* Git
* GitHub

O projeto foi desenvolvido utilizando JavaScript puro, sem frameworks.

## Design e responsividade

A interface utiliza uma estética escura e esportiva, com detalhes em verde-limão e bastante contraste para destacar os títulos, as fotos e as principais ações.

A página foi adaptada para diferentes tamanhos de tela, mantendo uma experiência consistente em desktop, tablet e dispositivos móveis.

Também foram considerados aspectos como espaçamento, hierarquia de informações, contraste, estados de interação, foco dos elementos e acessibilidade.

## Testes

Depois do desenvolvimento, foi realizada uma etapa de testes para verificar o funcionamento das principais partes da aplicação.

Foram testados:

* Abertura do modal de modalidades
* Abertura do lightbox da galeria
* Navegação por teclado no modal e no lightbox
* Contadores animados
* Seleção de planos
* Exibição do toast
* Validação do formulário
* `aria-invalid`
* Foco automático no primeiro erro
* Máscara de telefone
* Navegação por teclado
* Fechamento com `ESC`
* Restauração do foco
* Menu mobile
* Scrollspy da navbar
* Botão voltar ao topo
* Responsividade em diferentes resoluções
* Ausência de rolagem horizontal
* Carregamento das imagens
* Links internos
* IDs duplicados
* Preferência por movimento reduzido

A versão final foi revisada após os testes e os problemas encontrados durante esse processo foram corrigidos.

## Estrutura

```text
├── SLIDE/
├── DOCS/
│   └── IMAGENS.md
├── index.html
├── style.css
├── script.js
├── .gitignore
└── README.md
```

## Como executar

Clone o repositório:

```bash
git clone SEU_LINK_DO_GITHUB
```

Entre na pasta:

```bash
cd NOME_DO_PROJETO
```

Depois, basta abrir o arquivo `index.html` no navegador.

Também é possível executar um servidor local com Python:

```bash
python -m http.server 8000
```

Depois acesse:

```text
http://localhost:8000
```

## O que pratiquei neste projeto

Este projeto reuniu diferentes partes do desenvolvimento Front-end em uma única aplicação.

Principalmente:

* Estruturação de páginas com HTML semântico
* Organização de CSS
* Responsividade
* Manipulação do DOM
* Eventos em JavaScript
* IntersectionObserver para reveal e contadores
* Modal e lightbox acessíveis
* Validação de formulários
* Máscara de campos
* Acessibilidade
* Animações e transições
* Experiência do usuário
* Organização e revisão de código

Uma das partes mais trabalhadas foi a interação, justamente para transformar a página em algo mais próximo de uma aplicação real e não somente uma interface estática.

## Próximos passos

Algumas funcionalidades poderiam ser adicionadas em uma versão futura:

* Integração com backend
* Envio real do formulário
* Banco de dados
* Sistema de agendamento de visita
* Painel administrativo
* Integração com API
* Sistema de pagamento recorrente
* Área do aluno
* Autenticação de usuários

Essas funcionalidades não fazem parte da versão atual do projeto.

## Observação

Este é um projeto conceitual.

Os planos, preços, depoimentos, informações comerciais, endereço e demais dados apresentados na interface são fictícios.
