var cssAddfunds = document.createElement('link');
cssAddfunds.href = chrome.runtime.getURL('js/siteExt/addfunds.css');
cssAddfunds.rel = 'stylesheet';
cssAddfunds.type = 'text/css';
(document.head || document.documentElement).prepend(cssAddfunds);


var actualCode = [
  `window.SIHID = '${chrome.runtime.id}';`,
];

var script = document.createElement('script');
script.textContent = actualCode.join('\r\n');
(document.head || document.documentElement).appendChild(script);
script.parentNode.removeChild(script);


var sAddfundsBundle = document.createElement('script');
sAddfundsBundle.src = chrome.runtime.getURL('js/siteExt/addfunds.bundle.js');
(document.head || document.documentElement).appendChild(sAddfundsBundle);
sAddfundsBundle.onload = function () {

  var sAddfunds = document.createElement('script');
  sAddfunds.src = chrome.runtime.getURL('js/addfunds.script.js');
  (document.head || document.documentElement).appendChild(sAddfunds);
  sAddfunds.onload = function () {

    sAddfunds.parentNode.removeChild(sAddfunds);
  };

  sAddfundsBundle.parentNode.removeChild(sAddfundsBundle);
}


