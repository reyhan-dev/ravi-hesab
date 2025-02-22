document.addEventListener("DOMContentLoaded", function () {
  // Get all dropdown toggles
  const dropdownToggles = document.querySelectorAll(
    ".dropdown-toggle"
  );

  dropdownToggles.forEach((dropdownToggle) => {
    const dropdownItems = dropdownToggle.querySelector(
      ".dropdown-items"
    );
    const dropdownLabel = dropdownToggle.querySelector(
      ".dropdown-label"
    );

    if (dropdownToggle && dropdownItems && dropdownLabel) {
      // Toggle dropdown visibility
      dropdownToggle.addEventListener(
        "click",
        function (event) {
          event.stopPropagation(); // Prevent event from bubbling up
          dropdownItems.classList.toggle("hidden");
          dropdownItems.classList.add("flex");
        }
      );

      // Close dropdown when clicking outside
      document.addEventListener("click", function (event) {
        if (!dropdownToggle.contains(event.target)) {
          dropdownItems.classList.add("hidden");
        }
      });

      // Handle item selection
      dropdownItems
        .querySelectorAll("button")
        .forEach((button) => {
          button.addEventListener("click", function () {
            const selectedValue =
              button.getAttribute("data-value");
            dropdownLabel.textContent = selectedValue; // Update the label
            dropdownItems.classList.remove("hidden"); // Hide the dropdown
            dropdownItems.classList.remove("flex");
            // You can add additional logic here based on the selected value
            console.log(`Selected: ${selectedValue}`);
          });
        });
    }
  });
});
