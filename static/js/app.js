
const form = document.getElementById("myForm");
const API_KEY = document.getElementById("Apikey");
const radio = document.getElementById("rad");
const perimetro = document.getElementById("per");
const area = document.getElementById("are");
const textura = document.getElementById("tex");
const suavidad = document.getElementById("sua");



form.addEventListener("submit", (e)=>{
	e.preventDefault();
	if(API_KEY.value.length=44){
		if(radio.value*perimetro.value*area.value>2384016.75){
			swal('Título','Contenido')
		}else{
			swal('No','Si')
		}
	}else{
		swal('Apikey invalida','favor de introducir un apikey valida')
	}
});
