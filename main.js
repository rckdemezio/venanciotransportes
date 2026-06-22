/**
 * VENÂNCIO TRANSPORTES - Lógica Principal
 * Contém interações de interface e animações de scroll.
 */

document.addEventListener('DOMContentLoaded', () => {
  /* ==========================================
     1. Header Scroll Effect
     ========================================== */
  const header = document.getElementById('header');
  
  if (header) {
    window.addEventListener('scroll', () => {
      // Adiciona sombra ao header quando rolar a página para baixo
      header.classList.toggle('scrolled', window.scrollY > 10);
    });
  }

  /* ==========================================
     2. Mobile Menu (Hamburger)
     ========================================== */
  const hamburgerBtn = document.getElementById('hamburger');
  const mobileNav = document.getElementById('mobileNav');

  if (hamburgerBtn && mobileNav) {
    // Alterna a visibilidade do menu
    hamburgerBtn.addEventListener('click', () => {
      mobileNav.classList.toggle('open');
    });

    // Fecha o menu mobile ao clicar em algum link
    const mobileLinks = mobileNav.querySelectorAll('a');
    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileNav.classList.remove('open');
      });
    });
  }

  /* ==========================================
     3. Smooth Scroll (Rolagem Suave)
     ========================================== */
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  
  anchorLinks.forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      
      // Ignora links que são apenas "#"
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        targetElement.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'start' 
        });
      }
    });
  });

  /* ==========================================
     4. Intersection Observer (Animações de Entrada)
     ========================================== */
  // Observa elementos com a classe .fade-up e adiciona .visible quando entram na tela
  const fadeUpObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        // Opcional: parar de observar após a animação rodar a primeira vez
        // fadeUpObserver.unobserve(entry.target); 
      }
    });
  }, { 
    threshold: 0.12 // O elemento precisa estar 12% visível para disparar
  });

  const fadeUpElements = document.querySelectorAll('.fade-up');
  fadeUpElements.forEach(el => fadeUpObserver.observe(el));

  /* ==========================================
     5. Hero Section Immediate Animation
     ========================================== */
  // Dispara a animação do texto principal logo ao carregar a página
  const heroElements = document.querySelectorAll('.hero .fade-up');
  heroElements.forEach(el => {
    setTimeout(() => {
      el.classList.add('visible');
    }, 200);
  });

  /* ==========================================
     6. Inicialização dos Ícones (Lucide)
     ========================================== */
  lucide.createIcons();
});
