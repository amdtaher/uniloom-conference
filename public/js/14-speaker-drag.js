    (function () {
      function init() {
        var root = document.querySelector('.uniloom-europa-speakers');
        if (!root || root.dataset.pointerDragReady) return;
        root.dataset.pointerDragReady = '1';
        var viewport = root.querySelector('.uniloom-eu-speakers-viewport');
        var track = root.querySelector('.uniloom-eu-speakers-track');
        var slides = Array.from(root.querySelectorAll('.uniloom-eu-speaker-slide'));
        var prev = root.querySelector('.uniloom-eu-speaker-prev');
        var next = root.querySelector('.uniloom-eu-speaker-next');
        var progress = root.querySelector('.uniloom-eu-speakers-progress span');
        if (!viewport || !track || !slides.length) return;
        var index = 0, startX = 0, startOffset = 0, currentOffset = 0, dragging = false, moved = false, pointerId = null;
        function visible() { return window.innerWidth <= 640 ? 1 : window.innerWidth <= 900 ? 3 : 4; }
        function gap() { return parseFloat(getComputedStyle(track).gap) || 0; }
        function step() { return slides[0].getBoundingClientRect().width + gap(); }
        function maxIndex() { return Math.max(0, slides.length - visible()); }
        function clamp(v) { return Math.max(0, Math.min(v, maxIndex() * step())); }
        function paint(offset, animate) {
          currentOffset = clamp(offset);
          track.style.transition = animate ? 'transform .45s cubic-bezier(.2,.75,.2,1)' : 'none';
          track.style.transform = 'translate3d(' + (-currentOffset) + 'px,0,0)';
          index = Math.round(currentOffset / Math.max(1, step()));
          if (progress) progress.style.width = ((index + visible()) / slides.length * 100) + '%';
          if (prev) prev.disabled = currentOffset <= 1;
          if (next) next.disabled = currentOffset >= maxIndex() * step() - 1;
        }
        function snap() { paint(Math.round(currentOffset / Math.max(1, step())) * step(), true); }
        if (prev) prev.addEventListener('click', function () { paint(currentOffset - step(), true); });
        if (next) next.addEventListener('click', function () { paint(currentOffset + step(), true); });
        viewport.addEventListener('pointerdown', function (e) {
          if (e.pointerType === 'mouse' && e.button !== 0) return;
          if (e.target.closest('button,a')) return;
          dragging = true; moved = false; pointerId = e.pointerId; startX = e.clientX; startOffset = currentOffset;
          viewport.classList.add('is-dragging'); viewport.setPointerCapture(pointerId);
        });
        viewport.addEventListener('pointermove', function (e) {
          if (!dragging || e.pointerId !== pointerId) return;
          var delta = e.clientX - startX;
          if (Math.abs(delta) > 4) moved = true;
          paint(startOffset - delta, false);
        });
        function end(e) {
          if (!dragging || e.pointerId !== pointerId) return;
          dragging = false; pointerId = null; viewport.classList.remove('is-dragging');
          snap();
        }
        viewport.addEventListener('pointerup', end);
        viewport.addEventListener('pointercancel', end);
        viewport.addEventListener('lostpointercapture', function () { dragging = false; viewport.classList.remove('is-dragging'); snap(); });
        viewport.addEventListener('click', function (e) { if (moved) { e.preventDefault(); e.stopPropagation(); moved = false; } }, true);
        window.addEventListener('resize', function () { paint(index * step(), true); }, { passive: true });
        paint(0, false);
      }
      if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
    })();
