// For pages where there are PriceQueue.js
const EXCLUDE_LOCATION_PRICE_NAME = ['tradeoffer', 'tradeoffers', '/inventory', 'market'];
// For pages where there are import global styles
const EXCLUDE_LOCATION_GLOBAL_STYLES_NAME = ['tradeoffer/', '/inventory', 'market/listings'];


var cssPagination = document.createElement('link');
cssPagination.href = chrome.runtime.getURL('js/jquery/pagination.css');
cssPagination.rel = 'stylesheet';
cssPagination.type = 'text/css';
(document.head || document.documentElement).prepend(cssPagination);

var cssJqueryUI = document.createElement('link');
cssJqueryUI.href = chrome.runtime.getURL('css/jquery-ui.css');
cssJqueryUI.rel = 'stylesheet';
cssJqueryUI.type = 'text/css';
(document.head || document.documentElement).appendChild(cssJqueryUI);

var sJqueryUI = document.createElement('script');
sJqueryUI.src = chrome.runtime.getURL('js/jquery/jquery-ui.min.js');
(document.head || document.documentElement).appendChild(sJqueryUI);
sJqueryUI.onload = function () {
  sJqueryUI.parentNode.removeChild(sJqueryUI);
}


var cssManrope = document.createElement('link');
cssManrope.href = chrome.runtime.getURL('css/fonts/manrope.css');
cssManrope.rel = 'stylesheet';
cssManrope.type = 'text/css';
(document.head || document.documentElement).prepend(cssManrope);

var cssRoboto = document.createElement('link');
cssRoboto.href = chrome.runtime.getURL('css/fonts/roboto.css');
cssRoboto.rel = 'stylesheet';
cssRoboto.type = 'text/css';
(document.head || document.documentElement).prepend(cssRoboto);

var cssFlagIcons = document.createElement('link');
cssFlagIcons.href = chrome.runtime.getURL('css/flag-icon.css');
cssFlagIcons.rel = 'stylesheet';
cssFlagIcons.type = 'text/css';
(document.head || document.documentElement).prepend(cssFlagIcons);

chrome.storage.sync.get((itemsSync) => {
  const detectUserLanguage = () => {
    let navLang;
    if (window.navigator.languages && window.navigator.languages.length > 0) {
      [navLang] = window.navigator.languages;
    }
    if (!navLang) {
      navLang = window.navigator.language || window.navigator.userLanguage || '';
    }

    const VALID_LANGUAGES = [
      'bg', 'cs', 'de', 'en', 'es', 'fa', 'fr', 'he', 'it', 'ka', 'lv', 'no', 'pl', 'pt_BR',
      'ro', 'ru', 'sv', 'tr', 'vi', 'uk', 'zh_CN', 'zh_TW'
    ];
    return (VALID_LANGUAGES.includes(navLang)) ? navLang : 'en';
  }
  itemsSync.lang = itemsSync.lang || detectUserLanguage();

  $.getJSON(chrome.runtime.getURL(`_locales/en/controls.json`), (enData) => {
    $.getJSON(chrome.runtime.getURL(`_locales/${itemsSync.lang}/controls.json`), (langData) => {

      langData = jQuery.extend(true, {}, enData, langData);

      chrome.storage.local.get((itemsLocal) => {

        const actualCode = [
          `window.SIHID = '${chrome.runtime.id}';`,
          `window.sih_app_account = ${itemsSync.sih_app_account};`,
          `window.steamCurrency = ${JSON.stringify(itemsSync.steamCurrency)};`,
          `window.SIHLang = ${JSON.stringify(langData)};`,
          `window.lang = ${JSON.stringify(itemsSync.lang)};`,
          `window.manifest_v3_accepted = ${JSON.stringify(itemsSync.manifest_v3_accepted)};`,
        ].join('\r\n');

        var sData = document.createElement('script');
        sData.textContent = actualCode;
        (document.head || document.documentElement).appendChild(sData);
        sData.parentNode.removeChild(sData);

        let isIncludePrice = false;
        let isIncludeGlobalStyles = false;

        EXCLUDE_LOCATION_PRICE_NAME.forEach((locationName) => {
          if (window.location.href.includes(locationName)) {
            if (locationName !== 'market') isIncludePrice = true;
            else if (!window.location.href.includes('search')) {
              isIncludePrice = true;
            }
          }
        })

        EXCLUDE_LOCATION_GLOBAL_STYLES_NAME.forEach((locationName) => {
          if (window.location.href.includes(locationName)) {
            isIncludeGlobalStyles = true;
          }
        })


        if (!isIncludeGlobalStyles) {
          var cssSihGlobalHeader = document.createElement('link');
          cssSihGlobalHeader.href = chrome.runtime.getURL('js/siteExt/sihGlobalHeader.css');
          cssSihGlobalHeader.rel = 'stylesheet';
          cssSihGlobalHeader.type = 'text/css';
          (document.head || document.documentElement).appendChild(cssSihGlobalHeader);
        }

        if (!isIncludePrice) {
          var sPriceQueue = document.createElement('script');
          sPriceQueue.src = chrome.runtime.getURL('js/PriceQueue.js');
          (document.head || document.documentElement).appendChild(sPriceQueue);
          sPriceQueue.onload = function () {
            sPriceQueue.parentNode.removeChild(sPriceQueue);
          }
        }

        var sPagination = document.createElement('script');
        sPagination.src = chrome.runtime.getURL('js/jquery/pagination.min.js');
        (document.head || document.documentElement).appendChild(sPagination);
        sPagination.onload = function () {

          var sSihGlobalHeaderBundle = document.createElement('script');
          sSihGlobalHeaderBundle.src = chrome.runtime.getURL('js/siteExt/sihGlobalHeader.bundle.js');
          (document.head || document.documentElement).appendChild(sSihGlobalHeaderBundle);
          sSihGlobalHeaderBundle.onload = function () {

            var sSihGlobalHeader = document.createElement('script');
            sSihGlobalHeader.src = chrome.runtime.getURL('js/sih_global_header.script.js');
            (document.head || document.documentElement).appendChild(sSihGlobalHeader);
            sSihGlobalHeader.onload = function () {
              sSihGlobalHeader.parentNode.removeChild(sSihGlobalHeader);
            };

            sSihGlobalHeaderBundle.parentNode.removeChild(sSihGlobalHeaderBundle);
          }

          sPagination.parentNode.removeChild(sPagination);
        }




      })
    })
  })
})


