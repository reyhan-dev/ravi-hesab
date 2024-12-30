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

const filterDropdownToggle = document.getElementById(
  "filterDropdownToggle"
);
const filterDropdownMenu = document.getElementById(
  "filterDropdownMenu"
);
const filterDropdownLabel = document.getElementById(
  "filterDropdownLabel"
);

filterDropdownToggle.addEventListener("click", () => {
  filterDropdownMenu.classList.toggle("hidden");
  filterDropdownMenu.classList.toggle("flex");
});

// Add event listeners to buttons
document
  .querySelectorAll("#dropdownMenu button")
  .forEach((button) => {
    button.addEventListener("click", () => {
      const selectedValue =
        button.getAttribute("data-value");
      filterDropdownLabel.textContent = selectedValue; // Update the label
      filterDropdownLabel.classList.add("hidden"); // Hide the dropdown after selection
    });
  });

// Close the dropdown when clicking outside of it
document.addEventListener("click", (event) => {
  const isClickInsideDropdown =
    dropdownToggle.contains(event.target) ||
    dropdownMenu.contains(event.target);
  if (!isClickInsideDropdown) {
    dropdownMenu.classList.add("hidden");
    dropdownMenu.classList.remove("flex");
  }
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
