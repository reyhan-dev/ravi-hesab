var swiper = new Swiper(
  ".swiper-dashboard-card-container",
  {
    slidesPerView: 1.7,
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
      // Responsive breakpoints
      570: {
        slidesPerView: 1.85, // Show 1 slide at a time on small screens
        spaceBetween: 15,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    },
  }
);
