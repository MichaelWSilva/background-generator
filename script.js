var css = document.querySelector('h3');
var color01 = document.querySelector('.color1');
var color02 = document.querySelector('.color2');
var body = document.getElementById('gradient')

function setGradient(){
	body.style.background = "linear-gradient(to right, "
	+ color01.value + ", "
	+ color02.value + ")";

	css.textContent = body.style.background + ";";
}

color01.addEventListener("input", setGradient);

color02.addEventListener("input", setGradient);