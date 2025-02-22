var swiper = new Swiper(
  ".swiper-circular-cards-container",
  {
    slidesPerView: 1.3,
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
        spaceBetween: 24,
      },
      1024: {
        slidesPerView: 2.3,
        spaceBetween: 24,
      },
      1280: {
        slidesPerView: 3,
        spaceBetween: 24,
      },

      1440: {
        slidesPerView: 3,
        spaceBetween: 24,
      },
      1660: {
        slidesPerView: 3,
        spaceBetween: 24,
      },
    },
  }
);

document
  .querySelectorAll(".question")
  .forEach((question) => {
    question.addEventListener("click", () => {
      const arrow = question.lastElementChild.classList;
      arrow.toggle("rotate-180");
      const answer = question.nextElementSibling;

      answer.classList.toggle("overflow-hidden");
      answer.classList.toggle("h-0");
      answer.classList.toggle("opacity-0");

      const threeLine =
        question.firstElementChild.firstElementChild;
      threeLine.classList.toggle("text-primary");
    });
  });
