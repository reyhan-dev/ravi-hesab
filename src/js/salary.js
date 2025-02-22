var swiper = new Swiper(".swiper-salary-btn-container", {
  slidesPerView: 1.35,
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
      slidesPerView: 3,
      spaceBetween: 24,
    },
  },
});

// function createToggleLogic(
//   buttonSelectors,
//   containerSelectors
// ) {
//   buttonSelectors.forEach((buttonSelector, index) => {
//     const toggleButton =
//       document.querySelector(buttonSelector);
//     const toggleContainer = document.querySelector(
//       containerSelectors[index]
//     );

//     if (toggleButton && toggleContainer) {
//       toggleButton.addEventListener("click", () => {
//         toggleContainer.classList.toggle("active");

//         // Optional: Rotate icon if using one
//         const icon = toggleButton.querySelector("svg");
//         if (icon) {
//           icon.classList.toggle("rotate-180");
//         }
//       });
//     }
//   });
// }

// // Example usage:
// const buttonSelectors = [
//   "#toggleButton",
//   "#toggleButton-general-use",
// ];
// const containerSelectors = [
//   ".toggle-items",
//   ".toggle-items-general-use",
// ];

// createToggleLogic(buttonSelectors, containerSelectors);

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

document.addEventListener("DOMContentLoaded", function () {
  const dropdownToggle = document.getElementById(
    "filterDropdownToggle1"
  );
  const dropdownMenu = document.getElementById(
    "filterDropdownMenu1"
  );

  // Toggle dropdown menu visibility
  dropdownToggle.addEventListener("click", function (e) {
    e.stopPropagation(); // Prevent the click from propagating to document
    dropdownMenu.classList.toggle("hidden"); // Toggle the visibility of the dropdown
    dropdownMenu.classList.toggle("flex");
  });

  // Close dropdown if the click is outside of the dropdown
  document.addEventListener("click", function (e) {
    if (!dropdownToggle.contains(e.target)) {
      dropdownMenu.classList.add("hidden"); // Hide the dropdown
    }
  });

  // Handle click on dropdown items
  const dropdownItems =
    dropdownMenu.querySelectorAll("button");
  dropdownItems.forEach(function (item) {
    item.addEventListener("click", function () {
      const value = this.getAttribute("data-value");
      document.getElementById(
        "filterDropdownLabel1"
      ).textContent = value; // Update the label with the selected value
    });
    dropdownMenu.classList.add("hidden"); // Hide the dropdown
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const dropdownToggle = document.getElementById(
    "filterDropdownToggle2"
  );
  const dropdownMenu = document.getElementById(
    "filterDropdownMenu2"
  );

  // Toggle dropdown menu visibility
  dropdownToggle.addEventListener("click", function (e) {
    e.stopPropagation(); // Prevent the click from propagating to document
    dropdownMenu.classList.toggle("hidden"); // Toggle the visibility of the dropdown
    dropdownMenu.classList.toggle("flex");
  });

  // Close dropdown if the click is outside of the dropdown
  document.addEventListener("click", function (e) {
    if (!dropdownToggle.contains(e.target)) {
      dropdownMenu.classList.add("hidden"); // Hide the dropdown
    }
  });

  // Handle click on dropdown items
  const dropdownItems =
    dropdownMenu.querySelectorAll("button");
  dropdownItems.forEach(function (item) {
    item.addEventListener("click", function () {
      const value = this.getAttribute("data-value");
      document.getElementById(
        "filterDropdownLabel2"
      ).textContent = value; // Update the label with the selected value
    });
    dropdownMenu.classList.add("hidden"); // Hide the dropdown
  });
});
