// Select all video containers
document
  .querySelectorAll(".course-video")
  .forEach((container) => {
    const video = container.querySelector("video");
    const overlay = container.querySelector(".bg-black");
    const playButton = container.querySelector("button");

    // Function to toggle overlay visibility
    const toggleOverlay = (show) => {
      overlay.style.display = show ? "flex" : "none";
    };

    // Play button click event
    playButton.addEventListener("click", () => {
      video.play();
      toggleOverlay(false);
    });

    // Video events
    video.addEventListener("play", () =>
      toggleOverlay(false)
    );
    video.addEventListener("pause", () =>
      toggleOverlay(true)
    );
    video.addEventListener("ended", () =>
      toggleOverlay(true)
    );

    // Optional: Native controls handling
    video.removeAttribute("controls");
    container.addEventListener("mouseenter", () =>
      video.setAttribute("controls", true)
    );
    container.addEventListener("mouseleave", () =>
      video.removeAttribute("controls")
    );
  });
