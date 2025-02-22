// Function to open a modal
function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    console.log("clicked");

    modal.classList.remove("hidden"); // Show modal
    modal.classList.add("flex"); // Display as a flex container
  }
}

// Function to close a modal
function closeModal(modal) {
  if (modal) {
    modal.classList.add("hidden"); // Hide modal
    modal.classList.remove("flex"); // Remove flex container display
  }
}

// Function to initialize modals
function initModals() {
  const openModalButtons = document.querySelectorAll(
    ".openModalButton"
  );
  const closeModalElements =
    document.querySelectorAll(".closeModal");

  // Attach click event to open buttons
  openModalButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const modalId = button.getAttribute("data-modal");
      openModal(modalId);
    });
  });

  // Attach click event to close buttons inside modals
  closeModalElements.forEach((element) => {
    element.addEventListener("click", () => {
      const modal = element.closest(".fixed");
      closeModal(modal);
    });
  });
}

// Initialize modal logic
initModals();

document.addEventListener("click", (e) => {
  const modal = document.querySelector(".fixed.flex");
  if (modal && e.target === modal) {
    closeModal(modal);
  }
});
