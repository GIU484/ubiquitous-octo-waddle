/*global chrome*/

chrome.action.onClicked.addListener(function(tab) {
    chrome.tabs.create({url: 'https://giu484.github.io/ubiquitous-octo-waddle'});
});