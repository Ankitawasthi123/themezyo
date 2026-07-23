document.addEventListener("DOMContentLoaded",()=>{
 const page=location.pathname.split("/").pop()||"index.html";
 const map={"index.html":"home","residential.html":"residential","commercial.html":"commercial","calculator.html":"solutions","quote.html":"quote","financing.html":"financing","installation.html":"solutions","ai-assistant.html":"solutions","about.html":"about","resources.html":"resources","contact.html":"contact"};
 const links=[["home","index.html","Home"],["residential","residential.html","Residential"],["commercial","commercial.html","Commercial"],["solutions","calculator.html","Solutions"],["financing","financing.html","Financing"],["about","about.html","About Us"],["resources","resources.html","Resources"]];
 const header=document.querySelector("header");
 if(header){header.className="site-header";header.innerHTML=`<div class="container-page relative flex min-h-[68px] items-center justify-between gap-5"><a class="logo" href="index.html"><span class="logo-mark">☀</span><span>Solaris<small>Solar Energy</small></span></a><nav id="main-nav" class="flex items-center gap-7">${links.map(([k,h,l])=>`<a class="nav-link${map[page]===k?" active":""}" href="${h}">${l}</a>`).join("")}<a class="nav-link" href="contact.html">Contact</a></nav><a class="btn-primary hidden lg:inline-flex" href="quote.html">Get a Quote</a><button data-menu-button class="grid h-9 w-9 place-items-center rounded border border-[#dce6e6] lg:hidden">☰</button></div>`}
 const button=document.querySelector("[data-menu-button]"),nav=document.querySelector("#main-nav");button?.addEventListener("click",()=>nav.classList.toggle("open"));
 document.querySelectorAll("[data-year]").forEach(el=>el.textContent=new Date().getFullYear());
 const bill=document.querySelector("#bill"),size=document.querySelector("#system-size"),savings=document.querySelector("#savings");
 function calculate(){if(savings){const annual=(Number(bill?.value)||0)*12*.8;const bonus=(Number(size?.value)||0)*240;savings.textContent="$"+Math.round((annual+bonus)*20).toLocaleString()}}
 bill?.addEventListener("input",calculate);size?.addEventListener("input",calculate);calculate();
});
