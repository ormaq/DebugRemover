// removeDebugs.js

function removeDebugStatements() {
    
    var count = 0;
    var debugs = ["console.log", "console.debug", "console.info", "console.warn", "console.error", "print", "debug"];
  
    debugs.forEach(function(item) {
        var re = new RegExp(item + "\\(.*?\\);", "g");
        var scripts = document.querySelectorAll('script');
  
        scripts.forEach(function(script) {
            var found = script.textContent.match(re);
  
            if (found) {
                count += found.length;
                script.textContent = script.textContent.replace(re, '');
            }
        });
    });
  
    return count;
}
