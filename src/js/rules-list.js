document
  .querySelectorAll(".rule-accordion-header")
  .forEach((header) => {
    header.addEventListener("click", () => {
      const accordionItem = header.parentElement;
      const content = accordionItem.querySelector(
        ".rule-accordion-content"
      );
      const icon = accordionItem.querySelector(
        ".rule-accordion-icon"
      );

      // Toggle content visibility
      content.classList.toggle("flex");
      content.classList.toggle("hidden");

      // Rotate the icon
      icon.classList.toggle("rotate-180");

      // Add or remove bg-box class to the entire accordion item
      accordionItem.classList.toggle("bg-box");
    });
  });

// Get references to dropdown search *mobile* elements
const filterMobileDropdownButton = document.getElementById(
  "filterMobileDropdownButton"
);

const filterMobileDropdownMenu = document.getElementById(
  "filterMobileDropdownMenu"
);
const filterMobileDropdownText = document.getElementById(
  "filterMobileDropdownText"
);
const filterMobileArrowIcon = document.getElementById(
  "filterMobileArrowIcon"
);

// Toggle dropdown on button click
filterMobileDropdownButton.addEventListener(
  "click",
  function (event) {
    // Prevent the event from bubbling up
    event.stopPropagation();

    // Toggle dropdown visibility
    const isOpen =
      filterMobileDropdownMenu.classList.contains(
        "scale-y-100"
      );

    console.log(isOpen);

    // Switch the classes to open/close the dropdown
    filterMobileDropdownMenu.classList.toggle(
      "scale-y-0",
      isOpen
    );
    filterMobileDropdownMenu.classList.toggle(
      "scale-y-100",
      !isOpen
    );
    filterMobileDropdownMenu.classList.toggle(
      "opacity-0",
      isOpen
    );
    filterMobileDropdownMenu.classList.toggle(
      "opacity-100",
      !isOpen
    );

    // Rotate the arrow
    filterMobileArrowIcon.classList.toggle(
      "rotate-180",
      !isOpen
    );
  }
);

// Close dropdown if clicked outside
document.addEventListener("click", function (event) {
  if (
    !filterMobileDropdownButton.contains(event.target) &&
    !filterMobileDropdownMenu.contains(event.target)
  ) {
    filterMobileDropdownMenu.classList.add("scale-y-0");
    filterMobileDropdownMenu.classList.add("opacity-0");
    filterMobileDropdownMenu.classList.remove(
      "scale-y-100"
    );
    filterMobileDropdownMenu.classList.remove(
      "opacity-100"
    );
    filterMobileArrowIcon.classList.remove("rotate-180");
  }
});

// Handle item selection and update button text
const filterMobileDropdownItems =
  filterMobileDropdownMenu.querySelectorAll(
    ".mobile-dropdown-item"
  );

filterMobileDropdownItems.forEach((item) => {
  item.addEventListener("click", function (event) {
    // Update the button text with the selected item
    filterMobileDropdownText.textContent = this.textContent;

    // Close the dropdown
    filterMobileDropdownMenu.classList.add("scale-y-0");
    filterMobileDropdownMenu.classList.add("opacity-0");
    filterMobileDropdownMenu.classList.remove(
      "scale-y-100"
    );
    filterMobileDropdownMenu.classList.remove(
      "opacity-100"
    );
    filterMobileArrowIcon.classList.remove("rotate-180");
  });
});

// desktop

const filterDesktopDropdownButton = document.getElementById(
  "filterDesktopDropdownButton"
);

const filterDesktopDropdownMenu = document.getElementById(
  "filterDesktopDropdownMenu"
);
const filterDesktopDropdownText = document.getElementById(
  "filterDesktopDropdownText"
);
const filterDesktopArrowIcon = document.getElementById(
  "filterDesktopArrowIcon"
);

// Toggle dropdown on button click
filterDesktopDropdownButton.addEventListener(
  "click",
  function (event) {
    // Prevent the event from bubbling up
    event.stopPropagation();

    // Toggle dropdown visibility
    const isOpen =
      filterDesktopDropdownMenu.classList.contains(
        "scale-y-100"
      );

    console.log(isOpen);

    // Switch the classes to open/close the dropdown
    filterDesktopDropdownMenu.classList.toggle(
      "scale-y-0",
      isOpen
    );
    filterDesktopDropdownMenu.classList.toggle(
      "scale-y-100",
      !isOpen
    );
    filterDesktopDropdownMenu.classList.toggle(
      "opacity-0",
      isOpen
    );
    filterDesktopDropdownMenu.classList.toggle(
      "opacity-100",
      !isOpen
    );

    // Rotate the arrow
    filterDesktopArrowIcon.classList.toggle(
      "rotate-180",
      !isOpen
    );
  }
);

// Close dropdown if clicked outside
document.addEventListener("click", function (event) {
  if (
    !filterDesktopDropdownButton.contains(event.target) &&
    !filterDesktopDropdownMenu.contains(event.target)
  ) {
    filterDesktopDropdownMenu.classList.add("scale-y-0");
    filterDesktopDropdownMenu.classList.add("opacity-0");
    filterDesktopDropdownMenu.classList.remove(
      "scale-y-100"
    );
    filterDesktopDropdownMenu.classList.remove(
      "opacity-100"
    );
    filterDesktopArrowIcon.classList.remove("rotate-180");
  }
});

// Handle item selection and update button text
const filterDesktopDropdownItems =
  filterDesktopDropdownMenu.querySelectorAll(
    ".desktop-dropdown-item"
  );

filterDesktopDropdownItems.forEach((item) => {
  item.addEventListener("click", function (event) {
    // Update the button text with the selected item
    filterDesktopDropdownText.textContent =
      this.textContent;

    // Close the dropdown
    filterDesktopDropdownMenu.classList.add("scale-y-0");
    filterDesktopDropdownMenu.classList.add("opacity-0");
    filterDesktopDropdownMenu.classList.remove(
      "scale-y-100"
    );
    filterDesktopDropdownMenu.classList.remove(
      "opacity-100"
    );
    filterDesktopArrowIcon.classList.remove("rotate-180");
  });
});
