function initializePriceFilter(containerClass) {
    const filterContainer = document.querySelector(`.${containerClass}`);
    const rangeInput = filterContainer.querySelectorAll(".range-input input");
    const range = filterContainer.querySelector(".slider .progress");
    const priceDisplays = filterContainer.querySelectorAll('.flex.justify-between.mt-4.w-full p');
  
    let priceGap = 1000;
  
    // Initialize prices
    priceDisplays[1].innerHTML = `${(2500 * 72).toLocaleString('en')} <span class="font-medium text-xs">تومان</span>`;
    priceDisplays[0].innerHTML = `${(7500 * 72).toLocaleString('en')} <span class="font-medium text-xs">تومان</span>`;
  
    rangeInput.forEach((input) => {
      input.addEventListener("input", (e) => {
        let minVal = parseInt(rangeInput[0].value),
            maxVal = parseInt(rangeInput[1].value);
  
        // Scale values to match displayed prices (10000 = 1,800,000 تومان)
        const scaledMin = minVal * 180;
        const scaledMax = maxVal * 180;
  
        if (maxVal - minVal < priceGap) {
          if (e.target.className.includes("range-min")) {
            rangeInput[0].value = maxVal - priceGap;
            minVal = maxVal - priceGap;
          } else {
            rangeInput[1].value = minVal + priceGap;
            maxVal = minVal + priceGap;
          }
        }
  
        // Update displays
        priceDisplays[1].innerHTML = `${(minVal * 180).toLocaleString('en')} <span class="font-medium text-xs">تومان</span>`;
        priceDisplays[0].innerHTML = `${(maxVal * 180).toLocaleString('en')} <span class="font-medium text-xs">تومان</span>`;
  
        range.style.left = (minVal / 10000) * 100 + "%";
        range.style.right = 100 - (maxVal / 10000) * 100 + "%";
      });
    });
  }
  
  // Initialize both filters
  initializePriceFilter('desktop-filter');
  initializePriceFilter('mobile-filter');