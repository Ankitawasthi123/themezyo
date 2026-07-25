document.addEventListener("DOMContentLoaded", () => {
  const page = location.pathname.split("/").pop() || "index.html";
  const activeMap = {
    "index.html": "home",
    "services.html": "services",
    "vets.html": "vets",
    "pet-health.html": "health",
    "ai-assistant.html": "health",
    "emergency.html": "health",
    "plans.html": "health",
    "resources.html": "resources",
    "about.html": "about",
    "locations.html": "about",
    "booking.html": "booking"
  };
  const links = [
    ["home", "index.html", "Home"],
    ["services", "services.html", "Services"],
    ["vets", "vets.html", "Our Vets"],
    ["health", "pet-health.html", "Pet Health"],
    ["resources", "resources.html", "Resources"],
    ["about", "about.html", "About Us"]
  ];
  const active = activeMap[page];
  const header = document.querySelector("header");

  if (header) {
    header.className = "site-header";
    header.innerHTML = `
      <div class="container-page header-inner">
        <a class="logo" href="index.html" aria-label="PetVerse home">
          <span class="logo-mark">PV</span>
          <span><strong>PetVerse</strong><small>Compassionate Care, Every Time</small></span>
        </a>
        <nav id="main-nav" class="nav" aria-label="Main navigation">
          ${links.map(([key, href, label]) => `<a class="nav-link${active === key ? " active" : ""}" href="${href}">${label}</a>`).join("")}
        </nav>
        <div class="header-actions">
          <a class="emergency-call" href="tel:18884567890">24/7 Emergency<br>(888) 456-7890</a>
          <a class="btn-primary" href="booking.html">Book Appointment</a>
          <button class="menu-button" data-menu-button aria-expanded="false" aria-label="Open menu">Menu</button>
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
      showToast("Appointment request received. PetVerse will confirm shortly.");
      form.reset();
    });
  });

  document.querySelectorAll("[data-newsletter]").forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      showToast("You are subscribed to PetVerse updates.");
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

  document.querySelectorAll("[data-ai-prompt]").forEach((prompt) => {
    prompt.addEventListener("click", () => {
      const chat = document.querySelector("[data-chat]");
      if (!chat) return;
      chat.insertAdjacentHTML("beforeend", `<div class="bubble user">${prompt.textContent.trim()}</div><div class="bubble">Based on the symptoms, monitor hydration, appetite, and energy. If symptoms persist or worsen, schedule a vet visit or call emergency care.</div>`);
      showToast("PetVerse AI assistant replied.");
    });
  });
});
