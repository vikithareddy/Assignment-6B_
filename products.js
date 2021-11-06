function productInfo() {
    const flavors = document.getElementById("flavors"); // get the flavor name from the drop down list  
    const selected_flavor = flavors.options[flavors.selectedIndex].value;

    const glazing_types = document.getElementById("glazing-types"); // get the glazing selection from the drop down list 
    const selected_glazing = glazing_types.options[glazing_types.selectedIndex].value; // get specific glazing value

    const quantity_options = document.getElementById("quantity-options"); // get the quantity selection from the drop down list 
    const selected_quantity = quantity_options.options[quantity_options.selectedIndex].value; // get specific quantity value

    const product_price = document.getElementById("flavor-page-price"); // get the price using id selector

    // change the price displayed on the page according to the quantity selected
    if (selected_quantity == 1) {
        product_price.innerHTML = "$3.00";
    } else if (selected_quantity == 3) {
        product_price.innerHTML = "$9.00";
    } else if (selected_quantity == 6) {
        product_price.innerHTML = "$18.00";
    } else if (selected_quantity == 12) {
        product_price.innerHTML = "$36.00";
    };

    const product_price_text = document.getElementById("flavor-page-price").textContent;

    const flavor_image = document.getElementById("flavor-image"); // get the image

    //create a bun product object
    const myBun = {
        "flavor": selected_flavor,
        "glazing": selected_glazing, 
        "quantity": selected_quantity,
        "price": product_price_text,
        "image":flavor_image.src
    };

    const add_to_cart_button = document.getElementById('add-to-cart');

    // CALLED ONLY IF ADD TO CART BUTTON IS CLICKED
    add_to_cart_button.onclick = function () {
        addToCart(myBun);
        cartNumberUpdate();
    };
}

const flavorsSelectDropDown = document.getElementById("flavors");
flavorsSelectDropDown.addEventListener("change", function() {
    productInfo();
});
productInfo();


// adding the item object to localstorage 
function addToCart(myBun) {

    flavor = myBun.flavor; 
    glazing = myBun.glazing; 
    price = myBun.price; 
    quantity = myBun.quantity; 
    image = myBun.image;

    addToCartFeedback();
 
    let products = [];
    if(localStorage.getItem('products')){
        products = JSON.parse(localStorage.getItem('products'));
    }
    products.push(myBun);
    localStorage.setItem('products', JSON.stringify(products));
}


//update the number of items in cart by grabbing the length of the products array
function cartNumberUpdate() {
    const cartContent = JSON.parse(window.localStorage.getItem('products'));
    const numberPreview = document.createElement("div");
    numberPreview.classList.add("number-preview");
    numberPreview.innerHTML = cartContent.length;
    document.body.appendChild(numberPreview);
}