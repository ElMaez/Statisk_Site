// Her opretter vi variabler som vi skal bruge igennem featuren.

// Et eksempel vi opretter her en constant (const) ved navnet categoryList
// Den sætter vi til at være ligmed #categoryList som referrer til vores
// ul tag i html'en som har det specifike id.

const categoryList = document.querySelector("#categoryList");
const subCategoryList = document.querySelector("#subCategoryList");
const seasonList = document.querySelector("#seasonList");

// Her opretter vi en const som er ligmed et javascript væktøj
// som kigger i URL'ens adresse felt for at tjekke om den indeholder
// Nogle parametre aka. ?etellerandetparameterher f.eks. limit=15 eller category.
const params = new URLSearchParams(document.location.search);

// Her henter vi data fra en anden url som indeholder den
// information vi gerne vil have vist på hjemmesiden.
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
