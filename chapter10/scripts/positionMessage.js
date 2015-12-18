function positionMessage(){
  if(!document.getElementById) return false;
  if(!document.getElementById("message")) return false;
  var elem = document.getElementById("message");
  elem.style.position = "absolute";
  elem.style.left = "500px";
  elem.style.top = "1000px";
  movement = setTimeout("moveMessage()",5000);
  
}

function moveMessage(){
	if(!document.getElementById) return false;
	if(!document.getElementById("message")) return false;
	var elem = document.getElementById("message");
	var xpos = parseInt(elem.style.left);
	var ypos = parseInt(elem.style.top);
	if(xpos == 200&&ypos == 100){
		return true;
	}
	if(xpos < 200){
		xpos ++;
	}
	if(xpos > 200){
		xpos --;
	}
	if(ypos < 100){
		ypos ++;
	}
	if(ypos > 100){
		ypos --;
	}
	
	elem.style.left = xpos + "px";
	elem.style.top = ypos + "px";
	movement = setTimeout("moveMessage()",10);
}
addLoadEvent(positionMessage);