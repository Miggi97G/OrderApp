const myPizza = [
    { name: "Margherita", description: "Tomaten, Mozzarella", price: 10.50 },
    { name: "Salami", description: "Tomaten, Mozzarella, Salami", price: 12.00 },
    { name: "Hawaii", description: "Tomaten, Mozzarella, Schinken, Ananas", price: 13.50 },
];

let myPasta = [
    { name: "Carbonara", description: "Speck, Ei, Parmesan", price: 11.00 },
    { name: "Bolognese", description: "Hackfleischsauce", price: 10.00 },
    { name: "Aglio e Olio", description: "Knoblauch, Öl, Peperoncino", price: 9.50 },
];

const pizza = document.getElementById("pizzaMenu");
const pasta = document.getElementById("pastaMenu");

function renderPizza() {
    const content = document.getElementById("menu");
    const pizzaSection = document.createElement("section");
    pizzaSection.innerHTML = `<h2>Pizza</h2> <img src="./assets/img/pizza_margheritta.jpeg">`;

    for (let i = 0; i < myPizza.length; i++) {
        const pizzaItem = document.createElement("div");
        pizzaItem.innerHTML = `<h3>${myPizza[i].name}</h3><p>${myPizza[i].description}</p>
        <p>CHF ${myPizza[i].price.toFixed(2)}</p>`;
        const addButton = document.createElement("button");
        addButton.textContent = "Hinzufügen";
        addButton.addEventListener("click", () => addBasket(myPizza[i]));
        pizzaItem.appendChild(addButton);
        pizzaSection.appendChild(pizzaItem);
    }
    content.appendChild(pizzaSection);
}

function renderPasta() {
    const content = document.getElementById("menu");
    const pastaSection = document.createElement("section");
    pastaSection.innerHTML = `<h2>Pasta</h2> <img src="./assets/img/pasta_carbonara.png">`;

    for (let i = 0; i < myPasta.length; i++) {
        const pastaItem = document.createElement("div");
        pastaItem.innerHTML = `<h3>${myPasta[i].name}</h3><p>${myPasta[i].description}</p>
        <p>CHF ${myPasta[i].price.toFixed(2)}</p>`;
        const addButton = document.createElement("button");
        addButton.textContent = "Hinzufügen";
        addButton.addEventListener("click", () => addBasket(myPasta[i]));
        pastaItem.appendChild(addButton);
        pastaSection.appendChild(pastaItem);
    }
    content.appendChild(pastaSection);
}