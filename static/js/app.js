
const form = document.getElementById("myForm");
const API_KEY = document.getElementById("Apikey");
const radio = document.getElementById("rad");
const perimetro = document.getElementById("per");
const area = document.getElementById("are");
const textura = document.getElementById("tex");
const suavidad = document.getElementById("sua");



form.addEventListener("submit", (e)=>{
	e.preventDefault();
	if(API_KEY.value.length==44){
		if(radio.value*perimetro.value*area.value>2043764.82){
			swal({
				title:'Resultado de la predicción',
				text:"Benigno",
				background: '#ffdbfc',
				backdrop: true,
				buttons: false,
				});
		}else{
			if(radio.value*perimetro.value*area.value*suavidad.value*textura.value<2464323.754){
				swal({
				title:'Resultado de la predicción',
				text:"Benigno",
				background: '#ffdbfc',
				backdrop: true,
				buttons: false,
				});
			}else{
			}
		}
	}else{
		swal('Apikey invalida','favor de introducir un apikey valida')
	}
});
