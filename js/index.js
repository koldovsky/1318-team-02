function init() {
  import("./cart.js");
  import("./cart-form-submition.js");
  import("./navs_and_tabs.js");
  import("./new-arrival-carousel.js");

}
const totalPartials = document.querySelectorAll(
  '[hx-trigger="load"], [data-hx-trigger="load"]'
).length;
let loadedPartialsCount = 0;

document.body.addEventListener("htmx:afterOnLoad", () => {
  loadedPartialsCount++;
  if (loadedPartialsCount === totalPartials) init();
});
