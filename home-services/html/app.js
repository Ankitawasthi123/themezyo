document.addEventListener("DOMContentLoaded", () => {
  const page = location.pathname.split("/").pop() || "index.html";
  const activeMap = {
    "index.html":"home","about.html":"about","services.html":"services","service-detail.html":"services",
    "financing.html":"financing","service-areas.html":"areas","reviews.html":"reviews",
    "blog.html":"blog","contact.html":"contact","estimate.html":"estimate","faq.html":"faq"
  };
  const links = [
    ["home","index.html","Home"],["about","about.html","About Us"],["services","services.html","Services"],
    ["financing","financing.html","Financing"],["areas","service-areas.html","Service Areas"],
    ["reviews","reviews.html","Reviews"],["blog","blog.html","Blog"],["faq","faq.html","FAQ"],["contact","contact.html","Contact"]
  ];
  const header = document.querySelector("header");
  if (header) {
    header.className = "site-header";
    header.innerHTML = `<div class="topbar"><div class="container-page flex min-h-7 items-center justify-between"><span>24/7 Emergency Services</span><span>Licensed · Insured · Trusted</span><span class="hidden sm:block">Serving New York, NJ, CT & Surrounding Areas</span></div></div>
    <div class="container-page relative flex min-h-[72px] items-center justify-between gap-5">
      <a class="logo" href="index.html"><span class="logo-mark">F</span><span>FIXIT PRO<small>HOME SERVICES</small></span></a>
      <nav id="main-nav" class="flex items-center gap-6">${links.map(([key,href,label])=>`<a class="nav-link${activeMap[page]===key?" active":""}" href="${href}">${label}</a>`).join("")}</nav>
      <div class="hidden items-center gap-3 lg:flex"><a class="text-[11px] font-extrabold text-[#032653]" href="tel:1234567890">☎ (123) 456-7890</a><a class="btn-primary" href="estimate.html">Get Free Estimate</a></div>
      <button data-menu-button class="grid h-10 w-10 place-items-center rounded border border-[#dbe4ef] lg:hidden" aria-label="Open menu">☰</button>
    </div>`;
  }
  const button=document.querySelector("[data-menu-button]"),nav=document.querySelector("#main-nav");
  button?.addEventListener("click",()=>nav.classList.toggle("open"));
  document.querySelectorAll("[data-year]").forEach(el=>el.textContent=new Date().getFullYear());
  document.querySelectorAll("[data-accordion-button]").forEach(button=>button.addEventListener("click",()=>button.closest(".accordion-item").classList.toggle("open")));
});
