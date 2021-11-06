
//use js to append products from local storage to the cart page
function createCart() {
    
    const cartContent = JSON.parse(window.localStorage.getItem('products'));

    const bagContentEl = document.getElementById("cart");

    if (cartContent) {
        cartContent.forEach((item) => {
            //create main parent div 
            const selectedItemParentDiv = document.createElement("div");
            selectedItemParentDiv.classList.add("cart-product-card")

            //create product details div 
            const productDetailsDiv = document.createElement("div");
            productDetailsDiv.classList.add("product-details");

            //create image element and append to product details div
            const selectedItemImageEl = document.createElement("img");
            selectedItemImageEl.classList.add("cart-image");
            selectedItemImageEl.src = item.image;
            productDetailsDiv.appendChild(selectedItemImageEl);

            //creative product details text div and append to product details div
            const productDetailsTextDiv = document.createElement("div");
            productDetailsTextDiv.classList.add("product-details-text");
            productDetailsDiv.appendChild(productDetailsTextDiv);

            //create h4 element for flavor title
            const selectedItemTitleEl = document.createElement("h4");
            selectedItemTitleEl.classList.add("cart-product-title");
            selectedItemTitleEl.innerHTML = item.flavor;

            //create h4 element for glazing 
            const glazingDetails = document.createElement("h4");
            glazingDetails.classList.add("cart-flavor-options");
            glazingDetails.innerHTML = "Glazing: " + item.glazing;

            //append title and glazing to product details text div 
            productDetailsTextDiv.appendChild(selectedItemTitleEl);
            productDetailsTextDiv.appendChild(glazingDetails);
            
            //create new div for quantity column
            const quantityColumnDiv = document.createElement("div");
            quantityColumnDiv.classList.add("quantity");
            //create h4 for quantity and append to quantity cololumn div
            const quantityDetails = document.createElement("h4");
            quantityDetails.classList.add("cart-flavor-options");
            quantityDetails.innerHTML = item.quantity;
            quantityColumnDiv.appendChild(quantityDetails);
            
            //create price column div 
            const priceColumnDiv = document.createElement("div");
            priceColumnDiv.classList.add("price");

            const priceDetails = document.createElement("h4");
            priceDetails.innerHTML = item.price;
            priceColumnDiv.appendChild(priceDetails);

            //total price column div
            const totalPriceColumnDiv = document.createElement("div");
            totalPriceColumnDiv.classList.add("total");
            const totalPrice = document.createElement("h4"); 
            totalPrice.innerHTML = item.price;
            totalPriceColumnDiv.appendChild(totalPrice);

            const removeButton = document.createElement("button");
            removeButton.classList.add("Action");
            removeButton.innerHTML = "Remove";
            totalPriceColumnDiv.appendChild(removeButton);

            const wishlistButton = document.createElement("button");
            wishlistButton.classList.add("Action");
            wishlistButton.setAttribute("id", "wishlist-button");
            wishlistButton.innerHTML = "Save";
            totalPriceColumnDiv.appendChild(wishlistButton);

            //append the four big divs to the parent div 
            selectedItemParentDiv.appendChild(productDetailsDiv);
            selectedItemParentDiv.appendChild(quantityColumnDiv);
            selectedItemParentDiv.appendChild(priceColumnDiv);
            selectedItemParentDiv.appendChild(totalPriceColumnDiv);

            //append the cart div with all the products from localstorage
            bagContentEl.appendChild(selectedItemParentDiv)


                                    // WISHLIST
                                    wishlistButton.addEventListener("click", function(){
                                        selectedItemParentDiv.remove();
                        
                                        const index = cartContent.findIndex( function(cartItem) {
                                            if (cartItem == item) {
                                                return true;
                                            }
                                        });
                                        cartContent.splice(index, 1);
                                        window.localStorage.setItem("products", JSON.stringify(cartContent));
                        
                                        let wishlist = [];
                                        if(localStorage.getItem('savedProducts')){
                                            wishlist = JSON.parse(localStorage.getItem('savedProducts'));
                                        }
                                        wishlist.push(item);
                                        localStorage.setItem('savedProducts', JSON.stringify(wishlist));
                                        
                                        addLatestItemToWishlist()
                                        
                                    });
                                    

            //remove item functionality
            removeButton.addEventListener("click", function(){
                //remove the selected div from the cart page
                selectedItemParentDiv.remove();

                //delete the item from localstorage by finding the index of the item and splicing it
                const index = cartContent.findIndex( function(cartItem) {
                    if (cartItem == item) {
                        return true;
                    }
                });
                cartContent.splice(index, 1);
                window.localStorage.setItem("products", JSON.stringify(cartContent));

                updateTotal();
                 });

            });        
        
    } else {
        //display Empty cart message when products doesn't exist in localStorage
        const emptyMessage = document.createElement("h3");
        emptyMessage.classList.add("empty-message");
        emptyMessage.innerHTML = "Your cart is currently empty!";
        bagContentEl.appendChild(emptyMessage);

    }

    function updateTotal() {
        var totalAmount = 0;

        //add up price of each item to get the total amount
        cartContent.forEach((item) => {
            totalAmount += parseInt(item.price.slice(1,));
        });
    
        //change the total amount number
        const subtotal = document.getElementById("total-amount");
        subtotal.innerHTML = "$" + totalAmount +".00";
    
        //update the total number of items 
        const noOfItems = document.getElementById("no-of-items");
        noOfItems.innerHTML = cartContent.length + " items";

        //display "your cart is empty" message when the cartContent length is 0 i.e. when all items have been removed
        if (cartContent.length == 0){
            const emptyMessage = document.createElement("h3");
            emptyMessage.classList.add("empty-message");
            emptyMessage.innerHTML = "Your cart is currently empty!";
            bagContentEl.appendChild(emptyMessage);
         }
    }

    updateTotal();
}

