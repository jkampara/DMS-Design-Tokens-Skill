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
