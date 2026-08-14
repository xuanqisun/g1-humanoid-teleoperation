const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const translations = {
  en: {
    "language.label": "Language",
    "language.selector": "LANGUAGE",
    "brand.name": "Center for Artificial Intelligence and Cross-Domain Robotics (AI-CDR Center)",
    "hero.titlePrimary": "Humanoid",
    "hero.titleSecondary": "teleoperation.",
    "hero.lede": "Full-body teleoperation on G1 — from tracked human motion to coordinated robot behavior.",
    "hero.preview": "RESEARCH PREVIEW · 2026",
    "hero.explore": "EXPLORE",
    "overview.kicker": "FULL-BODY TELEOPERATION",
    "overview.minor": "Human motion.",
    "overview.major": "Whole-robot control.",
    "overview.description": "Tracked human motion becomes responsive, coordinated whole-body behavior on G1 — from balance and reaching to stepping and dynamic leg motion.",
    "full.type": "HEADSET + TWO CONTROLLERS + ANKLE TRACKERS",
    "full.title": "Full-Body Teleoperation",
    "full.description": "Head, hands, and feet drive expressive full-body references for balancing, reaching, stepping, and other coordinated motions.",
    "full.balanceTitle": "Single-Leg Balance",
    "full.balanceMeta": "COORDINATED BALANCE",
    "full.balanceAria": "Full-body teleoperation single-leg balance demonstration",
    "full.pickTitle": "Reach & Pick",
    "full.pickMeta": "LOW-POSE CONTROL",
    "full.pickAria": "Full-body teleoperation reaching and picking demonstration",
    "full.kickTitle": "Dynamic Leg Motion",
    "full.kickMeta": "LOWER-BODY TRACKING",
    "full.kickAria": "Full-body teleoperation leg motion demonstration",
    "vr.type": "HEADSET + TWO CONTROLLERS · NO ANKLE TRACKERS",
    "vr.title": "Take off the ankle trackers. Keep teleoperating.",
    "vr.description": "With 3PT VR, head and hand intent drives immersive upper-body control while the robot maintains coordinated locomotion — using only a headset and two controllers.",
    "vr.live": "LIVE SYSTEM DEMO",
    "vr.input": "HEAD · LEFT HAND · RIGHT HAND",
    "vr.caption": "3-Point VR Control",
    "vr.captionMeta": "NO ANKLE TRACKERS",
    "vr.videoAria": "3-point VR teleoperation without ankle trackers",
    "vr.playAria": "Play 3-point VR teleoperation video",
    "camera.type": "ONE CAMERA · NO WEARABLES",
    "camera.takeOff": "Take off every wearable.",
    "camera.lead": "Teleoperate with",
    "camera.focus": "just one camera.",
    "camera.description": "No headset, controllers, or body trackers. A single camera captures human motion and turns it into whole-body robot control.",
    "camera.input": "CAMERA INPUT",
    "camera.output": "ROBOT OUTPUT",
    "camera.caption": "Single-Camera Teleoperation",
    "camera.captionMeta": "ONE CAMERA · NO WEARABLES",
    "camera.videoAria": "Single-camera whole-body teleoperation demonstration",
    "camera.playAria": "Play single-camera teleoperation video",
    "footer.research": "Humanoid Teleoperation Research"
  },
  zh: {
    "language.label": "语言",
    "language.selector": "语言",
    "brand.name": "Center for Artificial Intelligence and Cross-Domain Robotics (AI-CDR Center)",
    "hero.titlePrimary": "人形机器人",
    "hero.titleSecondary": "全身遥操",
    "hero.lede": "人的动作，机器人的回应。让 G1 实时复现自然、协调的全身运动。",
    "hero.preview": "研究展示 · 2026",
    "hero.explore": "继续探索",
    "overview.kicker": "全身遥操",
    "overview.minor": "你怎么动",
    "overview.major": "G1 就怎么动",
    "overview.description": "抬手、俯身、迈步、踢腿，你的动作自然延伸到 G1。每一次响应都连贯流畅，让遥操更像亲自在场",
    "full.type": "头显 · 双手柄 · 脚环",
    "full.title": "全身随动，所动即所得",
    "full.description": "从抬手、俯身到迈步，G1 自然跟随你的身体节奏。平衡、抓取与移动一气呵成",
    "full.balanceTitle": "单脚平衡",
    "full.balanceMeta": "稳定与协调",
    "full.balanceAria": "全身遥操单脚平衡演示",
    "full.pickTitle": "俯身抓取",
    "full.pickMeta": "低位动作",
    "full.pickAria": "全身遥操俯身抓取演示",
    "full.kickTitle": "动态踢腿",
    "full.kickMeta": "下肢跟随",
    "full.kickAria": "全身遥操踢腿演示",
    "vr.type": "头显 · 双手柄",
    "vr.title": "摘掉脚环，走得更远",
    "vr.description": "戴上头显，拿起双手柄，上身动作自然传递给 G1。前进后退只需轻推摇杆，无需跟着机器人迈步，实现远距离自如操控。",
    "vr.live": "实时演示",
    "vr.input": "头部 · 左手 · 右手",
    "vr.caption": "3PT VR 遥操",
    "vr.captionMeta": "无需脚环",
    "vr.videoAria": "无需脚环的 3PT VR 遥操演示",
    "vr.playAria": "播放 3PT VR 遥操视频",
    "camera.type": "单摄像头 · 零穿戴",
    "camera.takeOff": "0 穿戴",
    "camera.lead": "",
    "camera.focus": "有摄像头就能遥操",
    "camera.description": "‘往那儿一站就是兵’，遥操从此轻装上阵",
    "camera.input": "人体动作",
    "camera.output": "机器人响应",
    "camera.caption": "单摄像头遥操",
    "camera.captionMeta": "一台摄像头 · 零穿戴",
    "camera.videoAria": "单摄像头全身遥操演示",
    "camera.playAria": "播放单摄像头遥操视频",
    "footer.research": "人形机器人遥操研究"
  }
};

const languageButtons = document.querySelectorAll("[data-language]");

const applyLanguage = (language) => {
  const copy = translations[language] || translations.en;

  document.documentElement.lang = language === "zh" ? "zh-CN" : "en";
  document.title = language === "zh"
    ? "Center for Artificial Intelligence and Cross-Domain Robotics (AI-CDR Center) — 人形机器人遥操作"
    : "Center for Artificial Intelligence and Cross-Domain Robotics (AI-CDR Center) — Humanoid Teleoperation";

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const value = copy[element.dataset.i18n];
    if (value !== undefined) element.textContent = value;
  });

  document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
    const value = copy[element.dataset.i18nAriaLabel];
    if (value) element.setAttribute("aria-label", value);
  });

  languageButtons.forEach((button) => {
    button.setAttribute("aria-pressed", String(button.dataset.language === language));
  });

  try {
    localStorage.setItem("site-language", language);
  } catch (error) {
    // Language still applies when storage is unavailable.
  }
};

let initialLanguage = "en";
try {
  initialLanguage = localStorage.getItem("site-language") ||
    (navigator.language.toLowerCase().startsWith("zh") ? "zh" : "en");
} catch (error) {
  initialLanguage = navigator.language.toLowerCase().startsWith("zh") ? "zh" : "en";
}

languageButtons.forEach((button) => {
  button.addEventListener("click", () => applyLanguage(button.dataset.language));
});

applyLanguage(initialLanguage);

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
