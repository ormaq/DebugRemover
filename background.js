// background.js

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    if (changeInfo.status == 'complete' && tab.active) {
        chrome.storage.local.get('autoRemove', function(data) {
            if (data && data.autoRemove) {
                chrome.tabs.executeScript(tabId, {file: 'removeDebugs.js'}, function() {
                    chrome.tabs.executeScript(tabId, {
                        code: '(' + function() {
                            var result = removeDebugStatements();
                            return result;
                        } + ')();'
                    }, function(results) {
                        if (chrome.runtime.lastError || !results) {
                            console.error(chrome.runtime.lastError || 'No result!');
                        } else {
                            chrome.storage.local.set({debugCount: results[0]});
                        }
                    });
                });
            }
        });
    }
  });
  