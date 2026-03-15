const hint = document.querySelector('.scroll-hint');
    const footer = document.querySelector('footer');

    const observer = new IntersectionObserver(([entry]) => {
      hint.style.opacity = entry.isIntersecting ? '0' : '1';
      hint.style.pointerEvents = entry.isIntersecting ? 'none' : 'auto';
    }, { threshold: 0.1 });

    if (hint && footer) observer.observe(footer);