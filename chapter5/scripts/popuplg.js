window.onload = prepareLinks;
function prepareLinks(){
  if (!document.getElementsByTagName) return false;
  var lnks = document.getElementsByTagName("a");
  for (var i=0; i<lnks.length; i++) {
    if (lnks[i].getAttribute("class") == "popup") {
      lnks[i].onclick = function() {
        popUp(this.getAttribute("href"));
        return false;
      }
    }
  }
}

function popUp(winURL){
	window.open(winURL,"popup","width=320,height=480");
}

 //window.onload = countBodyChildren;
