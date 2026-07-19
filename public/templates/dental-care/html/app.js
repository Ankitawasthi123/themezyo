document.addEventListener("DOMContentLoaded", () => {
  const page = location.pathname.split("/").pop() || "index.html";
  const activeMap = {
    "index.html": "home",
    "about.html": "about",
    "treatments.html": "treatments",
    "treatment-detail.html": "treatments",
    "dentists.html": "dentists",
    "insurance.html": "insurance",
    "patient-forms.html": "resources",
    "payment-options.html": "resources",
    "blog.html": "resources",
    "faq.html": "resources",
    "locations.html": "contact",
    "contact.html": "contact",
    "booking.html": "booking",
    "ai-analysis.html": "ai",
    "smile-preview.html": "ai"
  };
  const links = [
    ["home", "index.html", "Home"],
    ["about", "about.html", "About Us"],
    ["treatments", "treatments.html", "Treatments"],
    ["dentists", "dentists.html", "Our Dentists"],
    ["insurance", "insurance.html", "Insurance"],
    ["resources", "patient-forms.html", "Patient Resources"],
    ["contact", "contact.html", "Contact"]
  ];
  const active = activeMap[page];
  const header = document.querySelector("header");

  if (header) {
    header.className = "site-header";
    header.innerHTML = `
      <div class="topbar">
        <div class="container-page">
          <div class="country-list"><span>Serving Patients In</span><b>US</b><b>Canada</b><b>UAE</b></div>
          <div class="top-actions"><b>Emergency Care 24/7</b><a href="tel:18881234567">(888) 123-4567</a></div>
        </div>
      </div>
      <div class="container-page header-inner">
        <a class="logo" href="index.html" aria-label="SmileCare home">
          <span class="logo-mark">S</span>
          <span><strong>SmileCare</strong><span>Dental & Orthodontics</span></span>
        </a>
        <nav id="main-nav" class="nav" aria-label="Main navigation">
          ${links.map(([key, href, label]) => `<a class="nav-link${active === key ? " active" : ""}" href="${href}">${label}</a>`).join("")}
        </nav>
        <a class="btn-primary" href="booking.html">Book Appointment</a>
        <button class="menu-button" data-menu-button aria-label="Open menu" aria-expanded="false">Menu</button>
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
      showToast("Appointment request received. We will confirm shortly.");
      form.reset();
    });
  });

  document.querySelectorAll("[data-newsletter]").forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      showToast("Thanks for subscribing to SmileCare updates.");
      form.reset();
    });
  });

  document.querySelectorAll("[data-upload-trigger], [data-sample]").forEach((element) => {
    element.addEventListener("click", () => {
      document.querySelector("[data-ai-status]")?.replaceChildren(document.createTextNode("AI analysis complete: 4 findings detected. Personalized plan generated."));
      showToast("AI dental checkup sample loaded.");
    });
  });

  document.querySelectorAll("[data-cost-range]").forEach((element) => {
    const low = Number(element.dataset.low || 480);
    const high = Number(element.dataset.high || 720);
    element.textContent = `$${low} - $${high} USD`;
  });
});
