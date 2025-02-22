document.addEventListener("DOMContentLoaded", () => {
  // Select the play link and the target section
  const playLink = document.querySelector(
    'a[href="#course-video"]'
  );
  const courseVideoSection = document.querySelector(
    "#\\#course-video"
  ); // Escape "#" in ID

  if (playLink && courseVideoSection) {
    // Select elements inside the video section
    const overlay =
      courseVideoSection.querySelector(".bg-black");
    const thumbnail =
      courseVideoSection.querySelector("img");
    const playButton = overlay.querySelector("button");
    const video = courseVideoSection.querySelector("video");

    // Initially hide the overlay and video, only show the thumbnail
    overlay.style.display = "none";
    video.style.display = "none";

    // When the main play link is clicked
    playLink.addEventListener("click", (event) => {
      event.preventDefault(); // Prevent default anchor behavior

      // Smooth scroll to the target section
      courseVideoSection.scrollIntoView({
        behavior: "smooth",
      });

      // Show the overlay, keep the thumbnail visible
      overlay.style.display = "flex"; // Flex to ensure centered alignment
    });

    // When the play button inside the overlay is clicked
    if (playButton) {
      playButton.addEventListener("click", () => {
        // Hide the overlay and thumbnail
        overlay.style.display = "none";
        thumbnail.style.display = "none";

        // Show and play the video
        video.style.display = "block";
        video.play();
      });
    }
  }
});
