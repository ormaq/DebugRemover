// options.js

document.addEventListener('DOMContentLoaded', function() {
    var autoRemoveCheck = document.getElementById('autoRemoveCheck');
  
    // Restore checkbox state
    chrome.storage.local.get('autoRemove', function(data) {
      autoRemoveCheck.checked = !!data.autoRemove;
    });
  
    // Save checkbox state
    autoRemoveCheck.addEventListener('change', function() {
      chrome.storage.local.set({autoRemove: autoRemoveCheck.checked});
    });
});
