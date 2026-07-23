document.addEventListener("DOMContentLoaded",()=>{
 const page=location.pathname.split("/").pop()||"index.html";
 const links=[["index.html","Home"],["services.html","Services"],["packages.html","Packages"],["detailing.html","Luxury Detailing"],["diagnosis.html","AI Tools"],["fleet.html","Fleet Services"],["contact.html","Contact"]];
 const header=document.querySelector("[data-header]");
 if(header)header.innerHTML=`<header class="site-header"><div class="container nav"><a class="brand" href="index.html"><span class="brand-mark"><i data-lucide="scan-line"></i></span>AutoLux AI</a><nav class="main-nav" data-nav>${links.map(([h,l])=>`<a class="${page===h?"active":""}" href="${h}">${l}</a>`).join("")}</nav><a class="button button-blue" href="booking.html">Book Service</a><button class="menu" data-menu><i data-lucide="menu"></i></button></div></header>`;
 const footer=document.querySelector("[data-footer]");
 if(footer)footer.innerHTML=`<footer><div class="container footer-grid"><div><a class="brand" href="index.html"><span class="brand-mark"><i data-lucide="scan-line"></i></span>AutoLux AI</a><p>AI-driven auto care with premium service and luxury detailing.</p></div><div><h3>Quick Links</h3><a href="index.html">Home</a><a href="services.html">Services</a><a href="packages.html">Packages</a></div><div><h3>Our Services</h3><a href="diagnosis.html">Diagnostics</a><a href="scanner.html">Damage Scanner</a><a href="detailing.html">Detailing</a></div><div><h3>AI Tools</h3><a href="planner.html">Maintenance Planner</a><a href="tracking.html">Track Service</a><a href="fleet.html">Fleet Services</a></div><div><h3>Contact Us</h3><p>+1 (888) 123-4567<br>info@autoluxai.com<br>Los Angeles, CA</p></div></div><div class="container footer-bottom">&copy; <span data-year></span> AutoLux AI. All rights reserved.</div></footer>`;
 window.lucide?.createIcons();
 document.querySelector("[data-menu]")?.addEventListener("click",()=>document.querySelector("[data-nav]").classList.toggle("open"));
 document.querySelectorAll("[data-demo-form]").forEach(form=>form.addEventListener("submit",e=>{e.preventDefault();toast("Your request has been submitted.");form.reset()}));
 document.querySelectorAll("[data-tab]").forEach(btn=>btn.addEventListener("click",()=>{document.querySelectorAll("[data-tab]").forEach(x=>x.classList.toggle("active",x===btn));toast(`${btn.textContent.trim()} selected.`)}));
 document.querySelector("[data-upload]")?.addEventListener("click",()=>toast("Photo upload ready. Demo scan complete."));
 document.querySelectorAll("img").forEach(img=>{if(!img.alt)img.alt="AutoLux premium vehicle service";img.loading="lazy";img.addEventListener("error",()=>img.src="assets/auto-hero.png",{once:true})});
 document.querySelectorAll("[data-year]").forEach(x=>x.textContent=new Date().getFullYear());
 function toast(msg){const t=document.querySelector("[data-toast]");t.textContent=msg;t.classList.add("show");setTimeout(()=>t.classList.remove("show"),2200)}
});
