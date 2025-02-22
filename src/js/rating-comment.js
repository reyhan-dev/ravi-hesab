document.addEventListener("DOMContentLoaded", () => {
  // Initialize support range
  new CustomRange(
    document.querySelector(".support-range-container"),
    {
      min: 1,
      max: 5,
      step: 1,
      showSteps: true,
      showValue: false,
      value: 1,
    }
  ).input.addEventListener("input", function () {
    this.closest(".flex-col").querySelector(
      ".rating-value"
    ).textContent = this.value;
  });

  // Initialize quality range
  new CustomRange(
    document.querySelector(".quality-range-container"),
    {
      min: 1,
      max: 5,
      step: 1,
      showSteps: true,
      showValue: false,
      value: 1,
    }
  ).input.addEventListener("input", function () {
    this.closest(".flex-col").querySelector(
      ".rating-value"
    ).textContent = this.value;
  });

  new CustomRange(
    document.querySelector(".price-range-container"),
    {
      min: 1,
      max: 5,
      step: 1,
      showSteps: true,
      showValue: false,
      value: 1,
    }
  ).input.addEventListener("input", function () {
    this.closest(".flex-col").querySelector(
      ".rating-value"
    ).textContent = this.value;
  });

  new CustomRange(
    document.querySelector(".ease-range-container"),
    {
      min: 1,
      max: 5,
      step: 1,
      showSteps: true,
      showValue: false,
      value: 1,
    }
  ).input.addEventListener("input", function () {
    this.closest(".flex-col").querySelector(
      ".rating-value"
    ).textContent = this.value;
  });

  // Repeat for other two ranges
  // Add similar code for price-range-container and ease-range-container
});
