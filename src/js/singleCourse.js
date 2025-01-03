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

var swiper = new Swiper(
  ".swiper-course-service-container",
  {
    slidesPerView: 1.4,
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
        slidesPerView: 3.75,
        spaceBetween: 20,
      },
    },
  }
);

var swiper = new Swiper(".swiper-btn-container", {
  slidesPerView: 1.9,
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
      slidesPerView:5,
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

// Get references to dropdown search *desktop* elements
const dropdownButton = document.getElementById(
  "dropdownButton"
);
const dropdownMenu =
  document.getElementById("dropdownMenu");
const dropdownText =
  document.getElementById("dropdownText");
const arrowIcon = document.getElementById("arrowIcon");

// Toggle dropdown on button click
dropdownButton.addEventListener("click", function (event) {
  // Prevent the event from bubbling up
  event.stopPropagation();

  // Toggle dropdown visibility
  const isOpen =
    dropdownMenu.classList.contains("scale-y-100");

  console.log(isOpen);

  // Switch the classes to open/close the dropdown
  dropdownMenu.classList.toggle("scale-y-0", isOpen);
  dropdownMenu.classList.toggle("scale-y-100", !isOpen);
  dropdownMenu.classList.toggle("opacity-0", isOpen);
  dropdownMenu.classList.toggle("opacity-100", !isOpen);

  // Rotate the arrow
  arrowIcon.classList.toggle("rotate-180", !isOpen);
});

// Close dropdown if clicked outside
document.addEventListener("click", function (event) {
  if (
    !dropdownButton.contains(event.target) &&
    !dropdownMenu.contains(event.target)
  ) {
    dropdownMenu.classList.add("scale-y-0");
    dropdownMenu.classList.add("opacity-0");
    dropdownMenu.classList.remove("scale-y-100");
    dropdownMenu.classList.remove("opacity-100");
    arrowIcon.classList.remove("rotate-180");
  }
});

// Handle item selection and update button text
const dropdownItems = dropdownMenu.querySelectorAll(
  ".dropdown-item"
);

dropdownItems.forEach((item) => {
  item.addEventListener("click", function (event) {
    // Update the button text with the selected item
    dropdownText.textContent = this.textContent;

    // Close the dropdown
    dropdownMenu.classList.add("scale-y-0");
    dropdownMenu.classList.add("opacity-0");
    dropdownMenu.classList.remove("scale-y-100");
    dropdownMenu.classList.remove("opacity-100");
    arrowIcon.classList.remove("rotate-180");
  });
});

// Get references to dropdown search *mobile* elements
const mobileDropdownButton = document.getElementById(
  "mobileDropdownButton"
);

console.log(mobileDropdownButton);

const mobileDropdownMenu = document.getElementById(
  "mobileDropdownMenu"
);
const mobileDropdownText = document.getElementById(
  "mobileDropdownText"
);
const mobileArrowIcon = document.getElementById(
  "mobileArrowIcon"
);

// Toggle dropdown on button click
mobileDropdownButton.addEventListener(
  "click",
  function (event) {
    // Prevent the event from bubbling up
    event.stopPropagation();

    // Toggle dropdown visibility
    const isOpen =
      mobileDropdownMenu.classList.contains("scale-y-100");

    console.log(isOpen);

    // Switch the classes to open/close the dropdown
    mobileDropdownMenu.classList.toggle(
      "scale-y-0",
      isOpen
    );
    mobileDropdownMenu.classList.toggle(
      "scale-y-100",
      !isOpen
    );
    mobileDropdownMenu.classList.toggle(
      "opacity-0",
      isOpen
    );
    mobileDropdownMenu.classList.toggle(
      "opacity-100",
      !isOpen
    );

    // Rotate the arrow
    mobileArrowIcon.classList.toggle("rotate-180", !isOpen);
  }
);

// Close dropdown if clicked outside
document.addEventListener("click", function (event) {
  if (
    !dropdownButton.contains(event.target) &&
    !mobileDropdownMenu.contains(event.target)
  ) {
    mobileDropdownMenu.classList.add("scale-y-0");
    mobileDropdownMenu.classList.add("opacity-0");
    mobileDropdownMenu.classList.remove("scale-y-100");
    mobileDropdownMenu.classList.remove("opacity-100");
    arrowIcon.classList.remove("rotate-180");
  }
});

// Handle item selection and update button text
const mobileDropdownItems =
  mobileDropdownMenu.querySelectorAll(
    ".mobile-dropdown-item"
  );

mobileDropdownItems.forEach((item) => {
  item.addEventListener("click", function (event) {
    // Update the button text with the selected item
    mobileDropdownText.textContent = this.textContent;

    // Close the dropdown
    mobileDropdownMenu.classList.add("scale-y-0");
    mobileDropdownMenu.classList.add("opacity-0");
    mobileDropdownMenu.classList.remove("scale-y-100");
    mobileDropdownMenu.classList.remove("opacity-100");
    arrowIcon.classList.remove("rotate-180");
  });
});

// Get references to input and dropdown elements
const searchInput = document.getElementById("searchInput");
const dropdownSearch = document.getElementById(
  "dropdownSearch"
);

// Show dropdown on focus
searchInput.addEventListener("focus", function () {
  dropdownSearch.classList.remove("hidden");
  mobileDropdownSearch.classList.add("flex"); // Show dropdown
});

// Hide dropdown on blur
searchInput.addEventListener("blur", function () {
  // Delay hiding dropdown to allow for clicks inside
  dropdownSearch.classList.add("hidden"); // Hide dropdown
});

// Optional: Hide dropdown when clicking inside dropdown
dropdownSearch.addEventListener("mouseenter", function () {
  dropdownSearch.classList.remove("hidden"); // Keep dropdown open on hover
});

// Get references to *mobile* input and dropdown elements
const mobileSearchInput = document.getElementById(
  "mobileSearchInput"
);
const mobileDropdownSearch = document.getElementById(
  "mobileDropdownSearch"
);

// Show dropdown on focus
mobileSearchInput.addEventListener("focus", function () {
  mobileDropdownSearch.classList.remove("hidden"); // Show dropdown
  mobileDropdownSearch.classList.add("flex"); // Show dropdown
});

// Hide dropdown on blur
mobileSearchInput.addEventListener("blur", function () {
  // Delay hiding dropdown to allow for clicks inside
  mobileDropdownSearch.classList.add("hidden"); // Hide dropdown
});

// Optional: Hide dropdown when clicking inside dropdown
mobileDropdownSearch.addEventListener(
  "mouseenter",
  function () {
    mobileDropdownSearch.classList.remove("hidden"); // Keep dropdown open on hover
  }
);

// dropdownSearch.addEventListener("mouseleave", function () {
//   dropdownSearch.classList.add("hidden"); // Hide when not hovering
// });

function toggleAccordion(id) {
  const content = document.getElementById(id);
  const arrowIcon =
    content.previousElementSibling.querySelector(
      ".arrow-icon"
    );

  if (content.style.maxHeight) {
    // Accordion is open, close it
    content.style.maxHeight = null;
    content.style.opacity = 0;
    arrowIcon.classList.remove("rotate-180");
  } else {
    // Accordion is closed, open it
    content.style.maxHeight = content.scrollHeight + "px";
    content.style.opacity = 1;
    arrowIcon.classList.add("rotate-180");
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const tabButtons =
    document.querySelectorAll(".nav-button");
  const tabContent = document.getElementById("tab-content");

  // Function to switch tabs
  function switchTab(tabId) {
    // Hide all tab contents
    const tabPanels =
      tabContent.querySelectorAll(".tab-panel");
    tabPanels.forEach((panel) => {
      panel.classList.add("hidden");
    });

    // Deactivate all buttons
    tabButtons.forEach((btn) => {
      btn.classList.remove("bg-secondary", "text-white"); // Remove active styles
      btn.classList.add("text-secondary", "bg-box"); // Add default styles
    });

    // Activate the current button
    const activeTabBtn = document.querySelector(
      `.nav-button[data-tab="${tabId}"]`
    );
    activeTabBtn.classList.remove(
      "text-secondary",
      "bg-box"
    ); // Remove default styles
    activeTabBtn.classList.add(
      "bg-secondary",
      "text-white"
    ); // Add active styles

    // Show the related tab content
    const activeTab = document.getElementById(
      `${tabId}-content`
    );
    activeTab.classList.remove("hidden");
  }

  // Add event listeners
  tabButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const tabId = button.getAttribute("data-tab");
      switchTab(tabId);
    });
  });

  // Initialize first tab as active
  switchTab("Headline"); // Default active tab
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

