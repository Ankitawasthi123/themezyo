document.addEventListener("DOMContentLoaded",()=>{
 const page=location.pathname.split("/").pop()||"index.html";
 const map={"index.html":"home","about.html":"about","practice-areas.html":"practice","service-detail.html":"practice","attorneys.html":"attorneys","assessment.html":"assessment","case-results.html":"results","booking.html":"booking","pricing.html":"pricing","blog.html":"blog","faq.html":"faq","contact.html":"contact"};
 const links=[["home","index.html","Home"],["about","about.html","About Us"],["practice","practice-areas.html","Practice Areas"],["attorneys","attorneys.html","Attorneys"],["assessment","assessment.html","Assessment"],["results","case-results.html","Case Results"],["pricing","pricing.html","Pricing"],["blog","blog.html","Blog"],["faq","faq.html","FAQ"],["contact","contact.html","Contact"]];
 const header=document.querySelector("header");
 if(header){header.className="site-header";header.innerHTML=`<div class="container-page relative flex min-h-[70px] items-center justify-between gap-5"><a class="logo" href="index.html"><span class="logo-mark">⚖</span><span>LEXORA<small>LAW & ASSOCIATES</small></span></a><nav id="main-nav" class="flex items-center gap-5">${links.map(([k,h,l])=>`<a class="nav-link${map[page]===k?" active":""}" href="${h}">${l}</a>`).join("")}</nav><a class="btn-gold hidden lg:inline-flex" href="booking.html">Free Consultation</a><button data-menu-button class="grid h-9 w-9 place-items-center rounded border border-white/20 lg:hidden" aria-label="Open menu">☰</button></div>`}
 const button=document.querySelector("[data-menu-button]"),nav=document.querySelector("#main-nav");button?.addEventListener("click",()=>nav.classList.toggle("open"));
 document.querySelectorAll("[data-year]").forEach(el=>el.textContent=new Date().getFullYear());
 document.querySelectorAll("[data-accordion-button]").forEach(b=>b.addEventListener("click",()=>b.closest(".accordion-item").classList.toggle("open")));
});
