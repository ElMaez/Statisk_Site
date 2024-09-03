const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

fetch("https://kea-alt-del.dk/t7/api/products/" + id)
  .then((res) => res.json())
  .then((data) => showProduct(data));

function showProduct(product) {
  console.log(product);
  document.querySelector("#brand").textContent = product.brandname;
  document.querySelector("#displayname").textContent =
    product.productdisplayname;
  document.querySelector("#idname").textContent = product.id;
  document.querySelector(
    "#productimg"
  ).src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
}
