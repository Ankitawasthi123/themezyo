document.addEventListener("DOMContentLoaded",()=>{
 const page=location.pathname.split("/").pop()||"index.html";
 const map={"index.html":"home","services.html":"services","packages.html":"packages","tax-calendar.html":"resources","consultation.html":"consultation","ai-tools.html":"ai","about.html":"about","resources.html":"resources","contact.html":"contact"};
 const links=[["home","index.html","Home"],["services","services.html","Services"],["packages","packages.html","Packages"],["ai","ai-tools.html","AI Tools"],["resources","resources.html","Resources"],["about","about.html","About Us"]];
 const header=document.querySelector("header");
 if(header){header.className="site-header";header.innerHTML=`<div class="container-page relative flex min-h-[68px] items-center justify-between gap-5"><a class="logo" href="index.html"><span class="logo-mark">▥</span><span>LedgerPro<small>ACCOUNTING</small></span></a><nav id="main-nav" class="flex items-center gap-7">${links.map(([k,h,l])=>`<a class="nav-link${map[page]===k?" active":""}" href="${h}">${l}</a>`).join("")}</nav><div class="hidden items-center gap-4 lg:flex"><a class="text-[10px] font-bold" href="tel:08001234567">☎ (0800) 123-4567</a><a class="btn-primary" href="consultation.html">Book a Consultation</a></div><button data-menu-button class="grid h-9 w-9 place-items-center rounded border border-[#dde6e1] lg:hidden">☰</button></div>`}
 const button=document.querySelector("[data-menu-button]"),nav=document.querySelector("#main-nav");button?.addEventListener("click",()=>nav.classList.toggle("open"));
 document.querySelectorAll("[data-year]").forEach(el=>el.textContent=new Date().getFullYear());
});
