const linksForProduct = document.querySelectorAll('a[href*="store-about-each-item.html"]');
linksForProduct.forEach((link) => {
  link.addEventListener("click", (event) => {
    const getProductName = link.innerText.trim();
    localStorage.setItem('product', getProductName);
    window.location.href = 'store-about-each-item.html'; 
    console.log(localStorage.getItem('product'));
  });
});

