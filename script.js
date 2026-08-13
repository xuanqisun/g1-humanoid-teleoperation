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

const threePointVideo = document.querySelector(".three-point-demo__video");
const threePointPlay = document.querySelector(".three-point-demo__play");

if (threePointVideo && threePointPlay) {
  const syncThreePointPlayButton = () => {
    threePointPlay.classList.toggle("is-hidden", !threePointVideo.paused);
  };

  threePointPlay.addEventListener("click", async () => {
    loadVideo(threePointVideo);

    try {
      await threePointVideo.play();
    } catch (error) {
      console.warn("Unable to start the 3-point VR video.", error);
    }

    syncThreePointPlayButton();
  });

  threePointVideo.addEventListener("play", syncThreePointPlayButton);
  threePointVideo.addEventListener("pause", syncThreePointPlayButton);
  threePointVideo.addEventListener("ended", syncThreePointPlayButton);
}

if (reducedMotion) {
  document.querySelector(".hero__video")?.pause();
}
