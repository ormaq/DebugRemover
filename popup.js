// popup.js

document.getElementById('removeBtn').addEventListener('click', function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.executeScript(tabs[0].id, {file: 'removeDebugs.js'}, function() {
            chrome.tabs.executeScript(tabs[0].id, {
                code: '(' + function() {
                    var result = removeDebugStatements();
                    return result;
                } + ')();'
            }, function(results) {
                if (chrome.runtime.lastError || !results) {
                    console.error(chrome.runtime.lastError || 'No result!');
                } else {
                    chrome.storage.local.set({debugCount: results[0]});
                    updateCount(results[0]);
                }
            });
        });
    });
});

window.onload = function() {
    chrome.storage.local.get('debugCount', function(data) {
        if(data.debugCount !== undefined) {
            updateCount(data.debugCount);
        }
    });
};

function updateCount(count) {
    document.getElementById('count').textContent = 'Removed debug statements: ' + count;
}
