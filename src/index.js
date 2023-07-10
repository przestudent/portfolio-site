document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth',
    });
  });
});

const divider = document.querySelector('.divider');

const dividerObserver = new IntersectionObserver(
  interSectionCallback('divider-grow', false)
);
dividerObserver.observe(divider);

const observer = new IntersectionObserver(
  interSectionCallback('show-slide-sideways', false)
);
document
  .querySelectorAll('.hidden-sideways')
  .forEach((e) => observer.observe(e));

const observerNavBar = new IntersectionObserver(
  interSectionCallback('show-slide-down')
);
observerNavBar.observe(document.querySelector('nav'));

function interSectionCallback(classEl, repeat = true) {
  return function (navBar) {
    navBar.forEach((nav) => {
      if (nav.isIntersecting) {
        nav.target.classList.add(classEl);
        if (!repeat) {
          this.unobserve(nav.target);
        }
      } else if (repeat) {
        nav.target.classList.remove(classEl);
      }
    });
  };
}
