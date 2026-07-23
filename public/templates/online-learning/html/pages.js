document.addEventListener("DOMContentLoaded", () => {
  window.lucide?.createIcons();
  const pageName = location.pathname.split("/").pop() || "index.html";

  const publicFooter = `
    <footer class="inner-footer">
      <div class="container footer-grid">
        <div>
          <a class="brand footer-brand" href="index.html"><span class="brand-mark"><i data-lucide="sparkles"></i></span><span>Skillora</span></a>
          <p>Practical, expert-led learning that helps people build useful skills and create new opportunities.</p>
          <div class="socials"><a href="contact.html" aria-label="LinkedIn"><i data-lucide="linkedin"></i></a><a href="contact.html" aria-label="Instagram"><i data-lucide="instagram"></i></a><a href="contact.html" aria-label="YouTube"><i data-lucide="youtube"></i></a></div>
        </div>
        <div><h3>Learn</h3><a href="courses.html">Browse courses</a><a href="programs.html">Career programs</a><a href="instructors.html">Instructors</a><a href="certificates.html">Certificates</a></div>
        <div><h3>Company</h3><a href="index.html#business">For business</a><a href="blog.html">Learning resources</a><a href="contact.html">Contact us</a><a href="contact.html">Help center</a></div>
        <div><h3>Learner area</h3><a href="login.html">Log in</a><a href="signup.html">Create account</a><a href="dashboard.html">Dashboard</a><a href="my-learning.html">My learning</a></div>
        <div class="newsletter"><h3>Useful learning notes</h3><p>Get one practical guide and fresh course picks each month.</p><form data-inner-newsletter><input type="email" required placeholder="Enter your email"><button aria-label="Subscribe"><i data-lucide="arrow-right"></i></button></form><small data-inner-newsletter-status></small></div>
      </div>
      <div class="container footer-bottom"><span>&copy; <span data-year></span> Skillora. All rights reserved.</span><span><a href="contact.html">Privacy</a> &nbsp; | &nbsp; <a href="contact.html">Terms</a></span></div>
    </footer>`;

  const meaningfulSections = {
    "courses.html": `
      <section class="inner-support"><div class="container">
        <div class="support-heading"><span class="section-kicker">Choose with confidence</span><h2>Find the right course for your next step</h2><p>Every Skillora course includes practical work, clear outcomes, and lifetime access to the material.</p></div>
        <div class="support-grid"><article><i data-lucide="route"></i><h3>Start at your level</h3><p>Use level filters to choose a comfortable starting point, then progress into deeper topics.</p></article><article><i data-lucide="briefcase-business"></i><h3>Build useful projects</h3><p>Apply each topic through realistic assignments that can become portfolio evidence.</p></article><article><i data-lucide="badge-check"></i><h3>Earn recognition</h3><p>Complete the course and receive a verified certificate you can share professionally.</p></article></div>
      </div></section>`,
    "course-detail.html": `
      <section class="inner-support"><div class="container">
        <div class="support-heading"><span class="section-kicker">Designed for completion</span><h2>More than a library of videos</h2><p>This course combines guided lessons, practice, feedback, and a clear weekly study plan.</p></div>
        <div class="support-grid"><article><i data-lucide="calendar-check"></i><h3>Flexible study plan</h3><p>Follow the suggested schedule or learn at your own pace with lifetime access.</p></article><article><i data-lucide="messages-square"></i><h3>Instructor support</h3><p>Use lesson discussions and structured feedback when you need clarification.</p></article><article><i data-lucide="folder-kanban"></i><h3>Portfolio outcome</h3><p>Finish with practical work that demonstrates what you can do, not only what you watched.</p></article></div>
      </div></section>`,
    "programs.html": `
      <section class="inner-support"><div class="container">
        <div class="support-heading"><span class="section-kicker">A complete career path</span><h2>What every professional program includes</h2><p>Programs connect individual courses into a structured path with milestones and career-focused outcomes.</p></div>
        <div class="support-grid"><article><i data-lucide="map"></i><h3>Structured roadmap</h3><p>Move from foundations to advanced projects in an order that builds confidence.</p></article><article><i data-lucide="user-round-check"></i><h3>Mentor checkpoints</h3><p>Review progress, unblock difficult topics, and improve your final project.</p></article><article><i data-lucide="file-check-2"></i><h3>Career preparation</h3><p>Graduate with portfolio work, interview practice, and a verified program credential.</p></article></div>
      </div></section>`,
    "instructors.html": `
      <section class="inner-support"><div class="container">
        <div class="support-heading"><span class="section-kicker">Teaching that stays practical</span><h2>How we select Skillora instructors</h2><p>Our instructors combine subject knowledge with real-world experience and a clear teaching style.</p></div>
        <div class="support-grid"><article><i data-lucide="building-2"></i><h3>Industry experience</h3><p>Lessons reflect current tools, workflows, and expectations from professional teams.</p></article><article><i data-lucide="presentation"></i><h3>Clear instruction</h3><p>Complex ideas are broken into focused lessons with examples and guided practice.</p></article><article><i data-lucide="refresh-cw"></i><h3>Updated material</h3><p>Course content is reviewed regularly as tools, standards, and practices evolve.</p></article></div>
      </div></section>`,
    "blog.html": `
      <section class="inner-support"><div class="container">
        <div class="resource-callout"><div><span class="section-kicker">Free learning guide</span><h2>Build a study routine that actually lasts</h2><p>Use our simple four-week framework to choose a goal, protect learning time, and turn lessons into practical results.</p></div><a class="button button-primary button-large" href="signup.html">Get the free guide</a></div>
      </div></section>`,
    "contact.html": `
      <section class="inner-support"><div class="container">
        <div class="support-heading"><span class="section-kicker">Common questions</span><h2>Before you send a message</h2></div>
        <div class="faq-grid"><details><summary>Can I learn at my own pace?</summary><p>Yes. Individual courses include lifetime access, so you can pause and return whenever needed.</p></details><details><summary>Do courses include certificates?</summary><p>Yes. Eligible courses and programs provide a verified certificate after completion.</p></details><details><summary>Can Skillora train a team?</summary><p>Yes. Team plans include assigned learning paths, progress reporting, and centralized billing.</p></details><details><summary>Can I change to another course?</summary><p>Contact learner support and we will help review the best option for your goals.</p></details></div>
      </div></section>`
  };

  const publicPages = ["courses.html", "course-detail.html", "programs.html", "instructors.html", "blog.html", "contact.html", "404.html"];
  if (publicPages.includes(pageName)) {
    const main = document.querySelector("main");
    if (meaningfulSections[pageName]) main?.insertAdjacentHTML("afterend", meaningfulSections[pageName]);
    document.body.insertAdjacentHTML("beforeend", publicFooter);
  }

  const appShell = document.querySelector(".app-shell");
  if (appShell) {
    const dashMain = document.querySelector(".dash-main");
    dashMain?.insertAdjacentHTML("beforeend", `<footer class="app-footer"><span>&copy; <span data-year></span> Skillora</span><nav><a href="courses.html">Browse courses</a><a href="contact.html">Learner support</a><a href="index.html">Public website</a></nav></footer>`);
  }

  if (document.body.classList.contains("auth-page")) {
    document.body.insertAdjacentHTML("beforeend", `<footer class="auth-footer"><a href="index.html">Home</a><a href="courses.html">Browse courses</a><a href="contact.html">Need help?</a><span>&copy; <span data-year></span> Skillora</span></footer>`);
  }

  const courseItems = [...document.querySelectorAll(".listing [data-list-item][data-category]")];
  const categoryFilters = [...document.querySelectorAll("[data-filter-category]")];
  const levelFilters = [...document.querySelectorAll("[data-filter-level]")];
  const sort = document.querySelector("[data-course-sort]");
  const search = document.querySelector("[data-list-search]");

  const filterCatalog = () => {
    const query = search?.value.trim().toLowerCase() || "";
    const selectedCategories = categoryFilters.filter((input) => input.checked).map((input) => input.value);
    const selectedLevels = levelFilters.filter((input) => input.checked).map((input) => input.value);

    courseItems.forEach((item) => {
      const matchesSearch = item.textContent.toLowerCase().includes(query);
      const matchesCategory = !selectedCategories.length || selectedCategories.includes(item.dataset.category);
      const matchesLevel = !selectedLevels.length || selectedLevels.includes(item.dataset.level);
      item.hidden = !(matchesSearch && matchesCategory && matchesLevel);
    });
  };

  const sortCatalog = () => {
    if (!sort || !courseItems.length) return;
    const listing = courseItems[0].parentElement;
    const mode = sort.value;
    const sorted = [...courseItems].sort((a, b) => {
      if (mode === "rating") return Number(b.dataset.rating) - Number(a.dataset.rating);
      if (mode === "price-low") return Number(a.dataset.price) - Number(b.dataset.price);
      if (mode === "newest") return Number(b.dataset.order) - Number(a.dataset.order);
      return Number(a.dataset.order) - Number(b.dataset.order);
    });
    sorted.forEach((item) => listing.appendChild(item));
  };

  const courses = {
    python: {
      title: "The Complete Python Bootcamp", short: "Python Bootcamp", category: "Development",
      description: "Learn Python programming from beginner to advanced level with projects, exercises, and career-ready skills.",
      rating: "4.9 (12,530)", hours: "65 hours", level: "Beginner", price: "$49.99", badge: "Bestseller",
      learn: ["Python basics to advanced concepts", "Build real-world applications", "Work with APIs and databases", "Automation and web scraping"]
    },
    data: {
      title: "Data Science & Machine Learning", short: "Data Science & ML", category: "Data Science",
      description: "Turn real datasets into useful insights and predictive models using Python, statistics, and modern machine learning.",
      rating: "4.8 (8,240)", hours: "56 hours", level: "Intermediate", price: "$59.99", badge: "Popular",
      learn: ["Clean and explore real datasets", "Train predictive machine learning models", "Visualize findings clearly", "Build an end-to-end portfolio project"]
    },
    design: {
      title: "UI/UX Design from Scratch", short: "UI/UX Design", category: "Design",
      description: "Learn user research, wireframing, prototyping, and visual design by creating polished digital product experiences.",
      rating: "4.7 (6,810)", hours: "35 hours", level: "Beginner", price: "$39.99", badge: "Top rated",
      learn: ["Run practical user research", "Create wireframes and user flows", "Build interactive prototypes", "Present a professional case study"]
    },
    cloud: {
      title: "AWS Cloud Practitioner Essentials", short: "AWS Cloud Practitioner", category: "Cloud Computing",
      description: "Understand cloud concepts, AWS services, security, pricing, and architecture while preparing for certification.",
      rating: "4.8 (5,420)", hours: "29 hours", level: "Beginner", price: "$49.99", badge: "Certification",
      learn: ["Understand core AWS services", "Design reliable cloud architecture", "Apply cloud security principles", "Prepare for the certification exam"]
    },
    business: {
      title: "Business Strategy Fundamentals", short: "Business Strategy", category: "Business",
      description: "Learn how strong organizations analyze markets, make decisions, lead teams, and turn strategy into measurable action.",
      rating: "4.7 (4,860)", hours: "24 hours", level: "Beginner", price: "$34.99", badge: "Practical",
      learn: ["Analyze markets and competitors", "Set measurable strategic goals", "Improve business decision-making", "Present a focused action plan"]
    },
    marketing: {
      title: "Digital Marketing Masterclass", short: "Digital Marketing", category: "Marketing",
      description: "Plan and measure effective campaigns across content, search, email, social media, and paid acquisition.",
      rating: "4.8 (7,120)", hours: "31 hours", level: "Intermediate", price: "$44.99", badge: "Popular",
      learn: ["Build a complete campaign strategy", "Create audience-focused content", "Measure channel performance", "Optimize campaigns for growth"]
    },
    growth: {
      title: "Productivity and Focus", short: "Productivity and Focus", category: "Personal Growth",
      description: "Create a sustainable personal system for focused work, realistic planning, and consistent progress.",
      rating: "4.6 (3,940)", hours: "18 hours", level: "Beginner", price: "$29.99", badge: "New",
      learn: ["Plan achievable weekly goals", "Reduce distraction and context switching", "Build consistent habits", "Review progress without burnout"]
    }
  };

  const detailRoot = document.querySelector("[data-course-detail]");
  if (detailRoot) {
    const key = new URLSearchParams(location.search).get("course") || "python";
    const course = courses[key] || courses.python;
    document.title = `${course.title} - Skillora`;
    const setText = (selector, value) => {
      const element = document.querySelector(selector);
      if (element) element.textContent = value;
    };
    setText("[data-detail-title]", course.title);
    setText("[data-detail-short]", course.short);
    setText("[data-detail-category]", course.category);
    setText("[data-detail-description]", course.description);
    setText("[data-detail-rating]", course.rating);
    setText("[data-detail-hours]", course.hours);
    setText("[data-detail-level]", course.level);
    setText("[data-detail-price]", course.price);
    setText("[data-detail-badge]", course.badge);
    setText("[data-detail-hours-side]", `${course.hours} on-demand video`);
    const learn = document.querySelector("[data-detail-learn]");
    if (learn) learn.innerHTML = course.learn.map((item) => `<li><i data-lucide="check-circle-2"></i> ${item}</li>`).join("");
    window.lucide?.createIcons();
  }

  document.querySelectorAll("[data-year]").forEach((year) => year.textContent = new Date().getFullYear());
  document.querySelector("[data-inner-newsletter]")?.addEventListener("submit", (event) => {
    event.preventDefault();
    document.querySelector("[data-inner-newsletter-status]").textContent = "Thanks - your first guide is on the way.";
    event.currentTarget.reset();
  });
  document.querySelectorAll("[data-demo-form]").forEach((form) => form.addEventListener("submit", (event) => {
    event.preventDefault();
    const status = form.querySelector("[data-status]");
    if (status) status.textContent = "Thanks! Your request has been received.";
  }));
  if (courseItems.length) {
    search?.addEventListener("input", filterCatalog);
    [...categoryFilters, ...levelFilters].forEach((input) => input.addEventListener("change", filterCatalog));
    sort?.addEventListener("change", sortCatalog);
    const requestedCategory = new URLSearchParams(location.search).get("category");
    const requestedFilter = categoryFilters.find((input) => input.value === requestedCategory);
    if (requestedFilter) {
      requestedFilter.checked = true;
      filterCatalog();
    }
  } else if (search) {
    search.addEventListener("input", () => {
      const query = search.value.toLowerCase();
      document.querySelectorAll("[data-list-item]").forEach((item) => item.hidden = !item.textContent.toLowerCase().includes(query));
    });
  }
  window.lucide?.createIcons();
});
