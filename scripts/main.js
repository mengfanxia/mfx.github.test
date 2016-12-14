 var myHeading = document.querySelector("h2");
 myHeading.innerHTML = "Hello World";
 
 
 var imgRoot = "images/talent/";
 var img1 = imgRoot + "T001.jpg";
 var img2 = imgRoot + "T002.jpg";
 var myImg = document.querySelector("img");
 
 myImg.onclick = function(){
	 //var mySrc=myImg.src
	 var mySrc = myImg.getAttribute("src");
	 if(mySrc === img1){
		 myImg.setAttribute("src",img2);
		 //myImg.src = img2;
	 }else{
		 myImg.setAttribute("src",img1);
		 //myImg.src = img1;
	 }
 }
 
 var myButton = document.querySelector("button");
 var myHeading = document.querySelector("h2");
 if(!localStorage.getItem("name")){
	 setUserName();
 }else{
	 var storeName = localStorage.getItem("name");
	 myHeading.innerHTML = "Mozilla is cool, " + storeName;
 }
 
 
 function setUserName(){
	 var myName = prompt("please enter your name.");
	 localStorage.setItem("name",myName);
	 myHeading.innerHTML = "Mozilla is cool, " + myName;
 }