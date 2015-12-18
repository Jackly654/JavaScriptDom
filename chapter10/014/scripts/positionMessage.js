function positionMessage(x,y){
  if(!document.getElementById) return false;
  if(!document.getElementById("message")) return false;
  var elem = document.getElementById("message");
  elem.style.position = "absolute";
  elem.style.left = "500px";
  elem.style.top = "1000px";
  movement = setTimeout("moveMessage(x,y)",5000);
  
}

function moveMessage(x,y){
	if(!document.getElementById) return false;
	if(!document.getElementById("message")) return false;
	var elem = document.getElementById("message");
	var xpos = parseInt(elem.style.left);
	var ypos = parseInt(elem.style.top);
	if(xpos == x&&ypos == y){
		return true;
	}
	if(xpos < x){
		xpos ++;
	}
	if(xpos > x){
		xpos --;
	}
	if(ypos < y){
		ypos ++;
	}
	if(ypos > y){
		ypos --;
	}
	
	elem.style.left = xpos + "px";
	elem.style.top = ypos + "px";
	movement = setTimeout("moveMessage()",10);
}
addLoadEvent(function(){
	positionMessage(100,3000);
});
