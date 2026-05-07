const dictionary = {
  zh: {
    pageTitle: "温习小屋 | 知识画廊",
    brandMark: "知",
    brandTitle: "温习小屋",
    brandSubtitle: "知识画廊",
    navGallery: "画廊",
    navNote: "笔记",
    navReview: "复习",
    eyebrow: "双语知识画廊",
    heroTitle: "把知识做成可以慢慢逛的画廊。",
    heroText: "每篇笔记都像一张作品卡：主题清楚、重点可扫、复习入口固定。",
    startReading: "进入画廊",
    sceneOneKind: "计算机基础",
    sceneOneTitle: "硬件",
    sceneTwoKind: "语言学习",
    sceneTwoTitle: "阅读",
    sceneThreeKind: "思维训练",
    sceneThreeTitle: "模型",
    galleryEyebrow: "笔记画廊",
    galleryTitle: "先收纳，再深入",
    filterAll: "全部",
    filterComputer: "计算机",
    filterLanguage: "语言",
    filterThinking: "思维",
    cardHardwareKind: "计算机基础",
    cardHardwareTitle: "什么是计算机硬件？",
    cardHardwareText: "硬件定义、内部与外部组件、机械硬盘与固态硬盘、硬件与软件辨析。",
    cardReadingKind: "英语阅读",
    cardReadingTitle: "阅读日志模板",
    cardReadingText: "摘录、词汇、句型、复述和主题总结。",
    cardThinkingKind: "思维模型",
    cardThinkingTitle: "第一性原理",
    cardThinkingText: "把复杂问题拆回基本事实，再重新组织判断。",
    featuredEyebrow: "精选笔记",
    hardwareTitle: "什么是计算机硬件？",
    summaryTitle: "一句话定义",
    summaryText: "计算机硬件指组成计算机系统的<strong>物理部件</strong>，负责输入、输出、处理、存储和通信；软件则是告诉硬件做什么的程序和指令。",
    coreTitle: "核心四件套",
    coreText: "<strong>CPU</strong> 处理指令，<strong>RAM</strong> 临时保存数据，<strong>存储设备</strong> 长期保存文件，<strong>主板</strong> 连接组件。",
    ioTitle: "输入与输出",
    ioText: "键盘、鼠标是输入设备；显示器、打印机、扬声器是输出设备。",
    networkTitle: "网络硬件",
    networkText: "路由器、交换机、调制解调器和网卡负责连接与通信。",
    ssdTitle: "HDD 与 SSD",
    ssdText: "机械硬盘靠磁性记录；固态硬盘靠闪存电荷状态记录。",
    reviewTitle: "今天只要捡起一点点",
    reviewButton: "抽一张复习卡",
    footerText: "为长期学习准备的温和起点。",
    prompts: ["说出 CPU、RAM、存储设备和主板各负责什么。", "举三个输入设备和三个输出设备。", "解释为什么云计算仍然离不开硬件。", "说出机械硬盘和固态硬盘的关键区别。"]
  },
  en: {
    pageTitle: "Study Nook | Knowledge Gallery",
    brandMark: "N",
    brandTitle: "Study Nook",
    brandSubtitle: "Knowledge Gallery",
    navGallery: "Gallery",
    navNote: "Note",
    navReview: "Review",
    eyebrow: "Bilingual Knowledge Gallery",
    heroTitle: "A calm gallery for notes.",
    heroText: "Each note becomes a clear card with a topic, quick scan points, and a fixed review entry.",
    startReading: "Enter Gallery",
    sceneOneKind: "Computer Basics",
    sceneOneTitle: "Hardware",
    sceneTwoKind: "Language",
    sceneTwoTitle: "Reading",
    sceneThreeKind: "Thinking",
    sceneThreeTitle: "Models",
    galleryEyebrow: "Note Gallery",
    galleryTitle: "Collect first, then go deeper",
    filterAll: "All",
    filterComputer: "Computer",
    filterLanguage: "Language",
    filterThinking: "Thinking",
    cardHardwareKind: "Computer Basics",
    cardHardwareTitle: "What is computer hardware?",
    cardHardwareText: "Hardware definition, internal and external components, HDD vs SSD, and hardware versus software.",
    cardReadingKind: "English Reading",
    cardReadingTitle: "Reading Log Template",
    cardReadingText: "A space for excerpts, vocabulary, sentence patterns, retelling, and topic summaries.",
    cardThinkingKind: "Mental Models",
    cardThinkingTitle: "First Principles",
    cardThinkingText: "Break a complex problem back into basic facts, then rebuild your judgment.",
    featuredEyebrow: "Featured Note",
    hardwareTitle: "What is computer hardware?",
    summaryTitle: "One-sentence definition",
    summaryText: "Computer hardware means the <strong>physical components</strong> that make up a computer system and handle input, output, processing, storage, and communication. Software tells hardware what to do.",
    coreTitle: "The core set",
    coreText: "The <strong>CPU</strong> processes instructions, <strong>RAM</strong> temporarily holds data, <strong>storage</strong> keeps files long term, and the <strong>system board</strong> connects components.",
    ioTitle: "Input and output",
    ioText: "Keyboards and mice are input devices; monitors, printers, and speakers are output devices.",
    networkTitle: "Networking hardware",
    networkText: "Routers, switches, modems, and network cards handle connection and communication.",
    ssdTitle: "HDD and SSD",
    ssdText: "HDDs use magnetism; SSDs use charge states in flash memory.",
    reviewTitle: "Pick up just one small thing today",
    reviewButton: "Draw a Review Card",
    footerText: "A soft starting point for long-term learning.",
    prompts: ["Name what the CPU, RAM, storage, and system board each do.", "Give three input devices and three output devices.", "Explain why cloud computing still depends on hardware.", "Describe the key difference between HDDs and SSDs."]
  }
};

