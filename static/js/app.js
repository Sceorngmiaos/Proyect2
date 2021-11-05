
const form = document.getElementById("myForm");
const API_KEY = document.getElementById("Apikey");
const radio = document.getElementById("rad");
const perimetro = document.getElementById("per");
const area = document.getElementById("are");
const textura = document.getElementById("tex");
const suavidad = document.getElementById("sua");



form.addEventListener("submit", (e)=>{
	e.preventDefault();
	console.log("Form has been submitted:")	
});
