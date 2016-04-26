window.onload=function(){
	//flying goat
	var mousex, mousey;
	document.onmousemove = function(e) {
		mousex = e.clientX;
		mousey = e.clientY;
	}
	function moveGoat() {
		var goat = document.getElementById("goat");
		var rect = goat.getBoundingClientRect();
		var x = rect.left, y = rect.top;
		var dx = mousex - x - 16;
		var dy = mousey - y - 14;
		goat.style.left = x + .005*dx + "px";
		goat.style.top = y + .005*dy + "px";
	}
	setInterval(moveGoat, 10);
		
	//Cena sound
	//collecting elements
	var cenaSound = document.getElementById("cenaSound");
	var cenaButtons = document.getElementsByClassName("cenaButton");

	//playing cenaSound on mouse over
	for (var i=0; i < cenaButtons.length; i++) {
		cenaButtons[i].onmouseover = function() {
			cenaSound.play();
		};
		cenaButtons[i].onmouseout = function() {
			cenaSound.pause();
			cenaSound.currentTime = 0;
		};
	}
};