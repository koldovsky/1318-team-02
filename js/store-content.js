import { ProductsService } from "./products-service.js";
export class ProductList {
  constructor() {
    this.container = document.querySelector(".store__content-container");
    this.productsFilter = document.querySelector("#products-per-page");
    this.prevPage = document.querySelector(".store__pagination-arrow--prev");
    this.nextPage = document.querySelector(".store__pagination-arrow--next");
    this.productsPagination = document.querySelector(
      ".store__pagination-pages"
    );
    this.currentPage = 1;
    this.productsCache = null;
    this.productsService = new ProductsService();
    this.renderProducts();
    this.addEventListeners();
  }

  async renderProducts() {
    const productsToShow = Number(this.productsFilter.value);
    const start = (this.currentPage - 1) * productsToShow;
    const end = start + productsToShow;
    if (!this.productsCache) {
      this.productsCache = await this.productsService.getProducts();
    }
    const products = this.productsCache;
    let productListHtml = "";
    products.slice(start, end).forEach((product) => {
      productListHtml += this.createProductHtml(product);
    });
    this.container.innerHTML = productListHtml;
    this.addLinkEventListeners();
    const addToCartButtons = this.container.querySelectorAll(
      ".store__item-button"
    );
    addToCartButtons.forEach((button) => {
      button.addEventListener("click", async (event) => {
        const productName = button
          .closest(".sale-card")
          .querySelector(".store__item-title").innerText;
        addToCart(productName);
      });
    });
    this.renderPagination(products);
  }

  renderPagination(productsArray) {
    const totalPages = Math.ceil(
      productsArray.length / Number(this.productsFilter.value)
    );
    this.productsPagination.innerHTML = "";
    for (let i = 1; i <= totalPages; i++) {
      if (
        i === 1 ||
        i === totalPages ||
        (i >= this.currentPage - 1 && i <= this.currentPage + 1)
      ) {
        const pageButton = this.createPageButton(i);
        this.productsPagination.appendChild(pageButton);
      } else {
        if (this.productsPagination.lastElementChild.textContent !== "...") {
          const dots = document.createElement("span");
          dots.innerHTML = "...";
          dots.classList.add("store__pagination-page");
          this.productsPagination.appendChild(dots);
        }
      }
    }
    this.prevPage.classList.toggle(
      "store__pagination-arrow--disabled",
      this.currentPage === 1
    );
    this.nextPage.classList.toggle(
      "store__pagination-arrow--disabled",
      this.currentPage === totalPages
    );
  }

  createPageButton(pageNumber) {
    const pageButton = document.createElement("a");
    pageButton.innerHTML = pageNumber;
    pageButton.href = "#";
    pageButton.classList.add("store__pagination-page");
    pageButton.classList.toggle(
      "store__pagination-page--current",
      pageNumber === this.currentPage
    );
    pageButton.addEventListener("click", () => {
      this.currentPage = pageNumber;
      this.renderProducts();
    });
    return pageButton;
  }

  createProductHtml(product) {
    return `<article class="store__item sale-card">
          <img
            class="store__item-image"
            src="${product.imgSrc}"
            alt="${product.imgAlt}"
          />
          <header class="store__item-title">
            <a href="store-about-each-item.html" class="store__item-link">${product.productTitle}</a>
          </header>
          <p class="store__item-price">$${product.productPrice},00</p>
          <button class="store__item-button accent-color-button" data-id="${product.id}">Buy</button>
      </article>`;
  }

  addEventListeners() {
    this.productsFilter.addEventListener("change", () => {
      this.currentPage = 1;
      this.renderProducts();
    });
    this.prevPage.addEventListener("click", () => {
      if (this.currentPage > 1) this.currentPage--;
      this.renderProducts();
    });
    this.nextPage.addEventListener("click", () => {
      if (this.currentPage < this.productsPagination.children.length)
        this.currentPage++;
      this.renderProducts();
    });
  }

  addLinkEventListeners() {
    const linksForProduct = document.querySelectorAll("a.store__item-link");
    linksForProduct.forEach((link) => {
      link.addEventListener("click", (event) => {
        const getProductName = link.innerText.trim();
        localStorage.setItem("product", getProductName);
        window.location.href = "store-about-each-item.html";
      });
    });
  }
}

new ProductList();
