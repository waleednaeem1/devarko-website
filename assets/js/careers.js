/* CodeSumMix — Careers prototype.
   NOTE: This is a front-end PROTOTYPE backed by browser localStorage so the
   full flow works in preview. It is NOT a secure/shared backend: data lives in
   the visitor's browser and the admin gate is client-side only. For production,
   back this with WP Job Manager (WordPress) or a real API + database. */
(function () {
  'use strict';

  var JOBS_KEY = 'csm_jobs_v1', APPS_KEY = 'csm_apps_v1', AUTH_KEY = 'csm_admin';
  var DEMO_PASSWORD = 'demo1234';

  var SEED_JOBS = [
    { id:'sw-fullstack', title:'Senior Full-Stack Engineer', department:'Engineering', location:'Lahore / Remote', type:'Full-time',
      description:"We're looking for a senior engineer who can own features end to end.\n\nWhat you'll do:\n• Build and ship web apps with React, Next.js, Node and Laravel\n• Design clean APIs and data models\n• Mentor engineers and review code\n\nWhat we look for:\n• 4+ years building production web applications\n• Strong JavaScript/TypeScript and a backend language\n• Care for quality, testing and clear communication" },
    { id:'rn-mobile', title:'React Native Mobile Developer', department:'Engineering', location:'Lahore / Remote', type:'Full-time',
      description:"Help us build native-quality mobile apps for iOS and Android from one codebase.\n\nWhat you'll do:\n• Build and maintain React Native apps\n• Integrate REST APIs, push notifications and payments\n• Ship to the App Store and Play Store\n\nWhat we look for:\n• 2+ years with React Native\n• A strong sense for mobile UX\n• Native module experience is a plus" },
    { id:'ai-ml', title:'AI / ML Engineer', department:'AI', location:'Lahore / Remote', type:'Full-time',
      description:"Build AI features that put our clients' data to work.\n\nWhat you'll do:\n• Build LLM-powered features, chatbots and RAG pipelines\n• Work with embeddings, vector databases and prompt engineering\n• Ship reliable, evaluated AI into production\n\nWhat we look for:\n• Experience with OpenAI or open-source LLMs\n• Strong Python\n• A pragmatic, product-minded approach" },
    { id:'product-designer', title:'UI/UX Product Designer', department:'Design', location:'Lahore', type:'Full-time',
      description:"Design interfaces that are beautiful, usable and built to convert.\n\nWhat you'll do:\n• Turn requirements into wireframes, flows and polished UI\n• Maintain and grow our design systems\n• Partner closely with engineers\n\nWhat we look for:\n• A strong portfolio of shipped product work\n• Fluency in Figma\n• An eye for detail and motion" },
    { id:'qa-automation', title:'QA Automation Engineer', department:'Quality', location:'Remote', type:'Full-time',
      description:"Help every release ship with confidence.\n\nWhat you'll do:\n• Build automated test suites (unit, integration, e2e)\n• Own regression and performance testing\n• Improve our CI quality gates\n\nWhat we look for:\n• Experience with modern test frameworks\n• Strong attention to edge cases\n• Comfortable scripting" },
    { id:'laravel-backend', title:'Laravel Backend Engineer', department:'Engineering', location:'Lahore', type:'Full-time',
      description:"Build robust APIs and backends that power web and mobile clients.\n\nWhat you'll do:\n• Design and build APIs in Laravel/PHP\n• Model data and optimise queries (MySQL/PostgreSQL)\n• Integrate payments, storage and third-party services\n\nWhat we look for:\n• 3+ years with Laravel\n• Solid REST API design\n• Testing and clean-code habits" }
  ];

  function readJobs(){ try { var v = JSON.parse(localStorage.getItem(JOBS_KEY)); return Array.isArray(v) ? v : null; } catch (e) { return null; } }
  function writeJobs(j){ localStorage.setItem(JOBS_KEY, JSON.stringify(j)); }
  function readApps(){ try { var v = JSON.parse(localStorage.getItem(APPS_KEY)); return Array.isArray(v) ? v : []; } catch (e) { return []; } }
  function writeApps(a){ localStorage.setItem(APPS_KEY, JSON.stringify(a)); }
  function jobs(){ var j = readJobs(); if (!j) { j = SEED_JOBS.slice(); writeJobs(j); } return j; }
  function esc(s){ return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) { return { '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;' }[c]; }); }
  function fmtDate(iso){ try { return new Date(iso).toLocaleDateString(undefined, { year:'numeric', month:'short', day:'numeric' }); } catch (e) { return ''; } }

  /* ---------------- CAREERS LIST ---------------- */
  var listEl = document.getElementById('careers-list');
  if (listEl) {
    var all = jobs();
    var search = document.getElementById('job-search');
    var fDept = document.getElementById('filter-dept');
    var fType = document.getElementById('filter-type');
    var fLoc  = document.getElementById('filter-loc');
    var countEl = document.getElementById('job-count');
    var emptyEl = document.getElementById('careers-empty');

    function uniq(key){ return all.map(function (j) { return j[key]; }).filter(function (v, i, a) { return a.indexOf(v) === i; }); }
    function fill(sel, vals){ if (!sel) return; vals.forEach(function (v) { var o = document.createElement('option'); o.value = v; o.textContent = v; sel.appendChild(o); }); }
    fill(fDept, uniq('department')); fill(fType, uniq('type')); fill(fLoc, uniq('location'));

    function render(){
      var q = (search && search.value || '').toLowerCase();
      var d = fDept && fDept.value, t = fType && fType.value, l = fLoc && fLoc.value;
      var rows = all.filter(function (j) {
        return (!q || (j.title + ' ' + j.department).toLowerCase().indexOf(q) > -1)
          && (!d || j.department === d) && (!t || j.type === t) && (!l || j.location === l);
      });
      listEl.innerHTML = rows.map(function (j) {
        return '<a class="job-row" href="/job/?id=' + encodeURIComponent(j.id) + '">'
          + '<div class="job-row__main"><h3>' + esc(j.title) + '</h3>'
          + '<div class="job-row__meta"><span>' + esc(j.department) + '</span><span>' + esc(j.location) + '</span><span>' + esc(j.type) + '</span></div></div>'
          + '<span class="job-row__cta">View &amp; apply <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></span></a>';
      }).join('');
      if (countEl) countEl.textContent = rows.length + (rows.length === 1 ? ' open role' : ' open roles');
      if (emptyEl) emptyEl.hidden = rows.length > 0;
    }
    [search, fDept, fType, fLoc].forEach(function (el) { if (el) el.addEventListener('input', render); });
    render();
  }

  /* ---------------- SINGLE JOB ---------------- */
  var jobDetail = document.getElementById('job-detail');
  if (jobDetail) {
    var id = new URLSearchParams(location.search).get('id');
    var job = jobs().filter(function (j) { return j.id === id; })[0];
    var titleEl = document.getElementById('job-title');
    if (!job) {
      jobDetail.innerHTML = '<p style="color:var(--muted)">This opening may have closed. <a href="/careers/" style="color:var(--accent-2)">See all open roles &rarr;</a></p>';
      if (titleEl) titleEl.textContent = 'Role not found';
    } else {
      document.title = job.title + ' — Careers | CodeSumMix';
      if (titleEl) titleEl.textContent = job.title;
      var deptEl = document.getElementById('job-dept'); if (deptEl) deptEl.textContent = job.department;
      var metaEl = document.getElementById('job-meta-line'); if (metaEl) metaEl.textContent = job.location + ' · ' + job.type;
      var descEl = document.getElementById('job-description'); if (descEl) descEl.textContent = job.description;
      var nameEl = document.getElementById('apply-job-name'); if (nameEl) nameEl.textContent = job.title;
      var subjEl = document.getElementById('apply-subject'); if (subjEl) subjEl.value = 'New application: ' + job.title;
      var posEl = document.getElementById('apply-position'); if (posEl) posEl.value = job.title;

      var form = document.getElementById('apply-form');
      if (form) {
        form.addEventListener('submit', function (e) {
          e.preventDefault();
          var fd = new FormData(form);
          // keep a local copy for the prototype admin view
          var apps = readApps();
          apps.push({
            id: 'app_' + Date.now(), jobId: job.id, jobTitle: job.title,
            name: fd.get('name') || '', email: fd.get('email') || '', phone: fd.get('phone') || '',
            cover: fd.get('cover') || '', cvLink: fd.get('cv_link') || '', appliedAt: new Date().toISOString()
          });
          writeApps(apps);
          var s = document.getElementById('apply-success');
          var btn = form.querySelector('button[type=submit]');
          var label = btn ? btn.innerHTML : '';
          if (btn) { btn.disabled = true; btn.textContent = 'Sending…'; }
          fetch('https://api.web3forms.com/submit', {
            method: 'POST', headers: { 'Accept': 'application/json' }, body: fd
          })
            .then(function (r) { return r.json(); })
            .then(function (data) {
              if (data && data.success) {
                form.classList.add('hide');
                if (s) { s.classList.add('show'); s.scrollIntoView({ behavior: 'smooth', block: 'center' }); }
              } else { throw new Error((data && data.message) || 'Submission failed'); }
            })
            .catch(function () {
              if (btn) { btn.disabled = false; btn.innerHTML = label; }
              alert('Sorry — something went wrong submitting your application. Please email us directly at info@codesummix.com.');
            });
        });
      }
    }
  }

  /* ---------------- ADMIN ---------------- */
  var adminEl = document.getElementById('admin-app');
  if (adminEl) {
    var loginWrap = document.getElementById('admin-login');
    var dash = document.getElementById('admin-dash');
    function authed(){ return sessionStorage.getItem(AUTH_KEY) === '1'; }
    function show(){
      if (authed()) { loginWrap.hidden = true; dash.hidden = false; renderJobs(); renderApps(); }
      else { loginWrap.hidden = false; dash.hidden = true; }
    }

    var loginForm = document.getElementById('admin-login-form');
    var loginErr = document.getElementById('admin-login-error');
    loginForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var pw = document.getElementById('admin-password').value;
      if (pw === DEMO_PASSWORD) { sessionStorage.setItem(AUTH_KEY, '1'); if (loginErr) loginErr.hidden = true; show(); }
      else if (loginErr) { loginErr.hidden = false; }
    });
    var logout = document.getElementById('admin-logout');
    if (logout) logout.addEventListener('click', function () { sessionStorage.removeItem(AUTH_KEY); show(); });

    document.querySelectorAll('[data-tab]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        document.querySelectorAll('[data-tab]').forEach(function (b) { b.classList.remove('is-active'); });
        btn.classList.add('is-active');
        var t = btn.getAttribute('data-tab');
        document.getElementById('tab-jobs').hidden = t !== 'jobs';
        document.getElementById('tab-apps').hidden = t !== 'apps';
      });
    });

    var jobForm = document.getElementById('post-job-form');
    jobForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var fd = new FormData(jobForm);
      var title = (fd.get('title') || '').trim();
      if (!title) return;
      var list = jobs();
      list.unshift({
        id: 'job_' + Date.now(), title: title, department: fd.get('department') || 'General',
        location: fd.get('location') || 'Remote', type: fd.get('type') || 'Full-time',
        description: fd.get('description') || '', postedAt: new Date().toISOString()
      });
      writeJobs(list); jobForm.reset(); renderJobs();
      var ok = document.getElementById('post-job-ok');
      if (ok) { ok.hidden = false; setTimeout(function () { ok.hidden = true; }, 2600); }
    });

    function renderJobs(){
      var wrap = document.getElementById('admin-jobs-list');
      var list = jobs();
      wrap.innerHTML = list.map(function (j) {
        return '<div class="admin-item"><div><b>' + esc(j.title) + '</b>'
          + '<div class="admin-item__meta">' + esc(j.department) + ' · ' + esc(j.location) + ' · ' + esc(j.type) + '</div></div>'
          + '<button class="btn btn--ghost" data-del-job="' + esc(j.id) + '">Delete</button></div>';
      }).join('') || '<p class="form__note">No jobs yet — post one with the form.</p>';
      wrap.querySelectorAll('[data-del-job]').forEach(function (b) {
        b.addEventListener('click', function () {
          writeJobs(jobs().filter(function (j) { return j.id !== b.getAttribute('data-del-job'); }));
          renderJobs();
        });
      });
      var sel = document.getElementById('apps-filter');
      if (sel) { var cur = sel.value; sel.innerHTML = '<option value="">All roles</option>' + list.map(function (j) { return '<option value="' + esc(j.id) + '">' + esc(j.title) + '</option>'; }).join(''); sel.value = cur; }
    }

    function renderApps(){
      var wrap = document.getElementById('admin-apps-list');
      var sel = document.getElementById('apps-filter');
      var f = sel ? sel.value : '';
      var apps = readApps().slice().reverse().filter(function (a) { return !f || a.jobId === f; });
      var c = document.getElementById('apps-count');
      if (c) c.textContent = apps.length + (apps.length === 1 ? ' application' : ' applications');
      wrap.innerHTML = apps.map(function (a) {
        return '<div class="app-card"><div class="app-card__head"><b>' + esc(a.name) + '</b><span>' + fmtDate(a.appliedAt) + '</span></div>'
          + '<div class="app-card__role">' + esc(a.jobTitle) + '</div>'
          + '<div class="app-card__contact"><a href="mailto:' + esc(a.email) + '">' + esc(a.email) + '</a>' + (a.phone ? ' · ' + esc(a.phone) : '') + '</div>'
          + (a.cvLink ? '<div class="app-card__resume">&#128279; <a href="' + esc(a.cvLink) + '" target="_blank" rel="noopener" style="color:var(--text)">CV / portfolio</a></div>' : '')
          + (a.cover ? '<p class="app-card__cover">' + esc(a.cover) + '</p>' : '')
          + '</div>';
      }).join('') || '<p class="form__note">No applications yet. They appear here as candidates apply.</p>';
    }
    var appsFilter = document.getElementById('apps-filter');
    if (appsFilter) appsFilter.addEventListener('change', renderApps);

    show();
  }
})();
