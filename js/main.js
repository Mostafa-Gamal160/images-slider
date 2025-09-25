// make array of the img to control them
let slideImages = Array.from(
    document.querySelectorAll(".slider-container img")
  ),
  slideCount = slideImages.length;

// variables
let currentSlide = 1;
let slideNumber = document.getElementById("slide-number");
let nextSlideBtn = document.getElementById("next"),
  prevSlideBtn = document.getElementById("prev");
let indicatorsEle = document.getElementById("indicators");

// create ul and append it to page
let paginationElement = document.createElement("ul");

paginationElement.setAttribute("id", "pagination-ul");

// create li and append it to ul
for (let i = 1; i <= slideCount; i++) {
  let paginationItem = document.createElement("li");

  paginationItem.setAttribute("data-index", i);

  // add content to li
  paginationItem.append(document.createTextNode(i));

  // append li to ul
  paginationElement.append(paginationItem);
}
// append ul to the page
indicatorsEle.append(paginationElement);

// get access to the ul and li
let createdUl = document.getElementById("pagination-ul"),
  createdLi = Array.from(document.querySelectorAll("#pagination-ul li"));

theChecker();

// build the checker function
function theChecker() {
  // showing the number of the slide
  slideNumber.innerHTML = `slide# ${currentSlide} of ${slideCount}`;

  // call the function of remove the active class
  removeAllActive();

  // add active to the current li and slide
  createdUl.children[currentSlide - 1].classList.add("active");
  slideImages[currentSlide - 1].classList.add("active");

  // disabled and enabled  prev btn
  if (currentSlide === 1) {
    prevSlideBtn.classList.add("disabled");
  } else {
    prevSlideBtn.classList.remove("disabled");
  }

  // disabled and enabled  next btn
  if (currentSlide === slideCount) {
    nextSlideBtn.classList.add("disabled");
  } else {
    nextSlideBtn.classList.remove("disabled");
  }
}

// function for remove all active classes from the li and slide
function removeAllActive() {
  slideImages.forEach((img) => img.classList.remove("active"));

  createdLi.forEach((li) => li.classList.remove("active"));
}

// call the function when click the btn
nextSlideBtn.onclick = nextSlide;
prevSlideBtn.onclick = prevSlide;

// build the function for the nextSlide
function nextSlide() {
  if (nextSlideBtn.classList.contains("disabled")) {
    return false;
  } else {
    currentSlide++;

    theChecker();
  }
}

// build the function for the prevSlide
function prevSlide() {
  if (prevSlideBtn.classList.contains("disabled")) {
    return false;
  } else {
    currentSlide--;

    theChecker();
  }
}

// make a loop through all bullets items
for (let i = 0; i < createdLi.length; i++) {
  createdLi[i].onclick = function () {
    currentSlide = parseInt(this.getAttribute("data-index"));

    theChecker();
  };
}
