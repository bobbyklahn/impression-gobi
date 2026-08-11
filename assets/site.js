/* ============================================================
   IMPRESSION GOBI — global site behaviors
   mobile menu, scroll nav, reveal-on-scroll
   ============================================================ */

(() => {
  // ---------- Nav scroll state ----------
  const nav = document.querySelector(".nav");
  if (nav) {
    const onScroll = () => nav.classList.toggle("scrolled", window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  // ---------- Mobile menu ----------
  const menuBtn = document.querySelector(".menu-btn");
  const links = document.querySelector(".nav .links");
  if (menuBtn && links) {
    menuBtn.addEventListener("click", () => {
      const open = links.classList.toggle("open");
      menuBtn.textContent = open ? "Close" : "Menu";
    });
  }

  // ---------- Reveal on scroll ----------
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
  }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
  document.querySelectorAll(".reveal,.reveal-stagger").forEach(el => io.observe(el));

  // ---------- Active page highlight ----------
  const here = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav .links a").forEach(a => {
    const href = a.getAttribute("href");
    if (href === here || (here === "" && href === "index.html")) a.classList.add("active");
  });

  // ---------- Loader hide on full load ----------
  window.addEventListener("load", () => {
    const ld = document.querySelector(".loader");
    if (ld) setTimeout(() => ld.classList.add("hide"), 300);
  });
  // safety: hide loader after 8s no matter what
  setTimeout(() => { const ld = document.querySelector(".loader"); if (ld) ld.classList.add("hide"); }, 8000);

  // ---------- Journal article modal ----------
  const store = document.getElementById("journal-articles");
  if (store) {
    // build modal once
    const modal = document.createElement("div");
    modal.className = "article-modal";
    modal.innerHTML = `
      <div class="backdrop"></div>
      <article class="sheet">
        <button class="close" aria-label="Close">CLOSE</button>
        <div class="date"></div>
        <h2 class="serif"></h2>
        <div class="body"></div>
        <div class="signoff">— I.G.</div>
      </article>`;
    document.body.appendChild(modal);

    const backdrop = modal.querySelector(".backdrop");
    const closeBtn = modal.querySelector(".close");
    const dateEl   = modal.querySelector(".date");
    const titleEl  = modal.querySelector("h2");
    const bodyEl   = modal.querySelector(".body");

    const open = (slug) => {
      const src = store.querySelector(`[data-slug="${slug}"]`);
      if (!src) return;
      dateEl.textContent  = src.dataset.date  || "";
      titleEl.textContent = src.dataset.title || "";
      bodyEl.innerHTML    = src.innerHTML;
      modal.classList.add("open");
      document.body.classList.add("modal-lock");
      modal.scrollTop = 0;
    };
    const close = () => {
      modal.classList.remove("open");
      document.body.classList.remove("modal-lock");
    };

    backdrop.addEventListener("click", close);
    closeBtn.addEventListener("click", close);
    window.addEventListener("keydown", e => { if (e.key === "Escape") close(); });

    // Any element with data-slug anywhere on the page is a trigger
    document.querySelectorAll("[data-slug]").forEach(el => {
      if (el.closest("#journal-articles")) return; // skip the store entries
      el.addEventListener("click", e => {
        e.preventDefault();
        open(el.dataset.slug);
      });
    });
  }
})();
