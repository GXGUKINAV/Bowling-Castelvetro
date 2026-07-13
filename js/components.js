// ── SHARED NAVBAR HTML ────────────────────
function renderNavbar() {
  const nav = document.getElementById('navbar');
  if (!nav) return;
  nav.innerHTML = `
    <a href="index.html" class="nav-logo">STRIKE<span>•</span>CASTELVETRO</a>
    <ul class="nav-links">
      <li><a href="bowling.html">Bowling</a></li>
      <li><a href="carambola.html">Carambola</a></li>
      <li><a href="casino.html">Casinò</a></li>
      <li><a href="freccette.html">Freccette</a></li>
      <li><a href="giochi.html">Giochi</a></li>
      <li><a href="compleanno.html">Compleanni</a></li>
      <li><a href="contatti.html" class="nav-cta">Contatti</a></li>
    </ul>
    <div class="nav-burger" id="burger">
      <span></span><span></span><span></span>
    </div>
  `;
}

// ── SHARED FOOTER HTML ────────────────────
function renderFooter() {
  const footer = document.getElementById('footer');
  if (!footer) return;
  footer.innerHTML = `
    <div class="footer-inner">
      <div>
        <div class="footer-brand">STRIKE<span>•</span></div>
        <div class="footer-tagline">Il tuo posto per divertirsi a Castelvetro Piacentino.<br>Bowling, carambola, freccette, casinò e molto altro.</div>
      </div>
      <div>
        <div class="footer-col-title">Attività</div>
        <ul class="footer-links">
          <li><a href="bowling.html">Bowling</a></li>
          <li><a href="carambola.html">Carambola</a></li>
          <li><a href="casino.html">Casinò</a></li>
          <li><a href="freccette.html">Freccette</a></li>
          <li><a href="giochi.html">Giochi a Premi</a></li>
          <li><a href="compleanno.html">Feste di Compleanno</a></li>
        </ul>
      </div>
      <div>
        <div class="footer-col-title">Contatti</div>
        <ul class="footer-links">
          <li><a href="tel:+390523824556">📞 0523 824556</a></li>
          <li><a href="mailto:luca@bowlingcastelvetro.com">✉️ Scrivici</a></li>
          <li><a href="contatti.html">📍 Quartiere Longo, 22 — Castelvetro PC</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <span>© 2025 Toy srl · P. Iva 01982660985</span>
      <span>Aperto tutti i giorni · Dal lun–gio 18:00 · Ven–dom 15:00</span>
    </div>
  `;
}

document.addEventListener('DOMContentLoaded', () => {
  renderNavbar();
  renderFooter();
});
