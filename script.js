'use strict';

const ENV = {
  WEB3FORMS_KEY: 'b4c44e12-1fbe-46c8-aff6-d45bd195025f',
  WHATSAPP_NUMBER: '5512987041679',
};

const translations = {
  pt: {
    navAbout: 'Sobre',
    navStacks: 'Stacks',
    navProjects: 'Projetos',
    navContact: 'Contato',
    heroGreeting: 'Olá, eu sou',
    heroCTAProjects: 'Ver Projetos',
    heroCTACurriculo: 'Currículo',
    aboutTag: 'whoami',
    aboutTitle: 'Sobre mim',
    aboutP1: 'Sou de Taubaté e atualmente curso Análise e Desenvolvimento de Sistemas no SENAI Félix Guisard. Tenho grande interesse por tecnologia e busco constantemente ampliar meus conhecimentos, sempre com foco em compreender de forma aprofundada como as soluções são construídas.',
    aboutP2: 'Tenho perfil proativo, gosto de aprender na prática e me envolver em projetos que me desafiem a evoluir. Valorizo organização, clareza e consistência em tudo o que faço, e estou sempre em busca de crescimento pessoal e profissional, construindo uma base sólida para minha carreira como desenvolvedor Full Stack.',
    statStack: 'Stack',
    statIdea: 'orientado a detalhe',
    statGit: 'do front ao back',
    stacksTag: 'tech_stack',
    stacksTitle: 'Tecnologias',
    projectsTag: './projects',
    projectsTitle: 'Projetos',
    proj1Desc: 'Plataforma de nutrição inteligente com IA integrada para geração de planos alimentares personalizados.',
    proj2Desc: 'E-commerce de calçados com listagem de produtos, carrinho de compras e layout responsivo.',
    proj3Desc: 'Recriação do clássico Super Mario com movimentação, colisões e animações — tudo no browser, sem frameworks.',
    comingSoon: 'Em breve',
    contactTag: 'get_in_touch',
    contactTitle: 'Contato',
    formName: 'Nome',
    formNamePh: 'Seu nome',
    formEmail: 'E-mail',
    formEmailPh: 'seu@email.com',
    formMsg: 'Mensagem',
    formMsgPh: 'Sua mensagem...',
    formSend: 'Enviar mensagem',
    socialTitle: 'Redes sociais',
    whatsappTitle: 'Fale no WhatsApp',
    qrHint: 'Escaneie para conversar',
    curriculo: 'Currículo',
    footerCopy: 'Feito com ♥ por Pedro Lombardi · 2026',
  },
  en: {
    navAbout: 'About',
    navStacks: 'Stacks',
    navProjects: 'Projects',
    navContact: 'Contact',
    heroGreeting: "Hi, I'm",
    heroCTAProjects: 'View Projects',
    heroCTACurriculo: 'CV',
    aboutTag: 'whoami',
    aboutTitle: 'About me',
    aboutP1: "I'm from Taubaté and currently studying Systems Analysis and Development at SENAI Félix Guisard. I have a strong interest in technology and constantly seek to expand my knowledge, always focused on deeply understanding how solutions are built.",
    aboutP2: "I'm proactive, enjoy learning by doing and getting involved in projects that challenge me to grow. I value organisation, clarity and consistency in everything I do, and I'm always pursuing personal and professional development — building a solid foundation for my career as a Full Stack developer.",
    statStack: 'Stack',
    statIdea: 'detail-oriented',
    statGit: 'front to back',
    stacksTag: 'tech_stack',
    stacksTitle: 'Technologies',
    projectsTag: './projects',
    projectsTitle: 'Projects',
    proj1Desc: 'Intelligent nutrition platform with integrated AI for generating personalised meal plans.',
    proj2Desc: 'Footwear e-commerce with product listing, shopping cart and responsive layout.',
    proj3Desc: 'Classic Super Mario recreation with movement, collisions and animations — all in the browser, no frameworks.',
    comingSoon: 'Coming soon',
    contactTag: 'get_in_touch',
    contactTitle: 'Contact',
    formName: 'Name',
    formNamePh: 'Your name',
    formEmail: 'E-mail',
    formEmailPh: 'you@email.com',
    formMsg: 'Message',
    formMsgPh: 'Your message...',
    formSend: 'Send message',
    socialTitle: 'Social media',
    whatsappTitle: 'Chat on WhatsApp',
    qrHint: 'Scan to chat',
    curriculo: 'CV',
    footerCopy: 'Made with ♥ by Pedro Lombardi · 2026',
  }
};

