// Open and close cart
const cartIcon = document.getElementById("card");
const cart = document.querySelector(".cart");
const closeCart = document.querySelector("#cart-close");

cartIcon.addEventListener("click", () => {
  cart.classList.add("active");
});

closeCart.addEventListener("click", () => {
  cart.classList.remove("active");
});

// Initialize the count to 0
let count = 0;
const span0 = document.getElementById("notif");

function updateCount() {
  span0.innerHTML = count;
}

// Add event listeners to all "add-to-cart" buttons
const addCartButtons = document.querySelectorAll(".add-to-cart");
addCartButtons.forEach((button) => {
  button.addEventListener("click", handleAddToCart);
});

// Handle adding an item to the cart
function handleAddToCart(event) {
  event.preventDefault();

  const product = this.parentElement;
  const title = product.querySelector("h3").innerHTML;
  const imgSrc = product.querySelector("img").src;

  // Check if the item is already added to the cart
  if (
    itemsAdded.some((item) => item.title === title && item.imgSrc === imgSrc)
  ) {
    alert("You have already added this product to the cart.");
    return;
  }

  itemsAdded.push({ title, imgSrc });
  count++;
  updateCount();

  const cartContent = document.querySelector(".cart-content");
  const cartBoxElement = createCartBoxElement(title, imgSrc);
  cartContent.appendChild(cartBoxElement);
}

// Remove item from the cart
function handleRemoveCartItem(event) {
  event.preventDefault();
  const cartBox = this.parentElement;
  const cartProductTitle = cartBox.querySelector(
    ".cart-product-title"
  ).innerHTML;

  cartBox.remove();
  itemsAdded = itemsAdded.filter((item) => item.title !== cartProductTitle);
  count--;
  updateCount();
}

// Buy from cart

// send the user to the final page
function goToFinal() {
  if (itemsAdded.length > 0) {
    alert("Your Order is Placed Successfully!");
    window.location.href = "final.html";
  } else {
    alert("There is No Order to Place Yet!\nPlease Make an Order First.");
  }
  itemsAdded = [];
  count = 0; // Reset the counter to zero
  updateCount();
}

// Create a cart box element
function createCartBoxElement(title, imgSrc) {
  const cartBox = document.createElement("div");
  cartBox.classList.add("cart-box");

  const img = document.createElement("img");
  img.src = imgSrc;
  img.alt = "";
  img.classList.add("cart-img");
  cartBox.appendChild(img);

  const detailBox = document.createElement("div");
  detailBox.classList.add("detail-box");

  const cartProductTitle = document.createElement("div");
  cartProductTitle.classList.add("cart-product-title");
  cartProductTitle.textContent = title;
  detailBox.appendChild(cartProductTitle);

  cartBox.appendChild(detailBox);

  const removeButton = document.createElement("i");
  removeButton.classList.add("far", "fa-times-circle", "cart-remove");
  removeButton.addEventListener("click", handleRemoveCartItem);
  cartBox.appendChild(removeButton);

  return cartBox;
}

// Initialize the itemsAdded array
let itemsAdded = [];

// Initialize the count
updateCount();
