let taps = document.querySelectorAll(".taps li");
let tapsArray = Array.from(taps);

let divs = document.querySelectorAll(".content > section");
let divsArray = Array.from(divs);

// console.log(divsArray);
// console.log(tapsArray);

tapsArray.forEach((ele) => {
    ele.addEventListener("click", function (e) {
        // console.log(ele);
        tapsArray.forEach((ele) => {
            ele.classList.remove("active");
        });
        e.currentTarget.classList.add("active");
        divsArray.forEach((div) => {
            div.style.display = "none";
        });
        // console.log(e.currentTarget.dataset.cont);
        document.querySelector(e.currentTarget.dataset.cont).style.display = 'block';
    });
});
let home = document.getElementById("home");

home.addEventListener("click", function () {
    divsArray.forEach((div) => {
        div.style.display = "block";
    });
    tapsArray.forEach((ele) => {
        ele.classList.remove("active");
    });
});

// start
// tapsArray.forEach((ele) => {
//     ele.addEventListener("click", function (e) {
//         // console.log(ele);
//         tapsArray.forEach((ele) => {
//             ele.classList.remove("active");
//         });
//         e.currentTarget.classList.add("active");
//         divsArray.forEach((div) => {
//             div.style.display = "none";
//         });
//         // console.log(e.currentTarget.dataset.cont);
//         document.querySelector(e.currentTarget.dataset.cont).style.display = 'block';
//     });
// });
// End

let hover = document.querySelectorAll(".taps li");
let hoverArray = Array.from(hover);

hoverArray.forEach((ele) => {
    ele.addEventListener("click", function (e) {
        hoverArray.forEach((ele) => {
            ele.classList.remove("hover");
        });
        e.currentTarget.classList.add("hover");
        document.querySelector(e.currentTarget.dataset.cont).style.display = "block";
    });
});

// start cup

let wave = document.querySelector(".wave");
let bottom = -170;

window.addEventListener('load', function () {
    this.move();
});

function move() {
    let id = setInterval(frame, 2000);

    function frame() {
        if (bottom >= -120) {
            wave.style.bottom = bottom + "%";
            bottom = bottom - 25;
        } else {
            wave.style.bottom = bottom + "%";
            bottom = bottom - -15;
        }
    }
}

// start iced

// Get Slider Items | Array.form 
var sliderImages = Array.from(document.querySelectorAll('.slider-contanier img'));

// Get Numbers Of Slider
var sliderCount = sliderImages.length;

// set current slide
var currentSlide = 1;

// slide numbers element

// var slideNumberElement = document.getElementById('slide-number');
var slideNumberElement = Array.from(document.querySelectorAll('.slide-number li'))
var sliderNumber = slideNumberElement.length;
// var slide price
var slideNumberPrice = Array.from(document.querySelectorAll('.slide-number-right li'))
var sliderNumberPrice = slideNumberPrice.length;
// previous and next buttons
var nextButton = document.getElementById('next');
var prevButton = document.getElementById('prev');

// Handle Click On precious and next buttons
nextButton.onclick = nextSlide;
prevButton.onclick = prevSlide;

// Creat The Main Ul Elemetn
var paginationElement = document.createElement('ul');

// set ID on created element
paginationElement.setAttribute('id', 'pagination-ul');

// creat list items besed on slides count
for (var i = 1; i <= sliderCount; i++) {

    // creat the li
    var paginationItem = document.createElement('li');

    // set custom attribute
    paginationItem.setAttribute('data-index', i);

    // set item content
    paginationItem.appendChild(document.createTextNode(i));

    // append items to the main ul list
    paginationElement.appendChild(paginationItem);

}

// add the creatd ul element to the page
document.getElementById('indicators').appendChild(paginationElement);


// get the new created ul
var paginationCreatedUl = document.getElementById('pagination-ul');

// Get pagination Items | Array.form 
var paginationsBullets = Array.from(document.querySelectorAll('#pagination-ul li'));

