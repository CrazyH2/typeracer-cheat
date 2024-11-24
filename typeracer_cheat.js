/* ==== Typeracer Cheat ==== */

var arrSpan = document.querySelectorAll('div.unselectable');
var fullSentence = '';
arrSpan.forEach(function (item) {
  fullSentence += item.innerHTML;
});

var index = 0;

document.getElementsByClassName("txtInput")[0].addEventListener("keypress", function (e) {
  e.preventDefault();
  this.value += fullSentence[index++];
})
