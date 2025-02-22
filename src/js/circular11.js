

document.querySelectorAll(".fave").forEach((fave) => {
  fave.addEventListener("click", () => {
    fave.firstElementChild.classList.toggle("fill-danger");
    fave.classList.toggle("text-danger");
  });
});



document.addEventListener("DOMContentLoaded", function () {
  // Get all dropdown toggles and menus
  const dropdownToggles = document.querySelectorAll(
    ".filter-dropdown-toggle"
  );
  const dropdownMenus = document.querySelectorAll(
    ".filter-dropdown-menu"
  );
  const dropdownLabels = document.querySelectorAll(
    ".filter-dropdown-label"
  );

  // Toggle dropdown menu
  function toggleDropdown(menu) {
    menu.classList.toggle("hidden");
  }

  // Close all dropdowns
  function closeAllDropdowns() {
    dropdownMenus.forEach((menu) =>
      menu.classList.add("hidden")
    );
  }

  // Handle toggle click
  dropdownToggles.forEach((toggle, index) => {
    toggle.addEventListener("click", function (e) {
      e.stopPropagation();
      const menu = this.querySelector(
        ".filter-dropdown-menu"
      );
      closeAllDropdowns();
      toggleDropdown(menu);
    });
  });

  // Handle menu item selection
  dropdownMenus.forEach((menu) => {
    menu.querySelectorAll("button").forEach((button) => {
      button.addEventListener("click", function () {
        const value = this.getAttribute("data-value");
        const label = this.closest(
          ".filter-dropdown-toggle"
        ).querySelector(".filter-dropdown-label");
        label.textContent = value;
        closeAllDropdowns();
      });
    });
  });

  // Close dropdowns when clicking outside
  document.addEventListener("click", function (e) {
    if (!e.target.closest(".filter-dropdown-toggle")) {
      closeAllDropdowns();
    }
  });
});
