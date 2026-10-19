// Kunin ang naka-save na cart sa browser.
// Kung walang naka-save, gagawa ng empty array []
let cart = JSON.parse(localStorage.getItem('cart')) || [];


// Hanapin ang element na may id="cart-items"
// Dito natin ipapakita ang mga products sa cart
const cartItemsContainer = document.getElementById('cart-items');


// Hanapin ang element na may id="cart-total"
// Dito ipapakita ang kabuuang presyo
const cartTotalElement = document.getElementById('cart-total');


// Kunin lahat ng buttons na may class="add-to-cart-btn"
const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');


// Ulitin para sa bawat Add to Cart button
addToCartButtons.forEach(button => {

    // Kapag na-click ang button
    button.addEventListener('click', (event) => {

        // Hanapin ang pinakamalapit na parent na may class="product-card"
        const productCard = event.target.closest('.product-card');


        // Kunin ang data-id ng product
        // Halimbawa: data-id="1"
        const id = productCard.getAttribute('data-id');


        // Kunin ang data-name
        // Halimbawa: data-name="Nike Shoes"
        const name = productCard.getAttribute('data-name');


        // Kunin ang presyo at gawing number
        // parseFloat("200") = 200
        const price = parseFloat(
            productCard.getAttribute('data-price')
        );


        // Hanapin ang image sa loob ng card
        // at kunin ang src nito
        const image = productCard.querySelector('img').src;


        // Tawagin ang function para idagdag sa cart
        addToCart(id, name, price, image);

    });

});



// Function para magdagdag ng item sa cart
function addToCart(id, name, price, image){

    // Hanapin kung nasa cart na ang product
    const existingItem =
    cart.find(item => item.id === id);


    // Kung nasa cart na
    if(existingItem){

        // Dagdagan lang ang quantity
        existingItem.quantity += 1;

    }else{

        // Kung wala pa sa cart
        // Gumawa ng bagong object at idagdag sa array
        cart.push({

            // Product ID
            id: id,

            // Pangalan ng product
            name: name,

            // Presyo ng product
            price: price,

            // Image path
            image: image,

            // Simulang quantity
            quantity: 1

        });

    }


    // I-save ang buong cart sa browser
    localStorage.setItem(

        // Pangalan ng storage
        'cart',

        // Gawing text/string ang array
        JSON.stringify(cart)

    );


    // I-update ang display ng cart
    updateCartUI();
}




// Function para ipakita ang laman ng cart sa HTML
function updateCartUI(){

    // Kung wala tayo sa cart page
    // tumigil agad para walang error
    if(!cartItemsContainer || !cartTotalElement) return;


    // Burahin muna ang lumang laman
    cartItemsContainer.innerHTML = '';


    // Variable para sa total price
    let totalCost = 0;


    // Ulitin para sa bawat item sa cart
    cart.forEach(item => {

        // I-compute ang total ng item
        // halimbawa: 200 * 3 = 600
        totalCost += item.price * item.quantity;


        // Gumawa ng bagong div
        const div = document.createElement('div');


        // Lagyan ng class na cart-item
        div.classList.add('cart-item');


        // Lagyan ng HTML content ang div
        div.innerHTML = `

            <!-- Image ng product -->
            <img src="${item.image}" alt="${item.name}">

            <!-- Pangalan -->
            <h3>${item.name}</h3>

            <!-- Presyo -->
            <p>$${item.price}</p>

            <!-- Quantity -->
            <p>Qty: ${item.quantity}</p>

            <!-- Remove button -->
            <button class ="remove-btn" data-id=${item.id}>Remove</button>

        `;


        // Idagdag ang bagong div sa cart container
        cartItemsContainer.appendChild(div);

        // Hinahanap ko ang button na may class="remove-btn"
        // sa loob ng bagong div na ginawa ko.
        const removeButton = div.querySelector('.remove-btn');

    // kapag na click ang remove button tatakbo ang code sa loob
        removeButton.addEventListener('click',() =>{
            removeFromCart(item.id);
        // ito ang tatakbo na code babawasan o tatanggalin ang item    
        });

    });

    function removeFromCart(id){

    const item = cart.find(item => item.id === id);

    if(item.quantity > 1){

        // bawasan lang ang quantity
        item.quantity -= 1;

    }else{

        // kung isa na lang, tanggalin na sa cart
        cart = cart.filter(item => item.id !== id);

    }

    // save ulit sa localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    // i-refresh ang cart display
    updateCartUI();
}

    // Ipakita ang kabuuang presyo
    // toFixed(2) para maging 200.00
    cartTotalElement.textContent =
    totalCost.toFixed(2);

}



// Kapag binuksan ang page
// awtomatikong ipakita ang cart
updateCartUI();