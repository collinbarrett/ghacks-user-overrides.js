/*** MY OVERRIDES ***/
/*** 1. Copy to Firefox profile directory */
/*** 2. Run https://github.com/ghacksuserjs/ghacks-user.js/raw/master/updater.bat in Firefox profile directory */
user_pref("_user.js.parrot", "overrides section syntax error");
user_pref("webgl.disabled", false); // 2010 enable webGL for Mapbox embeds (e.g. NYT)
user_pref("webgl.min_capability_mode", false); // 2012 enable webGL for Mapbox embeds (e.g. NYT)
user_pref("privacy.resistFingerprinting.letterboxing", false); // 4504 disable letterboxing
user_pref("extensions.pocket.enabled", false); // 5000 disable Pocket extension
user_pref("keyword.enabled", true); // 0801 enable searching from location bar
user_pref("signon.rememberSignons", false); // 0901 disable password manager
user_pref("_user.js.parrot", "SUCCESS");
