var sGameBundle = document.createElement('script');
sGameBundle.src = chrome.runtime.getURL('js/siteExt/gamePage.bundle.js');
(document.head || document.documentElement).appendChild(sGameBundle);
sGameBundle.onload = function () {

  var sGame = document.createElement('script');
  sGame.src = chrome.runtime.getURL('js/gamePage.script.js');
  (document.head || document.documentElement).appendChild(sGame);
  sGame.onload = function () {
    sGame.parentNode.removeChild(sGame);
  };

  sGameBundle.parentNode.removeChild(sGameBundle);
}

var actualCode = [
  `window.SIHID = '${chrome.runtime.id}';`,
];

var script = document.createElement('script');
script.textContent = actualCode.join('\r\n');
(document.head || document.documentElement).appendChild(script);
script.parentNode.removeChild(script);
