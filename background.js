const adList = [
    "*://*.doubleclick.net/*",
    "*://*.googlesyndication.com/*",
    "*://*.googleletagservices.com/*",
    "*://*.googleleadservices.com/*",
    "*://*.google-analytics.com/*",
    "*://*.googleandsercise.com/*",
    "*://*.zedo.com/*",
    "*://*.adbriters.com/*",
    "*://*.adbureau.net/*",
    "*://*.carbonads.net/*",
    "*://*.cdn.carbonads.com/*",
    "*://*.cdn.carbonads.net/*",
    "*://*.cdn.doubleclick.net/*",
    "*://*.cdn.googletagservices.com/*",
    "*://*.cdn.googleleadservices.com/*",
    "*://*.cdn.zedo.com/*",

];

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
        return {cancel: true}
    },
    {urls: adList},
    ["blocking"]
)