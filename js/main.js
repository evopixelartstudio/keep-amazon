/**
 * KEEP AMAZON — INTERATIVIDADE JAVASCRIPT VANILLA
 */

document.addEventListener('DOMContentLoaded', () => {
  // Traduções (js/i18n.js)
  const T = (key) => (window.KeepAmazonI18n ? window.KeepAmazonI18n.t(key) : key);
  const submitBtnHTML = () =>
    `<span data-i18n="form.submit">${T('form.submit')}</span><svg class="arrow-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>`;

  // 1. Header Fixo & Efeito Scroll
  const header = document.querySelector('.site-header');
  
  const handleScroll = () => {
    if (window.scrollY > 40) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  // 2. Menu Mobile Drawer
  const btnHamburger = document.querySelector('.btn-hamburger');
  const mobileDrawer = document.querySelector('.mobile-drawer');
  const mobileNavLinks = document.querySelectorAll('.nav-mobile a');

  const toggleMobileMenu = () => {
    mobileDrawer?.classList.toggle('open');
    const isOpen = mobileDrawer?.classList.contains('open');
    if (btnHamburger) {
      btnHamburger.setAttribute('aria-expanded', String(isOpen));
      btnHamburger.setAttribute('aria-label', T(isOpen ? 'aria.closeMenu' : 'aria.openMenu'));
      btnHamburger.innerHTML = isOpen
        ? `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>`
        : `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="4" y1="12" x2="20" y2="12"></line><line x1="4" y1="6" x2="20" y2="6"></line><line x1="4" y1="18" x2="20" y2="18"></line></svg>`;
    }
  };

  btnHamburger?.addEventListener('click', toggleMobileMenu);

  mobileNavLinks.forEach((link) => {
    link.addEventListener('click', () => {
      mobileDrawer?.classList.remove('open');
      if (btnHamburger) {
        btnHamburger.setAttribute('aria-expanded', 'false');
        btnHamburger.setAttribute('aria-label', T('aria.openMenu'));
        btnHamburger.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="4" y1="12" x2="20" y2="12"></line><line x1="4" y1="6" x2="20" y2="6"></line><line x1="4" y1="18" x2="20" y2="18"></line></svg>`;
      }
    });
  });

  // 3. Modal de Adesão & Interesse
  const modalBackdrop = document.getElementById('interestModal');
  const modalCloseBtn = document.querySelector('.modal-close-btn');
  const modalCancelBtn = document.querySelector('.modal-cancel-btn');
  const interestForm = document.getElementById('interestForm');
  const formFeedback = document.getElementById('formFeedback');
  const formSubmitBtn = document.getElementById('formSubmitBtn');

  const openModal = () => {
    modalBackdrop?.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    modalBackdrop?.classList.remove('active');
    document.body.style.overflow = '';
  };

  // Botões de abertura do modal
  const openModalButtons = document.querySelectorAll('[data-open-modal="interest"]');
  openModalButtons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openModal();
    });
  });

  modalCloseBtn?.addEventListener('click', closeModal);
  modalCancelBtn?.addEventListener('click', closeModal);

  modalBackdrop?.addEventListener('click', (e) => {
    if (e.target === modalBackdrop) {
      closeModal();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalBackdrop?.classList.contains('active')) {
      closeModal();
    }
  });

  // 4. Validação & Submissão do Formulário
  interestForm?.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Limpeza de erros anteriores
    const errorSpans = document.querySelectorAll('.field-error-msg');
    errorSpans.forEach((el) => (el.textContent = ''));
    const inputErrors = document.querySelectorAll('.input-error');
    inputErrors.forEach((el) => el.classList.remove('input-error'));

    if (formFeedback) {
      formFeedback.className = 'form-feedback';
      formFeedback.innerHTML = '';
      formFeedback.style.display = 'none';
    }

    const fullNameInput = document.getElementById('fullName');
    const emailInput = document.getElementById('email');
    const whatsappInput = document.getElementById('whatsapp');
    const profileSelect = document.getElementById('interestProfile');
    const messageInput = document.getElementById('message');
    const consentCheckbox = document.getElementById('privacyConsent');

    let hasError = false;

    // Validação de nome
    if (!fullNameInput?.value.trim() || fullNameInput.value.trim().length < 3) {
      hasError = true;
      fullNameInput?.classList.add('input-error');
      const err = document.getElementById('error-fullName');
      if (err) err.textContent = T('js.errName');
    }

    // Validação de e-mail
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailInput?.value || !emailRegex.test(emailInput.value)) {
      hasError = true;
      emailInput?.classList.add('input-error');
      const err = document.getElementById('error-email');
      if (err) err.textContent = T('js.errEmail');
    }

    // Validação de WhatsApp
    const phoneDigits = (whatsappInput?.value || '').replace(/\D/g, '');
    if (!phoneDigits || phoneDigits.length < 10) {
      hasError = true;
      whatsappInput?.classList.add('input-error');
      const err = document.getElementById('error-whatsapp');
      if (err) err.textContent = T('js.errPhone');
    }

    // Validação de consentimento LGPD
    if (!consentCheckbox?.checked) {
      hasError = true;
      const err = document.getElementById('error-consent');
      if (err) err.textContent = T('js.errConsent');
    }

    if (hasError) return;

    // Estado de carregamento
    if (formSubmitBtn) {
      formSubmitBtn.disabled = true;
      formSubmitBtn.innerHTML = `<span>${T('js.sending')}</span>`;
    }

    const payload = {
      fullName: fullNameInput?.value.trim(),
      email: emailInput?.value.trim(),
      whatsapp: whatsappInput?.value.trim(),
      interestProfile: profileSelect?.value,
      message: messageInput?.value.trim() || '',
      privacyConsent: consentCheckbox?.checked,
    };

    try {
      // Verifica se a API route está disponível no ambiente
      const isHttp = window.location.protocol.startsWith('http');
      if (isHttp) {
        const response = await fetch('/api/interest', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        });

        const data = await response.json();

        if (response.ok && data.success) {
          showFeedback(
            'success',
            `<strong>${T('js.successTitle')}</strong><br>` +
              T('js.successDefault') +
              `<br><small style="opacity: 0.85;">${T('js.successTech')}</small>`
          );
          interestForm.reset();
        } else {
          showFeedback('error', T('js.errProcess'));
        }
      } else {
        // Modo offline / abertura direta de arquivo file://
        showFeedback(
          'success',
          `<strong>${T('js.localTitle')}</strong><br>` +
            `${T('js.localBody')}<br>` +
            `<small style="opacity: 0.85;">${T('js.localNote')}</small>`
        );
        interestForm.reset();
      }
    } catch {
      showFeedback(
        'error',
        T('js.errNetwork')
      );
    } finally {
      if (formSubmitBtn) {
        formSubmitBtn.disabled = false;
        formSubmitBtn.innerHTML = submitBtnHTML();
      }
    }
  });

  const showFeedback = (type, htmlMessage) => {
    if (!formFeedback) return;
    formFeedback.className = `form-feedback ${type}`;
    formFeedback.innerHTML = htmlMessage;
    formFeedback.style.display = 'block';
  };

  // 5. Scroll Blur & Reveal Observer (Efeito de Desfoque Revelado no Scroll)
  const revealElements = document.querySelectorAll('.reveal-blur, .reveal-scale-blur');

  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        rootMargin: '0px 0px -20px 0px',
        threshold: 0.05,
      }
    );

    revealElements.forEach((el) => {
      // Se o elemento já estiver na viewport visível, anima suavemente na entrada inicial
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 30 && rect.bottom > 0) {
        // Pequeno atraso para visualização da animação inicial
        setTimeout(() => el.classList.add('is-visible'), 50);
      } else {
        revealObserver.observe(el);
      }
    });
  } else {
    revealElements.forEach((el) => el.classList.add('is-visible'));
  }
});

