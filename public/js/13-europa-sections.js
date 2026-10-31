    (function () {
      function initUniloomEuropaSections() {
        var root = document.querySelector('.uniloom-europa-speakers');
        if (root && !root.dataset.sliderReady) {
          root.dataset.sliderReady = '1';
          var viewport = root.querySelector('.uniloom-eu-speakers-viewport');
          var track = root.querySelector('.uniloom-eu-speakers-track');
          var slides = Array.from(root.querySelectorAll('.uniloom-eu-speaker-slide'));
          var prev = root.querySelector('.uniloom-eu-speaker-prev');
          var next = root.querySelector('.uniloom-eu-speaker-next');
          var progress = root.querySelector('.uniloom-eu-speakers-progress span');
          var index = 0;
          function visible() { return window.innerWidth <= 640 ? 1 : window.innerWidth <= 900 ? 3 : 4; }
          function update() {
            var max = Math.max(0, slides.length - visible());
            index = Math.max(0, Math.min(index, max));
            var slide = slides[0];
            if (!slide) return;
            var gap = parseFloat(getComputedStyle(track).gap) || 0;
            var offset = index * (slide.getBoundingClientRect().width + gap);
            track.style.transform = 'translate3d(' + (-offset) + 'px,0,0)';
            if (progress) progress.style.width = ((index + visible()) / slides.length * 100) + '%';
            if (prev) prev.disabled = index === 0;
            if (next) next.disabled = index === max;
          }
          if (prev) prev.addEventListener('click', function () { index--; update(); });
          if (next) next.addEventListener('click', function () { index++; update(); });
          window.addEventListener('resize', update, { passive: true });
          update();
        }
        var programme = document.querySelector('.uniloom-europa-programme');
        if (programme && !programme.dataset.tabsReady) {
          programme.dataset.tabsReady = '1';
          var tabs = Array.from(programme.querySelectorAll('[role="tab"]'));
          var panels = Array.from(programme.querySelectorAll('[role="tabpanel"]'));
          function selectTab(tab) {
            tabs.forEach(function (t) {
              var active = t === tab;
              t.classList.toggle('is-active', active);
              t.setAttribute('aria-selected', active ? 'true' : 'false');
              t.tabIndex = active ? 0 : -1;
            });
            panels.forEach(function (panel) { panel.hidden = panel.id !== tab.getAttribute('aria-controls'); });
          }
          tabs.forEach(function (tab, i) {
            tab.addEventListener('click', function () { selectTab(tab); });
            tab.addEventListener('keydown', function (e) {
              if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
                e.preventDefault();
                var nextIndex = (i + (e.key === 'ArrowRight' ? 1 : tabs.length - 1)) % tabs.length;
                tabs[nextIndex].focus(); selectTab(tabs[nextIndex]);
              }
            });
          });
        }
      }
      if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', initUniloomEuropaSections);
      else initUniloomEuropaSections();
    })();
