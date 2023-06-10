console.log("This is a console log statement.");
console.debug("This is a console debug statement.");
console.info("This is a console info statement.");
console.warn("This is a console warn statement.");
console.error("This is a console error statement.");

function print() {
  console.log("This is a print function.");
}

function debug() {
  console.debug("This is a debug function.");
}

print();
debug();

document.getElementById("testParagraph").innerText = "Text after executing JavaScript.";
