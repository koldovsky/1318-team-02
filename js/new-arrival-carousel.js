const slides = [
    '<div><img class="new-arrivals__product-image" src="img/new-arrivals/asics.jpg" alt = "Asics Jordan 2000"><header class="new-arrivals__product-name"><a href="#">Asics Jordan 2000</a></header><p class="new-arrivals__product-price">$200.00</p><button class="new-arrivals__add-to-cart sale-card__button-cart--add">Add to cart</button></div>',
    '<div><img class="new-arrivals__product-image" src="img/new-arrivals/puma.jpg" alt = "Puma Textile Running"> <header class="new-arrivals__product-name"><a href="#">Puma Textile Running Shoes</a></header><p class="new-arrivals__product-price">$62.00</p><button class="new-arrivals__add-to-cart sale-card__button-cart--add">Add to cart</button></div>',
    '<div><img class="new-arrivals__product-image" src="img/new-arrivals/nike-jacket.jpg" alt = "Nike Winter Jacket in Blue"><header class="new-arrivals__product-name"><a href="#">Nike Winter Jacket in Blue</a></header><p class="new-arrivals__product-price">$85.00</p><button class="new-arrivals__add-to-cart sale-card__button-cart--add">Add to cart</button></div>',
    '<div><img class="new-arrivals__product-image" src="img/new-arrivals/adiddas-shoes.jpg" alt = "Adidas Black Trainers"><header class="new-arrivals__product-name"><a href="#">Adidas Black Trainers</a></header><p class="new-arrivals__product-price">$60.00</p><button class="new-arrivals__add-to-cart sale-card__button-cart--add">Add to cart</button></div>',
    '<div><img class="new-arrivals__product-image" src="img/new-arrivals/reebok-duster.jpg" alt = "Reebok Duster"><header class="new-arrivals__product-name"><a href="#">Reebok Red Duster</a></header><p class="new-arrivals__product-price">$60.00</p><button class="new-arrivals__add-to-cart">Add to cart</button></div>',
];

let currentIndex = 0;
function renderCarousel(slides) {
    const slidesContainer = document.querySelector(".product-carousel__slides");
    slidesContainer.innerHTML = slides[currentIndex];
    if (window.matchMedia("(min-width:580px)").matches) {
        const secondSlideIdx = currentIndex + 1 >= slides.length ? 0 : currentIndex + 1;
        slidesContainer.innerHTML += slides[secondSlideIdx];
        if (window.matchMedia("(min-width:768px)").matches) {
            const thirdSlideIdx = secondSlideIdx + 1 >= slides.length ? 0 : secondSlideIdx + 1;
            slidesContainer.innerHTML += slides[thirdSlideIdx];
            if (window.matchMedia("(min-width:1024px)").matches) {
                const fourthSlideIdx = thirdSlideIdx + 1 >= slides.length ? 0 : thirdSlideIdx + 1;
                slidesContainer.innerHTML += slides[fourthSlideIdx];
            }
        }
    }
}

function showNextSlide() {
    currentIndex = currentIndex + 1 >= slides.length ? 0 : currentIndex + 1;
    renderCarousel(slides);
}
function showPrevSlide() {
    currentIndex = currentIndex - 1 < 0 ? slides.length - 1 : currentIndex - 1;
    renderCarousel(slides);
}

const nextButton = document.querySelector(".carousel-arrivals__button--next");
const prevButton = document.querySelector(".carousel-arrivals__button--prev");

nextButton.addEventListener("click", showNextSlide);
prevButton.addEventListener("click", showPrevSlide);


renderCarousel(slides);
window.addEventListener("resize", () => renderCarousel(slides));
