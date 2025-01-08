const cartForm = document.querySelector(".shopping-cart__form");
const cartFormStatus = document.querySelector(".shopping-cart__form-status");
async function handleCartSubmit(event) {
  event.preventDefault();

  try {
    const response = await fetch(cartForm.action, {
      method: cartForm.method,
      body: new FormData(cartForm),
      headers: {
        Accept: "application/json",
      },
    });
    if (response.ok) {
      cartFormStatus.innerHTML = `<p class = "form-status-message-green">Thanks for your order! We are contacting you soon!</p>`;
      cartForm.reset();
      setTimeout(() => {
        cartFormStatus.innerHTML = "";
      }, 3000);
      cartFormStatus.innerHTML = `<p class = "form-status-message-orange">Oops! There was a problem with your order. Please try again!</p>`;
    } else {
      cartFormStatus.innerHTML = `<p class = "form-status-message-orange">Oops! There was a problem with your order. Please try again!</p>`;
      setTimeout(() => {
        cartFormStatus.innerHTML = "";
      }, 3000);
    }
  } catch (error) {
    cartFormStatus.innerHTML = `<p class  = "form-status-message-red">There was an error with the submission. Please try again!</p>`;
    setTimeout(() => {
      cartFormStatus.innerHTML = "";
    }, 3000);
    console.error("Error during form submission:", error);
  }
}
cartForm.addEventListener("submit", handleCartSubmit);
