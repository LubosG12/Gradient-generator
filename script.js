var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById('gradient');
var css2 = document.getElementById('copyStatus');
var randomize = document.getElementById('randomize');

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

function getRandomColor() {
  var letters = "0123456789ABCDEF";
  color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

randomize.addEventListener("click", function() {
  getRandomColor();
  color1.value = color;
  getRandomColor();
  color2.value = color;
  updateBackground();
});

css.addEventListener("click", copy);
color1.addEventListener("input", updateBackground);
color2.addEventListener("input", updateBackground);
