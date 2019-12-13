var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById('gradient');
var css2 = document.getElementById('copyStatus');

function updateBackground() {
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
    css.textContent = body.style.background +";";
    css2.textContent = "Click above to copy to clipboard";
}

function copy() {
  var textToCopy = css.textContent;
  var textArea = document.createElement("textarea");
   textArea.value = textToCopy;
   document.body.appendChild(textArea);
   textArea.select();
   document.execCommand("Copy");
   textArea.remove();
   css2.textContent = "Copied to clipboard!";
}



css.addEventListener("click", copy);
color1.addEventListener("input", updateBackground);
color2.addEventListener("input", updateBackground);
