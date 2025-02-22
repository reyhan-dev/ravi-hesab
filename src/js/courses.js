document.addEventListener("DOMContentLoaded", function () {
  const dropdownToggle = document.getElementById(
    "filterDropdownToggle"
  );
  const dropdownMenu = document.getElementById(
    "filterDropdownMenu"
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
        "filterDropdownLabel"
      ).textContent = value; // Update the label with the selected value
    });
    dropdownMenu.classList.add("hidden"); // Hide the dropdown
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const dropdownToggle = document.getElementById(
    "mobileFilterDropDown"
  );
  const dropdownMenu = document.getElementById(
    "mobileFilterDropdownMenu"
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
        "mobileFilterDropdownLabel"
      ).textContent = value; // Update the label with the selected value
    });
    dropdownMenu.classList.add("hidden"); // Hide the dropdown
  });
});

function updatePrice(value) {
  document.getElementById("minPrice").textContent = value;
}