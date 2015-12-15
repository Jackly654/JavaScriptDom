window.onload = function(){
   
   
   var testdiv = document.getElementById("testdiv");
   
   var para = document.createElement("p");
   
   testdiv.appendChild(para);
   
   var txt = document.createTextNode("Hello World");
   
   para.appendChild(txt);
   
   var info = "nodeName: ";
   info += para.nodeName;
   info += " nodeType:";
   info += para.nodeType;
   alert(info);
}