    (function () {
      document.addEventListener('DOMContentLoaded', function () {
        var root = document.querySelector('.pricing-section');
        if (!root) return;
        var toggle = root.querySelector('.pricing-toggle');
        var tabs = root.querySelectorAll('.pricing-tabs-menu .w-tab-link');
        if (!toggle || tabs.length < 2) return;
        toggle.setAttribute('role', 'switch');
        toggle.setAttribute('tabindex', '0');
        toggle.setAttribute('aria-label', 'Switch between Student Pass and Builder Pass');
        toggle.setAttribute('aria-checked', 'false');
        function flip() {
          var current = toggle.getAttribute('aria-checked') === 'true';
          var next = current ? 0 : 1;
          toggle.setAttribute('aria-checked', next === 1 ? 'true' : 'false');
          tabs[next].click();
        }
        toggle.addEventListener('click', flip);
        toggle.addEventListener('keydown', function (e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); flip(); } });
      });
    })();
