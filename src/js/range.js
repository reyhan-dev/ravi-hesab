class CustomRange {
  constructor(container, options = {}) {
    this.container = container;
    this.options = {
      min: 0,
      max: 100,
      step: 1,
      value: 50,
      showValue: true,
      showSteps: false,
      isRange: false,
      ...options,
    };

    // State management
    this.activeThumb = null;
    this.isDragging = false;

    // Normalize and validate options
    this.normalizeOptions();

    // Initialize component
    this.initialize();
    this.addEventListeners();
  }

  normalizeOptions() {
    // Ensure valid step value
    this.options.step = Math.max(1, this.options.step);

    // Handle range values
    if (this.options.isRange) {
      if (!Array.isArray(this.options.value)) {
        this.options.value = [
          this.options.min,
          this.options.max,
        ];
      }
      // Sort values
      this.options.value.sort((a, b) => a - b);
    }
  }

  initialize() {
    this.container.innerHTML = `
        <input type="range" class="hidden" ${
          this.options.isRange ? 'data-range="true"' : ""
        }>
        <div class="relative h-1">
          <!-- Track and Steps -->
          <div class="absolute w-full h-full bg-borderColor rounded-full">
            ${
              this.options.showSteps
                ? this.createSteps()
                : ""
            }
          </div>
  
          <!-- Progress Bar -->
          <div class="absolute h-full bg-primary rounded-full" data-progress></div>
  
          <!-- Active Steps Highlight -->
          ${
            this.options.showSteps
              ? this.createActiveStepMarkers()
              : ""
          }
  
          <!-- Thumb Controllers -->
          ${this.createThumbs()}
        </div>
  
        <!-- Value Display -->
        ${
          this.options.showValue
            ? `
          <div class="mt-2 text-right text-gray-600" data-value>
            ${
              this.options.isRange
                ? "Range: 0 - 0"
                : "Value: 0"
            }
          </div>
        `
            : ""
        }
      `;

    // Cache DOM elements
    this.input = this.container.querySelector("input");
    this.thumbs =
      this.container.querySelectorAll("[data-thumb]");
    this.progress = this.container.querySelector(
      "[data-progress]"
    );
    this.valueDisplay =
      this.container.querySelector("[data-value]");
    this.track = this.container.querySelector(".relative");

    // Initialize component state
    this.setupInputAttributes();
    this.updateVisuals();
  }

  createSteps() {
    const steps = [];
    for (
      let value = this.options.min;
      value <= this.options.max;
      value += this.options.step
    ) {
      const position = this.calculatePosition(value);
      steps.push(`
          <div class="absolute w-1.5 h-1.5 -ml-0.75 bg-white border rounded-full shadow-step z-10" 
               style="left: ${position}%; top: 50%; transform: translateY(-50%)"
               data-step="${value}"></div>
        `);
    }
    return steps.join("");
  }

  createActiveStepMarkers() {
    if (!this.options.showSteps) return "";
    return `
        <div class="absolute inset-0 pointer-events-none" data-active-steps>
          ${Array.from(
            {
              length:
                Math.floor(
                  (this.options.max - this.options.min) /
                    this.options.step
                ) + 1,
            },
            (_, i) => {
              const position = this.calculatePosition(
                this.options.min + i * this.options.step
              );
              return `
                <div class="absolute w-2 h-2 -ml-1 bg-white/0  rounded-full transition-colors duration-200"
                     style="left: ${position}%" 
                     data-step-active="${
                       this.options.min +
                       i * this.options.step
                     }"></div>
              `;
            }
          ).join("")}
        </div>
      `;
  }

  createThumbs() {
    if (this.options.isRange) {
      return `${this.createThumb(0)}${this.createThumb(1)}`;
    }
    return this.createThumb();
  }

  createThumb(index = 0) {
    const value = this.options.isRange
      ? this.options.value[index]
      : this.options.value;

    const position = this.calculatePosition(value);
    return `
        <div data-thumb="${index}" 
             class="absolute -top-[5px] w-3.5 h-3.5 border border-borderColor flex items-center justify-center bg-white rounded-full shadow-md cursor-pointer hover:shadow-lg transition-all z-20"
             style="left: ${position}%">
          <div class="bg-primary w-1.5 h-1.5 rounded-full"></div>
        </div>
      `;
  }

  calculatePosition(value) {
    return (
      ((value - this.options.min) /
        (this.options.max - this.options.min)) *
      100
    );
  }

  setupInputAttributes() {
    this.input.min = this.options.min;
    this.input.max = this.options.max;
    this.input.step = this.options.step;
    this.input.value = this.options.isRange
      ? this.options.value.join(",")
      : this.options.value;
  }

  updateVisuals() {
    const values = this.getCurrentValues();

    // Update thumbs position
    this.thumbs.forEach((thumb, index) => {
      thumb.style.left = `${this.calculatePosition(
        values[index]
      )}%`;
    });

    // Update progress bar
    if (this.options.isRange) {
      const [min, max] = values;
      this.progress.style.left = `${this.calculatePosition(
        min
      )}%`;
      this.progress.style.width = `${
        this.calculatePosition(max) -
        this.calculatePosition(min)
      }%`;
    } else {
      this.progress.style.width = `${this.calculatePosition(
        values[0]
      )}%`;
    }

    // Update value display
    if (this.options.showValue) {
      this.valueDisplay.textContent = this.options.isRange
        ? `Range: ${values[0]} - ${values[1]}`
        : `Value: ${values[0]}`;
    }

    // Update active steps
    if (this.options.showSteps) {
      this.updateActiveSteps(values);
    }
  }

  updateActiveSteps(values) {
    const activeValue = this.options.isRange
      ? values[1]
      : values[0];
    this.container
      .querySelectorAll("[data-step-active]")
      .forEach((step) => {
        const stepValue = parseInt(step.dataset.stepActive);
        step.classList.toggle(
          "bg-white/20",
          stepValue <= activeValue
        );
      });
  }

  getCurrentValues() {
    return this.options.isRange
      ? this.input.value.split(",").map(Number)
      : [Number(this.input.value)];
  }

  addEventListeners() {
    // Mouse events
    this.thumbs.forEach((thumb) => {
      thumb.addEventListener("mousedown", (e) =>
        this.handleDragStart(e)
      );
    });

    this.track.addEventListener("click", (e) =>
      this.handleTrackClick(e)
    );

    document.addEventListener("mousemove", (e) =>
      this.handleDragMove(e)
    );
    document.addEventListener("mouseup", () =>
      this.handleDragEnd()
    );
  }

  handleDragStart(e) {
    this.isDragging = true;
    this.activeThumb =
      parseInt(
        e.target.closest("[data-thumb]").dataset.thumb
      ) || 0;
    this.container.classList.add("dragging");
  }

  handleDragMove(e) {
    if (!this.isDragging) return;

    const rect = this.track.getBoundingClientRect();
    const percentage = Math.max(
      0,
      Math.min(1, (e.clientX - rect.left) / rect.width)
    );

    const newValue = Math.round(
      this.options.min +
        percentage * (this.options.max - this.options.min)
    );

    this.updateThumbValue(newValue);
  }

  handleDragEnd() {
    this.isDragging = false;
    this.activeThumb = null;
    this.container.classList.remove("dragging");
  }

  handleTrackClick(e) {
    if (this.options.isRange) return;

    const rect = this.track.getBoundingClientRect();
    const percentage = (e.clientX - rect.left) / rect.width;
    const newValue = Math.round(
      this.options.min +
        percentage * (this.options.max - this.options.min)
    );

    this.input.value = newValue;
    this.updateVisuals();
  }

  updateThumbValue(newValue) {
    const values = this.getCurrentValues();

    if (this.options.isRange) {
      // Constrain values
      if (this.activeThumb === 0) {
        newValue = Math.min(newValue, values[1]);
      } else {
        newValue = Math.max(newValue, values[0]);
      }

      values[this.activeThumb] = newValue;
      this.input.value = values.join(",");
    } else {
      this.input.value = newValue;
    }

    this.input.dispatchEvent(
      new Event("input", { bubbles: true })
    );

    this.updateVisuals();
  }
}

// Usage Examples --------------------------------------------------
// Single Range with Steps
// new CustomRange(document.getElementById('range1'), {
//   min: 0,
//   max: 100,
//   step: 10,
//   value: 50,
//   showValue: true,
//   showSteps: true
// });

// Min/Max Range with Steps
// new CustomRange(document.getElementById('range2'), {
//   min: 0,
//   max: 1000,
//   step: 100,
//   isRange: true,
//   value: [200, 800],
//   showSteps: true,
//   showValue: true
// });

// Basic Range without Steps
// new CustomRange(document.getElementById('range3'), {
//   min: 0,
//   max: 50,
//   value: 25,
//   showValue: true
// });
