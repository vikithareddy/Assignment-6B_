// create an object with the Original Flavor page details and store it in localStorage
const originalFlavorPage = () => {
    window.localStorage.setItem("pageDetails", JSON.stringify({
        "flavor" : "Original",
        "description" : "The original is our bestselling flavor made with made with a combination of warm dough, \
        legendary Makara cinnamon, and signature cream cheese for a freshly baked, irresistible \
        sweet treat.",
        "imageSrc" : "images/original.png",
        "nutrition" : "Calories (per serving): 320 kcal, Carb: 46g, \
        Protein: 6g, Fat: 13g",
        "ingredients" : "Flour, sugar, baking power, salt, butter, milk, ground cinnamon, eggs, cream cheese, \
        vanilla extract, brown sugar, maple extract, powdered sugar, heavy cream"
    }
    ))
};

// create an object with the Original (GF) Flavor page details and store it in localStorage
const originalGfFlavorPage = () => {
    window.localStorage.setItem("pageDetails", JSON.stringify({
        "flavor" : "Original(GF)",
        "description" : "The original is our bestselling flavor made with made with a combination of warm dough, \
        legendary Makara cinnamon, and signature cream cheese for a freshly baked, irresistible \
        sweet treat. The gluten free version is perfect for those with gluten intolerence.",
        "imageSrc" : "images/original(gf).png",
        "nutrition" : "Calories (per serving): 320 kcal, Carb: 46g, \
        Protein: 6g, Fat: 13g",
        "ingredients" : "Buckwheat, sugar, baking power, salt, butter, milk, ground cinnamon, eggs, cream cheese, \
        vanilla extract, brown sugar, maple extract, powdered sugar, heavy cream"
    }
    ))
};

// create an object with the Walnut Flavor page details and store it in localStorage
const walnutPageDetails = () => {
    window.localStorage.setItem("pageDetails", JSON.stringify({
        "flavor" : "Walnut",
        "description" : "Soft and fluffy rolled bread with sweet cinnamon walnuts filling with cream cheese glaze \
        (or substitute with our other glazing options). These are perfect for Fall with the right \
        balance of sugary cinnamon and chunky walnuts.",
        "imageSrc" : "images/walnut.png",
        "nutrition" : "Calories (per serving): 350 kcal, Carb: 46g, \
        Protein: 6g, Fat: 18g",
        "ingredients" : "Flour, sugar, baking power, salt, butter, milk, ground cinnamon, eggs, cream cheese, \
        vanilla extract, brown sugar, maple extract, powdered sugar, chopped walnuts"
    }
    ))
};

// create an object with the Pumpkin Spice Flavor page details and store it in localStorage
const pumpkinSpicePageDetails = () => {
    window.localStorage.setItem("pageDetails", JSON.stringify({
        "flavor" : "Pumpkin Spice",
        "description" : "Pumpkin Spice Cinnamon Rolls are fluffy, sweet, and packed with everyone’s favorite pumpkin \
        spice flavor. Eat these cinnamon rolls the night before and pop them in the oven on a cozy autumn morning for a breakfast \
        the whole family will love.",
        "imageSrc" : "images/pumpkin-spice.png",
        "nutrition" : "Calories (per serving): 350 kcal, Carb: 46g, \
        Protein: 6g, Fat: 18g",
        "ingredients" : "Flour, sugar, baking power, salt, butter, milk, ground cinnamon, eggs, cream cheese, \
        vanilla extract, brown sugar, maple extract, powdered sugar, Pumpkin, pumpkin spice"
    }
    ))
};

// create an object with the Caramel Pecan Flavor page details and store it in localStorage
const caramelPecanPageDetails = () => {
    window.localStorage.setItem("pageDetails", JSON.stringify({
        "flavor" : "Caramel Pecan",
        "description" : "When the weather gets chillier though, nothing beats a slice of warm pie, for sure, \
        but which one’s your favorite? It should be our warm, fluffy caramel pecan roll with a delicious, sweet filling \
        that you're sure to love.",
        "imageSrc" : "images/caramel-pecan.png",
        "nutrition" : "Calories (per serving): 380 kcal, Carb: 49g, \
        Protein: 6g, Fat: 18g",
        "ingredients" : "Flour, sugar, baking power, salt, butter, milk, ground cinnamon, eggs, cream cheese, \
        vanilla extract, brown sugar, maple extract, powdered sugar, caramel, pecans"
    }
    ))
};

// create an object with the Blackberry Flavor page details and store it in localStorage
const blackberryPageDetails = () => {
    window.localStorage.setItem("pageDetails", JSON.stringify({
        "flavor" : "Blackberry",
        "description" : "How could cinnamon rolls possibly get any better? By adding Oregon blackberries \
        of course! Have these as a great start to your day during breakfast or as a mid-day pick me up. These are great \
        all year round.",
        "imageSrc" : "images/blackberry.png",
        "nutrition" : "Calories (per serving): 310 kcal, Carb: 42g, \
        Protein: 6g, Fat: 14g",
        "ingredients" : "Flour, sugar, baking power, salt, butter, milk, ground cinnamon, eggs, cream cheese, \
        vanilla extract, brown sugar, maple extract, powdered sugar, Oregon blackberries"
    }
    ))
};

/* this function is called when the Flavor Page loads to dynamically population each flavor page
with the corresponding details.
*/
const flavorPageLoad = () => {
    const flavorDetails = JSON.parse(window.localStorage.getItem("pageDetails"));
    var flavorName =  document.getElementById("flavor-heading").innerHTML;
    document.getElementById("flavor-heading").innerHTML = flavorDetails.flavor;
    document.getElementById("flavor-description").innerHTML = flavorDetails.description;
    document.getElementById("flavor-image").src = flavorDetails.imageSrc;
    document.getElementById("nutrition-details").innerHTML = flavorDetails.nutrition;
    document.getElementById("ingredients-details").innerHTML = flavorDetails.ingredients;

    console.log("HEEEEEEEY", flavorName, flavorDetails.flavor)

    const flavors = document.getElementById('flavors');
    console.log(flavors.selectedIndex)

    if ( flavorDetails.flavor == "Original") {
        flavors.selectedIndex = 0;
    } else if ( flavorDetails.flavor == "Original(GF)") {
        flavors.selectedIndex = 1;
        console.log("Origonal(GF)")
    } else if ( flavorDetails.flavor == "Walnut") {
        flavors.selectedIndex = 2;
    } else if ( flavorDetails.flavor == "Pumpkin Spice") {
        flavors.selectedIndex = 3;
    } else if ( flavorDetails.flavor == "Caramel Pecan") {
        flavors.selectedIndex = 4;
    } else if ( flavorDetails.flavor == "Blackberry") {
        flavors.selectedIndex = 5;
    }
}



/* add shadow on hover to product cards  */
var productImageList = document.getElementsByClassName("add-image-effect");


function mOver(event) {
    event.target.setAttribute("style", "box-shadow: 2px 2px 20px #a19a9a;")
 }
 
 function mOut(event) {  
    event.target.setAttribute("style", "box-shadow: none;")
 }

for (productImage of productImageList) {

    productImage.addEventListener("mouseover", mOver, false);
    productImage.addEventListener("mouseout", mOut, false);
}
    





