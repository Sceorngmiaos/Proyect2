const form = document.getElementById("form")
const ApiKey = document.getElementById("Apikey")
const radio = document.getElementById("rad")
const perimetro = document.getElementById("per")
const area = document.getElementById("are")
const textura = document.getElementById("tex")
const suavidad = document.getElementById("sua")

form.addEventListener("submit",e=>{
  warnings = "Hola"
}
                      

function getToken(errorCallback, loadCallback) {
	const req = new XMLHttpRequest();
	req.addEventListener("load", loadCallback);
	req.addEventListener("error", errorCallback);
	req.open("POST", "https://iam.cloud.ibm.com/identity/token");
	req.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	req.setRequestHeader("Accept", "application/json");
	req.send("grant_type=urn:ibm:params:oauth:grant-type:apikey&apikey=" + API_KEY);
}
