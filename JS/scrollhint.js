const hint = document.querySelector('.scroll-hint');
const footer = document.querySelector('footer');

if (hint && footer) {
  new IntersectionObserver(
    ([entry]) => {
      hint.classList.toggle('hidden', entry.isIntersecting);
    },
    { threshold: 0.1 }
  ).observe(footer);
}

    



