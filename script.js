(() => {
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  const revealItems = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealItems.forEach(item => observer.observe(item));
  } else {
    revealItems.forEach(item => item.classList.add('is-visible'));
  }

  const sections = [...document.querySelectorAll('main section[id]')];
  const navLinks = [...document.querySelectorAll('.rail-link')];
  if ('IntersectionObserver' in window) {
    const sectionObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          navLinks.forEach(link => link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`));
        }
      });
    }, { rootMargin: '-35% 0px -55% 0px', threshold: 0 });
    sections.forEach(section => sectionObserver.observe(section));
  }

  const topButton = document.querySelector('.back-to-top');
  window.addEventListener('scroll', () => {
    topButton.classList.toggle('visible', window.scrollY > 450);
  }, { passive: true });
  topButton.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

  const audio = document.getElementById('ambientAudio');
  const musicButton = document.getElementById('musicToggle');
  const toast = document.getElementById('toast');
  let toastTimer;
  function showToast(message) {
    toast.textContent = message;
    toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove('show'), 3600);
  }
  musicButton.addEventListener('click', async () => {
    if (!audio || !audio.getAttribute('src')) {
      showToast('Add a licensed audio file named assets/soft-ambient.mp3 to enable music.');
      return;
    }
    try {
      if (audio.paused) {
        audio.volume = 0.16;
        await audio.play();
        musicButton.classList.add('playing');
        musicButton.setAttribute('aria-label', 'Pause ambient music');
      } else {
        audio.pause();
        musicButton.classList.remove('playing');
        musicButton.setAttribute('aria-label', 'Play ambient music');
      }
    } catch (error) {
      showToast('Music could not start. Check that assets/soft-ambient.mp3 exists.');
    }
  });

  // Avoid following placeholder email links or claiming a submission was sent.
  document.querySelectorAll('a[href="#contact"]').forEach(link => {
    link.addEventListener('click', () => {
      const contact = document.getElementById('contact');
      if (contact) contact.scrollIntoView({ behavior: 'smooth' });
    });
  });
})();
