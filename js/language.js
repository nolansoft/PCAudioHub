const translations = {
  zh: {
    title: "将安卓手机变成电脑的无线/USB扬声器",
    intro: "PCAudioHub可以让您的手机成为电脑的扬声器。通过WiFi或USB连接，在电脑上运行服务器软件即可开始无线播放！",
    "features-title": "主要功能",
    feature1: "通过WiFi或USB从电脑传输音频到手机",
    feature2: "低延迟音频传输体验",
    feature3: "服务器端软件轻松配置",
    feature4: "支持所有现代安卓设备",
    "how-to-title": "使用方法",
    how1: "确保手机和电脑连接到同一WiFi或USB连接",
    how2: "在安卓设备上安装PCAudioHub应用",
    how3: "在电脑上安装PCAudioHub服务器程序",
    how4: "启动两个应用并开始体验无线音频！",
	"screenshots-title": "应用截图",
  },
  en: {
    title: "Turn Your Android Device into a Wireless/USB Speaker",
    intro:
      "PCAudioHub lets your phone become a speaker for your computer. Connect via Wi-Fi or USB, install the server app on your PC, and start streaming audio wirelessly!",
    "features-title": "Key Features",
    feature1: "Stream PC audio to phone via Wi-Fi or USB",
    feature2: "Low latency audio transmission",
    feature3: "Easy setup with server software",
    feature4: "Works on all modern Android devices",
    "how-to-title": "How It Works",
    how1: "Connect phone and PC on the same Wi-Fi or USB",
    how2: "Install PCAudioHub on your Android device",
    how3: "Install the PCAudioHub Server on your PC",
    how4: "Start both apps and enjoy wireless audio!",
	"screenshots-title": "App Screenshots",
  },
};

function setLanguage(lang) {
  document.querySelectorAll("[data-lang]").forEach((el) => {
    el.textContent = translations[lang][el.getAttribute("data-lang")];
  });
}
