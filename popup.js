document.addEventListener("DOMContentLoaded", function () {
  let toggleSwitch = document.getElementById("toggleSwitch");

  chrome.storage.sync.get("enabled", function (data) {
    let isEnabled = data.enabled ?? true;
    toggleSwitch.checked = isEnabled;
  });

  toggleSwitch.addEventListener("change", function () {
    let isEnabled = toggleSwitch.checked;
    chrome.storage.sync.set({ enabled: isEnabled });

    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        function: setCopyPasteState,
        args: [isEnabled],
      });

      if (!isEnabled) {
        chrome.scripting.executeScript({
          target: { tabId: tabs[0].id },
          function: () => {
            alert("Функция отключена. Страница будет перезагружена.");
            location.reload();
          },
        });
      }
    });
  });
});

function setCopyPasteState(isEnabled) {
  if (isEnabled) {
    enableCopyPaste();
  } else {
    disableCopyPaste();
  }
}
