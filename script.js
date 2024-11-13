// Shopping cart functionality (simple example)

let cart = [];

const addToCartButtons = document.querySelectorAll('.add-to-cart');

addToCartButtons.forEach((button) => {
    button.addEventListener('click', () => {
        const productName = button.previousElementSibling.previousElementSibling.textContent;
        const productPrice = button.previousElementSibling.textContent;
        cart.push({ productName, productPrice });
        alert(`${productName} has been added to your cart!`);
    });
});
document.querySelector('form').addEventListener('submit', function (event) {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
  
    if (!name || !email || !message) {
      event.preventDefault();
      alert('Please fill out all fields.');
    }
  });