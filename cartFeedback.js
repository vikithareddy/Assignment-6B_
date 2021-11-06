function cartNumberUpdate() {
    const cartContent = JSON.parse(window.localStorage.getItem('products'));
    const numberPreview = document.createElement("div");
    numberPreview.classList.add("number-preview");
    noOfItemsInCart = cartContent.length;
    numberPreview.innerHTML = noOfItemsInCart;
    document.body.appendChild(numberPreview);
    const addToCartButton = document.getElementById("add-to-cart");
}

cartNumberUpdate();



