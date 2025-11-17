let cart = JSON.parse(localStorage.getItem("cart") || "[]");

function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

function updateCartUI() {
  const list = document.getElementById("cart-items");
  const totalEl = document.getElementById("total-price");
  const countEl = document.getElementById("cart-count");

  list.innerHTML = "";
  let total = 0;

  cart.forEach((item, index) => {
    total += item.price;
    const li = document.createElement("li");
    li.innerHTML = `${item.name} - SAR ${item.price}
      <button class="remove-btn" onclick="removeItem(${index})">✖</button>`;
    list.appendChild(li);
  });

  totalEl.textContent = total;
  countEl.textContent = cart.length;
  saveCart();
}

function addToCart(name, price) {
  cart.push({ name, price });
  updateCartUI();
  toggleCart();
}

function removeItem(index) {
  cart.splice(index, 1);
  updateCartUI();
}

function toggleCart() {
  document.getElementById("cart").classList.toggle("open");
}

function checkout() {
  if (cart.length === 0) {
    alert("Your cart is empty.");
    return;
  }
  alert("Thank you for your purchase! (Demo)");
  cart = [];
  updateCartUI();
}

updateCartUI();
