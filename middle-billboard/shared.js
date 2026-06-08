// ─────────────────────────────────────────────
// MIDDLE CALGARY — shared.js
// Injects nav + footer into every page
// ─────────────────────────────────────────────

const LOGO_SVG = `<a href="/index.html" class="logo-link">
  <img src="/assets/logo.png" alt="Middle Calgary" class="logo-img">
</a>`;

function getNavHTML(activePage) {
  const pages = [
    { href: "/index.html",          label: "Discover",       id: "discover"  },
    { href: "/category/food-drink.html", label: "Food & Drink",   id: "food"     },
    { href: "/category/events.html",     label: "Events",         id: "events"   },
    { href: "/category/wellness.html",   label: "Wellness",       id: "wellness" },
    { href: "/category/shopping.html",   label: "Shopping",       id: "shopping" },
    { href: "/directory.html",           label: "Directory",      id: "directory"},
  ];
  const links = pages.map(p => {
    const active = p.id === activePage ? "active" : "";
    return `<a href="${p.href}" class="nav-link ${active}">${p.label}</a>`;
  }).join("");
  return `
    <nav class="site-nav">
      <a href="/index.html" class="logo-link">
        <img src="/assets/logo.png" alt="Middle" class="logo-img">
      </a>
      <div class="nav-links">${links}</div>
      <a href="/claim.html" class="nav-cta">List your business</a>
      <button class="nav-hamburger" onclick="toggleMobileNav()" aria-label="Menu">☰</button>
    </nav>
    <div class="mobile-nav" id="mobileNav">
      ${pages.map(p=>`<a href="${p.href}" class="mobile-nav-link">${p.label}</a>`).join("")}
      <a href="/claim.html" class="mobile-nav-cta">List your business →</a>
    </div>
  `;
}

function getFooterHTML() {
  return `
    <footer class="site-footer">
      <div class="footer-inner">
        <div class="footer-brand">
          <img src="/assets/logo.png" alt="Middle" class="footer-logo">
          <p>Calgary's city billboard.<br>Local deals, events & businesses.</p>
        </div>
        <div class="footer-links">
          <div class="footer-col">
            <h4>Discover</h4>
            <a href="/category/food-drink.html">Food & Drink</a>
            <a href="/category/events.html">Events</a>
            <a href="/category/wellness.html">Wellness</a>
            <a href="/category/shopping.html">Shopping</a>
          </div>
          <div class="footer-col">
            <h4>Platform</h4>
            <a href="/directory.html">Directory</a>
            <a href="/claim.html">List your business</a>
            <a href="/claim.html">Advertise</a>
          </div>
          <div class="footer-col">
            <h4>Contact</h4>
            <a href="mailto:hello@middletoronto.ca">hello@middletoronto.ca</a>
            <a href="#">Instagram</a>
            <a href="#">Facebook</a>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <span>© 2026 Middle Calgary. All rights reserved.</span>
        <span>Made in Calgary 🤠</span>
      </div>
    </footer>
  `;
}

function toggleMobileNav() {
  document.getElementById("mobileNav").classList.toggle("open");
}

function injectNav(activePage) {
  document.getElementById("nav-placeholder").innerHTML = getNavHTML(activePage);
}

function injectFooter() {
  const el = document.getElementById("footer-placeholder");
  if (el) el.innerHTML = getFooterHTML();
}