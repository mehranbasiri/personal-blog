const nav = document.querySelector(".mobile-nav"),
  navMenuBtn = document.querySelector(".nav-menu-btn"),
  navCloseBtn = document.querySelector(".nav-close-btn");
//navToggle function//
const navToggleFunc = () => {
  nav.classList.toggle("active");
};
navMenuBtn.addEventListener("click", navToggleFunc);
navCloseBtn.addEventListener("click", navToggleFunc);

// theme toggle varibales

const themeBtn = document.querySelectorAll(".theme-btn");

for (let i = 0; i < themeBtn.length; i++) {
  themeBtn[i].addEventListener("click", function () {
    document.body.classList.toggle("light-theme");
    document.body.classList.toggle("dark-theme");

    for (let j = 0; j < themeBtn.length; j++) {
      themeBtn[j].classList.toggle("light");
      themeBtn[j].classList.toggle("dark");
    }
  });
}

// ==========scroll top btn============

// let scrollBtn = document.getElementsByClassName("scroll-top-btn");

// window.onscroll = function () {
//   scrollFunction();
// };

// function scrollFunction() {
//   if (
//     document.body.scrollTop > 200 ||
//     document.documentElement.scrollTop > 200
//   ) {
//     scrollBtn.style.display = "block";
//   } else {
//     scrollBtn.style.display = "none";
//   }
// }
// function topFunction() {
//   document.body.scrollTop = 0; // For Safari
//   document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
// }
// document.getElementsByClassName("scroll-top-btn").onclick = function () {
//   scrollTo(2000, 8000);
// };

const scrollToTopButton = document.getElementsByClassName("scroll-top-btn");

const scrollFunc = () => {
  let y = window.scrollY;

  if (y > 100) {
    scrollToTopButton.classList = "block";
    console.log("true");
  } else {
    scrollToTopButton.classList = "none";
    console.log("false");
  }
};

window.addEventListener("scroll", scrollFunc);

const scrollToTop = () => {
  const c = document.documentElement.scrollTop || document.body.scrollTop;

  if (c > 0) {
    window.requestAnimationFrame(scrollToTop);

    window.scrollTo(0, c - c / 30);
  }
};
