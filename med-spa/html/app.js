document.addEventListener("DOMContentLoaded", () => {
  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  const activePages = {
    "index.html": "home",
    "about.html": "about",
    "doctors.html": "about",
    "treatments.html": "treatments",
    "treatment-detail.html": "treatments",
    "gallery.html": "results",
    "pricing.html": "pricing",
    "financing.html": "pricing",
    "membership.html": "membership",
    "blog.html": "blog",
    "faq.html": "faq",
    "contact.html": "contact",
    "booking.html": "booking"
  };
  const activePage = activePages[currentPage];
  const header = document.querySelector("header");

  if (header) {
    const links = [
      ["home", "index.html", "Home"],
      ["about", "about.html", "About Us"],
      ["treatments", "treatments.html", "Treatments"],
      ["results", "gallery.html", "Results"],
      ["pricing", "pricing.html", "Pricing"],
      ["membership", "membership.html", "Membership"],
      ["blog", "blog.html", "Blog"],
      ["faq", "faq.html", "FAQ"],
      ["contact", "contact.html", "Contact"]
    ];

    header.className = "site-header";
    header.innerHTML = `
      <div class="container-page relative flex min-h-[74px] items-center justify-between gap-5">
        <a class="site-logo" href="index.html">GLOW<span class="text-[#e62f63]">.</span></a>
        <nav id="main-nav" class="flex items-center gap-6">
          ${links.map(([key, href, label]) => `
            <a class="nav-link${activePage === key ? " active" : ""}" href="${href}">${label}</a>
          `).join("")}
        </nav>
        <a class="btn-primary hidden lg:inline-flex${activePage === "booking" ? " ring-2 ring-[#f4a9ba]" : ""}" href="booking.html">Book Consultation</a>
        <button data-menu-button aria-expanded="false" class="grid h-10 w-10 place-items-center rounded border border-[#efd9de] lg:hidden" aria-label="Open menu">☰</button>
      </div>
    `;
  }

  const button = document.querySelector("[data-menu-button]");
  const nav = document.querySelector("#main-nav");
  if (button && nav) {
    button.addEventListener("click", () => {
      nav.classList.toggle("open");
      button.setAttribute("aria-expanded", String(nav.classList.contains("open")));
    });
  }

  document.querySelectorAll("[data-year]").forEach((element) => {
    element.textContent = new Date().getFullYear();
  });

  document.querySelectorAll("[data-accordion-button]").forEach((button) => {
    button.addEventListener("click", () => {
      button.closest(".accordion-item").classList.toggle("open");
    });
  });

  document.querySelectorAll("[data-treatment-filter]").forEach((button) => {
    button.addEventListener("click", () => {
      const filter = button.dataset.treatmentFilter;
      document.querySelectorAll("[data-treatment-card]").forEach((card) => {
        card.hidden = filter !== "all" && card.dataset.category !== filter;
      });
    });
  });
});
