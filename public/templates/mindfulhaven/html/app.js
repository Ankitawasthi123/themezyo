document.addEventListener("DOMContentLoaded", () => {
  const page = location.pathname.split("/").pop() || "index.html";
  const activeMap = {
    "index.html": "home",
    "about.html": "about",
    "services.html": "services",
    "therapists.html": "therapists",
    "therapist-detail.html": "therapists",
    "resources.html": "resources",
    "booking.html": "booking",
    "contact.html": "booking"
  };
  const links = [
    ["home", "index.html", "Home"],
    ["about", "about.html", "About Us"],
    ["therapists", "therapists.html", "Therapists"],
    ["services", "services.html", "Services"],
    ["resources", "resources.html", "Resources"]
  ];
  const active = activeMap[page];
  const header = document.querySelector("header");

  if (header) {
    header.className = "site-header";
    header.innerHTML = `
      <div class="container-page header-inner">
        <a class="logo" href="index.html" aria-label="MindfulHaven home">
          <span class="logo-mark">MH</span>
          <span><strong>MindfulHaven</strong><small>Mental Health, Your Way.</small></span>
        </a>
        <nav id="main-nav" class="nav" aria-label="Main navigation">
          ${links.map(([key, href, label]) => `<a class="nav-link${active === key ? " active" : ""}" href="${href}">${label}</a>`).join("")}
        </nav>
        <a class="btn-primary" href="booking.html">Book a Consultation</a>
        <button class="menu-button" data-menu-button aria-expanded="false" aria-label="Open menu">Menu</button>
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

  document.querySelectorAll("[data-booking-form], [data-contact-form], [data-newsletter]").forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      showToast("Thanks. MindfulHaven will reach out shortly.");
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
});
