const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

// NOTE: you must manually enter your API_KEY below using information retrieved from your IBM Cloud
const API_KEY = "yhsb0gw42uzczTC5VBU4CjijJXT3DkWZs1SW4QGm4Qfo";

function getToken(errorCallback, loadCallback) {
	const req = new XMLHttpRequest();
	req.addEventListener("load", loadCallback);
	req.addEventListener("error", errorCallback);
	req.open("POST", "https://iam.cloud.ibm.com/identity/token");
	req.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	req.setRequestHeader("Accept", "application/json");
	req.send("grant_type=urn:ibm:params:oauth:grant-type:apikey&apikey=" + API_KEY);
}

function apiPost(scoring_url, token, payload, loadCallback, errorCallback){
	const oReq = new XMLHttpRequest();
	oReq.addEventListener("load", loadCallback);
	oReq.addEventListener("error", errorCallback);
	oReq.open("POST", scoring_url);
	oReq.setRequestHeader("Accept", "application/json");
	oReq.setRequestHeader("Authorization", "Bearer " + token);
	oReq.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
	oReq.send(payload);
}

getToken((err) => console.log(err), function () {
	let tokenResponse;
	try {
		tokenResponse = JSON.parse(this.responseText);
	} catch(ex) {
		// TODO: handle parsing exception
	}
	// NOTE: manually define and pass the array(s) of values to be scored in the next line
	const payload = '"input_data": [{"fields": ["mean_radius","mean_texture","mean_perimeter","mean_area","mean_smoothness"],"values":[[20,29,140,181,0.05]]}]';
	const scoring_url = "https://us-south.ml.cloud.ibm.com/ml/v4/deployments/921cf77f-5edd-4512-a7ff-e38b350a45b0/predictions?version=2021-11-03&version=2021-11-03";
	apiPost(scoring_url, tokenResponse.token, payload, function (resp) {
		let parsedPostResponse;
		try {
			parsedPostResponse = JSON.parse(this.responseText);
		} catch (ex) {
			// TODO: handle parsing exception
		}
		console.log("Scoring response");
		console.log(parsedPostResponse);
	}, function (error) {
		console.log(error);
	});
});