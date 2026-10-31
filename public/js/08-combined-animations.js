    (function () {
      'use strict';

      // ─────────────────────────────────────────
      // 1. SMOOTH SCROLL (Lenis) — desktop only
      // ─────────────────────────────────────────
      window.Webflow = window.Webflow || [];
      window.Webflow.push(function () {
        if (window.matchMedia('(hover: none)').matches) return;

        var lenis = new Lenis({
          duration: 1.2,
          easing: function (t) { return 1 - Math.pow(1 - t, 4); },
          smoothTouch: false,
          normalizeWheel: false,
          lerp: 0.1,
        });

        (function tick(t) { lenis.raf(t); requestAnimationFrame(tick); })(0);

        lenis.on('scroll', function () {
          window.dispatchEvent(new Event('scroll'));
        });

        window.addEventListener('load', function () { lenis.resize(); });
        window.addEventListener('resize', function () { lenis.resize(); });
        document.querySelectorAll('img').forEach(function (img) {
          if (!img.complete) img.addEventListener('load', function () { lenis.resize(); });
        });
      });

      // ─────────────────────────────────────────
      // 2. GSAP SETUP
      // ─────────────────────────────────────────
      gsap.registerPlugin(ScrollTrigger);

      // ── MARQUEE (selector-based) ──
      function initMarquee(selector, duration, direction) {
        var items = document.querySelectorAll(selector);
        if (!items.length) return;
        var totalWidth = items[0].scrollWidth;
        gsap.fromTo(
          selector,
          { x: direction === 'ltr' ? -totalWidth : 0 },
          {
            x: direction === 'ltr' ? 0 : -totalWidth,
            duration: duration,
            ease: 'none',
            repeat: -1,
            modifiers: {
              x: gsap.utils.unitize(function (x) { return parseFloat(x) % totalWidth; })
            }
          }
        );
      }

      // ── STUDIES MARQUEE (track-based, hover pause) ──
      function initStudiesMarquee() {
        var track = document.querySelector('.studies-marquees');
        if (!track) return;
        var speed = 60;

        function fillTrack() {
          var originals = Array.from(track.children);
          var targetW = window.innerWidth * 2.5;
          while (track.scrollWidth < targetW) {
            originals.forEach(function (el) {
              track.appendChild(el.cloneNode(true));
            });
          }
        }

        function buildTween() {
          var totalW = track.scrollWidth / 2;
          gsap.set(track, { x: 0 });
          window._marqueeT = gsap.to(track, {
            x: '-=' + totalW,
            duration: totalW / speed,
            ease: 'none',
            repeat: -1,
            modifiers: {
              x: function (x) {
                var p = parseFloat(x);
                return (((p % totalW) - totalW) % totalW) + 'px';
              }
            }
          });
        }

        function bindHover() {
          track.querySelectorAll('.studies-marquees-items').forEach(function (card) {
            card.addEventListener('mouseenter', function () { window._marqueeT.pause(); });
            card.addEventListener('mouseleave', function () { window._marqueeT.resume(); });
          });
        }

        fillTrack();
        buildTween();
        bindHover();
      }

      // ── COUNTER — comma format ──
      function initCounterComma() {
        document.querySelectorAll('.cc-coma').forEach(function (el) {
          gsap.from(el, {
            textContent: 0,
            duration: 3,
            snap: { textContent: 1 },
            scrollTrigger: { trigger: el, start: 'top 90%', once: true },
            onUpdate: function () {
              el.textContent = parseInt(el.textContent).toLocaleString();
            }
          });
        });
      }

      // ── COUNTER — integer format ──
      function initCounterInteger() {
        document.querySelectorAll('.cc-integer').forEach(function (el) {
          gsap.from(el, {
            textContent: 0,
            duration: 3,
            snap: { textContent: 1 },
            scrollTrigger: { trigger: el, start: 'top 90%', once: true },
            onUpdate: function () {
              el.textContent = parseInt(el.textContent);
            }
          });
        });
      }

      // ── VIDEO MOUSEOVER ──
      var VIDEO_CONFIGS = [
        { wrapper: '.about-video', btn: '.play-pause-founders', play: '.play-state', pause: '.pause-state' },
        { wrapper: '.founders-video', btn: '.play-pause-founders', play: '.play-state', pause: '.pause-state' },
        { wrapper: '.feedback-video', btn: '.play-pause-founders', play: '.play-state', pause: '.pause-state' },
        { wrapper: '.customer-video', btn: '.play-pause-founders', play: '.play-state', pause: '.pause-state' },
        { wrapper: '.service-video', btn: '.play-pause-founders', play: '.play-state', pause: '.pause-state' },
        { wrapper: '.offer-video', btn: '.play-pause-founders', play: '.play-state', pause: '.pause-state' },
        { wrapper: '.achieve-video', btn: '.play-pause-founders', play: '.play-state', pause: '.pause-state' },
        { wrapper: '.testimonial-author-video', btn: '.play-pause-founders', play: '.play-state', pause: '.pause-state' },
      ];

      function initVideoMouseover() {
        VIDEO_CONFIGS.forEach(function (config) {
          document.querySelectorAll(config.wrapper).forEach(function (videoWrapper) {
            var playPauseBtn = videoWrapper.querySelector(config.btn);
            var playState = videoWrapper.querySelector(config.play);
            var pauseState = videoWrapper.querySelector(config.pause);
            if (!playPauseBtn) return;

            var isPlaying = false;

            gsap.set(playPauseBtn, { autoAlpha: 0, scale: 0.6, x: 0, y: 0 });
            if (pauseState) gsap.set(pauseState, { autoAlpha: 0 });
            if (playState) gsap.set(playState, { autoAlpha: 1 });

            videoWrapper.addEventListener('mousemove', function (e) {
              var rect = videoWrapper.getBoundingClientRect();
              var mouseX = e.clientX - rect.left;
              var mouseY = e.clientY - rect.top;
              var btnRect = playPauseBtn.getBoundingClientRect();
              var btnOrigX = btnRect.left - rect.left + btnRect.width / 2;
              var btnOrigY = btnRect.top - rect.top + btnRect.height / 2;
              gsap.to(playPauseBtn, {
                x: gsap.getProperty(playPauseBtn, 'x') + (mouseX - btnOrigX),
                y: gsap.getProperty(playPauseBtn, 'y') + (mouseY - btnOrigY),
                duration: 0.35,
                ease: 'power2.out',
                overwrite: 'auto'
              });
            });

            videoWrapper.addEventListener('mouseenter', function () {
              gsap.to(playPauseBtn, { autoAlpha: 1, scale: 1, duration: 0.3, ease: 'back.out(1.7)' });
            });

            videoWrapper.addEventListener('mouseleave', function () {
              gsap.to(playPauseBtn, { autoAlpha: 0, scale: 0.6, duration: 0.25, ease: 'power2.in' });
            });

            videoWrapper.addEventListener('click', function () {
              isPlaying = !isPlaying;
              if (isPlaying) {
                if (playState) gsap.to(playState, { autoAlpha: 0, scale: 0.5, duration: 0.2 });
                if (pauseState) gsap.to(pauseState, { autoAlpha: 1, scale: 1, duration: 0.3, ease: 'back.out(1.7)' });
              } else {
                if (pauseState) gsap.to(pauseState, { autoAlpha: 0, scale: 0.5, duration: 0.2 });
                if (playState) gsap.to(playState, { autoAlpha: 1, scale: 1, duration: 0.3, ease: 'back.out(1.7)' });
              }
            });
          });
        });
      }



      // ── ROTATE ON SCROLL ──
      function initRotate() {
        gsap.matchMedia().add('(min-width: 992px)', function () {
          document.querySelectorAll('.work-item-collection').forEach(function (el) {
            gsap.set(el, { rotationX: 25 });
            gsap.to(el, {
              rotationX: 0,
              ease: 'none',
              scrollTrigger: {
                trigger: el,
                start: 'top bottom',
                end: 'top 30%',
                scrub: 1,
                invalidateOnRefresh: true,
              }
            });
          });
          ScrollTrigger.refresh();
        });
      }


      // ── INIT on window load ──
      window.addEventListener('load', function () {
        setTimeout(function () {

          initMarquee('.brand-flex-wrapp', 25, 'rtl');
          initMarquee('.countries-marquee-items', 25, 'ltr');
          initMarquee('.cta-title-wrapp', 60, 'rtl');
          initMarquee('.team-slide-content-wrapp', 20, 'rtl');
          initMarquee('.worldwide-left-marquees', 20, 'rtl');
          initMarquee('.worldwide-right-marquees', 20, 'ltr');
          initMarquee('.satisfied-marquee-items', 30, 'rtl');
          initStudiesMarquee();
          initCounterComma();
          initCounterInteger();
          initVideoMouseover();
          initRotate();

        }, 300);
      });

    })();