//display all the prosucts in the wishlist
function addWishlistItems() {
     const wishlistDiv = document.getElementById("wishlist");
     const wishListItems = JSON.parse(window.localStorage.getItem('savedProducts'));

         
        if(wishListItems) {
            wishlistItem = wishListItems[wishListItems.length -1];
            
        wishListItems.forEach((wishlistItem) => {
            
            //create main parent div 
            const selectedItemParentDivEl = document.createElement("div");
            selectedItemParentDivEl.classList.add("wishlist-product-details")

            //create image element and append to product details div
            const selectedItemImageEl = document.createElement("img");
            selectedItemImageEl.classList.add("cart-image");
            selectedItemImageEl.src = wishlistItem.image;
            selectedItemParentDivEl.appendChild(selectedItemImageEl);

            //create main parent div 
            const productDetailsDiv = document.createElement("div");
            productDetailsDiv.classList.add("product-details-text");

            const wishlistItemName = document.createElement("h4");
            wishlistItemName.classList.add("wishlist-product-title");
            wishlistItemName.innerHTML = wishlistItem.flavor;

            const wishlistGlazing = document.createElement("h4");
            wishlistGlazing.classList.add("wishlist-flavor-options");
            wishlistGlazing.innerHTML = wishlistItem.glazing;

            const wishListQuantity = document.createElement("h4");
            wishListQuantity.classList.add("wishlist-flavor-options");
            wishListQuantity.innerHTML = wishlistItem.quantity;

            const wishlistPrice = document.createElement("h4");
            wishlistPrice.classList.add("wishlist-flavor-options");
            wishlistPrice.innerHTML = wishlistItem.price;

            productDetailsDiv.appendChild(wishlistItemName);
            productDetailsDiv.appendChild(wishlistGlazing);
            productDetailsDiv.appendChild(wishListQuantity);
            productDetailsDiv.appendChild(wishlistPrice);

            const removeButton = document.createElement("button");
            removeButton.classList.add("Action2");
            removeButton.innerHTML = "Remove";
            productDetailsDiv.appendChild(removeButton);

            selectedItemParentDivEl.appendChild(productDetailsDiv);

            wishlistDiv.appendChild(selectedItemParentDivEl); 

            //remove item functionality
            removeButton.addEventListener("click", function(){
                //remove the selected div from the cart page
                selectedItemParentDivEl.remove();

                //delete the item from localstorage by finding the index of the item and splicing it
                const index = wishListItems.findIndex( function(cartItem) {
                    if (cartItem == wishlistItem) {
                        return true;
                    }
                    });
                    wishListItems.splice(index, 1);
                    window.localStorage.setItem("savedProducts", JSON.stringify(wishListItems));
                 });

            })
            
            if (wishListItems.length == 0) {
                const emptyMessage = document.createElement("h3");
                emptyMessage.classList.add("empty-message");
                emptyMessage.innerHTML = "No items yet!";
                wishlistDiv.appendChild(emptyMessage);
            } 
        } 
}


