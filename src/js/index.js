document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
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

const divider = document.querySelector(".divider");
const message = document.querySelector(".divider>span");
function ScrollAnimation() {
  console.log("SCROLL");
  if (isInViewport(divider)) {
    divider.classList.add("divider-grow");
    document.removeEventListener("scroll", ScrollAnimation);
  }
}
document.addEventListener("scroll", ScrollAnimation, {
  passive: true,
});
