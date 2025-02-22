var swiper = new Swiper(
  ".swiper-course-service-container",
  {
    slidesPerView: 1.5,
    spaceBetween: 20,
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
      570: {
        slidesPerView: 1.85, // Show 1 slide at a time on small screens
        spaceBetween: 15,
      },
      768: {
        slidesPerView: 2.5, // Show 2 slides at a time on medium screens
        spaceBetween: 130,
      },
      1024: {
        slidesPerView: 3.5,
        spaceBetween: 20,
      },
    },
  }
);

var swiper = new Swiper(".swiper-btn-container", {
  slidesPerView: 2.3,
  spaceBetween: 24,
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
    570: {
      slidesPerView: 1.85, // Show 1 slide at a time on small screens
      spaceBetween: 15,
    },
    768: {
      slidesPerView: 2.5, // Show 2 slides at a time on medium screens
      spaceBetween: 130,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 24,
    },
  },
});

var swiper = new Swiper(".swiper-courses-container", {
  slidesPerView: 1.35,
  spaceBetween: 20,
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
    570: {
      slidesPerView: 1.85, // Show 1 slide at a time on small screens
      spaceBetween: 15,
    },
    768: {
      slidesPerView: 2.5, // Show 2 slides at a time on medium screens
      spaceBetween: 130,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 24,
    },
  },
});



document.addEventListener("DOMContentLoaded", () => {
  const toggleHeaders = document.querySelectorAll(
    ".toggle-header"
  );

  toggleHeaders.forEach((header) => {
    header.addEventListener("click", () => {
      const items = header.nextElementSibling; // Get the next sibling (items container)

      // Check if the items are currently displayed
      if (
        items.style.display === "none" ||
        items.style.display === ""
      ) {
        items.style.display = "flex"; // Show items
        header.setAttribute("aria-expanded", "true"); // Update accessibility attribute
      } else {
        items.style.display = "none"; // Hide items
        header.setAttribute("aria-expanded", "false"); // Update accessibility attribute
      }
    });
  });
});