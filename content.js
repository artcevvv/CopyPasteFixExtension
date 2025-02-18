function enableCopyPaste() {
  let body = document.body;
  if (!body) return;

  body.oncontextmenu = null;
  body.oncopy = null;
  body.oncut = null;
  body.onpaste = null;
  body.onselectstart = null;
  body.onmousedown = null;
  body.onmouseup = null;
  body.onkeydown = null;
  body.onkeyup = null;

  document.querySelectorAll("*").forEach((el) => {
    el.removeAttribute("oncontextmenu");
    el.removeAttribute("oncopy");
    el.removeAttribute("oncut");
    el.removeAttribute("onpaste");
    el.removeAttribute("onselectstart");
    el.removeAttribute("onmousedown");
    el.removeAttribute("onmouseup");
    el.removeAttribute("onkeydown");
    el.removeAttribute("onkeyup");

    el.addEventListener("contextmenu", (e) => e.stopPropagation(), true);
    el.addEventListener("copy", (e) => e.stopPropagation(), true);
    el.addEventListener("cut", (e) => e.stopPropagation(), true);
    el.addEventListener("paste", (e) => e.stopPropagation(), true);
    el.addEventListener("selectstart", (e) => e.stopPropagation(), true);
    el.addEventListener("mousedown", (e) => e.stopPropagation(), true);
    el.addEventListener("mouseup", (e) => e.stopPropagation(), true);
    el.addEventListener("keydown", (e) => e.stopPropagation(), true);
    el.addEventListener("keyup", (e) => e.stopPropagation(), true);
  });

  console.log("✅ Copy-paste and right-click enabled.");
}

function disableCopyPaste() {
  document.querySelectorAll("*").forEach((el) => {
    el.removeEventListener("contextmenu", (e) => e.stopPropagation(), true);
    el.removeEventListener("copy", (e) => e.stopPropagation(), true);
    el.removeEventListener("cut", (e) => e.stopPropagation(), true);
    el.removeEventListener("paste", (e) => e.stopPropagation(), true);
    el.removeEventListener("selectstart", (e) => e.stopPropagation(), true);
    el.removeEventListener("mousedown", (e) => e.stopPropagation(), true);
    el.removeEventListener("mouseup", (e) => e.stopPropagation(), true);
    el.removeEventListener("keydown", (e) => e.stopPropagation(), true);
    el.removeEventListener("keyup", (e) => e.stopPropagation(), true);
  });

  console.log("❌ Copy-paste and right-click disabled.");
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "toggle") {
    request.enabled ? enableCopyPaste() : disableCopyPaste();
  }
});

chrome.storage.sync.get("enabled", function (data) {
  if (data.enabled ?? true) {
    enableCopyPaste();
  }
});
