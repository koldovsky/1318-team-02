const mainCollectionCategoryTitles = document.querySelectorAll(
  ".main-collection__category-title"
);
const mainCollectionCategories = document.querySelectorAll(
  ".main-collection__category"
);

mainCollectionCategoryTitles.forEach((mainCollectionCategoryTitle) => {
  mainCollectionCategoryTitle.addEventListener("click", function () {
    const selectedCategory = this.getAttribute("data-category");

    mainCollectionCategoryTitles.forEach((title) =>
      title.classList.remove("main-collection__category-title--active")
    );
    this.classList.add("main-collection__category-title--active");

    mainCollectionCategories.forEach((mainCollectionCategory) => {
      mainCollectionCategory.classList.remove(
        "main-collection__category--active"
      );
      if (
        mainCollectionCategory.getAttribute("data-category") ===
        selectedCategory
      ) {
        mainCollectionCategory.classList.add(
          "main-collection__category--active"
        );
      }
    });
  });
});

if (mainCollectionCategoryTitles.length > 0) {
  mainCollectionCategoryTitles[0].click();
}
