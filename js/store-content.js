// async function fetchJSON() {
//     try {
//         const response = await fetch("./api/store-products-info.json");
//         const data = await response.json();
//         renderStoreContent(data);
//     } catch (error) {
//         console.error("Error fetching JSON:", error);
//     }
// }

// const itemsFilter = document.querySelector("#products-per-page");
// itemsFilter.addEventListener("change", fetchJSON);

// const renderProductCard = (data) => {
//     const cardHTML = `<article class="store__item">
//           <img
//             class="store__item-image"
//             src="${data.imgSrc}"
//             alt="${data.imgAlt}"
//           />
//           <h4 class="store__item-title">
//             <a href="#" class="store__item-link">${data.productTitle}</a>
//           </h4>
//           <p class="store__item-price">$${data.productPrice},00</p>
//           <button class="store__item-button accent-color-button">Buy</button>
//       </article>`;
//     return cardHTML;
// };

// const renderStoreContent = (data) => {
//     const productsContainer = document.querySelector(".store__content-container");
//     const productsAmount = itemsFilter.value;
//     if (productsAmount <= data.length) {
//         productsContainer.innerHTML = "";
//         for (let i = 0; i < productsAmount; i++) {
//             productsContainer.innerHTML += renderProductCard(data[i]);
//         }
//     } else {
//         productsContainer.innerHTML = "";
//         for (let i = 0; i < data.length; i++) {
//             productsContainer.innerHTML += renderProductCard(data[i]);
//         }
//     }
// };

// fetchJSON();

import { ProductsService } from './products-service.js';

export class ProductList {
  constructor() {
    this.container = document.querySelector('.store__content-container');
    this.prevPage = document.querySelector('.store__pagination-arrow--prev');
    this.nextPage = document.querySelector('.store__pagination-arrow--next');
    this.productsPagination = document.querySelector(".store__pagination-pages");
    this.productsFilter = document.querySelector("#products-per-page");
    this.productsService = new ProductsService();
    this.renderProducts();
  }
  async renderProducts() {
    let productListHtml = '';
    const products = await this.productsService.getProducts();
    const productsToShow = this.productsFilter.value;
    products.slice(0, productsToShow).forEach(product => {
      productListHtml += this.createProductHtml(product);
    });
    // products.forEach(product => {
    //     productListHtml += this.createProductHtml(product);
    // });
    this.container.innerHTML = productListHtml;
    this.addEventListenners();
  }
  createProductHtml(product) {
    return `<article class="store__item">
          <img
            class="store__item-image"
            src="${product.imgSrc}"
            alt="${product.imgAlt}"
          />
          <h4 class="store__item-title">
            <a href="#" class="store__item-link">${product.productTitle}</a>
          </h4>
          <p class="store__item-price">$${product.productPrice},00</p>
          <button class="store__item-button accent-color-button" data-id="${product.id}">Buy</button>
      </article>`;
  }
  addEventListenners() {
    this.productsFilter.addEventListener('change', this.renderProducts.bind(this));
  }
}

new ProductList();