/* CodeSumMix — interactions */
(function () {
  'use strict';

  var header = document.querySelector('.site-header');
  var nav = document.querySelector('.nav');
  var toggle = document.querySelector('.nav__toggle');

  /* Sticky header state */
  function onScroll() {
    if (!header) return;
    header.classList.toggle('scrolled', window.scrollY > 12);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* Mobile navigation */
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      document.body.style.overflow = open ? 'hidden' : '';
    });
    nav.querySelectorAll('.nav__links a').forEach(function (a) {
      a.addEventListener('click', function () {
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });
  }

  /* Reveal on scroll */
  var reveals = document.querySelectorAll('[data-reveal], [data-stagger]');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add('is-visible'); });
  }

  /* Current year */
  var year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  /* Contact form — submits to Web3Forms (https://web3forms.com) */
  var form = document.querySelector('[data-contact-form]');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var success = document.querySelector('[data-form-success]');
      var btn = form.querySelector('button[type=submit]');
      var label = btn ? btn.innerHTML : '';
      if (btn) { btn.disabled = true; btn.textContent = 'Sending…'; }
      fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: new FormData(form)
      })
        .then(function (r) { return r.json(); })
        .then(function (data) {
          if (data && data.success) {
            form.classList.add('hide');
            if (success) { success.classList.add('show'); success.scrollIntoView({ behavior: 'smooth', block: 'center' }); }
          } else { throw new Error((data && data.message) || 'Submission failed'); }
        })
        .catch(function () {
          if (btn) { btn.disabled = false; btn.innerHTML = label; }
          alert('Sorry, something went wrong sending your message. Please email us directly at info@codesummix.com.');
        });
    });
  }

  /* Engagement switcher — tabs with gentle auto-rotate until the visitor takes over */
  (function () {
    var wrap = document.querySelector('.engage');
    if (!wrap) return;
    var tabs = Array.prototype.slice.call(wrap.querySelectorAll('.engage-tab'));
    var panels = Array.prototype.slice.call(wrap.querySelectorAll('.engage-panel'));
    var tablist = wrap.querySelector('.engage__tabs');
    var current = 0, timer = null, held = false;
    var CYCLE = 5500;
    var reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    function show(i) {
      current = i;
      tabs.forEach(function (t, k) {
        t.classList.toggle('is-active', k === i);
        t.setAttribute('aria-selected', k === i ? 'true' : 'false');
        if (k === i) {
          var bar = t.querySelector('.engage-tab__bar');
          if (bar) { bar.style.animation = 'none'; void bar.offsetWidth; bar.style.animation = ''; }
        }
      });
      panels.forEach(function (p, k) { p.classList.toggle('is-active', k === i); });
    }
    function stop() {
      held = true;
      if (timer) { clearInterval(timer); timer = null; }
      if (tablist) tablist.classList.add('is-held');
    }
    tabs.forEach(function (t, i) {
      t.addEventListener('click', function () { stop(); show(i); });
    });
    if (!reduced) {
      var io2 = 'IntersectionObserver' in window ? new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting && !held && !timer) {
            timer = setInterval(function () { show((current + 1) % tabs.length); }, CYCLE);
          } else if (!entry.isIntersecting && timer) {
            clearInterval(timer); timer = null;
          }
        });
      }, { threshold: 0.35 }) : null;
      if (io2) io2.observe(wrap); else timer = setInterval(function () { show((current + 1) % tabs.length); }, CYCLE);
    } else if (tablist) {
      tablist.classList.add('is-held');
    }
  })();

  /* Feature flow — soft highlight that walks down each specialty list */
  (function () {
    var lists = document.querySelectorAll('.feature-flow');
    if (!lists.length) return;
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    lists.forEach(function (list) {
      var items = list.querySelectorAll('li');
      if (!items.length) return;
      var i = -1, timer = null;
      function step() {
        items.forEach(function (li) { li.classList.remove('is-lit'); });
        i = (i + 1) % items.length;
        items[i].classList.add('is-lit');
      }
      if ('IntersectionObserver' in window) {
        var io3 = new IntersectionObserver(function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting && !timer) { step(); timer = setInterval(step, 1800); }
            else if (!entry.isIntersecting && timer) { clearInterval(timer); timer = null; }
          });
        }, { threshold: 0.3 });
        io3.observe(list);
      }
    });
  })();

  /* Floating WhatsApp contact button (site-wide) */
  (function () {
    if (document.querySelector('.wa-fab')) return;
    var wa = document.createElement('a');
    wa.className = 'wa-fab';
    wa.href = 'https://wa.me/923203271071?text=' + encodeURIComponent("Hi CodeSumMix, I'd like to discuss a project.");
    wa.target = '_blank';
    wa.rel = 'noopener';
    wa.setAttribute('aria-label', 'Chat with us on WhatsApp');
    wa.innerHTML = '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.82 11.82 0 0 1 8.413 3.488 11.82 11.82 0 0 1 3.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 0 1-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 0 0 1.51 5.26l-.999 3.648 3.978-.607zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z"/></svg>';
    document.body.appendChild(wa);
  })();
})();
