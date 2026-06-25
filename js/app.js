/* Tab switching */
document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".tab");
  const panels = document.querySelectorAll(".tab-panel");

  function activateTab(id) {
    tabs.forEach((t) => t.classList.toggle("active", t.dataset.tab === id));
    panels.forEach((p) => p.classList.toggle("active", p.id === id));
    history.replaceState(null, "", `#${id}`);
  }

  tabs.forEach((t) =>
    t.addEventListener("click", () => activateTab(t.dataset.tab))
  );

  const hash = location.hash.slice(1);
  const valid = [...tabs].map((t) => t.dataset.tab);
  activateTab(valid.includes(hash) ? hash : valid[0]);
});

/* Copy to clipboard */
function copyText(text, btn) {
  const plain = new DOMParser()
    .parseFromString(text, "text/html")
    .body.textContent;
  navigator.clipboard.writeText(plain).then(() => {
    const prev = btn.textContent;
    btn.textContent = "Copied";
    btn.classList.add("copied");
    setTimeout(() => {
      btn.textContent = prev;
      btn.classList.remove("copied");
    }, 1600);
  });
}
