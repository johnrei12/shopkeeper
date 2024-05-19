document.addEventListener('DOMContentLoaded', () => {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const cartItems = document.querySelector('.cart-items');
    const totalElement = document.getElementById('total');
    const receiptElement = document.getElementById('receipt');
    const receiptItems = document.querySelector('.receipt-items');
    const receiptTotal = document.getElementById('receipt-total');
    let total = 0;

    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            const card = button.closest('.card');
            const title = card.querySelector('.title').innerText;
            const price = parseFloat(card.querySelector('.price').innerText.replace('$', ''));

            const cartItem = document.createElement('li');
            cartItem.innerHTML = `<span>${title}</span><span>$${price.toFixed(2)}</span>`;
            cartItems.appendChild(cartItem);

            total += price;
            totalElement.innerText = total.toFixed(2);
        });
    });

    document.querySelector('.checkout').addEventListener('click', () => {
        receiptItems.innerHTML = cartItems.innerHTML;
        receiptTotal.innerText = total.toFixed(2);
        receiptElement.style.display = 'block';
    });
});