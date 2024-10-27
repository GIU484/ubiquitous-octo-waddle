/*global chrome*/

chrome.action.onClicked.addListener(function(tab) {
    chrome.tabs.create({url: 'https://your-react-app-url.com'});
});