// Loop through all bullets items
for (var i = 0; i < paginationsBullets.length; i++) {
    paginationsBullets[i].onclick = function () {
        currentSlide = parseInt(this.getAttribute('data-index'));
        thrChecker();
    }
}

// trigger the checker function
thrChecker(); // slide number

// next slide function
function nextSlide() {

    if (nextButton.classList.contains('disabled')) {
        // do nothing
        return false;

    } else {
        currentSlide++;
        thrChecker();
    }

}

// previous slide function
function prevSlide() {
    if (prevButton.classList.contains('disabled')) {
        // do nothing
        return false;

    } else {
        currentSlide--;
        thrChecker();
    }
}

// creat the checker function
function thrChecker() {
    removeAllActive();

    // slideNumberElement.textContent = 'slide #' + (currentSlide) + ' of ' + (sliderCount);
    slideNumberElement[currentSlide - 1].classList.add('active');
    // remove all active classis
    slideNumberPrice[currentSlide - 1].classList.add('active');

    // set active class on cureent slide
    sliderImages[currentSlide - 1].classList.add('active');

    // set active class on current pagination item
    paginationCreatedUl.children[currentSlide - 1].classList.add('active');

    // check if current slide is the first
    if (currentSlide == 1) {

        // add disables class on previous button
        prevButton.classList.add('disabled');

    } else {
        // remove disables class on previous button
        prevButton.classList.remove('disabled');
    }

    // check if current slide is the last
    if (currentSlide == sliderCount) {

        // add disables class on next button
        nextButton.classList.add('disabled');

    } else {
        // remove disables class on next button
        nextButton.classList.remove('disabled');
    }
}

// remove all active classes from images and pagination builets
function removeAllActive() {

    slideNumberPrice.forEach(function (li) {
        li.classList.remove('active');
    });
    // loop thyough li
    slideNumberElement.forEach(function (li) {
        li.classList.remove('active');
    });

    // loop through images
    sliderImages.forEach(function (img) {
        img.classList.remove('active');
    });

    // loop through paginaction bullets
    paginationsBullets.forEach(function (bullet) {
        bullet.classList.remove('active');
    })

}



// End iced

// start slide ads
// const sliderAds = document.getElementById('sliderNew');
// const slidesAds = document.querySelectorAll('.slideN');
// let currentIndex = 0;
// function showSlide(index) {
//     slidesAds.forEach((slide, i) => {
//         slide.style.display = i === index ? 'block' : 'none';
//     });
// };

// function nextSlideAds() {
//     currentIndex = (currentIndex + 1) % slidesAds.length;
//     showSlide(currentIndex);
// };

// setInterval(nextSlideAds, 3000);

// showSlide(currentIndex);


//
const sliderAds = document.getElementById('sliderNew');
const slidesAds = document.querySelectorAll('.slideN');
let currentIndex = 0;

function showSlide(index) {
    slidesAds.forEach((slide, i) => {
        if (i === index) {
            slide.classList.add('active');
        } else {
            slide.classList.remove('active');
        }
    });
}

function nextSlideAds() {
    currentIndex = (currentIndex + 1) % slidesAds.length;
    showSlide(currentIndex);
}

setInterval(nextSlideAds, 4000);
showSlide(currentIndex);


// End Slide Ads
// starrt Timer
console.log("test Timer");
let targetHour = 21;
let tTimer = new Date();
console.log(tTimer);
let timerH = tTimer.getHours();
console.log(timerH);

let ofOn = document.querySelector(".of-on");

function timerTist() {
    if (timerH >= 11 && timerH <= 21) {
        ofOn.style.background = "green";
    } else if (timerH >= 21 && timerH <= 22) {
        ofOn.style.background = "orane";
    }
    else {
        ofOn.style.background = "red";
    }
}
timerTist();

// start Timer Hours

let timeRemaning;
if (timerH >= targetHour) {
    timeRemaning = (60 - tTimer.getMinutes()) * 60 * 1000;
}

// console.log(setInterval);
// start images
document.images.loading = "lazy";
