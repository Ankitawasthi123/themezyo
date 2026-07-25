const CloudCrave = (() => {
  const dishes = [
    { name: "Paneer Butter Masala", price: 249, tag: "Bestseller", img: "dish-1", category: "bestsellers", notes: ["medium spicy", "creamy", "no onion option"] },
    { name: "Veg Biryani", price: 229, tag: "Chef choice", img: "dish-2", category: "biryani", notes: ["aromatic rice", "raita", "family pack"] },
    { name: "Dal Makhani", price: 199, tag: "Comfort", img: "dish-3", category: "north", notes: ["slow cooked", "buttery", "mild"] },
    { name: "Chicken Tikka Wrap", price: 199, tag: "Grab n go", img: "dish-4", category: "healthy", notes: ["protein rich", "fresh salad", "quick lunch"] },
    { name: "Peri Peri Pasta", price: 199, tag: "Spicy", img: "dish-5", category: "pasta", notes: ["extra spicy", "cheesy", "customizable"] },
    { name: "Veg Hakka Noodles", price: 179, tag: "Street style", img: "dish-6", category: "chinese", notes: ["wok tossed", "kids like it", "fast delivery"] },
    { name: "Grilled Chicken Bowl", price: 269, tag: "High protein", img: "dish-7", category: "healthy", notes: ["lean protein", "rice bowl", "meal prep"] },
    { name: "Chocolate Lava Cake", price: 149, tag: "Dessert", img: "dish-8", category: "desserts", notes: ["warm", "sweet craving", "party add-on"] },
    { name: "Cold Coffee", price: 99, tag: "Beverage", img: "dish-9", category: "beverages", notes: ["chilled", "smooth", "quick sip"] }
  ];

  let cartCount = Number(localStorage.getItem("cloudcraveCart") || 0);

  const icons = {
    cloud: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M7 18h10a4 4 0 0 0 .5-7.97A6 6 0 0 0 6.2 8.4 4.6 4.6 0 0 0 7 18Z"/><path d="M8 18v2m4-2v2m4-2v2"/></svg>`,
    pin: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M12 21s7-5.2 7-12A7 7 0 0 0 5 9c0 6.8 7 12 7 12Z"/><circle cx="12" cy="9" r="2.5"/></svg>`,
    cart: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M4 5h2l2.2 10.4a2 2 0 0 0 2 1.6h6.9a2 2 0 0 0 1.9-1.4L21 8H7"/><circle cx="10" cy="20" r="1"/><circle cx="18" cy="20" r="1"/></svg>`,
    hygiene: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M12 3 5 6v5c0 4.5 3 8.2 7 10 4-1.8 7-5.5 7-10V6l-7-3Z"/><path d="m9 12 2 2 4-5"/></svg>`,
    flame: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M12 22c4 0 7-2.7 7-6.8 0-3.7-2.4-6.2-4.2-8.2-.7 2.8-2.5 4.1-4.2 5.2.2-2.8-.9-5.2-3.1-7.2C6.7 8.8 5 11.2 5 15.2 5 19.3 8 22 12 22Z"/></svg>`,
    scooter: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M4 16h8l2-5h3a3 3 0 0 1 3 3v2"/><path d="M8 16l2-6h3"/><circle cx="6" cy="18" r="2"/><circle cx="18" cy="18" r="2"/></svg>`,
    chef: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M7 11a4 4 0 0 1 .3-7.9A4.6 4.6 0 0 1 12 6a4.6 4.6 0 0 1 4.7-2.9A4 4 0 0 1 17 11"/><path d="M7 11h10v8a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2v-8Z"/><path d="M10 15h4"/></svg>`,
    party: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M4 20 9 4l11 11L4 20Z"/><path d="m12 7 5 5"/><path d="M16 4h4m-2-2v4M6 6 4 4m14 14 2 2"/></svg>`,
    phone: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.7 19.7 0 0 1-8.6-3.1 19.3 19.3 0 0 1-6-6A19.7 19.7 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z"/></svg>`,
    mail: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M4 4h16v16H4z"/><path d="m4 7 8 6 8-6"/></svg>`,
    users: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M16 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2"/><circle cx="9.5" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.8"/><path d="M16 3.2a4 4 0 0 1 0 7.6"/></svg>`,
    gift: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M20 12v9H4v-9"/><path d="M2 7h20v5H2z"/><path d="M12 7v14"/><path d="M12 7H8.5A2.5 2.5 0 1 1 11 4.5V7Zm0 0h3.5A2.5 2.5 0 1 0 13 4.5V7Z"/></svg>`
  };

  const nav = [
    ["index.html", "Home"],
    ["menu.html", "Menu"],
    ["catering.html", "Catering"],
    ["delivery-areas.html", "Delivery Areas"],
    ["franchise.html", "Franchise"],
    ["about.html", "About Us"],
    ["contact.html", "Contact"]
  ];

  function init() {
    injectLayout();
    renderIcons();
    wireCart();
    wireMenuFilters();
    wireAiChef();
    wireForms();
    updateCart();
  }

  function injectLayout() {
    const page = document.body.dataset.page || "index";
    const header = document.querySelector("[data-cc-header]");
    if (header) {
      header.innerHTML = `
        <div class="cc-container cc-nav">
          <a class="cc-logo" href="index.html" aria-label="CloudCrave home">
            <span class="cc-logo-mark" data-icon="cloud"></span>
            <span>CloudCrave<small>CLOUD KITCHEN</small></span>
          </a>
          <nav class="cc-links" aria-label="Primary navigation">
            ${nav.map(([href, label]) => `<a href="${href}" class="${href.startsWith(page) || (page === "index" && href === "index.html") ? "active" : ""}">${label}</a>`).join("")}
          </nav>
          <div class="cc-actions">
            <span class="cc-delivery-pill"><span data-icon="pin"></span> Delivery in 25+ Areas</span>
            <a class="cc-btn" href="menu.html">Order Now</a>
            <a class="cc-cart" href="cart.html" aria-label="Cart"><span data-icon="cart"></span><span class="cc-cart-count">0</span></a>
            <button class="cc-btn secondary cc-mobile-toggle" type="button">Menu</button>
          </div>
        </div>`;
    }

    const footer = document.querySelector("[data-cc-footer]");
    if (footer) {
      footer.innerHTML = `
        <div class="cc-container">
          <div class="cc-footer-grid">
            <div>
              <a class="cc-logo" href="index.html"><span class="cc-logo-mark" data-icon="cloud"></span><span>CloudCrave<small>CLOUD KITCHEN</small></span></a>
              <p class="mt-4">We serve delicious, hygienic and affordable meals crafted with love and delivered fresh to your doorstep.</p>
              <div class="cc-socials"><a href="#">f</a><a href="#">ig</a><a href="#">x</a><a href="#">yt</a></div>
            </div>
            <div><h4>Quick Links</h4><p><a href="index.html">Home</a><br><a href="menu.html">Menu</a><br><a href="catering.html">Catering</a><br><a href="delivery-areas.html">Delivery Areas</a><br><a href="franchise.html">Franchise</a></p></div>
            <div><h4>Our Menu</h4><p><a href="menu.html">Bestsellers</a><br><a href="menu.html">Healthy Meals</a><br><a href="menu.html">Biryani's</a><br><a href="menu.html">North Indian</a><br><a href="menu.html">Desserts</a></p></div>
            <div><h4>Support</h4><p><a href="#">FAQs</a><br><a href="#">Shipping Policy</a><br><a href="#">Return Policy</a><br><a href="#">Terms & Conditions</a><br><a href="#">Privacy Policy</a></p></div>
            <div><h4>Contact Us</h4><p>+91 98765 43210<br>info@cloudcrave.com<br>123, Food Street,<br>Your City, India<br>10:00 AM - 11:00 PM</p></div>
          </div>
          <p class="text-center mt-10">&copy; 2024 CloudCrave Cloud Kitchen. All rights reserved.</p>
        </div>`;
    }
  }

  function renderIcons() {
    document.querySelectorAll("[data-icon]").forEach((node) => {
      node.innerHTML = icons[node.dataset.icon] || icons.cloud;
    });
  }

  function wireCart() {
    document.querySelectorAll("[data-add-cart]").forEach((button) => {
      button.addEventListener("click", () => {
        cartCount += 1;
        localStorage.setItem("cloudcraveCart", String(cartCount));
        updateCart();
        toast(`${button.dataset.addCart || "Item"} added to cart`);
      });
    });
  }

  function updateCart() {
    document.querySelectorAll(".cc-cart-count").forEach((el) => {
      el.textContent = String(cartCount);
    });
  }

  function wireMenuFilters() {
    const grid = document.querySelector("[data-menu-grid]");
    if (!grid) return;

    const render = (category = "all") => {
      const visible = category === "all" ? dishes : dishes.filter((dish) => dish.category === category || (category === "bestsellers" && dish.tag));
      grid.innerHTML = visible.map((dish) => dishCard(dish)).join("");
      renderIcons();
      wireCart();
    };

    document.querySelectorAll("[data-menu-filter]").forEach((button) => {
      button.addEventListener("click", () => {
        document.querySelectorAll("[data-menu-filter]").forEach((item) => item.classList.remove("active"));
        button.classList.add("active");
        render(button.dataset.menuFilter);
      });
    });
    render("all");
  }

  function dishCard(dish) {
    return `
      <article class="cc-card cc-dish-card">
        <div class="cc-dish-img ${dish.img}"></div>
        <div class="cc-dish-body">
          <span class="cc-tag">${dish.tag}</span>
          <div class="cc-dish-top mt-3">
            <div>
              <h3 class="font-black text-lg">${dish.name}</h3>
              <p class="text-sm text-stone-500 mt-1">${dish.notes.slice(0, 2).join(" / ")}</p>
            </div>
            <b class="cc-price">Rs.${dish.price}</b>
          </div>
          <button class="cc-btn mt-4 w-full" type="button" data-add-cart="${dish.name}">Add</button>
        </div>
      </article>`;
  }

  function wireAiChef() {
    const form = document.querySelector("[data-ai-form]");
    const output = document.querySelector("[data-ai-output]");
    if (!form || !output) return;

    const chips = form.querySelectorAll("[data-ai-choice]");
    chips.forEach((chip) => {
      chip.addEventListener("click", () => {
        chip.classList.toggle("active");
      });
    });

    form.querySelectorAll("[data-ai-radio]").forEach((label) => {
      label.addEventListener("click", () => {
        const input = label.querySelector("input");
        if (!input) return;
        form.querySelectorAll(`input[name="${input.name}"]`).forEach((radio) => {
          radio.closest("[data-ai-radio]")?.classList.remove("active");
        });
        label.classList.add("active");
      });
    });

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const search = form.querySelector("[name='dish']").value.trim();
      const ingredients = form.querySelector("[name='ingredients']")?.value.trim() || "";
      const spice = form.querySelector("[name='spice']:checked")?.value || "Medium";
      const size = form.querySelector("[name='size']:checked")?.value || "Regular";
      const selected = [...chips].filter((chip) => chip.classList.contains("active")).map((chip) => chip.dataset.aiChoice);
      const prompt = [search, ingredients, spice, size, selected.join(" ")].join(" ").toLowerCase();

      output.innerHTML = `
        <div class="cc-ai-loading text-center">
          <div class="cc-loader"></div>
          <h3 class="text-2xl font-black">AI chef is cooking your match...</h3>
          <p class="text-stone-500 mt-2">Checking taste, spice, allergens and delivery fit.</p>
          <div class="cc-progress mt-6"><span></span></div>
        </div>`;

      setTimeout(() => {
        const match = chooseDish(prompt, selected, spice);
        const allergyText = selected.filter((item) => /free|no /i.test(item)).slice(0, 3);
        const detailLines = [
          `${spice} spice level with ${size.toLowerCase()} portion`,
          ingredients ? `Custom note: ${ingredients}` : "Balanced flavor and texture",
          allergyText.length ? allergyText.join(", ") : "No major allergy filters selected",
          "Freshly cooked and delivery friendly"
        ];
        output.innerHTML = `
          <div class="cc-ai-result">
            <div class="flex items-start justify-between gap-4">
              <div>
                <span class="cc-tag">AI Chef Suggests</span>
                <p class="text-stone-500 text-sm mt-1">Here is your perfect match.</p>
              </div>
              <div class="cc-ai-bot" data-icon="chef"></div>
            </div>
            <div class="cc-ai-product mt-5">
              <div class="cc-dish-img ${match.img}"></div>
              <div>
                <span class="cc-tag">Most Recommended</span>
                <h3 class="text-xl font-black mt-2">${match.name}</h3>
                <p class="text-sm text-stone-600 mt-2">Best fit for ${spice.toLowerCase()} spice, ${size.toLowerCase()} serving${selected.length ? `, and ${selected.join(", ").toLowerCase()}` : ""}.</p>
              </div>
            </div>
            <div class="grid grid-cols-2 gap-3 mt-5 text-sm">
              ${detailLines.map((note) => `<div class="flex gap-2"><span class="cc-red font-black">OK</span><span>${note}</span></div>`).join("")}
            </div>
            <div class="flex items-center justify-between mt-6">
              <b class="cc-price">Rs.${match.price}</b>
              <button class="cc-btn" type="button" data-add-cart="${match.name}">Add to Cart</button>
            </div>
            <a class="cc-red font-black mt-5 inline-block" href="menu.html">View Full Recipe -></a>
          </div>`;
        renderIcons();
        wireCart();
      }, 1400);
    });
  }

  function chooseDish(prompt, selected, spice) {
    if (prompt.includes("biryani") || selected.includes("Family Pack")) return dishes[1];
    if (prompt.includes("coffee") || prompt.includes("drink")) return dishes[8];
    if (prompt.includes("dessert") || prompt.includes("sweet")) return dishes[7];
    if (prompt.includes("chicken") || prompt.includes("wrap")) return dishes[3];
    if (prompt.includes("dal") || prompt.includes("makhani")) return dishes[2];
    if (prompt.includes("healthy") || prompt.includes("protein")) return dishes[6];
    if (prompt.includes("pasta")) return dishes[4];
    if (spice === "Extra Spicy" || prompt.includes("spicy")) return dishes[4];
    if (prompt.includes("chinese") || prompt.includes("noodle")) return dishes[5];
    return dishes[0];
  }

  function wireForms() {
    document.querySelectorAll("[data-form-message]").forEach((form) => {
      form.addEventListener("submit", (event) => {
        event.preventDefault();
        const status = form.querySelector("[data-status]");
        if (status) status.textContent = "Thanks. CloudCrave team will contact you shortly.";
        toast("Request submitted");
      });
    });
  }

  function toast(message) {
    let box = document.querySelector(".cc-toast");
    if (!box) {
      box = document.createElement("div");
      box.className = "cc-toast";
      document.body.appendChild(box);
    }
    box.textContent = message;
    box.classList.add("show");
    clearTimeout(box.timer);
    box.timer = setTimeout(() => box.classList.remove("show"), 2200);
  }

  return { init };
})();

document.addEventListener("DOMContentLoaded", CloudCrave.init);