//function to add only the latest item to the wishlist
function addLatestItemToWishlist() {
    const wishlistDiv = document.getElementById("wishlist");
     const wishListItems = JSON.parse(window.localStorage.getItem('savedProducts'));

         
        if(wishListItems) {
            wishlistItem = wishListItems[wishListItems.length -1];
            
        // wishListItems.forEach((wishlistItem) => {
            
            //create main parent div 
            const selectedItemParentDivEl = document.createElement("div");
            selectedItemParentDivEl.classList.add("wishlist-product-details")

            //create image element and append to product details div
            const selectedItemImageEl = document.createElement("img");
            selectedItemImageEl.classList.add("cart-image");
            selectedItemImageEl.src = wishlistItem.image;
            selectedItemParentDivEl.appendChild(selectedItemImageEl);

            //create main parent div 
            const productDetailsDiv = document.createElement("div");
            productDetailsDiv.classList.add("product-details-text");

            const wishlistItemName = document.createElement("h4");
            wishlistItemName.classList.add("wishlist-product-title");
            wishlistItemName.innerHTML = wishlistItem.flavor;

            const wishlistGlazing = document.createElement("h4");
            wishlistGlazing.classList.add("wishlist-flavor-options");
            wishlistGlazing.innerHTML = wishlistItem.glazing;

            const wishListQuantity = document.createElement("h4");
            wishListQuantity.classList.add("wishlist-flavor-options");
            wishListQuantity.innerHTML = wishlistItem.quantity;

            const wishlistPrice = document.createElement("h4");
            wishlistPrice.classList.add("wishlist-flavor-options");
            wishlistPrice.innerHTML = wishlistItem.price;

            productDetailsDiv.appendChild(wishlistItemName);
            productDetailsDiv.appendChild(wishlistGlazing);
            productDetailsDiv.appendChild(wishListQuantity);
            productDetailsDiv.appendChild(wishlistPrice);

            const removeButton = document.createElement("button");
            removeButton.classList.add("Action2");
            removeButton.innerHTML = "Remove";
            productDetailsDiv.appendChild(removeButton);

            selectedItemParentDivEl.appendChild(productDetailsDiv);

            wishlistDiv.appendChild(selectedItemParentDivEl); 

            //remove item functionality
            removeButton.addEventListener("click", function(){
                //remove the selected div from the cart page
                selectedItemParentDivEl.remove();

                //delete the item from localstorage by finding the index of the item and splicing it
                const index = wishListItems.findIndex( function(cartItem) {
                    if (cartItem == wishlistItem) {
                        return true;
                    }
                    });
                    wishListItems.splice(index, 1);
                    window.localStorage.setItem("savedProducts", JSON.stringify(wishListItems));
                 });

            // })
            
            if (wishListItems.length == 0) {
                const emptyMessage = document.createElement("h3");
                emptyMessage.classList.add("empty-message");
                emptyMessage.innerHTML = "No items yet!";
                wishlistDiv.appendChild(emptyMessage);
            } 
        } 

}


addWishlistItems();
