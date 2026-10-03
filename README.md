# Academia — Landing Page Conceitual

<p align="center">
  <strong>Landing page premium, responsiva e acessível para uma academia contemporânea.</strong><br />
  HTML5 · CSS3 · JavaScript puro — sem frameworks, sem backend.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/HTML5-sem%C3%A2ntico-E34F26?style=flat-square&logo=html5&logoColor=white" alt="HTML5 semântico" />
  <img src="https://img.shields.io/badge/CSS3-puro-1572B6?style=flat-square&logo=css3&logoColor=white" alt="CSS3 puro" />
  <img src="https://img.shields.io/badge/JavaScript-puro-F7DF1E?style=flat-square&logo=javascript&logoColor=black" alt="JavaScript puro" />
  <img src="https://img.shields.io/badge/Responsivo-320px_%E2%86%92_1920px-C8F31D?style=flat-square&logoColor=black" alt="Responsivo de 320px a 1920px" />
  <img src="https://img.shields.io/badge/Acess%C3%ADvel-WCAG-0B0C0D?style=flat-square" alt="Foco em acessibilidade" />
</p>

> **Projeto conceitual.** Preços, depoimentos, endereço e dados de contato são **demonstrativos**, criados apenas para apresentação da interface. Sem marca comercial — a página representa uma academia moderna de forma genérica.

---

## Resultado

<p align="center">
  <img src="SLIDE/SLIDE 1.png" width="860" alt="Capa do projeto — landing page para academia com mockup do hero" />
</p>

### O projeto em 8 quadros

| | |
|:---:|:---:|
| <img src="SLIDE/SLIDE 2.png" width="420" alt="Slide do hero — Supere seu limite" /><br />**Hero** — primeira dobra de impacto | <img src="SLIDE/SLIDE 3.png" width="420" alt="Slide de modalidades — musculação, cardio, funcional e personal" /><br />**Modalidades** — cards com fotos reais |
| <img src="SLIDE/SLIDE 4.png" width="420" alt="Slide da estrutura — galeria em grid editorial" /><br />**Estrutura** — galeria com lightbox | <img src="SLIDE/SLIDE 5.png" width="420" alt="Slide de planos — básico, completo e premium" /><br />**Planos** — decisão facilitada |
| <img src="SLIDE/SLIDE 6.png" width="420" alt="Slide de responsividade — desktop, tablet e mobile" /><br />**Responsivo** — 320px → 1920px | <img src="SLIDE/SLIDE 7.png" width="420" alt="Slide de experiência — navbar, cards, planos, CTA e footer" /><br />**Experiência** — interface + interação |

<p align="center">
  <img src="SLIDE/SLIDE 8.png" width="860" alt="Slide final — precisa de uma landing page? Entre em contato" />
</p>

---

## Seções da página

| Seção | Destaque |
|---|---|
| **Hero** | “SUPERE SEU LIMITE.” + foto cinematográfica, botões e mini-indicadores 24H / Treino / Performance |
| **Academia** | “Mais que uma academia.” + foto, checklist e contadores (+20 áreas, 24H, +120 equipamentos) |
| **Modalidades** | Musculação, Cardio, Funcional e Treino Personalizado — cards com hover e modal de detalhes |
| **Estrutura** | Grid editorial (musculação, cardio, pesos livres, funcional, alongamento, vestiários) com zoom + lightbox |
| **Planos** | Básico R$ 79,90 · Completo R$ 109,90 (destaque) · Premium R$ 149,90 — valores demonstrativos |
| **Performance** | Contadores animados na viewport (+500 alunos, 24H, 100%) |
| **Depoimentos** | 3 relatos demonstrativos, só primeiro nome, sem fotos falsas |
| **CTA + Contato** | “Pronto para começar?” + formulário validado (nome, e-mail, telefone com máscara, mensagem) |
| **Footer** | “TREINO • FOCO • EVOLUÇÃO” + aviso de projeto conceitual |

## Funcionalidades

- Navbar fixa com scrollspy (`aria-current`) e menu hambúrguer (`aria-expanded`)
- Navegação suave, botão voltar ao topo, skip-link e foco visível
- Scroll reveal + animações de entrada (IntersectionObserver)
- Galeria com lightbox navegável por teclado (Enter / Espaço / Esc)
- Formulário com validação visual, máscara de telefone e feedback via `role="status"`
- Toast de confirmação nos botões de plano
- `prefers-reduced-motion` respeitado em todas as animações
- Zero overflow horizontal — testado em 320, 375, 390, 414, 768, 1024, 1280, 1440 e 1920px

## Identidade visual

- **Cores:** preto `#0B0C0D` · grafite `#141618` · branco · cinza · verde-limão `#C8F31D` (só em botões, detalhes e destaques)
- **Tipografia:** Archivo (títulos) + Inter (texto) via Google Fonts
- **Estética:** campanha esportiva premium — fotos grandes, contraste alto, espaçamento generoso, microinterações suaves

## Estrutura

```text
├── SLIDE/                # vitrine do projeto p/ Instagram (8 slides 1080×1350)
│   └── SLIDE 1.png … SLIDE 8.png
├── DOCS/
│   └── IMAGENS.md        # créditos das fotografias (Unsplash)
├── index.html
├── style.css
├── script.js
├── .gitignore
└── README.md
```

## Como usar

Abra o `index.html` direto no navegador ou sirva como site estático:

```bash
npx serve .
# ou
python -m http.server 8080
```

## Acessibilidade

- HTML semântico, hierarquia correta de headings, `alt` em todas as imagens
- Contraste AA nos textos · verde-limão usado como destaque, nunca como único meio de informação
- `aria-label`, `aria-expanded`, `aria-current`, `aria-live` onde aplicável
- Navegação completa por teclado + `prefers-reduced-motion`

## Créditos

Fotografias: Unsplash (uso demonstrativo) — ver `DOCS/IMAGENS.md`.

---

<p align="center"><strong>TREINO • FOCO • EVOLUÇÃO</strong></p>
<p align="center"><sub>Projeto conceitual. Informações apresentadas exclusivamente para demonstração da interface.</sub></p>
