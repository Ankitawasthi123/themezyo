document.addEventListener("DOMContentLoaded",()=>{
 const page=location.pathname.split("/").pop()||"index.html";
 const map={"index.html":"home","services.html":"services","managed-services.html":"services","industries.html":"industries","assessment.html":"solutions","case-studies.html":"resources","contact.html":"contact","resources.html":"resources"};
 const links=[["home","index.html","Home"],["services","services.html","Services"],["industries","industries.html","Industries"],["solutions","assessment.html","Solutions"],["resources","case-studies.html","Resources"],["contact","contact.html","Company"]];
 const header=document.querySelector("header");
 if(header){header.className="site-header";header.innerHTML=`<div class="container-page relative flex min-h-[68px] items-center justify-between gap-5"><a class="logo" href="index.html"><span class="logo-mark">⬡</span><span>SecureTech<small>Defend. Detect. Protect.</small></span></a><nav id="main-nav" class="flex items-center gap-7">${links.map(([k,h,l])=>`<a class="nav-link${map[page]===k?" active":""}" href="${h}">${l}</a>`).join("")}</nav><a class="btn-primary hidden lg:inline-flex" href="assessment.html">Book a Security Assessment</a><button data-menu-button class="grid h-9 w-9 place-items-center rounded border border-[#1b2b58] lg:hidden">☰</button></div>`}
 const button=document.querySelector("[data-menu-button]"),nav=document.querySelector("#main-nav");button?.addEventListener("click",()=>nav.classList.toggle("open"));
 document.querySelectorAll("[data-year]").forEach(el=>el.textContent=new Date().getFullYear());
});
