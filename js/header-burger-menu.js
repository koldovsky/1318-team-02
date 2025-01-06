const body = document.querySelector("body");
const headerContent = document.querySelector(".header__content");
const burgerButton = document.querySelector(".header__burger");
const navLinks = document.querySelectorAll(".header__menu-link");

burgerButton.addEventListener("click", () => {
  body.classList.toggle("overflow-hidden");
  headerContent.classList.toggle("mobile-nav-visible");
});

for (let link of navLinks) {
  link.addEventListener("click", () => {
    body.classList.remove("overflow-hidden");
    headerContent.classList.remove("mobile-nav-visible");
  });
}
