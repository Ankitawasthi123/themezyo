document.addEventListener("DOMContentLoaded",()=>{
 const page=location.pathname.split("/").pop()||"index.html";
 const leftNav=[["index.html","Home"],["packages.html","Collections"],["venues.html","Venues"]];
 const rightNav=[["vendors.html","Artisans"],["inspiration.html","Journal"],["about.html","Our Story"]];
 const header=document.querySelector("[data-header]");
 if(header){
  header.classList.toggle("home-header",page==="index.html");
  header.innerHTML=`<header class="site-header editorial-header">
   <div class="concierge-bar"><div class="container"><span>Private celebrations across the Gulf</span><a href="tel:+971501234567">Concierge +971 50 123 4567</a><span>By appointment</span></div></div>
   <div class="container editorial-nav">
    <nav class="nav-wing nav-wing-left">${leftNav.map(([h,l])=>`<a class="${page===h?"active":""}" href="${h}">${l}</a>`).join("")}</nav>
    <a class="editorial-brand" href="index.html" aria-label="Eventique home"><span class="crest"><i data-lucide="gem"></i></span><strong>Eventique</strong><small>Weddings & Celebrations</small></a>
    <nav class="nav-wing nav-wing-right" data-nav>${leftNav.map(([h,l])=>`<a class="mobile-only-link ${page===h?"active":""}" href="${h}">${l}</a>`).join("")}${rightNav.map(([h,l])=>`<a class="${page===h?"active":""}" href="${h}">${l}</a>`).join("")}<a class="consult-link" href="contact.html">Request a consultation <i data-lucide="arrow-up-right"></i></a></nav>
    <button class="menu editorial-menu" data-menu aria-label="Open navigation"><i data-lucide="menu"></i></button>
   </div>
  </header>`;
 }
 const footer=document.querySelector("[data-footer]");
 if(footer)footer.innerHTML=`<footer><div class="container footer-grid"><div><a class="brand" href="index.html"><span class="brand-mark"><i data-lucide="gem"></i></span>Eventique</a><p>Luxury wedding and event planning across Dubai, Abu Dhabi, Doha, and Riyadh.</p></div><div><h3>Quick Links</h3><a href="index.html">Home</a><a href="about.html">About Us</a><a href="packages.html">Packages</a></div><div><h3>Discover</h3><a href="venues.html">Venues</a><a href="vendors.html">Vendors</a><a href="inspiration.html">Inspiration</a></div><div><h3>Support</h3><a href="contact.html">Contact Us</a><a href="planner.html">My Planner</a><a href="ai-design.html">AI Design</a></div><div><h3>Newsletter</h3><p>Receive planning ideas and elegant inspiration.</p><form data-newsletter><input required type="email" placeholder="Enter your email"><button class="button button-gold" style="width:100%;margin-top:8px">Subscribe</button></form></div></div><div class="container footer-bottom">&copy; <span data-year></span> Eventique. All rights reserved.</div></footer>`;
 window.lucide?.createIcons();
 document.querySelectorAll("img").forEach(img=>{
  if(!img.alt)img.alt="Eventique luxury wedding inspiration";
  img.loading=img.closest(".hero,.ai-preview")?"eager":"lazy";
  img.addEventListener("error",()=>{
   if(!img.src.endsWith("/assets/wedding-hero.png")){
    img.src="assets/wedding-hero.png";
    img.classList.add("image-fallback");
   }
  },{once:true});
 });
 document.querySelector("[data-menu]")?.addEventListener("click",()=>document.querySelector("[data-nav]").classList.toggle("open"));
 document.querySelectorAll("[data-filter]").forEach(btn=>btn.addEventListener("click",()=>{const value=btn.dataset.filter;document.querySelectorAll("[data-filter]").forEach(x=>x.classList.toggle("active",x===btn));document.querySelectorAll("[data-type]").forEach(x=>x.classList.toggle("item-hidden",value!=="all"&&x.dataset.type!==value))}));
 document.querySelectorAll("[data-theme]").forEach(btn=>btn.addEventListener("click",()=>{document.querySelectorAll("[data-theme]").forEach(x=>x.classList.toggle("active",x===btn));const preview=document.querySelector("[data-preview]");if(preview)preview.src=btn.querySelector("img").src;showToast(`${btn.dataset.theme} theme selected.`)}));
 document.querySelectorAll("[data-demo-form]").forEach(form=>form.addEventListener("submit",e=>{e.preventDefault();showToast("Thank you. Your request has been received.");form.reset()}));
 document.querySelector("[data-newsletter]")?.addEventListener("submit",e=>{e.preventDefault();showToast("You are now subscribed.");e.currentTarget.reset()});
 document.querySelectorAll("[data-year]").forEach(x=>x.textContent=new Date().getFullYear());
 function showToast(message){const t=document.querySelector("[data-toast]");t.textContent=message;t.classList.add("show");setTimeout(()=>t.classList.remove("show"),2200)}
});
