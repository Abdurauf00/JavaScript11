let users = document.querySelector('.users');

async function getUsers() {
    try {
        let res = await fetch('https://dummyjson.com/products');
        let products = await res.json();
        for (let product of products.products) {
            let item = Alkashh(product);
            users.appendChild(item);
        }
    } catch (error) {
        console.error('Ошибка при получении данных:', error);
    }
}

function Alkashh(product) {
    let item = document.createElement('div');
    item.classList.add('item');
    
    let title = nigga('h2', `Название: ${product.title}`);
    let description = nigga('p', `Описание: ${product.description}`);
    let price = nigga('p', `Цена: ${product.price}`);
    let image = FUNKTSIYAAAAAA(product);

    item.append(title, description, price, image);
    return item;
}

function nigga(tag, text) {
    let element = document.createElement(tag);
    element.textContent = text;
    return element;
}

function FUNKTSIYAAAAAA(product) {
    let image = document.createElement('img');
    image.src = product.images && product.images.length > 0 ? product.images[0] : 'default-image-url.jpg';
    image.alt = product.title;
    return image;
}

window.addEventListener('DOMContentLoaded', getUsers);
