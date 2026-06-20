// ---- Mobile nav toggle ----
const toggle = document.querySelector('.nav-toggle');
const links  = document.querySelector('.nav-links');
if (toggle) toggle.addEventListener('click', () => links.classList.toggle('open'));

// ---- Active nav link ----
const page = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links a').forEach(a => {
  if (a.getAttribute('href') === page) a.classList.add('active');
});

// ---- Skill bar animation ----
const fills = document.querySelectorAll('.skill-fill');
if (fills.length) {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.style.width = e.target.dataset.width + '%';
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.3 });
  fills.forEach(f => obs.observe(f));
}

// ---- Typing animation (hero only) ----
const typedEl = document.getElementById('typed-text');
if (typedEl) {
  const words = ['Software Developer', 'Problem Solver', 'Team Leader', 'IT Graduate', 'UI Developer'];
  let i = 0, j = 0, deleting = false;
  function type() {
    const cur = words[i];
    typedEl.textContent = cur.substring(0, j);
    if (!deleting) {
      j++;
      if (j > cur.length) { deleting = true; setTimeout(type, 1400); return; }
    } else {
      j--;
      if (j < 0) { deleting = false; i = (i + 1) % words.length; j = 0; }
    }
    setTimeout(type, deleting ? 55 : 95);
  }
  type();
}

// ---- CV Request form ----
const form = document.getElementById('cv-form');
if (form) {
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    const name    = document.getElementById('req-name').value.trim();
    const company = document.getElementById('req-company').value.trim();
    const email   = document.getElementById('req-email').value.trim();
    const reason  = document.getElementById('req-reason').value;
    const message = document.getElementById('req-message').value.trim();

    const subject = encodeURIComponent(`CV Request from ${name} — ${company}`);
    const body    = encodeURIComponent(
      `Hi Lindokuhle,\n\nMy name is ${name} from ${company}.\nI am requesting your CV for: ${reason}.\n\n${message}\n\nKind regards,\n${name}\n${email}`
    );

    window.location.href = `mailto:lindokuhle.ndlala@email.com?subject=${subject}&body=${body}`;

    form.style.display = 'none';
    document.getElementById('form-success').style.display = 'block';
  });
}

// ---- Scroll reveal ----
const reveals = document.querySelectorAll('.project-card, .edu-card, .skill-card');
if (reveals.length) {
  const revealObs = new IntersectionObserver(entries => {
    entries.forEach((e, idx) => {
      if (e.isIntersecting) {
        setTimeout(() => {
          e.target.style.opacity = '1';
          e.target.style.transform = 'translateY(0)';
        }, idx * 80);
        revealObs.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });
  reveals.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    revealObs.observe(el);
  });
}
