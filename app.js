document.addEventListener('DOMContentLoaded', () => {
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const menuButton = document.getElementById('menuButton');
  const mobileMenu = document.getElementById('mobileMenu');

  const setMenuState = (open) => {
    mobileMenu.classList.toggle('open', open);
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    menuButton.textContent = open ? '×' : '☰';
  };

  if (menuButton && mobileMenu) {
    menuButton.addEventListener('click', () => setMenuState(!mobileMenu.classList.contains('open')));
    mobileMenu.querySelectorAll('a').forEach(link => link.addEventListener('click', () => setMenuState(false)));
  }

  const activateGroup = selector => {
    document.querySelectorAll(selector).forEach(item => {
      const activate = () => {
        document.querySelectorAll(selector).forEach(candidate => {
          const isActive = candidate === item;
          candidate.classList.toggle('is-active', isActive);
          candidate.setAttribute('aria-expanded', String(isActive));
        });
      };
      item.addEventListener('mouseenter', activate);
      item.addEventListener('focus', activate);
      item.addEventListener('click', activate);
    });
  };

  activateGroup('.journey-stage');
  activateGroup('.feature-stage');

  const capabilityList = document.querySelector('.capability-list');
  if (capabilityList) {
    capabilityList.querySelectorAll('.capability').forEach(capability => {
      const focus = () => {
        capabilityList.classList.add('has-focus');
        capabilityList.querySelectorAll('.capability').forEach(item => item.classList.toggle('is-active', item === capability));
      };
      capability.addEventListener('mouseenter', focus);
      capability.addEventListener('focusin', focus);
    });
    capabilityList.addEventListener('mouseleave', () => {
      capabilityList.classList.remove('has-focus');
      capabilityList.querySelectorAll('.capability').forEach(item => item.classList.remove('is-active'));
    });
  }

  const heroWord = document.getElementById('heroWord');
  if (heroWord && !reducedMotion) {
    const words = ['data.', 'insight.', 'decisions.', 'action.'];
    let wordIndex = 0;
    window.setInterval(() => {
      heroWord.classList.add('is-changing');
      window.setTimeout(() => {
        wordIndex = (wordIndex + 1) % words.length;
        heroWord.textContent = words[wordIndex];
        heroWord.classList.remove('is-changing');
      }, 350);
    }, 3200);
  }

  const revealItems = document.querySelectorAll('.section-heading, .story-heading, .journey, .numbers-heading, .metric, .timeline-item, .experience-feature, .project-card, .capability, .education-entry, .cert-list');
  revealItems.forEach((item, index) => item.classList.add('reveal', `reveal-delay-${Math.min(index % 4, 3)}`));
  const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  if (reducedMotion) revealItems.forEach(item => item.classList.add('is-visible'));
  else revealItems.forEach(item => revealObserver.observe(item));

  const metrics = document.querySelectorAll('[data-count]');
  const countMetric = metric => {
    const target = Number(metric.dataset.count);
    const suffix = metric.dataset.suffix || '';
    if (reducedMotion) {
      metric.textContent = `${target}${suffix}`;
      return;
    }
    const start = performance.now();
    const update = now => {
      const progress = Math.min((now - start) / 900, 1);
      const value = Math.round(target * (1 - Math.pow(1 - progress, 3)));
      metric.textContent = `${value}${suffix}`;
      if (progress < 1) window.requestAnimationFrame(update);
    };
    window.requestAnimationFrame(update);
  };
  const metricObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        countMetric(entry.target);
        metricObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });
  metrics.forEach(metric => metricObserver.observe(metric));

  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.desktop-nav a');
  const progressLinks = document.querySelectorAll('.section-progress a');
  const sectionObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const sectionId = entry.target.id;
      navLinks.forEach(link => link.classList.toggle('current', link.getAttribute('href') === `#${sectionId}`));
      progressLinks.forEach(link => link.classList.toggle('current', link.getAttribute('href') === `#${sectionId}`));
    });
  }, { rootMargin: '-35% 0px -55% 0px', threshold: 0 });
  sections.forEach(section => sectionObserver.observe(section));
});
