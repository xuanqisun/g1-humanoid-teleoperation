const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const translations = {
  en: {
    "language.label": "Language",
    "brand.name": "Hangzhou Intelligent Cross-Domain Robotics Research Center · Dr. Li Xiaowen's Team",
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
    "brand.name": "杭州智能跨域机器人研究中心 Dr.李晓文团队",
    "hero.titlePrimary": "人形机器人",
    "hero.titleSecondary": "遥操作。",
    "hero.lede": "在 G1 上实现全身遥操作——将人体动作转化为协调的机器人行为。",
    "hero.preview": "研究预览 · 2026",
    "hero.explore": "向下探索",
    "overview.kicker": "全身遥操作",
    "overview.minor": "人体运动。",
    "overview.major": "全机器人控制。",
    "overview.description": "将人体动作实时转化为 G1 灵敏、协调的全身行为，覆盖平衡、伸手、迈步和动态腿部动作。",
    "full.type": "头显 + 双手柄 + 脚环",
    "full.title": "全身遥操作",
    "full.description": "通过头部、双手和双脚的动作驱动富有表现力的全身参考，实现平衡、伸手、迈步等协调运动。",
    "full.balanceTitle": "单脚平衡",
    "full.balanceMeta": "全身协调平衡",
    "full.balanceAria": "全身遥操作单脚平衡演示",
    "full.pickTitle": "伸手抓取",
    "full.pickMeta": "低姿态控制",
    "full.pickAria": "全身遥操作伸手抓取演示",
    "full.kickTitle": "动态腿部动作",
    "full.kickMeta": "下肢动作追踪",
    "full.kickAria": "全身遥操作腿部动作演示",
    "vr.type": "头显 + 双手柄 · 无需脚环",
    "vr.title": "摘下脚环，仍可继续遥操作。",
    "vr.description": "3PT VR 通过头部与双手的意图驱动沉浸式上身控制，同时保持机器人的协调行走——只需一个头显和两个手柄。",
    "vr.live": "实时系统演示",
    "vr.input": "头部 · 左手 · 右手",
    "vr.caption": "三点式 VR 控制",
    "vr.captionMeta": "无需脚环",
    "vr.videoAria": "无需脚环的三点式 VR 遥操作演示",
    "vr.playAria": "播放三点式 VR 遥操作视频",
    "camera.type": "一个摄像头 · 无需穿戴",
    "camera.takeOff": "卸下所有穿戴设备。",
    "camera.lead": "实现遥操作，",
    "camera.focus": "只需一个摄像头。",
    "camera.description": "无需头显、手柄或身体追踪器。只用一个摄像头捕捉人体动作，即可转化为机器人的全身控制。",
    "camera.input": "摄像头输入",
    "camera.output": "机器人输出",
    "camera.caption": "摄像头遥操",
    "camera.captionMeta": "一个摄像头 · 无需穿戴",
    "camera.videoAria": "单摄像头全身遥操作演示",
    "camera.playAria": "播放单摄像头遥操作视频",
    "footer.research": "人形机器人遥操作研究"
  }
};

const languageButtons = document.querySelectorAll("[data-language]");

const applyLanguage = (language) => {
  const copy = translations[language] || translations.en;

  document.documentElement.lang = language === "zh" ? "zh-CN" : "en";
  document.title = language === "zh"
    ? "杭州智能跨域机器人研究中心 Dr.李晓文团队 — 人形机器人遥操作"
    : "Hangzhou Intelligent Cross-Domain Robotics Research Center — Humanoid Teleoperation";

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const value = copy[element.dataset.i18n];
    if (value) element.textContent = value;
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
