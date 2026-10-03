(() => {
  'use strict';

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => [...c.querySelectorAll(s)];

  /* ---------- Ano ---------- */
  $('#year').textContent = new Date().getFullYear();

  /* ---------- Navbar scroll ---------- */
  const navbar = $('#navbar');
  const toTop = $('#toTop');
  const onScroll = () => {
    const y = window.scrollY;
    navbar.classList.toggle('scrolled', y > 24);
    toTop.hidden = y < 600;
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
  toTop.addEventListener('click', () => {
    if (prefersReduced) window.scrollTo(0, 0);
    else window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  /* ---------- Menu mobile ---------- */
  const menuBtn = $('#menuBtn');
  const nav = $('#nav');
  const navLinks = $$('.nav__link, .nav__cta', nav);

  const setMenu = (open) => {
    nav.classList.toggle('open', open);
    menuBtn.classList.toggle('open', open);
    menuBtn.setAttribute('aria-expanded', String(open));
    menuBtn.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
  };
  menuBtn.addEventListener('click', () => setMenu(!nav.classList.contains('open')));
  navLinks.forEach((a) => a.addEventListener('click', () => setMenu(false)));
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && nav.classList.contains('open')) {
      setMenu(false);
      menuBtn.focus();
    }
  });

  /* ---------- Scrollspy + aria-current ---------- */
  const sections = ['inicio', 'academia', 'modalidades', 'planos', 'estrutura', 'contato']
    .map((id) => document.getElementById(id))
    .filter(Boolean);
  const linkById = {};
  $$('.nav__link').forEach((a) => {
    linkById[a.getAttribute('href').slice(1)] = a;
  });
  const spy = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (!en.isIntersecting) return;
      $$('.nav__link').forEach((a) => a.removeAttribute('aria-current'));
      const link = linkById[en.target.id];
      if (link) link.setAttribute('aria-current', 'page');
    });
  }, { rootMargin: '-45% 0px -50% 0px' });
  sections.forEach((s) => spy.observe(s));

  /* ---------- Scroll reveal ---------- */
  const revealEls = $$('.reveal');
  if (prefersReduced || !('IntersectionObserver' in window)) {
    revealEls.forEach((el) => el.classList.add('visible'));
  } else {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting) {
          en.target.classList.add('visible');
          io.unobserve(en.target);
        }
      });
    }, { threshold: 0.12 });
    revealEls.forEach((el) => io.observe(el));
  }

  /* ---------- Contadores animados ---------- */
  const counters = $$('[data-count]');
  const animateCount = (el) => {
    const target = Number(el.dataset.count);
    const prefix = el.dataset.prefix || '';
    const suffix = el.dataset.suffix || '';
    if (prefersReduced) {
      el.textContent = `${prefix}${target}${suffix}`;
      return;
    }
    const dur = 1400;
    const t0 = performance.now();
    const tick = (t) => {
      const p = Math.min((t - t0) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = `${prefix}${Math.round(target * eased)}${suffix}`;
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };
  if ('IntersectionObserver' in window) {
    const cio = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting) {
          animateCount(en.target);
          cio.unobserve(en.target);
        }
      });
    }, { threshold: 0.5 });
    counters.forEach((c) => cio.observe(c));
  } else {
    counters.forEach(animateCount);
  }

  /* ---------- Toast ---------- */
  const toast = $('#toast');
  let toastTimer;
  const showToast = (msg) => {
    toast.textContent = msg;
    toast.hidden = false;
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => { toast.hidden = true; }, 3400);
  };

  /* ---------- Modal modalidades ---------- */
  const modalData = {
    musculacao: ['Musculação', 'Salão com estações guiadas, racks, halteres até 40 kg e progressão acompanhada pela equipe. Ideal para força e hipertrofia com segurança.'],
    cardio: ['Cardio', 'Esteiras, bikes verticais, elípticos e remo com controle de intensidade. Trabalhe condicionamento e gasto energético no seu ritmo.'],
    funcional: ['Funcional', 'Espaço livre com kettlebells, boxes, cordas e acessórios. Aulas e treinos livres focados em mobilidade, core e agilidade.'],
    personal: ['Treino Personalizado', 'Avaliação física completa, plano individual e sessões 1:1 com agendamento flexível. Para quem busca acompanhamento próximo.']
  };
  const modal = $('#infoModal');
  const modalTitle = $('#modalTitle');
  const modalText = $('#modalText');
  let lastFocus = null;

  const openModal = (key) => {
    const [t, d] = modalData[key] || ['Modalidade', ''];
    modalTitle.textContent = t;
    modalText.textContent = d;
    lastFocus = document.activeElement;
    modal.hidden = false;
    document.body.style.overflow = 'hidden';
    $('.modal__close', modal).focus();
  };
  const closeModal = () => {
    modal.hidden = true;
    document.body.style.overflow = '';
    if (lastFocus) lastFocus.focus();
  };
  $$('[data-modal]').forEach((b) => b.addEventListener('click', () => openModal(b.dataset.modal)));
  $$('[data-close]', modal).forEach((b) => b.addEventListener('click', closeModal));
  $$('[data-close-link]', modal).forEach((b) => b.addEventListener('click', closeModal));
  modal.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });

  /* ---------- Lightbox galeria ---------- */
  const lightbox = $('#lightbox');
  const lbImg = $('#lightboxImg');
  const lbCap = $('#lightboxCap');
  const openLightbox = (fig) => {
    const img = $('img', fig);
    lbImg.src = fig.dataset.full || img.src;
    lbImg.alt = img.alt;
    lbCap.textContent = $('figcaption', fig)?.textContent || '';
    lastFocus = document.activeElement;
    lightbox.hidden = false;
    document.body.style.overflow = 'hidden';
    $('[data-close]', lightbox).focus();
  };
  const closeLightbox = () => {
    lightbox.hidden = true;
    lbImg.removeAttribute('src');
    document.body.style.overflow = '';
    if (lastFocus) lastFocus.focus();
  };
  $$('#gallery .g').forEach((fig) => {
    fig.addEventListener('click', () => openLightbox(fig));
    fig.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openLightbox(fig);
      }
    });
  });
  $$('[data-close]', lightbox).forEach((b) => b.addEventListener('click', closeLightbox));
  lightbox.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeLightbox();
  });

  /* ---------- Botões de plano ---------- */
  $$('.plan-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      showToast(`Plano ${btn.dataset.plan} selecionado — fale com a equipe para ativar (demonstração).`);
      document.getElementById('contato').scrollIntoView({ behavior: prefersReduced ? 'auto' : 'smooth' });
    });
  });

  /* ---------- Formulário com validação ---------- */
  const form = $('#contactForm');
  const feedback = $('#formFeedback');
  const submitBtn = $('#submitBtn');

  const setError = (input, msg) => {
    const field = input.closest('.field');
    $('.field__error', field).textContent = msg || '';
    field.classList.toggle('invalid', Boolean(msg));
    input.setAttribute('aria-invalid', msg ? 'true' : 'false');
    return !msg;
  };

  const validate = () => {
    let ok = true;
    const nome = $('#nome');
    const email = $('#email');
    const tel = $('#telefone');
    const msg = $('#mensagem');

    ok = setError(nome, nome.value.trim().length >= 2 ? '' : 'Informe seu nome.') && ok;
    ok = setError(email, /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.value.trim()) ? '' : 'Informe um e-mail válido.') && ok;
    const digits = tel.value.replace(/\D/g, '');
    ok = setError(tel, digits.length >= 10 ? '' : 'Informe um telefone válido com DDD.') && ok;
    ok = setError(msg, msg.value.trim().length >= 10 ? '' : 'Escreva uma mensagem com pelo menos 10 caracteres.') && ok;
    return ok;
  };

  ['nome', 'email', 'telefone', 'mensagem'].forEach((id) => {
    document.getElementById(id).addEventListener('input', (e) => {
      if (e.target.closest('.field').classList.contains('invalid')) validate();
    });
  });

  // Máscara simples de telefone
  $('#telefone').addEventListener('input', (e) => {
    let d = e.target.value.replace(/\D/g, '').slice(0, 11);
    if (d.length > 6) e.target.value = `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`;
    else if (d.length > 2) e.target.value = `(${d.slice(0, 2)}) ${d.slice(2)}`;
    else e.target.value = d;
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    feedback.hidden = true;
    if (!validate()) {
      $('.field.invalid input, .field.invalid textarea')?.focus();
      showToast('Verifique os campos destacados e tente novamente.');
      return;
    }
    submitBtn.disabled = true;
    submitBtn.textContent = 'Enviando...';
    setTimeout(() => {
      submitBtn.disabled = false;
      submitBtn.textContent = 'Enviar mensagem';
      form.reset();
      feedback.textContent = 'Mensagem enviada com sucesso! Retornaremos em até 1 dia útil. (demonstração)';
      feedback.hidden = false;
      showToast('Mensagem enviada com sucesso!');
      feedback.focus?.();
    }, 900);
  });

  console.log('Landing academia inicializada — sem erros.');
})();
