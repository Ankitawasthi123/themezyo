document.addEventListener('DOMContentLoaded', () => {
  const menuButton = document.querySelector('[data-menu-button]');
  const mainNav = document.getElementById('main-nav');
  const checkerForm = document.getElementById('checker-form');
  const checkerResult = document.getElementById('checker-result');

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

    mainNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', closeMenu);
    });

    document.addEventListener('keydown', event => {
      if (event.key === 'Escape') {
        closeMenu();
      }
    });
  }

  if (checkerForm && checkerResult) {
    checkerForm.addEventListener('submit', event => {
      event.preventDefault();
      const symptoms = document.getElementById('symptoms').value.trim();
      if (!symptoms) {
        checkerResult.textContent = 'Please describe your symptoms so we can help.';
        checkerResult.classList.remove('hidden');
        return;
      }
      const response = `Based on your symptoms, it looks like you may be experiencing muscle tension or spinal misalignment. A chiropractic evaluation can help identify the right treatment plan for relief.`;
      checkerResult.textContent = response;
      checkerResult.classList.remove('hidden');
    });
  }
});
