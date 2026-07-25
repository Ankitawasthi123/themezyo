const iconPaths = {
  leaf: '<path d="M12 21c-3-2-5-5-5-9 0-5 4-8 11-9 1 7-2 12-7 14"/><path d="M12 21c1-6 4-10 8-13"/><path d="M7 14c-3-1-5-4-5-8 5 0 8 2 10 6"/>',
  phone: '<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.3 19.3 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.7.7 2.5a2 2 0 0 1-.4 2.1L8.1 9.6a16 16 0 0 0 6.3 6.3l1.3-1.3a2 2 0 0 1 2.1-.4c.8.3 1.6.6 2.5.7a2 2 0 0 1 1.7 2z"/>',
  message: '<path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z"/><path d="M8 9h8M8 13h5"/>',
  calendar: '<path d="M8 2v4M16 2v4M3 10h18"/><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01"/>',
  shield: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-5"/>',
  bottle: '<path d="M10 2h4v4l2 3v10a3 3 0 0 1-3 3h-2a3 3 0 0 1-3-3V9l2-3z"/><path d="M9 13h6M10 6h4"/>',
  link: '<path d="M10 13a5 5 0 0 0 7.1.1l2-2a5 5 0 0 0-7.1-7.1l-1.1 1.1"/><path d="M14 11a5 5 0 0 0-7.1-.1l-2 2A5 5 0 0 0 12 20l1.1-1.1"/>',
  pill: '<path d="M10.5 20.5 20.5 10.5a5 5 0 0 0-7-7L3.5 13.5a5 5 0 0 0 7 7z"/><path d="m8.5 8.5 7 7"/>',
  dice: '<rect x="4" y="4" width="16" height="16" rx="3"/><path d="M8 8h.01M16 8h.01M12 12h.01M8 16h.01M16 16h.01"/>',
  brain: '<path d="M9 5a3 3 0 0 0-3 3v1a4 4 0 0 0 0 8 3 3 0 0 0 3 3"/><path d="M15 5a3 3 0 0 1 3 3v1a4 4 0 0 1 0 8 3 3 0 0 1-3 3"/><path d="M9 5a3 3 0 0 1 6 0v15a3 3 0 0 1-6 0z"/><path d="M8 12h8M9 16h6"/>',
  users: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.8M16 3.1a4 4 0 0 1 0 7.8"/>',
  home: '<path d="m3 11 9-8 9 8"/><path d="M5 10v10h14V10"/><path d="M9 20v-6h6v6"/>',
  heart: '<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 1 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z"/>',
  award: '<circle cx="12" cy="8" r="5"/><path d="M8.5 12.5 7 22l5-3 5 3-1.5-9.5"/>',
  article: '<path d="M6 2h9l5 5v15H6z"/><path d="M14 2v6h6M9 13h6M9 17h6M9 9h2"/>',
  settings: '<path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/><path d="M19.4 15a1.6 1.6 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.6 1.6 0 0 0-1.8-.3 1.6 1.6 0 0 0-1 1.5V22a2 2 0 1 1-4 0v-.2a1.6 1.6 0 0 0-1-1.5 1.6 1.6 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.6 1.6 0 0 0 .3-1.8 1.6 1.6 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.2a1.6 1.6 0 0 0 1.5-1 1.6 1.6 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.6 1.6 0 0 0 1.8.3h.1a1.6 1.6 0 0 0 1-1.5V2a2 2 0 1 1 4 0v.2a1.6 1.6 0 0 0 1 1.5h.1a1.6 1.6 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.6 1.6 0 0 0-.3 1.8v.1a1.6 1.6 0 0 0 1.5 1h.2a2 2 0 1 1 0 4h-.2a1.6 1.6 0 0 0-1.5 1z"/>',
  mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>',
  map: '<path d="M12 22s7-5.5 7-12a7 7 0 0 0-14 0c0 6.5 7 12 7 12z"/><circle cx="12" cy="10" r="2.5"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  check: '<path d="m5 12 4 4L19 6"/>',
};

function icon(name) {
  return `<svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${iconPaths[name] || iconPaths.check}</svg>`;
}

function hydrateIcons(root = document) {
  root.querySelectorAll("[data-icon]").forEach((item) => {
    item.innerHTML = icon(item.dataset.icon);
  });
}

function initRecoveryPath() {
  const page = document.body.dataset.page || "home";
  const header = document.querySelector("[data-header]");
  const footer = document.querySelector("[data-footer]");
  const nav = [
    ["home", "Home", "index.html"],
    ["programs", "Programs", "programs.html"],
    ["admissions", "Admissions", "admissions.html"],
    ["insurance", "Insurance", "insurance.html"],
    ["resources", "Resources", "resources.html"],
    ["about", "About Us", "about.html"],
    ["contact", "Contact", "contact.html"],
  ];

  if (header) {
    header.innerHTML = `<header class="site-header"><div class="container nav-wrap"><a class="brand" href="index.html"><span class="brand-mark" data-icon="leaf"></span><span class="brand-copy">RecoveryPath<small>Addiction Recovery Center</small></span></a><nav class="main-nav" id="main-nav">${nav.map((n) => `<a class="${page === n[0] ? "active" : ""}" href="${n[2]}">${n[1]}</a>`).join("")}</nav><a class="phone-pill" href="hotline.html"><span class="pill-icon" data-icon="phone"></span><span>24/7 Confidential Hotline<strong>(800) 123-4567</strong></span></a><button class="menu" aria-label="Open menu" aria-expanded="false">Menu</button></div></header>`;
  }

  if (footer) {
    footer.innerHTML = `<footer><div class="container"><div class="grid footer-grid"><div><a class="brand" href="index.html"><span class="brand-mark" data-icon="leaf"></span><span class="brand-copy">RecoveryPath<small>Addiction Recovery Center</small></span></a><p>Compassionate, evidence-based treatment for lasting recovery. Help is available 24/7.</p></div><div><h4>Programs</h4><a href="program-detail.html">Detox</a><br><a href="programs.html">Residential Care</a><br><a href="programs.html">Outpatient</a></div><div><h4>Get Help</h4><a href="admissions.html">Admissions</a><br><a href="insurance.html">Verify Insurance</a><br><a href="assessment.html">Assessment</a></div><div><h4>Resources</h4><a href="resources.html">Recovery Library</a><br><a href="resources.html">Family Support</a><br><a href="resources.html">Events</a></div><div><h4>Contact</h4><p>(800) 123-4567<br>help@recoverypath.com<br>123 Healing Way, Hope City</p></div></div><div class="copyright">&copy; <span data-year></span> RecoveryPath. This demonstration template is not a medical provider.</div></div></footer>`;
  }

  hydrateIcons();

  document.querySelector("[data-year]")?.replaceChildren(String(new Date().getFullYear()));

  const menu = document.querySelector(".menu");
  const mainNav = document.querySelector("#main-nav");
  menu?.addEventListener("click", () => {
    const open = mainNav.classList.toggle("open");
    menu.setAttribute("aria-expanded", open);
    menu.textContent = open ? "Close" : "Menu";
  });

  document.querySelectorAll("[data-form]").forEach((form) => form.addEventListener("submit", (event) => {
    event.preventDefault();
    form.querySelector(".form-status")?.classList.add("show");
    form.querySelector("button[type=submit]").textContent = "Submitted";
  }));

  document.querySelectorAll(".tab").forEach((tab) => tab.addEventListener("click", () => {
    tab.parentElement.querySelectorAll(".tab").forEach((item) => item.classList.remove("active"));
    tab.classList.add("active");
  }));
}

initRecoveryPath();
