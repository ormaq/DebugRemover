# Debug Remover Chrome Extension

The Debug Remover Chrome Extension is a sample extension that removes debug statements from JavaScript code on webpages. It utilizes Chrome Extension APIs to inject a content script and modify the JavaScript code dynamically.

## How it works

The extension consists of three main files:

1. `manifest.json`: This file contains the configuration for the Chrome extension, including permissions, background script, and content script details.

2. `background.js`: This script runs in the background and listens for tab updates. When a tab is updated and set as active, it checks if the 'autoRemove' key is set in local storage. If it is, it triggers the content script to remove debug statements.

3. `content.js`: This script is injected into webpages as a content script. It listens for the custom event 'RemoveDebugEvent' dispatched by the background script. When the event is received, it removes debug statements from the JavaScript code in the webpage.

## Usage

1. Clone or download the repository.

2. Open Google Chrome and go to `chrome://extensions`.

3. Enable the "Developer mode" option.

4. Click on "Load unpacked" and select the folder containing the extension files.

5. The Debug Remover extension should now be added to Chrome.

6. To activate the debug removal feature, make sure the extension is enabled and the 'autoRemove' key is set to `true` in the extension's local storage. You can modify the storage using the Chrome DevTools Storage tab.

7. Navigate to a webpage with JavaScript code that contains debug statements.

8. The extension will automatically remove the debug statements from the JavaScript code when the page finishes loading.

### Mozilla Firefox

1. Clone or download the repository.

2. Open Mozilla Firefox and go to `about:debugging#/runtime/this-firefox`.

3. Click on "Load Temporary Add-on" and select the folder containing the extension files.

4. The Debug Remover extension should now be added to Firefox temporarily.

5. To activate the debug removal feature, make sure the extension is enabled and the 'autoRemove' key is set to `true` in the extension's local storage. You can modify the storage using the Firefox Developer Tools Storage tab.

6. Navigate to a webpage with JavaScript code that contains debug statements.

7. The extension will automatically remove the debug statements from the JavaScript code when the page finishes loading.


## Notes

- The provided code example removes debug statements using a simple pattern matching approach. It may not capture all possible debug statement variations or handle complex scenarios.

- Please exercise caution when using the extension in production environments or on websites with sensitive information. Test thoroughly and ensure it behaves as expected.

- This is a basic example and can be further expanded and customized according to specific requirements.