document.addEventListener("DOMContentLoaded", function () {
  const accordionItems = document.querySelectorAll(
    ".accordion-item"
  );

  accordionItems.forEach((item) => {
    const header = item.querySelector(".accordion-header");
    const content = item.querySelector(
      ".accordion-content"
    );
    const icon = item.querySelector(".accordion-icon");

    header.addEventListener("click", function () {
      // Toggle height classes based on whether the content is open or not
      const isOpen = content.classList.contains("open");

      // Close all other items
      accordionItems.forEach((otherItem) => {
        const otherContent = otherItem.querySelector(
          ".accordion-content"
        );
        const otherIcon = otherItem.querySelector(
          ".accordion-icon"
        );
        const otherItemHeader = otherItem.querySelector(
          ".accordion-header"
        );

        // Collapse other items
        if (otherItem !== item) {
          otherContent.classList.remove("open");
          otherContent.style.display = "none"; // Hide immediately for other accordions
          otherIcon.classList.remove("open");
          otherItemHeader.parentElement.classList.remove(
            "h-full"
          );
          otherItemHeader.parentElement.classList.add(
            "h-[60px]"
          );
        }
      });

      // Toggle current item
      if (isOpen) {
        // If open, collapse it (remove h-full and add h-[60px])
        content.classList.remove("open");
        content.style.display = "none"; // Hide the content
        icon.classList.remove("open");
        item.classList.remove("h-full");
        item.classList.add("h-[60px]");
      } else {
        // If closed, expand it (add h-full and open the content)
        content.classList.add("open");
        content.style.display = "block"; // Show the content
        icon.classList.add("open");
        item.classList.add("h-full");
        item.classList.remove("h-[60px]");
      }
    });
  });
});

function toggleAccordion(id) {
  const content = document.getElementById(id);
  const arrowIcon =
    content.previousElementSibling.querySelector(
      ".arrow-icon"
    );

  if (content.style.maxHeight) {
    // Accordion is open, close it
    content.style.maxHeight = null;
    content.style.opacity = 0;
    arrowIcon.classList.remove("rotate-180");
  } else {
    // Accordion is closed, open it
    content.style.maxHeight = content.scrollHeight + "px";
    content.style.opacity = 1;
    arrowIcon.classList.add("rotate-180");
  }
}
