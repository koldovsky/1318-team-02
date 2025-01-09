function init() {
  import("./header-burger-menu.js");
  import("./cart.js");
  import("./cart-form-submition.js");
  import("./main-collection-navs-and-tabs.js");
  import("./new-arrival-carousel.js");
  import("./store-about-each-item.js");
  import("./countdown.js");
  import("./brands-carousel.js");
}
const totalPartials = document.querySelectorAll(
  '[hx-trigger="load"], [data-hx-trigger="load"]'
).length;
let loadedPartialsCount = 0;

document.body.addEventListener("htmx:afterOnLoad", () => {
  loadedPartialsCount++;
  if (loadedPartialsCount === totalPartials) init();
});
import { neonCursor } from 'https://unpkg.com/threejs-toys@0.0.2/build/threejs-toys.module.cdn.min.js'

neonCursor({
  el: document.getElementById('app'),
  shaderPoints: 16,
  curvePoints: 80,
  curveLerp: 0.5,
  radius1: 5,
  radius2: 30,
  velocityTreshold: 10,
  sleepRadiusX: 100,
  sleepRadiusY: 100,
  sleepTimeCoefX: 0.0025,
  sleepTimeCoefY: 0.0025
})
