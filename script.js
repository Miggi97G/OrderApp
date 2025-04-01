let basket = [];

function init() {
    loadFromLocalStorage();
    renderPizza();
    renderPasta();
    renderDesert();
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
            <p>CHF ${item.price.toFixed(2)} (Anzahl: ${item.quantity || 1}X)</p>
            <button onclick="decreaseQuantity(${basketItem})">-</button>
            <button onclick="increaseQuantity(${basketItem})">+</button>
            <button class="remove" onclick="removeBasket(${basketItem})"> Entfernen</button>`;
        basketList.appendChild(listItem);
    }
    calculatePrice();
    
}

function increaseQuantity(index) {
    basket[index].quantity = (basket[index].quantity || 1) + 1;
    renderBasket();
}

function decreaseQuantity(index) {
    if (basket[index].quantity > 1) {
        basket[index].quantity--;
    } else {
        removeBasket(index);
    }
    renderBasket();
}

function addBasket(item) {
    let itemInBasket = false;
    for (let i = 0; i < basket.length; i++) {
        if (basket[i].name === item.name) {
            basket[i].quantity = (basket[i].quantity || 1) + 1;
            itemInBasket = true;
            break;
        }
    }
    if (!itemInBasket) {
        item.quantity = 1;
        basket.push(item);
    }
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
        totalPrice += basket[price].price * (basket[price].quantity || 1);
    }
    document.getElementById('totalPrice').innerHTML = `<p>Total: CHF ${totalPrice.toFixed(2)}</p>`;

    console.log(`Total: CHF ${totalPrice.toFixed(2)}`);
}

function toggleBasket() {
    console.log("toggleBasket() wurde aufgerufen!");
    const basketSection = document.getElementById('basket');
    basketSection.classList.toggle('show');
}

function placeOrder() {
    clearBasket();
    const orderMessage = document.getElementById('orderMessage');
    orderMessage.textContent = "Vielen Dank für deine Bestellung!"; 
    orderMessage.classList.remove('hidden'); 
    setTimeout(() => {
        orderMessage.classList.add('hidden');
    }, 3000);
}


