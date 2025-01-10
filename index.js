const products = [
    { name: "Fortune Sunlight 1L", price: 138, price2: 150, category: "Grocery", image: "img/fortune.webp" },
    { name: "Aashirwad atta 10Kg", price: 527, price2: 599, category: "Grocery", image: "img/atta.webp" },
    { name: "India Gate Rice 1Kg", price: 350, price2: 389, category: "Grocery", image: "img/indiagate.webp" },
    { name: "Exo DishWash Bar 3+1", price: 29, price2: 40, category: "Grocery", image: "img/exo.webp" },
    { name: "Maggi Mega Pack", price: 160, price2: 199, category: "Grocery", image: "img/maggi.webp" },

    { name: "Samsung Galaxy Watch6", price: 28999, price2: 30000, category: "Electronics", image: "img/watch6.webp" },
    { name: "Boult audio earBuds", price: 1159, price2: 1200, category: "Electronics", image: "img/boault.webp" },
    { name: "Portronics Beem Projector", price: 6398, price2: 6999, category: "Electronics", image: "img/projecter.webp" },
    { name: "MIVI Duopods", price: 799, price2: 899, category: "Electronics", image: "img/mivi.webp" },
    { name: "Eyothec 370", price: 1299, price2: 1500, category: "Electronics", image: "img/camara.webp" },

    { name: "Samsung Galaxy S23 Ultra", price: 79999, price2: 81000, category: "Mobiles", image: "img/s23.webp" },
    { name: "Apple iPhone 15(512gb)", price: 88999, price2: 90000, category: "Mobiles", image: "img/i15.webp" },
    { name: "POCO X6 5G", price: 18999, price2: 20000, category: "Mobiles", image: "img/x6.webp" },
    { name: "Xiaomi 14", price: 49999, price2: 50000, category: "Mobiles", image: "img/xiaomi14.webp" },
    { name: "Vivo X200 Pro", price: 94999, price2: 100000, category: "Mobiles", image: "img/x200.webp" },

    { name: "PHILIPS Air Fryer", price: 4722, price2: 5000, category: "Home Appliances", image: "img/philips.webp" },
    { name: "Nutri pro Juicer", price: 1598, price2: 1700, category: "Home Appliances", image: "img/nutripr.webp" },
    { name: "AGARO Marval 9L Oven", price: 1899, price2: 2000, category: "Home Appliances", image: "img/oven.webp" },
    { name: "Pigeen StoveKraft", price: 1099, price2: 1200, category: "Home Appliances", image: "img/stowkraft.webp" },
    { name: "Cello Burner Gas", price: 3699, price2: 4000, category: "Home Appliances", image: "img/gas.webp" },
    { name: "Samsung TV 108cm", price: 36990, price2: 40000, category: "Home Appliances", image: "img/tv1.webp" },
    { name: "xiaomi smart TV", price: 12499, price2: 14000, category: "Home Appliances", image: "img/xiaomitv.webp" },

    { name: "Apple Mac Book pro", price: 56990, price2: 59000, category: "Loptops", image: "img/macbook.webp" },
    { name: "Acer Chorme Book", price: 16490, price2: 19000, category: "Loptops", image: "img/acer crome.webp" },
    { name: "HP Loptops", price: 38490, price2: 40000, category: "Loptops", image: "img/hp.webp" },
    { name: "Asus X515", price: 27890, price2: 30000, category: "Loptops", image: "img/asus 515.webp" },
    { name: "Lenovo IdeaPad", price: 28990, price2: 31000, category: "Loptops", image: "img/lenovo.webp" },

    { name: "Looney Tunes", price: 499, price2: 600, category: "Fashions", image: "img/shoelooney.jpg" },
    { name: "Centrino mens Shoes", price: 549, price2: 700, category: "Fashions", image: "img/centrinoshoe.jpg" },
    { name: "LE GREEM", price: 469, price2: 500, category: "Fashions", image: "img/legreemshoes.jpg" },
];

let cart = [];

function displayProduct(filteredProducts) {
    const container = document.getElementById("product-container");
    container.innerHTML = '';

    filteredProducts.forEach(product => {
        const productCard = `
        <div class="col-md-2 mb-5">
        <div class="card" style="border: 2px solid white;">
        <img src="${product.image}" alt="${product.name}" style="width:150px;height:200px;margin-left:50px;margin-top:5px">
        <div class="card-body">
        <h6 class="card-title">${product.name}</h6>
        <p class="card-text" style="display:inline">₹${product.price.toFixed(2)}</p><h6 style="text-decoration: line-through;display:inline; margin-left:20px;font-size:small;">${product.price2}</h6><br>
        <button class="btn btn-primary" onclick="addToCart('${product.name}', ${product.price}, '${product.image}')" style="margin-left:50px;">Add to Cart</button>

        </div>
        </div>
        </div>
        `;
        container.innerHTML += productCard;
    });
};
///
function addToCart(name, price, image) {
    const existingItem = cart.find(item => item.name === name);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ name, price, image, quantity: 1 });
    }
    updateCart();
}


function updateCart() {
    const cartItemContainer = document.getElementById("cart-items");
    const cartTotalElement = document.getElementById("cart-total");
    cartItemContainer.innerHTML = '';
    let total = 0;

    cart.forEach((product, index) => {
        total += product.price * product.quantity;

        cartItemContainer.innerHTML += `
        <div class="cart-item  d-flex justify-content-between align-items-center" 
             style="color:gray;padding:5px;width:1550px;border-radius:10px;">
            <span>
                <img src="${product.image}" alt="${product.name}" style="width:100px;">
            </span>
            <span>${product.name}<br>₹${product.price.toFixed(2)}</span>
            <div>
                <button class="btn btn-sm btn-secondary" onclick="changeQuantity(${index}, -1)">-</button>${product.quantity}
                <button class="btn btn-sm btn-secondary" onclick="changeQuantity(${index}, 1)">+</button>
            </div>
        </div>
        `;
    });
    cartTotalElement.textContent = total.toFixed(2);
}


function changeQuantity(index, delta) {
    cart[index].quantity += delta;

    if (cart[index].quantity <= 0) {
        cart.splice(index, 1);
    }

    updateCart();
}

function placeOrder() {
    if (cart.length === 0) {
        alert("Your cart is empty!");
    } else {
        alert("Thank you for your order!");
        cart = [];
        updateCart();
    }
}///

function filterProducts(type) {
    const filteredProducts = type === "all" ? products : products.filter(product => product.category === type);

    displayProduct(filteredProducts);
}

function searchProducts() {
    const searchTerm = document.getElementById('search').value.toLowerCase();

    const searchResult = products.filter(product => product.name.toLowerCase().includes(searchTerm));

    displayProduct(searchResult);
}





filterProducts('all');
