document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth',
    });
  });
});

function isInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

const divider = document.querySelector('.divider');
const message = document.querySelector('.divider>span');
function ScrollAnimation() {
  if (isInViewport(divider)) {
    divider.classList.add('divider-grow');
    document.removeEventListener('scroll', ScrollAnimation);
  }
}
document.addEventListener('scroll', ScrollAnimation, {
  passive: true,
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show-slide-sideways');
    } else {
      entry.target.classList.remove('show-slide-sideways');
    }
  });
});
document
  .querySelectorAll('.hidden-sideways')
  .forEach((e) => observer.observe(e));

const observerNavBar = new IntersectionObserver((navBar) => {
  if (navBar[0].isIntersecting) {
    navBar[0].target.classList.add('show-slide-down');
  } else {
    navBar[0].target.classList.remove('show-slide-down');
  }
});
console.log(document.querySelector('nav'));
observerNavBar.observe(document.querySelector('nav'));
