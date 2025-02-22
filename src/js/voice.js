class VoicePlayer {
  constructor(containerId, audioUrl) {
    this.containerId = containerId;
    this.audioUrl = audioUrl;
    this.wavesurfer = null;
    this.playButton = null;
    this.currentTimeElement = null;
    this.durationElement = null;
    this.init();
  }

  init() {
    // Initialize Wavesurfer.js
    this.wavesurfer = WaveSurfer.create({
      container: `#${this.containerId} .waveform`,
      waveColor: "#EFEFEF",
      progressColor: "#0C0D0F",
      barWidth: 4,
      height: 23,
      responsive: true,
      barRadius: 5,
    });

    // Load audio file into Wavesurfer
    this.wavesurfer.load(this.audioUrl);

    // Get the play button
    this.playButton = document.querySelector(
      `#${this.containerId} .play-button`
    );

    // Get time display elements
    this.currentTimeElement = document.querySelector(
      `#${this.containerId} .current-time`
    );
    this.durationElement = document.querySelector(
      `#${this.containerId} .duration`
    );

    // Play/Pause Button Event
    this.playButton.addEventListener("click", () => {
      this.wavesurfer.playPause();
      this.playButton.textContent =
        this.wavesurfer.isPlaying() ? "⏸" : "▶";
    });

    // Stop Button Event (if stop button exists)
    const stopButton = document.querySelector(
      `#${this.containerId} .stop-button`
    );
    if (stopButton) {
      stopButton.addEventListener("click", () => {
        this.wavesurfer.stop();
        this.playButton.textContent = "▶";
      });
    }

    // Volume Slider Event (if volume slider exists)
    const volumeSlider = document.querySelector(
      `#${this.containerId} .volume-slider`
    );
    if (volumeSlider) {
      volumeSlider.addEventListener("input", (e) => {
        this.wavesurfer.setVolume(e.target.value);
      });
    }

    // Update time display when the audio loads
    this.wavesurfer.on("ready", () => {
      const duration = this.wavesurfer.getDuration();
      this.durationElement.textContent =
        this.formatTime(duration);
    });

    // Update current time as the audio plays
    this.wavesurfer.on("audioprocess", () => {
      const currentTime = this.wavesurfer.getCurrentTime();
      this.currentTimeElement.textContent =
        this.formatTime(currentTime);
    });
  }

  // Helper function to format time (e.g., 125 -> "02:05")
  formatTime(time) {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${String(minutes).padStart(2, "0")}:${String(
      seconds
    ).padStart(2, "0")}`;
  }
}

// Initialize players
const player1 = new VoicePlayer(
  "voice-player-1",
  "../assets/sample1.mp3"
);


// const player2 = new VoicePlayer(
//   "voice-player-2",
//   "../assets/sample2.mp3"
// );

