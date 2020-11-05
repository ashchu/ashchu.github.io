setTimeout(function() {
  var element = document.getElementById('website');
  element.style.visibility = "visible"
  // document.getElementById('website').style.visibility = "hidden"
}, 500);
setTimeout(function() {
  var element = document.getElementById('loading');
  element.classList += "hidden";
}, 500);
