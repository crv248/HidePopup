chrome.action.onClicked.addListener((tab) => {
  if (!tab || typeof tab.id !== "number") return;
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    files: ["Inject.js"]
  }).catch(err => {
    console.error("Error ejecutando Inject.js:", err);
  });
});