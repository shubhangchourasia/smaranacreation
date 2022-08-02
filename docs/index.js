// Toggle Navbar
const btn = document.querySelector("button.menu-button");
const menu = document.querySelector(".mobile-menu");
const mobileLinks = document.querySelector(".mobile-menu>ul");
const navBottom = document.getElementById("navBottom");
btn.addEventListener("click", () => {
  menu.classList.toggle("hidden");
  navBottom.classList.toggle("border-b-2");
  navBottom.classList.toggle("border-gray-200");
});

// Scroll Function
const navbar = document.querySelector("#navbar");
window.onscroll = () => {
  const nav = document.getElementById("navbar");
  const hamburgerIcon = document.getElementById("hamburgerIcon");
  const navLinks1 = document.querySelectorAll(".navLinks1");
  if (window.scrollY > 60) {
    // Change navbar background
    nav.classList.add("bg-white");
    nav.classList.remove("bg-transparent");
    // Change hamburger icon color
    hamburgerIcon.classList.remove("text-white");
    hamburgerIcon.classList.add("text-gray-700");
    // Change navbarLinks color
    navLinks1.forEach((e) => {
      e.classList.add("text-gray-700");
      e.classList.remove("text-white");
    });
  } else {
    // Change navbar background
    nav.classList.remove("bg-white");
    nav.classList.add("bg-transparent");
    // Change hamburger icon color
    hamburgerIcon.classList.remove("text-gray-700");
    hamburgerIcon.classList.add("text-white");
    // Change navbarLinks color
    navLinks1.forEach((e) => {
      e.classList.add("text-white");
      e.classList.remove("text-gray-700");
    });
  }
};

window.addEventListener("resize", () => {
  if (window.innerWidth > 768) {
    menu.classList.add("hidden");
    navBottom.classList.remove("border-b-2");
    navBottom.classList.remove("border-gray-200");
  }
});
