'use strict';

document.addEventListener('DOMContentLoaded', function () {

  // â”€â”€ Confirmar venta: deshabilitar si carrito vacÃ­o â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  const btnConfirmar = document.getElementById('btn-confirmar-venta');
  if (btnConfirmar) {
    const vacio = btnConfirmar.dataset.vacio === 'true';
    btnConfirmar.disabled = vacio;
    if (vacio) {
      btnConfirmar.title = 'Agrega productos al carrito antes de confirmar';
    }
  }

  // â”€â”€ Botones +/- de cantidad en el carrito â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  document.querySelectorAll('.qty-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      const inputId = btn.dataset.form;
      const input = document.getElementById(inputId);
      if (!input) return;

      let val = parseInt(input.value, 10) || 1;
      if (btn.classList.contains('qty-plus')) {
        input.value = val + 1;
      } else if (btn.classList.contains('qty-minus') && val > 1) {
        input.value = val - 1;
      }
    });
  });

  // â”€â”€ Feedback visual al agregar producto â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  document.querySelectorAll('.add-form').forEach(function (form) {
    form.addEventListener('submit', function () {
      const btn = form.querySelector('.btn-add');
      if (btn) {
        btn.textContent = 'âœ“';
        btn.style.background = 'var(--accent)';
        btn.style.color = 'var(--bg)';
      }
    });
  });

  // â”€â”€ Marcar nav-link activo segÃºn la ruta actual â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  const path = window.location.pathname;
  document.querySelectorAll('.nav-pill').forEach(function (link) {
    const href = link.getAttribute('href');
    if (href === '/' && path === '/') {
      link.classList.add('active');
    } else if (href !== '/' && path.startsWith(href)) {
      link.classList.add('active');
    }
  });

  // â”€â”€ Auto-dismiss alertas despuÃ©s de 5 segundos â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  const alerts = document.querySelectorAll('.alert-pos');
  alerts.forEach(function (alert) {
    setTimeout(function () {
      alert.style.transition = 'opacity 0.4s';
      alert.style.opacity = '0';
      setTimeout(function () { alert.remove(); }, 400);
    }, 5000);
  });

});
