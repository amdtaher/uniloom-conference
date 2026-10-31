    (function () {
      function openModal(passName) {
        var modal = document.getElementById('uniloom-pass-modal'); if (!modal) return;
        var title = modal.querySelector('#uniloom-modal-title');
        var selected = modal.querySelector('#uniloom-selected-pass');
        if (title) title.textContent = passName || 'Conference Pass';
        if (selected) selected.value = passName || 'Conference Pass';
        modal.classList.add('is-open'); modal.setAttribute('aria-hidden', 'false'); document.body.style.overflow = 'hidden';
        var first = modal.querySelector('input:not([readonly])'); if (first) setTimeout(function () { first.focus(); }, 80);
      }
      function closeModal() {
        var modal = document.getElementById('uniloom-pass-modal'); if (!modal) return;
        modal.classList.remove('is-open'); modal.setAttribute('aria-hidden', 'true'); document.body.style.overflow = '';
      }
      document.addEventListener('click', function (e) {
        var trigger = e.target.closest('.uniloom-open-pass-modal');
        if (trigger) { e.preventDefault(); openModal(trigger.getAttribute('data-uniloom-pass')); return; }
        if (e.target.closest('[data-uniloom-close]')) { e.preventDefault(); closeModal(); }
      });
      document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeModal(); });
      document.addEventListener('submit', function (e) {
        if (e.target && e.target.id === 'uniloom-purchase-form') {
          e.preventDefault();
          var feedback = document.getElementById('uniloom-form-feedback');
          if (feedback) feedback.textContent = 'Your details are ready, but this website does not yet have a connected registration or payment endpoint. No purchase has been submitted.';
        }
      });
    })();
