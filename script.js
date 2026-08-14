const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const translations = {
  en: {
    "language.label": "Language",
    "brand.name": "AI-CDR Center（Center for Artificial Intelligence and Cross-Domain Robotics） · Hangzhou China",
    "hero.titlePrimary": "Humanoid",
    "hero.titleSecondary": "teleoperation",
    "hero.lede": "You move. G1 responds.",
    "hero.preview": "RESEARCH PREVIEW · 2026",
    "hero.explore": "EXPLORE",
    "overview.kicker": "FULL-BODY TELEOPERATION",
    "overview.minor": "You move",
    "overview.major": "G1 moves with you",
    "overview.description": "Raise an arm, lean, step, or kick. G1 follows naturally, from head to toe.",
    "full.type": "HEADSET · TWO CONTROLLERS · ANKLE TRACKERS",
    "full.title": "Move naturally, control the whole robot",
    "full.description": "Raise an arm, lean, or step. G1 follows your rhythm, bringing balance, reach, and movement together.",
    "full.balanceTitle": "Single-Leg Balance",
    "full.balanceMeta": "STABLE & COORDINATED",
    "full.balanceAria": "Full-body teleoperation single-leg balance demonstration",
    "full.pickTitle": "Reach & Pick",
    "full.pickMeta": "NATURAL REACH",
    "full.pickAria": "Full-body teleoperation reaching and picking demonstration",
    "full.kickTitle": "Dynamic Kick",
    "full.kickMeta": "LOWER-BODY CONTROL",
    "full.kickAria": "Full-body teleoperation leg motion demonstration",
    "vr.type": "HEADSET · TWO CONTROLLERS",
    "vr.title": "No ankle trackers, go farther",
    "vr.description": "Wear a headset and pick up two controllers. Your upper body drives G1, while the joystick moves it forward and back — no need to walk with the robot.",
    "vr.live": "LIVE DEMO",
    "vr.input": "HEAD · LEFT HAND · RIGHT HAND",
    "vr.caption": "3-Point VR Control",
    "vr.captionMeta": "NO ANKLE TRACKERS",
    "vr.videoAria": "3-point VR teleoperation without ankle trackers",
    "vr.playAria": "Play 3-point VR teleoperation video",
    "camera.type": "ONE CAMERA · ZERO WEARABLES",
    "camera.takeOff": "NO WEARABLES",
    "camera.lead": "",
    "camera.focus": "one camera is all you need",
    "camera.description": "Step in front of the camera and you're ready to move. Teleoperation, with nothing to wear.",
    "camera.input": "HUMAN MOTION",
    "camera.output": "G1 RESPONSE",
    "camera.caption": "Single-Camera Teleoperation",
    "camera.captionMeta": "ONE CAMERA · ZERO WEARABLES",
    "camera.videoAria": "Single-camera whole-body teleoperation demonstration",
    "camera.playAria": "Play single-camera teleoperation video",
    "footer.research": "Humanoid Teleoperation Research"
  },
  zh: {
    "language.label": "语言",
    "brand.name": "AI-CDR Center（Center for Artificial Intelligence and Cross-Domain Robotics） · Hangzhou China",
    "hero.titlePrimary": "人形机器人",
    "hero.titleSecondary": "全身遥操",
    "hero.lede": "人有所动，G1 有所应。\n“如身之使臂，臂之使指，莫不制从。”——《汉书·贾谊传》",
    "hero.preview": "研究展示 · 2026",
    "hero.explore": "继续探索",
    "overview.kicker": "全身遥操",
    "overview.minor": "你怎么动",
    "overview.major": "G1 就怎么动",
    "overview.description": "从抬手、俯身到迈步、踢腿，G1 全程自然跟随。意之所至，身之所往。",
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
    ? "AI-CDR Center（Center for Artificial Intelligence and Cross-Domain Robotics） · Hangzhou China — 人形机器人遥操作"
    : "AI-CDR Center（Center for Artificial Intelligence and Cross-Domain Robotics） · Hangzhou China — Humanoid Teleoperation";

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
