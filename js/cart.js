const addToCartButton = document.querySelectorAll(
  ".sale-card__button-cart--add"
);
const cartContainer = document.querySelector(".cart-container");
const cartItemsCount = document.querySelector(".cart__item-count");
const shoppingCartProducts = document.querySelector(".shopping-cart__products");
const shopIconButton = document.querySelector(".cart-container");
const cartModalWindow = document.querySelector(".shopping-cart");
const totalAmount = document.querySelector(".shopping-cart__total");
const closeCartButton = document.querySelector(".shopping-cart__close-button");
const mainContent = document.querySelector("main");
const cartIcon = document.querySelector(".cart-container__icon");
const shoppingCartPromocodeContainer = document.querySelector(
  ".shopping-cart__promocode-container"
);
const mainContainerCart = document.querySelector(
  ".shopping-cart__main-container"
);
const shoppingCartPromocodeForm = document.querySelector(
  ".shopping-cart__promocode"
);
const shoppingCartPromoCodeButton = document.querySelector(
  ".shopping-cart__promo-code"
);

let totalSum = 0;

addToCartButton.forEach((button) => {
  button.addEventListener("click", function () {
    cartIcon.classList.add("active");
    setTimeout(() => {
      cartIcon.classList.remove("active");
    }, 300);
    addToCart(this);
  });
});

shopIconButton.addEventListener("click", () => {
  cartModalWindow.classList.add("active-cart");
  document.body.classList.add("active-cart");
  mainContent.classList.add("active-cart");
  cartContainer.classList.remove("active-cart");
  cartItemsCount.classList.remove("active-cart");
});

closeCartButton.addEventListener("click", () => {
  cartModalWindow.classList.remove("active-cart");
  document.body.classList.remove("active-cart");
  cartContainer.classList.add("active-cart");
  cartItemsCount.classList.add("active-cart");
});

function addToCart(button) {
  cartContainer.classList.add("active-cart");
  cartItemsCount.classList.add("active-cart");

  let currentCount = Number(cartItemsCount.textContent);
  cartItemsCount.textContent = currentCount + 1;

  const cardElement = button.closest(".sale-card");
  const productName = cardElement.querySelector("header a").textContent.trim();
  const productPrice = cardElement.querySelector("p").textContent.trim();
  const productImage = cardElement.querySelector("img").src;

  const existingProduct = Array.from(
    shoppingCartProducts.querySelectorAll(".product-item__name")
  ).find((item) => item.textContent.trim() === productName);

  if (existingProduct) {
    const quantityInput = existingProduct
      .closest(".product-item")
      .querySelector(".product-item__quantity-input");
    quantityInput.value = Number(quantityInput.value) + 1;
  } else {
    shoppingCartProducts.innerHTML += `
      <div class="product-item">
        <img src="${productImage}" alt="${productName}" class="product-item__image">
        <div class="product-item__details">
          <p class="product-item__name">${productName}</p>
          <p class="product-item__price">${productPrice}</p>
          <div class="product-item__quantity">
            <input type="number" min="1" value="1" class="product-item__quantity-input">
          </div>
        </div>
        <button class="product-item__delete-button" aria-label="Remove product"><svg width="14" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10 2h3.6c.2 0 .4.2.4.4v1.2c0 .2-.2.4-.4.4H.4C.2 4 0 3.9 0 3.6V2.4c0-.2.2-.4.4-.3h3.7V2L4.9.3c.1-.2.2-.3.4-.3h3.5c.1 0 .3.1.4.2l.8 1.7V2zM1.8 16.1c.1 1 1 1.9 2 1.9h6.3c1.1 0 1.9-.8 2-1.9l1-11.1H1l.8 11.1zM12 6l-.8 10.1c0 .5-.5.9-1 .9H3.8c-.5 0-1-.4-1-.9L2 6h10zM5 8.1h1v6H5v-6zm4 0H8v6h1v-6z" fill="#9199AB"></path></svg></button>
      </div>`;
    const productDeleteButtons = document.querySelectorAll(
      ".product-item__delete-button"
    );
    productDeleteButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const productItem = button.closest(".product-item");
        productItem.remove();
        recalculateTotal();
        recalculateQuantity();
      });
    });
  }
  const inputQuantity = document.querySelector(".product-item__quantity");
  inputQuantity.addEventListener("input", function () {
    recalculateTotal();
  });

  function recalculateTotal() {
    totalSum = 0;
    const productItems = document.querySelectorAll(".product-item");
    productItems.forEach((item) => {
      const price = item
        .querySelector(".product-item__price")
        .textContent.trim()
        .replace("$", "");
      const quantity = Number(
        item.querySelector(".product-item__quantity-input").value
      );
      totalSum += parseFloat(price) * quantity;
    });
    totalAmount.innerText = `$${totalSum.toFixed(2)}`;
  }

  recalculateTotal();
  function recalculateQuantity() {
    let totalItems = 0;
    const productItems = document.querySelectorAll(".product-item");
    productItems.forEach((item) => {
      const quantity = Number(
        item.querySelector(".product-item__quantity-input").value
      );
      totalItems += quantity;
    });
    cartItemsCount.textContent = totalItems;
  }
}

shoppingCartPromoCodeButton.addEventListener("click", () => {
  shoppingCartPromocodeForm.classList.toggle("active");
});