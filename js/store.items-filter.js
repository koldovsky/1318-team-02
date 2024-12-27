async function fetchJSON() {
    try {
        const response = await fetch("./api/store-products-info.json");
        const data = await response.json();
        renderStoreContent(data);
    } catch (error) {
        console.error("Error fetching JSON:", error);
    }
}

const itemsFilter = document.querySelector("#products-per-page");
itemsFilter.addEventListener("change", fetchJSON);

const renderProductCard = (data) => {
    const cardHTML = `<article class="store__item">
          <img
            class="store__item-image"
            src="${data.imgSrc}"
            alt="${data.imgAlt}"
          />
          <h4 class="store__item-title">
            <a href="#" class="store__item-link">${data.productTitle}</a>
          </h4>
          <p class="store__item-price">$${data.productPrice},00</p>
          <button class="store__item-button accent-color-button">Buy</button>
      </article>`;
    return cardHTML;
};

const renderStoreContent = (data) => {
    const productsContainer = document.querySelector(".store__content-container");
    const productsAmount = itemsFilter.value;
    if (productsAmount <= data.length) {
        productsContainer.innerHTML = "";
        for (let i = 0; i < productsAmount; i++) {
            productsContainer.innerHTML += renderProductCard(data[i]);
        }
    } else {
        productsContainer.innerHTML = "";
        for (let i = 0; i < data.length; i++) {
            productsContainer.innerHTML += renderProductCard(data[i]);
        }
    }
};

fetchJSON();
