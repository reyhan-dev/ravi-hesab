document.addEventListener("DOMContentLoaded", () => {
    const toggleHeaders = document.querySelectorAll(
      ".toggle-header"
    );
  
    toggleHeaders.forEach((header) => {
      header.addEventListener("click", () => {
        const items = header.nextElementSibling; // Get the next sibling (items container)
        const icon = header.querySelector(".toggle-icon"); // Get the SVG icon
  
        // Check if the items are currently displayed
        if (
          items.style.display === "none" ||
          items.style.display === ""
        ) {
          items.style.display = "flex"; // Show items
          header.setAttribute("aria-expanded", "true"); // Update accessibility attribute
          icon.classList.add("rotate-180"); // Rotate the icon
        } else {
          items.style.display = "none"; // Hide items
          header.setAttribute("aria-expanded", "false"); // Update accessibility attribute
          icon.classList.remove("rotate-180"); // Reset the icon rotation
        }
      });
    });
  });