const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const revealItems = document.querySelectorAll(".reveal");

if (reducedMotion || !("IntersectionObserver" in window)) {
  revealItems.forEach((item) => item.classList.add("is-visible"));
} else {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.12 }
  );

  revealItems.forEach((item) => revealObserver.observe(item));
}

const loadVideo = (video) => {
  if (video.dataset.loaded === "true") return;

  video.querySelectorAll("source[data-src]").forEach((source) => {
    source.src = source.dataset.src;
    source.removeAttribute("data-src");
  });

  video.dataset.loaded = "true";
  video.load();
};

const lazyVideos = document.querySelectorAll(".lazy-video");

if (!("IntersectionObserver" in window)) {
  lazyVideos.forEach(loadVideo);
} else {
  const videoObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        loadVideo(entry.target);
        observer.unobserve(entry.target);
      });
    },
    { rootMargin: "300px 0px" }
  );

  lazyVideos.forEach((video) => videoObserver.observe(video));
}

const mediaPlayButtons = document.querySelectorAll(".media-play");

mediaPlayButtons.forEach((playButton) => {
  const video = playButton.parentElement?.querySelector("video");
  if (!video) return;

  const syncPlayButton = () => {
    playButton.classList.toggle("is-hidden", !video.paused);
  };

  playButton.addEventListener("click", async () => {
    loadVideo(video);

    try {
      await video.play();
    } catch (error) {
      console.warn("Unable to start the video.", error);
    }

    syncPlayButton();
  });

  video.addEventListener("play", syncPlayButton);
  video.addEventListener("pause", syncPlayButton);
  video.addEventListener("ended", syncPlayButton);
});

if (reducedMotion) {
  document.querySelector(".hero__video")?.pause();
}
