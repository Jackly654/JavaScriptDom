function inputSupportsType(type){
	if(!document.createElement) return false;
	var input = document.createElement('input');
	input.setAttribute('type',type);
	if(input.type == 'text'&&type!='text'){
		return false;
	}else{
		return true;
	}
}