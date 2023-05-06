//your JS code here. If required.
const div = document.getElementbyId("browser-info");
const browserName = navigator.appName();
const browserVersion = navigator.appVersion();
div.innerText = `You are using {browserName} version {browserVersion}`;