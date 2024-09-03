const urlParas = new URLSearchParams(window.location.search);
const id = urlParas.get("id");
const url = `https://kea-alt-del.dk/t7/api/products/${id}`;

function getProduct() {
  fetch(url)
    .then((res) => res.json())
    .then(view);
}

function view(produkt) {
  document.querySelector("#displayname").textContent =
    produkt.productdisplayname;
  document.querySelector(
    "img"
  ).src = `hhtps://kea-alt-del.dk/t7/images/webp/640/${id}.webp`;
  document.querySelector("img").alt = produkt.productdisplayname;
}

getProduct();
