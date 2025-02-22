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

  document
    .querySelectorAll(".accordion-header")
    .forEach((header) => {
      header.addEventListener("click", () => {
        const content = header.nextElementSibling;
        const icon = header.querySelector(
          ".accordion-icon"
        );

        // Toggle the display of the accordion content
        if (
          content.style.display === "none" ||
          content.style.display === ""
        ) {
          content.style.display = "block";
        } else {
          content.style.display = "none";
        }
      });
    });
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

function toggleIdeas(element) {
  const content = element.parentElement.querySelector(
    "#ideas-content"
  );
  const arrow = element.querySelector("img");

  if (content.classList.contains("max-h-0")) {
    content.classList.remove("max-h-0", "hidden");
    content.style.maxHeight = content.scrollHeight + "px";
    arrow.classList.add("rotate-180");
  } else {
    content.style.maxHeight = 0;
    content.classList.add("max-h-0");
    arrow.classList.remove("rotate-180");

    content.classList.add("hidden");
    // setTimeout(() => {
    //   content.classList.add("hidden");
    // }, 300);
  }
}
document.addEventListener("DOMContentLoaded", () => {
  const triggers = document.querySelectorAll(
    ".dropdown-trigger"
  );
  const overlay = document.getElementById("overlay");
  let activeDropdown = null;

  triggers.forEach((trigger) => {
    trigger.addEventListener("click", (e) => {
      const dropdownId =
        trigger.getAttribute("data-dropdown");
      const dropdown = document.getElementById(dropdownId);

      if (activeDropdown && activeDropdown !== dropdown) {
        activeDropdown.classList.remove("scale-100");
        activeDropdown.classList.add("scale-0");
        overlay.classList.add("hidden");

        // Remove active styles from the previous trigger
        document
          .querySelector(
            `[data-dropdown="${activeDropdown.id}"]`
          )
          .classList.remove("text-primary", "font-bold");
      }

      if (dropdown.classList.contains("scale-0")) {
        dropdown.classList.remove("scale-0");
        dropdown.classList.add("scale-100");
        overlay.classList.remove("hidden");

        // Add active styles to the current trigger
        trigger.classList.add("text-primary", "font-bold");
        activeDropdown = dropdown;
      } else {
        dropdown.classList.remove("scale-100");
        dropdown.classList.add("scale-0");
        overlay.classList.add("hidden");

        // Remove active styles from the current trigger
        trigger.classList.remove(
          "text-primary",
          "font-bold"
        );
        activeDropdown = null;
      }
    });
  });

  overlay.addEventListener("click", () => {
    if (activeDropdown) {
      activeDropdown.classList.remove("scale-100");
      activeDropdown.classList.add("scale-0");
      overlay.classList.add("hidden");

      // Remove active styles from the active trigger
      document
        .querySelector(
          `[data-dropdown="${activeDropdown.id}"]`
        )
        .classList.remove("text-primary", "font-bold");

      activeDropdown = null;
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const menuItems = document.querySelectorAll(
    "#mobile-menu li"
  );
  let activeDropdown = null;

  menuItems.forEach((menuItem) => {
    const dropdown = menuItem.querySelector("div.bg-box"); // Dropdown content
    const trigger = menuItem.querySelector("p"); // Trigger element

    menuItem.addEventListener("click", () => {
      if (activeDropdown && activeDropdown !== dropdown) {
        // Close the currently open dropdown
        activeDropdown.classList.add(
          "max-h-0",
          "opacity-0",
          "hidden"
        );
        activeDropdown.classList.remove(
          "max-h-[500px]",
          "opacity-100",
          "flex"
        );
        const activeTrigger = activeDropdown
          .closest("li")
          .querySelector("p");
        activeTrigger.classList.remove(
          "text-primary",
          "font-bold"
        );
      }

      if (dropdown) {
        if (dropdown.classList.contains("max-h-0")) {
          // Open the clicked dropdown
          dropdown.classList.remove(
            "max-h-0",
            "opacity-0",
            "hidden"
          );
          dropdown.classList.add(
            "max-h-[500px]",
            "opacity-100",
            "flex"
          );
          trigger.classList.add(
            "text-primary",
            "font-bold"
          );
          activeDropdown = dropdown;
        } else {
          // Close the clicked dropdown
          dropdown.classList.add(
            "max-h-0",
            "opacity-0",
            "hidden"
          );
          dropdown.classList.remove(
            "max-h-[500px]",
            "opacity-100",
            "flex"
          );
          trigger.classList.remove(
            "text-primary",
            "font-bold"
          );
          activeDropdown = null;
        }
      }
    });
  });
});

// Timer Function
function startTimer(elementId, endTime) {
  const timerElement = document.getElementById(elementId);

  function updateTimer() {
    const now = new Date().getTime();
    const difference = endTime - now;

    if (difference > 0) {
      const days = Math.floor(
        difference / (1000 * 60 * 60 * 24)
      );
      const hours = Math.floor(
        (difference / (1000 * 60 * 60)) % 24
      );
      const minutes = Math.floor(
        (difference / (1000 * 60)) % 60
      );
      const seconds = Math.floor((difference / 1000) % 60);

      const formattedTime = `${String(days).padStart(
        2,
        "0"
      )}:${String(hours).padStart(2, "0")}:${String(
        minutes
      ).padStart(2, "0")}:${String(seconds).padStart(
        2,
        "0"
      )}`;

      timerElement.textContent = formattedTime;
    } else {
      timerElement.textContent = "00:00:00:00"; // Timer expired
      clearInterval(intervalId); // Stop the timer
    }
  }

  const intervalId = setInterval(updateTimer, 1000);
  updateTimer(); // Initialize the timer display
}

// Start Timers for All Cards
document
  .querySelectorAll(".timer p")
  .forEach((timerElement, index) => {
    const endTime =
      new Date().getTime() + 14 * 24 * 60 * 60 * 1000; // 14 days from now
    timerElement.id = `timer-${index + 1}`; // Assign unique ID dynamically
    startTimer(timerElement.id, endTime);
  });

document
  .querySelectorAll(".accordion-header")
  .forEach((header) => {
    header.addEventListener("click", () => {
      const content = header.nextElementSibling;

      // Toggle the display of the accordion content
      if (content.style.display === "none") {
        content.style.display = "block";
      } else {
        content.style.display = "none";
      }
    });
  });

function toggleQuestionAccordion(accordionItem) {
  const accordionHeader = accordionItem.querySelector(
    ".accordion-header"
  );
  const accordionContent = accordionItem.querySelector(
    ".accordion-content"
  );
  const accordionIcon = accordionHeader.querySelector(
    ".accordion-icon"
  );

  if (accordionContent.style.display === "none") {
    // Open the accordion
    accordionContent.style.display = "block";
  } else {
    // Close the accordion
    accordionContent.style.display = "none";
    accordionIcon.src = "../assets/icons/add 1.svg"; // Change icon on close
  }
}

// Add click event listeners to all accordion headers
const accordionItems = document.querySelectorAll(
  ".accordion-item"
);
accordionItems.forEach((item) => {
  const accordionHeader = item.querySelector(
    ".accordion-header"
  );
  accordionHeader.addEventListener("click", () =>
    toggleQuestionAccordion(item)
  );
});




