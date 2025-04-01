let basket = [];

function init() {
    loadFromLocalStorage();
    renderPizza();
    renderPasta();
    renderBasket();
}

function renderBasket() {
    const basketList = document.getElementById('basketContent');
    basketList.innerHTML = "";

    for (let basketItem = 0; basketItem < basket.length; basketItem++) {
        const item = basket[basketItem];
        const listItem = document.createElement("li");
        listItem.innerHTML = `<p>${item.name}</p>
            ${item.description}
            <p>CHF ${item.price.toFixed(2)}</p>
            <button class="remove" onclick="removeBasket(${basketItem})"> Entfernen</button>`;
        basketList.appendChild(listItem);
    }
    calculatePrice();
}

function addBasket(item) {
    basket.push(item);
    saveToLocalStorage();
    renderBasket();
    
}

function removeBasket(item) {
    basket.splice(item, 1);
    saveToLocalStorage();
    renderBasket();
}

function clearBasket() {
    basket.length = 0;
    renderBasket();
}



function calculatePrice() {
    let totalPrice = 0;
    for (let price = 0; price < basket.length; price++) {
        totalPrice += basket[price].price;
    }
    document.getElementById('totalPrice').innerHTML = `<p>Total: CHF ${totalPrice.toFixed(2)}</p>`;

    console.log(`Total: CHF ${totalPrice.toFixed(2)}`);
}


