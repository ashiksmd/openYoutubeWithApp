/*var port = chrome.runtime.connectNative('open.in.app.native.host');
port.onMessage.addListener(function(msg) {
  console.log("Received" + msg);
});
port.onDisconnect.addListener(function() {
  console.log("Disconnected");
});*/

var showForPages = ["*://*.youtube.com/watch?*"];

function openApp(info, tab) {
    var url = info.linkUrl || tab.url;
    console.log("Sending: " + url);
    
    chrome.runtime.sendNativeMessage('open.in.app.native.host',
        { text: url },
        function(response) {
            console.log("Done");
        }
    );
}

var title = "Open in App";
chrome.contextMenus.create({
   "title": title,
   "contexts": ["link"],
   "targetUrlPatterns": showForPages,
   "onclick": openApp   
});

chrome.contextMenus.create({
   "title": title,
   "contexts": ["page"],
   "documentUrlPatterns": showForPages,
   "onclick": openApp   
});
