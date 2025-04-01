function saveToLocalStorage() {
    localStorage.setItem('basket', JSON.stringify(basket));
}

function loadFromLocalStorage() {
    let storedBasket = JSON.parse(localStorage.getItem("basket"));
    if (storedBasket !== null) {
        basket = storedBasket;
    }
}