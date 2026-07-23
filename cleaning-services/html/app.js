document.addEventListener("DOMContentLoaded",()=>{
 const page=location.pathname.split("/").pop()||"index.html";
 const map={"index.html":"home","quote.html":"quote","services.html":"services","plans.html":"plans","industries.html":"industries","ai-cleaning.html":"ai","about.html":"about","resources.html":"resources","contact.html":"contact"};
 const links=[["home","index.html","Home"],["services","services.html","Services"],["plans","plans.html","Plans"],["industries","industries.html","Industries"],["about","about.html","About Us"],["resources","resources.html","Resources"],["contact","contact.html","Contact Us"]];
 const header=document.querySelector("header");
 if(header){header.className="site-header";header.innerHTML=`<div class="container-page relative flex min-h-[68px] items-center justify-between gap-5"><a class="logo" href="index.html"><span class="logo-mark">✦</span><span>CleanAll</span></a><nav id="main-nav" class="flex items-center gap-7">${links.map(([k,h,l])=>`<a class="nav-link${map[page]===k?" active":""}" href="${h}">${l}</a>`).join("")}</nav><div class="hidden items-center gap-4 lg:flex"><a class="text-[10px] font-bold" href="tel:16881234567">☎ +1 (888) 123-4567</a><a class="btn-primary" href="quote.html">Get Instant Quote</a></div><button data-menu-button class="grid h-9 w-9 place-items-center rounded border border-[#dce8e8] lg:hidden">☰</button></div>`}
 const button=document.querySelector("[data-menu-button]"),nav=document.querySelector("#main-nav");button?.addEventListener("click",()=>nav.classList.toggle("open"));
 document.querySelectorAll("[data-year]").forEach(el=>el.textContent=new Date().getFullYear());
 const area=document.querySelector("#area"),floors=document.querySelector("#floors"),price=document.querySelector("#quote-price");
 function update(){if(price)price.textContent="$"+Math.round(149+(Number(area?.value)||0)*.03+(Number(floors?.value)||0)*20)}
 area?.addEventListener("input",update);floors?.addEventListener("input",update);update();
});