const typedSequences = {
  pt: [
    'Desenvolvedor Full Stack',
    'Front-end e back-end',
    'Foco em aplicações web',
    'Construindo soluções digitais'
  ],
  en: [
    'Full Stack Developer',
    'Front-end & back-end',
    'Focused on web applications',
    'Building digital solutions'
  ],
};

let currentLang = localStorage.getItem('pl-lang') || 'pt';
let currentTheme = localStorage.getItem('pl-theme') || 'dark';
let typedTimeout = null;
let typedIndex = 0;
let charIndex = 0;
let isDeleting = false;

const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

function applyTheme(theme) {
  currentTheme = theme;
  document.documentElement.setAttribute('data-theme', theme);
  const icon = $('#themeIcon');
  if (icon) {
    icon.className = theme === 'dark' ? 'fa-solid fa-moon' : 'fa-solid fa-sun';
  }
  localStorage.setItem('pl-theme', theme);
}

$('#themeToggle').addEventListener('click', () => {
  applyTheme(currentTheme === 'dark' ? 'light' : 'dark');
});

function applyLang(lang) {
  currentLang = lang;
  document.documentElement.setAttribute('data-lang', lang);

  $$('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang][key] !== undefined) {
      el.textContent = translations[lang][key];
    }
  });

  $$('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (translations[lang][key] !== undefined) {
      el.setAttribute('placeholder', translations[lang][key]);
    }
  });

  const flag = $('#langFlag');
  const label = $('#langLabel');
  if (lang === 'pt') {
    if (flag) flag.textContent = '🇺🇸';
    if (label) label.textContent = 'EN';
  } else {
    if (flag) flag.textContent = '🇧🇷';
    if (label) label.textContent = 'PT';
  }

  const footerCopy = $('[data-i18n="footerCopy"]');
  if (footerCopy) {
    footerCopy.innerHTML = translations[lang].footerCopy.replace('♥', '<span class="heart">♥</span>');
  }

  localStorage.setItem('pl-lang', lang);

  typedIndex = 0;
  charIndex = 0;
  isDeleting = false;
  clearTimeout(typedTimeout);
  startTyped();
}

$('#langToggle').addEventListener('click', () => {
  applyLang(currentLang === 'pt' ? 'en' : 'pt');
});

function startTyped() {
  const el = $('#heroTyped');
  if (!el) return;

  const sequence = typedSequences[currentLang];
  const currentWord = sequence[typedIndex % sequence.length];

  if (isDeleting) {
    charIndex--;
  } else {
    charIndex++;
  }

  el.textContent = currentWord.slice(0, charIndex);

  let delay = isDeleting ? 50 : 90;

  if (!isDeleting && charIndex === currentWord.length) {
    delay = 1800;
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    typedIndex++;
    delay = 300;
  }

  typedTimeout = setTimeout(startTyped, delay);
}

const navbar = $('#navbar');
const sections = $$('section[id]');
const navLinks = $$('.nav-link');

function onScroll() {
  if (window.scrollY > 20) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }

  let current = '';
  sections.forEach(sec => {
    const top = sec.offsetTop - 100;
    if (window.scrollY >= top) current = sec.id;
  });
  navLinks.forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
  });
}

window.addEventListener('scroll', onScroll, { passive: true });

const hamburger = $('#hamburger');
const navLinksEl = $('#navLinks');

hamburger.addEventListener('click', () => {
  const isOpen = navLinksEl.classList.toggle('open');
  hamburger.classList.toggle('open', isOpen);
  hamburger.setAttribute('aria-expanded', isOpen);
});

navLinksEl.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    navLinksEl.classList.remove('open');
    hamburger.classList.remove('open');
    hamburger.setAttribute('aria-expanded', false);
  });
});

const heroBg = $('#heroBg');

function onParallax() {
  if (!heroBg) return;
  const scrollY = window.scrollY;
  heroBg.style.transform = `translateY(${scrollY * 0.3}px)`;
}

