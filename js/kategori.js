const categoryList = document.querySelector("#categoryList");
const subCategoryList = document.querySelector("#subCategoryList");
const seasonList = document.querySelector("#seasonList");
const params = new URLSearchParams(document.location.search);

fetch("https://kea-alt-del.dk/t7/api/seasons")
  .then((seas) => seas.json())
  .then((seasons) => {
    seasons.forEach((season) => {
      seasonList.innerHTML += `<li class="button" ><a href="produktliste.html?season=${season.season}">${season.season}</a></li>`;
    });
  });

fetch("https://kea-alt-del.dk/t7/api/categories")
  .then((response) => response.json())
  .then((categories) => {
    categories.forEach((category) => {
      categoryList.innerHTML += `<li class="button" ><a href="produktliste.html?category=${category.category}">${category.category}</a></li>`;
    });
  });

fetch("https://kea-alt-del.dk/t7/api/subcategories")
  .then((subcat) => subcat.json())
  .then((subcategories) => {
    subcategories.forEach((subcategory) => {
      subCategoryList.innerHTML += `<li class="button" ><a href="produktliste.html?subcategory=${subcategory.subcategory}">${subcategory.subcategory}</a></li>`;
    });
  });
