document.getElementById('order-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const foodSelect = document.getElementById('food-select');
    const quantityInput = document.getElementById('quantity');

    const foodItem = foodSelect.value;
    const quantity = parseInt(quantityInput.value);

    let price;
    switch (foodItem) {
        case 'pizza':
            price = 5;
            break;
        case 'burger':
            price = 4;
            break;
        case 'salad':
            price = 3;
            break;
        default:
            price = 0;
    }

    const total = price * quantity;
    document.getElementById('total').innerHTML = `Total: $${total}`;
});
