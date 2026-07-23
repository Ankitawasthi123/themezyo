document.addEventListener("DOMContentLoaded", () => {
  const page = location.pathname.split("/").pop() || "index.html";
  const activeMap = {
    "index.html": "home",
    "services.html": "services",
    "conditions.html": "conditions",
    "therapists.html": "therapists",
    "resources.html": "resources",
    "insurance.html": "resources",
    "assessment.html": "assessment",
    "booking.html": "assessment",
    "about.html": "about"
  };
  const links = [
    ["home", "index.html", "Home"],
    ["services", "services.html", "Services"],
    ["conditions", "conditions.html", "Conditions"],
    ["therapists", "therapists.html", "Our Therapists"],
    ["resources", "resources.html", "Resources"],
    ["about", "about.html", "About Us"]
  ];
  const active = activeMap[page];
  const header = document.querySelector("header");

  if (header) {
    header.className = "site-header";
    header.innerHTML = `
      <div class="container-page header-shell">
        <div class="header-topline">
          <span>Sports physio, posture rehab and recovery plans</span>
          <a href="tel:0290052458">Call (02) 9005 2458</a>
        </div>
        <div class="header-inner">
          <a class="logo" href="index.html" aria-label="FlexoMove home">
            <span class="logo-mark"><span>F</span></span>
            <span><strong>FlexoMove</strong><small>Physiotherapy</small></span>
          </a>
          <nav id="main-nav" class="nav" aria-label="Main navigation">
            ${links.map(([key, href, label]) => `<a class="nav-link${active === key ? " active" : ""}" href="${href}">${label}</a>`).join("")}
          </nav>
          <div class="header-actions">
            <a class="quick-link" href="assessment.html">AI Check</a>
            <a class="btn-coral" href="booking.html">Book Assessment</a>
            <button class="menu-button" data-menu-button aria-expanded="false" aria-label="Open menu">Menu</button>
          </div>
        </div>
      </div>
    `;
  }

  const nav = document.querySelector("#main-nav");
  const menuButton = document.querySelector("[data-menu-button]");
  menuButton?.addEventListener("click", () => {
    nav?.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(nav?.classList.contains("open")));
  });

  const toast = document.querySelector("[data-toast]");
  let toastTimer;
  const showToast = (message) => {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove("show"), 2400);
  };

  document.querySelectorAll("[data-year]").forEach((element) => {
    element.textContent = new Date().getFullYear();
  });

  document.querySelectorAll("[data-booking-form]").forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      showToast("Assessment request received. FlexoMove will confirm shortly.");
      form.reset();
    });
  });

  document.querySelectorAll("[data-filter]").forEach((button) => {
    button.addEventListener("click", () => {
      const filter = button.dataset.filter;
      document.querySelectorAll("[data-filter]").forEach((item) => item.classList.toggle("active", item === button));
      document.querySelectorAll("[data-card-type]").forEach((card) => {
        card.hidden = filter !== "all" && card.dataset.cardType !== filter;
      });
    });
  });

  document.querySelectorAll("[data-ai-check]").forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelector("[data-ai-status]")?.replaceChildren(document.createTextNode("AI insight ready: movement restriction and posture risk detected. Book an assessment for a treatment plan."));
      showToast("AI movement assistant generated an insight.");
    });
  });
});
