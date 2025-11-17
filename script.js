‎// نقرأ السلة من المتصفح، وإذا فاضية نخليها مصفوفة فاضية
let cart = JSON.parse(localStorage.getItem("cart") || "[]");

function saveCart() {
    localStorage.setItem("cart", JSON.stringify(cart));
}

function updateCartUI() {
    const cartItems = document.getElementById("items");
    const totalPrice = document.getElementById("total");
    const cartCount = document.getElementById("count");

    cartItems.innerHTML = "";
    let total = 0;

    cart.forEach((item, index) => {
        total += item.price;

        cartItems.innerHTML += `
            <li>
                ${item.name} - SAR ${item.price}
                <button class="remove-btn" onclick="removeItem(${index})">✖</button>
            </li>
        `;
    });

    totalPrice.innerText = total;
    cartCount.innerText = cart.length;

    saveCart(); // نحفظ كل مرة تتحدّث فيها السلة
}

function addToCart(name, price) {
    cart.push({ name, price });
    updateCartUI();
    toggleCart(); // تفتح السلة مباشرة
}

function removeItem(index) {
    cart.splice(index, 1);
    updateCartUI();
}

function toggleCart() {
    document.getElementById("cartPanel").classList.toggle("open");
}

function checkout() {
    alert("Thank you for your purchase! (Demo)");
    cart = [];
    updateCartUI();
}

‎// أول ما تفتح الصفحة نحدّث واجهة السلة من البيانات المحفوظة
window.addEventListener("load", updateCartUI);
