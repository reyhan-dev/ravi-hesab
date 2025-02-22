var swiper = new Swiper(".swiper-related-blogs-container", {
  slidesPerView: 1.3,
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
    768: {
      slidesPerView: 2.5, // Show 2 slides at a time on medium screens
      spaceBetween: 24,
    },
    1024: {
      slidesPerView: 2.3,
      spaceBetween: 24,
    },

    1660: {
      slidesPerView: 3,
      spaceBetween: 24,
    },
  },
});

document.addEventListener("DOMContentLoaded", () => {
  const menuHeader = document.getElementById("menu-header");
  const menuContent =
    document.getElementById("menu-content");
  const hamburger = document.getElementById("hamburger");
  const arrow = document.getElementById("arrow");

  const dataHeader = document.getElementById("data-header");
  const dataContent =
    document.getElementById("data-content");
  const rectangle = document.getElementById("rectangle");
  const dataArrow = document.getElementById("data-arrow");

  // Toggle menu
  menuHeader.addEventListener("click", () => {
    const isOpen =
      menuContent.classList.contains("scale-y-100");
    const menuText = menuHeader.querySelector("p");

    if (isOpen) {
      // Close the menu
      menuContent.classList.add(
        "scale-y-0",
        "opacity-0",
        "hidden"
      );
      menuContent.classList.remove(
        "scale-y-100",
        "opacity-100",
        "flex"
      );
      hamburger.style.stroke = "#0C0D0F";
      arrow.classList.remove("rotate-180");
      menuText.classList.remove("text-primary");
      menuText.classList.add("text-secondary");
    } else {
      // Open the menu
      menuContent.classList.remove(
        "scale-y-0",
        "opacity-0",
        "hidden"
      );
      menuContent.classList.add(
        "scale-y-100",
        "opacity-100",
        "flex"
      );
      hamburger.style.stroke = "#FFBB00";
      arrow.classList.add("rotate-180");
      menuText.classList.add("text-primary");
      menuText.classList.remove("text-secondary");
    }
  });

  // Toggle data section
  dataHeader.addEventListener("click", () => {
    const isOpen =
      dataContent.classList.contains("scale-y-100");
    const dataText = dataHeader.querySelector("p");

    if (isOpen) {
      // Close the data section
      dataContent.classList.add(
        "scale-y-0",
        "opacity-0",
        "hidden"
      );
      dataContent.classList.remove(
        "scale-y-100",
        "opacity-100",
        "flex"
      );
      dataArrow.classList.remove("rotate-180");
      rectangle.classList.remove("bg-primary");
      dataText.classList.remove("text-primary");
      dataText.classList.add("text-secondary");
    } else {
      // Open the data section
      dataContent.classList.remove(
        "scale-y-0",
        "opacity-0",
        "hidden"
      );
      dataContent.classList.add(
        "scale-y-100",
        "opacity-100",
        "flex"
      );
      dataArrow.classList.add("rotate-180");
      rectangle.classList.add("bg-primary");
      dataText.classList.add("text-primary");
      dataText.classList.remove("text-secondary");
    }
  });
});
