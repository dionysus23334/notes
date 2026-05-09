const noteHtml = document.documentElement;
const noteBody = document.body;
const noteLanguageButtons = document.querySelectorAll("[data-note-language-toggle]");
const noteThemeButtons = document.querySelectorAll("[data-note-theme-toggle]");

const noteCopy = {
  zh: {
    gallery: "画廊",
    paths: "路径",
    home: "返回首页",
    backGallery: "返回笔记画廊",
    languageButton: "EN",
    languageLabel: "Switch to English",
    night: "Night",
    day: "Day",
  },
  en: {
    gallery: "Gallery",
    paths: "Paths",
    home: "Home",
    backGallery: "Back to Gallery",
    languageButton: "中文",
    languageLabel: "切换到中文",
    night: "Night",
    day: "Day",
  },
};

function setNoteLanguage(language) {
  const copy = noteCopy[language] || noteCopy.zh;
  noteHtml.lang = language === "zh" ? "zh-CN" : "en";

  document.querySelectorAll('a[href="../index.html#gallery"]').forEach((link) => {
    link.textContent = link.classList.contains("inline-flex") ? copy.backGallery : copy.gallery;
  });
  document.querySelectorAll('a[href="../index.html#paths"]').forEach((link) => {
    link.textContent = copy.paths;
  });
  document.querySelectorAll('a[href="../index.html"]').forEach((link) => {
    if (!link.querySelector("div")) link.textContent = copy.home;
  });

  noteLanguageButtons.forEach((button) => {
    button.textContent = copy.languageButton;
    button.setAttribute("aria-label", copy.languageLabel);
  });

  localStorage.setItem("study-nook-language", language);
}

function setNoteTheme(theme) {
  noteHtml.dataset.theme = theme;
  noteBody.classList.toggle("night-mode", theme === "night");
  noteThemeButtons.forEach((button) => {
    button.textContent = theme === "day" ? noteCopy.en.night : noteCopy.en.day;
    button.setAttribute("aria-label", theme === "day" ? "Switch to night theme" : "Switch to day theme");
  });
  localStorage.setItem("study-nook-theme", theme);
}

noteLanguageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const nextLanguage = noteHtml.lang === "zh-CN" ? "en" : "zh";
    setNoteLanguage(nextLanguage);
  });
});

noteThemeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const nextTheme = noteHtml.dataset.theme === "night" ? "day" : "night";
    setNoteTheme(nextTheme);
  });
});

setNoteLanguage(localStorage.getItem("study-nook-language") || "zh");
setNoteTheme(localStorage.getItem("study-nook-theme") || "day");