window.addEventListener('scroll', onParallax, { passive: true });

(function initParticles() {
  const canvas = $('#particleCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let W, H, particles = [];
  const COUNT = 55;
  const RED = '230,57,70';

  function resize() {
    W = canvas.width = window.innerWidth;
    H = canvas.height = canvas.parentElement.offsetHeight;
  }

  class Particle {
    constructor() { this.reset(); }
    reset() {
      this.x = Math.random() * W;
      this.y = Math.random() * H;
      this.r = Math.random() * 1.5 + 0.4;
      this.vx = (Math.random() - 0.5) * 0.35;
      this.vy = (Math.random() - 0.5) * 0.35;
      this.a = Math.random() * 0.4 + 0.1;
    }
    update() {
      this.x += this.vx;
      this.y += this.vy;
      if (this.x < 0 || this.x > W) this.vx *= -1;
      if (this.y < 0 || this.y > H) this.vy *= -1;
    }
    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${RED},${this.a})`;
      ctx.fill();
    }
  }

  function drawLines() {
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 120) {
          const alpha = (1 - dist / 120) * 0.18;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(${RED},${alpha})`;
          ctx.lineWidth = 0.6;
          ctx.stroke();
        }
      }
    }
  }

  function loop() {
    ctx.clearRect(0, 0, W, H);
    particles.forEach(p => { p.update(); p.draw(); });
    drawLines();
    requestAnimationFrame(loop);
  }

  window.addEventListener('resize', () => { resize(); });
  resize();
  particles = Array.from({ length: COUNT }, () => new Particle());
  loop();
})();

function initFadeIn() {
  const targets = $$('.fade-in');
  if (!targets.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');

        if (entry.target.classList.contains('stacks-grid')) {
          $$('.stack-card', entry.target).forEach((card, i) => {
            card.style.transitionDelay = `${i * 0.05}s`;
            card.classList.add('visible');
          });
        }

        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });

  targets.forEach(t => observer.observe(t));
}

function initQRCode() {
  const container = $('#qrcode');
  if (!container || typeof QRCode === 'undefined') return;

  const whatsappURL = `https://wa.me/${ENV.WHATSAPP_NUMBER}`;

  container.innerHTML = '';

  try {
    new QRCode(container, {
      text: whatsappURL,
      width: 140,
      height: 140,
      colorDark: '#111111',
      colorLight: '#ffffff',
      correctLevel: QRCode.CorrectLevel.M,
    });
  } catch (e) {
    container.textContent = whatsappURL;
  }
}

function initForm() {
  const form = $('#contactForm');
  const btn = $('#formSubmitBtn');
  const feedback = $('#formFeedback');
  if (!form) return;

  form.addEventListener('submit', async e => {
    e.preventDefault();

    const name = $('#formName').value.trim();
    const email = $('#formEmail').value.trim();
    const message = $('#formMsg').value.trim();

    if (!name || !email || !message) {
      feedback.textContent = currentLang === 'pt'
        ? '⚠ Preencha todos os campos.'
        : '⚠ Please fill in all fields.';
      feedback.className = 'form-feedback error';
      return;
    }

    btn.disabled = true;
    btn.textContent = currentLang === 'pt' ? 'Enviando...' : 'Sending...';
    feedback.textContent = '';
    feedback.className = 'form-feedback';

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: ENV.WEB3FORMS_KEY,
          name,
          email,
          message,
        }),
      });

      const data = await res.json();

      if (data.success) {
        feedback.textContent = currentLang === 'pt'
          ? '✓ Mensagem enviada! Em breve entro em contato.'
          : "✓ Message sent! I'll get back to you soon.";
        feedback.className = 'form-feedback success';
        form.reset();
      } else {
        throw new Error(data.message);
      }

    } catch (err) {
      console.error('Web3Forms error:', err);
      feedback.textContent = currentLang === 'pt'
        ? '✗ Erro ao enviar. Tente novamente.'
        : '✗ Failed to send. Please try again.';
      feedback.className = 'form-feedback error';

    } finally {
      btn.disabled = false;
      btn.textContent = translations[currentLang].formSend;
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  applyTheme(currentTheme);
  applyLang(currentLang);
  initFadeIn();
  initQRCode();
  initForm();
  onScroll();
});
