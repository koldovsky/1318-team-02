const productInfoTitle = document.querySelector(".product__title");
const productInfoDescription = document.querySelector(
  ".product__description-text"
);
const productInfoPrice = document.querySelector(".product__price");
const productName = localStorage.getItem("product");
const mainProductPhoto = document.querySelector(".product__gallery-main");
const smallProductPhoto = document.querySelector(".product__gallery-thumbnail");
if (
  productName &&
  productInfoTitle &&
  productInfoDescription &&
  productInfoPrice &&
  mainProductPhoto
) {
  fetch("./api/store-products-info.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((products) => {
      const product = products.find(
        (item) => item.productTitle === productName
      );
      if (product) {
        productInfoTitle.innerText = product.productTitle;
        productInfoDescription.innerText = product.description;
        productInfoPrice.innerText = product.productPrice + ",00$";
        mainProductPhoto.src = product.imgSrc;
        mainProductPhoto.alt = product.imgAlt;
      } else {
        console.error("Product not found!");
      }
    })
    .catch((error) => {
      console.error("Error fetching or parsing JSON:", error);
    });
} else {
  console.error(
    "No product specified in localStorage or missing elements on page"
  );
}
