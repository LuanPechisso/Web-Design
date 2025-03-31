// Cart data structure
let cart = [];

// Function to add an item to the cart
function addToCart(itemName, itemPrice) {
    // Add item to the cart array
    cart.push({ name: itemName, price: itemPrice });
    console.log(`${itemName} added to cart.`);
    updateCartDisplay();
}

// Function to calculate the total amount
function calculateTotal() {
    return cart.reduce((total, item) => total + item.price, 0);
}

// Function to display the cart and total amount on the website
function updateCartDisplay() {
    const cartContainer = document.querySelector('#cart');
    const totalContainer = document.querySelector('#total');

    // Clear previous cart display
    cartContainer.innerHTML = '';
    
    // Display each item in the cart
    cart.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        cartContainer.appendChild(listItem);
    });

    // Display the total amount
    totalContainer.textContent = `Total: $${calculateTotal().toFixed(2)}`;
}

// Debugging: Check that cart items are added correctly
console.log("JavaScript is loaded. Ready to track cart updates!");
