function prepareGallery(){
  if(!document.getElementsByTagName) return false;
  if(!document.getElementById) return false;
  if(!document.getElementById("imagegallery")) return false;
  
  var gallery = document.getElementById("imagegallery");
  var links = gallery.getElementsByTagName("a");
  
  for(var i = 0; i <links.length;i++){
	  links[i].onclick = function(){
		  
		  return !showPic(this);;
	  }
  }
  
 
}
 addLoadEvent(prepareGallery);