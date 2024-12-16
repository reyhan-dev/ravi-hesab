document.addEventListener("DOMContentLoaded", () => {
  const mobileMenuButton = document.getElementById(
    "mobile-menu-button"
  );
  const closeMenuButton = document.getElementById(
    "close-menu-button"
  );
  const mobileMenu = document.getElementById("mobile-menu");

  mobileMenuButton.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
  });

  closeMenuButton.addEventListener("click", () => {
    console.log("closed");

    mobileMenu.classList.add("hidden");
  });
});

var swiper = new Swiper(".swiper-container", {
  slidesPerView: 1.35,
  spaceBetween: 0,
  dynamicBullets: true,
  pagination: {
    el: ".swiper-pagination", // Pagination
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next", // Next button
    prevEl: ".swiper-button-prev", // Previous button
  },
  breakpoints: {
    // Responsive breakpoints
    680: {
      slidesPerView: 1.85, // Show 1 slide at a time on small screens
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 2.5, // Show 2 slides at a time on medium screens
      spaceBetween: 130,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1280: {
      slidesPerView: 4,
      spaceBetween: 100,
    },
    1660: {
      slidesPerView: 6,
      spaceBetween: 80,
    },
  },
});

var swiper = new Swiper(".swiper-books-container", {
  slidesPerView: 1.1,
  spaceBetween: 0,
  dynamicBullets: true,
  pagination: {
    el: ".swiper-pagination", // Pagination
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next", // Next button
    prevEl: ".swiper-button-prev", // Previous button
  },
  breakpoints: {
    // Responsive breakpoints
    680: {
      slidesPerView: 1.35, // Show 1 slide at a time on small screens
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 1.75, // Show 2 slides at a time on medium screens
      spaceBetween: 130,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1280: {
      slidesPerView: 3.5,
      spaceBetween: 100,
    },
    1660: {
      slidesPerView: 4.25,
      spaceBetween: 0,
    },
  },
});
