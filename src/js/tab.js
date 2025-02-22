const tabButtons = document.querySelectorAll(".nav-button");
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
  activeTabBtn.classList.remove("text-secondary", "bg-box"); // Remove default styles
  activeTabBtn.classList.add("bg-secondary", "text-white"); // Add active styles

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

const firstButton = tabButtons[0].getAttribute("data-tab");

// Initialize first tab as active
switchTab(firstButton); // Default active tab
