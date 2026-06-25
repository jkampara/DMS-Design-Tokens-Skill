/* ═══ Hamburger toggle ═══ */
document.addEventListener('DOMContentLoaded', function () {
  var btn = document.querySelector('.nav__hamburger');
  if (!btn) return;
  btn.addEventListener('click', function () {
    var tabs = document.querySelector('.nav__tabs');
    var open = tabs.classList.toggle('is-open');
    btn.setAttribute('aria-expanded', open);
  });
});

/* ═══ Feedback overlay ═══ */
document.addEventListener('DOMContentLoaded', function () {
  var overlay = document.getElementById('feedback-overlay');
  var backdrop = document.getElementById('feedback-backdrop');
  if (!overlay) return;

  function openFeedback() {
    overlay.style.display = '';
    backdrop.style.display = '';
    requestAnimationFrame(function () {
      overlay.classList.add('is-open');
      backdrop.classList.add('is-open');
    });
    document.body.style.overflow = 'hidden';
  }

  function closeFeedback() {
    overlay.classList.remove('is-open');
    backdrop.classList.remove('is-open');
    document.body.style.overflow = '';
    setTimeout(function () {
      overlay.style.display = 'none';
      backdrop.style.display = 'none';
    }, 300);
  }

  document.querySelectorAll('[data-feedback-open]').forEach(function (el) {
    el.addEventListener('click', function (e) {
      e.preventDefault();
      openFeedback();
    });
  });

  var closeBtn = overlay.querySelector('[data-feedback-close]');
  if (closeBtn) closeBtn.addEventListener('click', closeFeedback);
  if (backdrop) backdrop.addEventListener('click', closeFeedback);

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && overlay.classList.contains('is-open')) closeFeedback();
  });
});

/* ═══ Copy to clipboard ═══ */
function copyText(text, btn) {
  var el = document.createElement('textarea');
  el.innerHTML = text;
  var plain = el.value;
  navigator.clipboard.writeText(plain).then(function () {
    btn.classList.add('copied');
    var origHTML = btn.innerHTML;
    btn.innerHTML = '<i class="icon icon--check" style="width:12px;height:12px;"></i> Copied';
    setTimeout(function () {
      btn.classList.remove('copied');
      btn.innerHTML = origHTML;
    }, 1600);
  });
}
