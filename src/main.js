import { DoctorLookup } from "./doctor-lookup";
import $ from 'jquery';
$;
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './styles.css';

let showDoctorByName = (response) => {
	for (var i = 0; i <= response.data.length; i += 1) {
		$("#result").append(`${response.data[i].profile.first_name} `);
		$("#result").append(`${response.data[i].profile.last_name}<br>`);
		$("#result").append(`${response.data[i].practices[0].visit_address.street}<br>`);
		$("#result").append(`${response.data[i].practices[0].visit_address.city}<br>`);
		$("#result").append(`${response.data[i].practices[0].visit_address.state}<br>`);
		$("#result").append(`${response.data[i].practices[0].phones[0].number}<br>`);
		if (response.data[i].practices[0].website === undefined) {
			$("#result").append("no website listed<br>");
		} else {
			$("#result").append(`${response.data[i].practices[0].website}<br>`);
		}
		$("#result").append(`${response.data[i].practices[0].accepts_new_patients}<br><br>`);
	}
}

let showDoctorBySymptom = (response) => {
	for (var i = 0; i <= response.data.length; i += 1) {
		$("#result").append(`${response.data[i].profile.first_name} `);
		$("#result").append(`${response.data[i].profile.last_name}<br>`);
		$("#result").append(`${response.data[i].practices[0].visit_address.street}<br>`);
		$("#result").append(`${response.data[i].practices[0].visit_address.city}<br>`);
		$("#result").append(`${response.data[i].practices[0].visit_address.state}<br>`);
		$("#result").append(`${response.data[i].practices[0].phones[0].number}<br>`);
		if (response.data[i].practices[0].website === undefined) {
			$("#result").append("no website listed<br>");
		} else {
			$("#result").append(`${response.data[i].practices[0].website}<br>`);
		}
		$("#result").append(`${response.data[i].practices[0].website}<br>`);
		$("#result").append(`${response.data[i].practices[0].accepts_new_patients}<br><br>`);
	}
}

$(document).ready(function () {

	$("form#search-name-input").submit(function (event) {
		event.preventDefault();
		let name = $("#inputted-name").val();
		(async () => {
			let doctorLookup = new DoctorLookup();
			const responseName = await doctorLookup.getDoctorByName(name);
			showDoctorByName(responseName, name);
		})();
	});

	$("form#search-symptom-input").submit(function (event)	{
		event.preventDefault();
		let symptom = $("#inputted-symptom").val();
		(async () => {
			let doctorLookup = new DoctorLookup();
			const responseSymptom = await doctorLookup.getDoctorBySymptom(symptom);
			showDoctorBySymptom(responseSymptom, symptom);
		})();
	});

});