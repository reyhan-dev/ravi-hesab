var swiper = new Swiper(".swiper-blogs-container", {
  slidesPerView: 1.42,
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

var swiper = new Swiper(
  ".swiper-most-viewed-btn-container",
  {
    slidesPerView: 2.5,
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
      768: {
        slidesPerView: 2.5, // Show 2 slides at a time on medium screens
        spaceBetween: 130,
      },
      1024: {
        slidesPerView: 5,
        spaceBetween: 24,
      },
    },
  }
);

var swiper = new Swiper(
  ".swiper-most-viewed-blogs-container",
  {
    slidesPerView: 1.3,
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
      768: {
        slidesPerView: 2.5, // Show 2 slides at a time on medium screens
        spaceBetween: 130,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 24,
      },
    },
  }
);

var swiper = new Swiper(".swiper-images-container", {
  slidesPerView: 1,
  spaceBetween: 24,
  dynamicBullets: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '"></span>';
    },
  },

  breakpoints: {
    // When window width is >= 768px
    768: {
      pagination: {
        renderBullet: function (index, className) {
          return (
            '<span class="' +
            className +
            '">' +
            (index + 1) +
            "</span>"
          );
        },
      },
    },
  },
});

var swiper = new Swiper(".swiper-score-cards-conteiner", {
  slidesPerView: 1.3,
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
    768: {
      slidesPerView: 2.5, // Show 2 slides at a time on medium screens
      spaceBetween: 130,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 24,
    },
  },
});

const tabButtons = document.querySelectorAll(
  ".most-viewed-nav-button"
);
const tabContent = document.getElementById("tab-content");

// Function to switch tabs
function switchTab(tabId) {
  // Hide all tab contents
  const tabPanels = tabContent.querySelectorAll(
    ".most-viewed-tab-panel"
  );
  tabPanels.forEach((panel) => {
    panel.classList.add("hidden");
  });

  // Deactivate all buttons
  tabButtons.forEach((btn) => {
    btn.classList.remove("bg-white", "text-secondary"); // Remove active styles
    btn.classList.add("text-muted", "bg-box"); // Add default styles
  });

  // Activate the current button
  const activeTabBtn = document.querySelector(
    `.most-viewed-nav-button[data-tab="${tabId}"]`
  );
  activeTabBtn.classList.remove("text-muted", "bg-box"); // Remove default styles
  activeTabBtn.classList.add("bg-white", "text-secondary"); // Add active styles

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
const firstButton = tabButtons[0].getAttribute("data-tab");
switchTab(firstButton); // Default active tab
