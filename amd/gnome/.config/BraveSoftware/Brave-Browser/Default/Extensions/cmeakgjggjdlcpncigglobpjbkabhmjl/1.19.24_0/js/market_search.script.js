var COOKIE_ENABLED_SIH = 'enableSIH';
var IS_ENABLED_SIH = GetCookie(COOKIE_ENABLED_SIH);
IS_ENABLED_SIH = IS_ENABLED_SIH === null || IS_ENABLED_SIH === 'true';


if (IS_ENABLED_SIH) {
  $J(function () {

    SIH?.RefactorAdvancedSearchDialog();

  })
}
