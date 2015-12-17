function highlightRows(){
	if(!document.getElementsByTagName) return false;
	var rows = document.getElementsByTagName("tr");
	for(var i=0; i<rows.length;i++){
		rows[i].onmouseover = function(){
			this.style.fontWeight = "blod";
		}
		rows[i].onmouseout = function(){
			this.style.fontWeight = "normal";
		}
	}
}

addLoadEvent(highlightRows);