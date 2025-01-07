function init() {
  import("./header-burger-menu.js");
  import("./cart.js");
  import("./cart-form-submition.js");
  import("./main-collection-navs-and-tabs.js");
  import("./new-arrival-carousel.js");
  import("./store-about-each-item.js");
  import("./countdown.js");
}
const totalPartials = document.querySelectorAll(
  '[hx-trigger="load"], [data-hx-trigger="load"]'
).length;
let loadedPartialsCount = 0;

document.body.addEventListener("htmx:afterOnLoad", () => {
  loadedPartialsCount++;
  if (loadedPartialsCount === totalPartials) init();
});
