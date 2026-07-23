document.addEventListener("DOMContentLoaded", () => {
  window.lucide?.createIcons();

  const menu = document.querySelector("[data-menu]");
  const nav = document.querySelector("#main-nav");
  const searchInputs = document.querySelectorAll("[data-course-search]");
  const categories = document.querySelectorAll("[data-categories] .category");
  const courseCards = document.querySelectorAll("[data-course]");
  const emptyState = document.querySelector("[data-empty]");
  const modal = document.querySelector("[data-modal]");
  const modalTitle = document.querySelector("[data-modal-title]");
  const modalCopy = document.querySelector("[data-modal-copy]");
  const authForm = document.querySelector("[data-auth-form]");
  const authStatus = document.querySelector("[data-auth-status]");
  const toast = document.querySelector("[data-toast]");
  let activeCategory = "all";
  let toastTimer;

  const showToast = (message) => {
    toast.textContent = message;
    toast.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove("show"), 2400);
  };

  const filterCourses = () => {
    const query = [...searchInputs].map((input) => input.value.trim().toLowerCase()).find(Boolean) || "";
    let visible = 0;
  courseCards.forEach((card) => {
      const categoryMatch = activeCategory === "all" || card.dataset.category === activeCategory;
      const searchMatch = card.dataset.name.includes(query);
      const show = categoryMatch && searchMatch;
      card.classList.toggle("hidden", !show);
      if (show) visible += 1;
    });
    emptyState.classList.toggle("show", visible === 0);
    if (query && location.hash !== "#course-list") document.querySelector("#course-list").scrollIntoView({ behavior: "smooth" });
  };

  const openModal = (mode) => {
    const login = mode === "login";
    modalTitle.textContent = login ? "Welcome back" : "Start learning today";
    modalCopy.textContent = login ? "Continue your learning journey and pick up right where you left off." : "Create your free account and save your learning progress across every device.";
    const nameInput = authForm.querySelector('input[type="text"]');
    nameInput.style.display = login ? "none" : "block";
    nameInput.disabled = login;
    authForm.querySelector("button").textContent = login ? "Log in" : "Create account";
    authStatus.textContent = "";
    modal.showModal();
    document.body.classList.add("modal-open");
  };

  menu.addEventListener("click", () => nav.classList.toggle("open"));
  nav.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => nav.classList.remove("open")));
  searchInputs.forEach((input) => input.addEventListener("input", filterCourses));

  categories.forEach((category) => {
    category.addEventListener("click", () => {
      activeCategory = category.dataset.category;
      const hasHomeCourses = [...courseCards].some((card) => card.dataset.category === activeCategory);
      if (activeCategory !== "all" && !hasHomeCourses) {
        window.location.href = `courses.html?category=${encodeURIComponent(activeCategory)}`;
        return;
      }
      categories.forEach((item) => item.classList.toggle("active", item === category));
      filterCourses();
      document.querySelector("#course-list").scrollIntoView({ behavior: "smooth" });
    });
  });

  courseCards.forEach((card) => {
    const openCourse = () => {
      if (card.dataset.url) window.location.href = card.dataset.url;
    };
    card.addEventListener("click", openCourse);
    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openCourse();
      }
    });
  });

  document.querySelectorAll(".save").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.stopPropagation();
      button.classList.toggle("saved");
      showToast(button.classList.contains("saved") ? "Course saved to your wishlist." : "Course removed from your wishlist.");
    });
  });

  document.querySelector("[data-open-signup]")?.addEventListener("click", () => openModal("signup"));
  document.querySelector("[data-open-login]")?.addEventListener("click", () => openModal("login"));
  document.querySelector("[data-ai-chat]").addEventListener("click", () => openModal("signup"));
  document.querySelector("[data-watch]").addEventListener("click", () => showToast("The product tour is queued up for you."));
  document.querySelector("[data-close]").addEventListener("click", () => modal.close());
  modal.addEventListener("close", () => document.body.classList.remove("modal-open"));
  modal.addEventListener("click", (event) => {
    const rect = modal.getBoundingClientRect();
    if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) modal.close();
  });

  authForm.addEventListener("submit", (event) => {
    event.preventDefault();
    authStatus.textContent = "Success! Your learning dashboard is ready.";
    setTimeout(() => modal.close(), 1100);
  });

  document.querySelector("[data-newsletter]").addEventListener("submit", (event) => {
    event.preventDefault();
    document.querySelector("[data-newsletter-status]").textContent = "Thanks - you are on the list.";
    event.currentTarget.reset();
  });

  document.querySelector("[data-year]").textContent = new Date().getFullYear();
});
