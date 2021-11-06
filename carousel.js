// Carousel on Flavors Page
//code from https://dev.to/rahulra08598872/multiple-item-carousel-39ae
/*variables to hold the right and left arrow selectors, the carousel container div, and the
overaching track div*/
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const carousel = document.querySelector(".carousel-container");
const track = document.querySelector(".track");
let width = carousel.offsetWidth;
let index = 0;

/* add an onclick event listening to the right arrow to get the next image in the list by
adding the 'show' class to the next items and adding the 'hide' class to the prev items */
next.addEventListener("click", function (card) {
  card.preventDefault();
  index = index + 1;
  prev.classList.add("show");
  track.style.transform = "translateX(" + index * -width + "px)";
  if (track.offsetWidth - index * width < index * width) {
    next.classList.add("hide");
  }
});

/* add an onclick event listening to the left arrow to get the previous image in the list by
removing the 'show' class from the current items and removing the 'hide' class from the prev items */
prev.addEventListener("click", function () {
  index = index - 1;
  next.classList.remove("hide");
  if (index === 0) {
    prev.classList.remove("show");
  }
  track.style.transform = "translateX(" + index * -width + "px)";
});
