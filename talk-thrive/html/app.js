document.addEventListener('DOMContentLoaded', () => {
  const menuButton = document.querySelector('[data-menu-button]');
  const mainNav = document.getElementById('main-nav');
  const year = document.querySelector('[data-year]');
  const form = document.querySelector('[data-assessment-form]');

  if (year) year.textContent = new Date().getFullYear();

  if (menuButton && mainNav) {
    const closeMenu = () => {
      menuButton.setAttribute('aria-expanded', 'false');
      menuButton.setAttribute('aria-label', 'Open menu');
      mainNav.classList.remove('open');
    };

    menuButton.addEventListener('click', () => {
      const expanded = menuButton.getAttribute('aria-expanded') === 'true';
      menuButton.setAttribute('aria-expanded', String(!expanded));
      menuButton.setAttribute('aria-label', expanded ? 'Open menu' : 'Close menu');
      mainNav.classList.toggle('open');
    });

    mainNav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
    document.addEventListener('keydown', event => {
      if (event.key === 'Escape') closeMenu();
    });
  }

  if (form) {
    form.addEventListener('submit', event => {
      event.preventDefault();
      const button = form.querySelector('button[type="submit"]');
      if (button) {
        button.textContent = 'Request Sent';
        setTimeout(() => { button.textContent = 'Submit Request'; }, 2200);
      }
    });
  }
});