const html = document.documentElement;
const languageToggle = document.querySelector("#languageToggle");
const themeToggle = document.querySelector("#themeToggle");
const filters = document.querySelectorAll(".filter");
const cards = document.querySelectorAll("[data-category]");
const reviewButton = document.querySelector("#reviewButton");
const reviewPrompt = document.querySelector("#reviewPrompt");
let currentLanguage = localStorage.getItem("notes-language") || "zh";

function applyLanguage(language) {
  const labels = dictionary[language];
  currentLanguage = language;
  html.lang = language === "zh" ? "zh-CN" : "en";
  document.title = labels.pageTitle;
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const value = labels[node.dataset.i18n];
    if (value) node.textContent = value;
  });
  document.querySelectorAll("[data-i18n-html]").forEach((node) => {
    const value = labels[node.dataset.i18nHtml];
    if (value) node.innerHTML = value;
  });
  languageToggle.setAttribute("aria-label", language === "zh" ? "Switch to English" : "切换到中文");
  localStorage.setItem("notes-language", language);
}

function applyTheme(theme) {
  html.dataset.theme = theme;
  themeToggle.setAttribute("aria-label", theme === "day" ? "Switch to night theme" : "Switch to day theme");
  localStorage.setItem("notes-theme", theme);
}

filters.forEach((button) => {
  button.addEventListener("click", () => {
    filters.forEach((filter) => filter.classList.toggle("active", filter === button));
    cards.forEach((card) => {
      card.hidden = button.dataset.filter !== "all" && card.dataset.category !== button.dataset.filter;
    });
  });
});

languageToggle.addEventListener("click", () => applyLanguage(currentLanguage === "zh" ? "en" : "zh"));
themeToggle.addEventListener("click", () => applyTheme(html.dataset.theme === "day" ? "night" : "day"));
reviewButton.addEventListener("click", () => {
  const prompts = dictionary[currentLanguage].prompts;
  reviewPrompt.textContent = prompts[Math.floor(Math.random() * prompts.length)];
});

applyLanguage(currentLanguage);
applyTheme(localStorage.getItem("notes-theme") || "day");
