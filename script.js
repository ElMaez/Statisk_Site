window.addEventListener("DOMContentLoaded", init);
console.log("Hello World!");

const productsURI = `https://kea-alt-del.dk/t7/api/products?limit=5`;

let productList;
let productTemplate;

function init() {
  console.log("init");
  productList = document.querySelector(".gallery");
  productTemplate = document.querySelector("#template_product").content;

  fetch(productsURI)
    .then((res) => res.json())
    .then(handleData);
}

function handleData(json) {
  console.log("handleData");
  json.forEach(showProduct);
}

function showProduct(product) {
  console.log("product", product);
  const clone = productTemplate.cloneNode(true);
  clone.querySelector("h3").textContent = product.productdisplayname;
  clone.querySelector("p").textContent = product.season;

  const imgURI = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
  clone.querySelector("img").src = imgURI;
  clone.querySelector("img").alt = `Image og ${product.productdisplayname}`;

  clone
    .querySelector(".productlink")
    .setAttribute("href", `produkt.html?id=${product.id}`);

  productList.appendChild(clone);
}
