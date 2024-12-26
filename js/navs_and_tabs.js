const categoryTitles = document.querySelectorAll(
  ".main-collection__category-title"
);
const categories = document.querySelectorAll(".main-collection__category");

categoryTitles.forEach((title) => {
  title.addEventListener("click", function () {
    const category = this.getAttribute("data-category");

    categoryTitles.forEach((t) =>
      t.classList.remove("main-collection__category-title--active")
    );
    this.classList.add("main-collection__category-title--active");

    categories.forEach((c) => {
      c.classList.remove("main-collection__category--active");
      if (c.getAttribute("data-category") === category) {
        c.classList.add("main-collection__category--active");
      }
    });
  });
});

if (categoryTitles.length > 0) {
  categoryTitles[0].click();
}
