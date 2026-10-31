(function () {
      var trigger = document.querySelector('[data-uniloom-play-video]'), popup = document.querySelector('.video-popup'), close = popup && popup.querySelector('.cross-video-icon');
      function openPopup() { if (!popup) return; popup.classList.add('uniloom-popup-open'); popup.setAttribute('aria-hidden', 'false'); var v = popup.querySelector('video'); if (v) { v.muted = false; var p = v.play(); if (p && p.catch) p.catch(function () { }); } }
      function closePopup() { if (!popup) return; popup.classList.remove('uniloom-popup-open'); popup.setAttribute('aria-hidden', 'true'); var v = popup.querySelector('video'); if (v) { v.pause(); v.currentTime = 0; } }
      if (trigger) trigger.addEventListener('click', openPopup);
      if (close) { close.setAttribute('role', 'button'); close.setAttribute('tabindex', '0'); close.setAttribute('aria-label', 'Close video'); close.addEventListener('click', closePopup); close.addEventListener('keydown', function (e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); closePopup(); } }); }
      if (popup) popup.addEventListener('click', function (e) { if (e.target === popup) closePopup(); });
      document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closePopup(); });
    })();
