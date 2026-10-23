/**
 * KEEP AMAZON — INTERATIVIDADE JAVASCRIPT VANILLA
 */

document.addEventListener('DOMContentLoaded', () => {
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
      if (err) err.textContent = 'Informe seu nome completo (mínimo de 3 caracteres).';
    }

    // Validação de e-mail
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailInput?.value || !emailRegex.test(emailInput.value)) {
      hasError = true;
      emailInput?.classList.add('input-error');
      const err = document.getElementById('error-email');
      if (err) err.textContent = 'Informe um endereço de e-mail válido.';
    }

    // Validação de WhatsApp
    const phoneDigits = (whatsappInput?.value || '').replace(/\D/g, '');
    if (!phoneDigits || phoneDigits.length < 10) {
      hasError = true;
      whatsappInput?.classList.add('input-error');
      const err = document.getElementById('error-whatsapp');
      if (err) err.textContent = 'Informe um WhatsApp válido com DDD (mínimo 10 dígitos).';
    }

    // Validação de consentimento LGPD
    if (!consentCheckbox?.checked) {
      hasError = true;
      const err = document.getElementById('error-consent');
      if (err) err.textContent = 'É necessário concordar com a política de privacidade.';
    }

    if (hasError) return;

    // Estado de carregamento
    if (formSubmitBtn) {
      formSubmitBtn.disabled = true;
      formSubmitBtn.innerHTML = `<span>Validando...</span>`;
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
            '<strong>Manifestação enviada com sucesso!</strong><br>' +
              (data.message || 'Seus dados foram validados pela infraestrutura Keep Amazon.') +
              '<br><small style="opacity: 0.85;">Status técnico: Pronto para conexão com CRM/Webhook.</small>'
          );
          interestForm.reset();
        } else {
          showFeedback('error', data.message || 'Ocorreu um erro ao processar. Tente novamente.');
        }
      } else {
        // Modo offline / abertura direta de arquivo file://
        showFeedback(
          'success',
          '<strong>Validação concluída localmente!</strong><br>' +
            'Todos os campos atendem aos critérios de integridade da Keep Amazon.<br>' +
            '<small style="opacity: 0.85;">Em ambiente de produção com servidor, a requisição é despachada para /api/interest.</small>'
        );
        interestForm.reset();
      }
    } catch {
      showFeedback(
        'error',
        'Não foi possível conectar ao servidor. Verifique sua conexão e tente novamente.'
      );
    } finally {
      if (formSubmitBtn) {
        formSubmitBtn.disabled = false;
        formSubmitBtn.innerHTML = `<span>Enviar manifestação</span><svg class="arrow-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>`;
      }
    }
  });

  const showFeedback = (type, htmlMessage) => {
    if (!formFeedback) return;
    formFeedback.className = `form-feedback ${type}`;
    formFeedback.innerHTML = htmlMessage;
    formFeedback.style.display = 'block';
  };
});

