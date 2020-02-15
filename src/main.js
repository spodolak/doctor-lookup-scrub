import { DoctorLookup } from "./doctor-lookup";
import { formatPhoneNumber } from "./format-phone-number";
import $ from 'jquery';
$;
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './styles.css';

let showDoctorByName = (response) => {
	if (response.data[0] === undefined) {
		$("#result").append("I'm sorry, there are no doctors with that name in the Portland area!")
	} else {
		for (var i = 0; i <= response.data.length; i += 1) {
			$("#result").append(`${response.data[i].profile.first_name} `);
			$("#result").append(`${response.data[i].profile.last_name}<br>`);
			$("#result").append(`${response.data[i].practices[0].visit_address.street}<br>`);
			$("#result").append(`${response.data[i].practices[0].visit_address.city}, `);
			$("#result").append(`${response.data[i].practices[0].visit_address.state}<br>`);
			let formattedNumber = formatPhoneNumber(response.data[i].practices[0].phones[0].number);
			$("#result").append(`${formattedNumber}<br>`);
			if (response.data[i].practices[0].website === undefined) {
				$("#result").append("Website: no website listed<br>");
			} else {
				$("#result").append(`Website: ${response.data[i].practices[0].website}<br>`);
			}
			if (response.data[i].practices[0].accepts_new_patients === true) {
				$("#result").append(`Accepting new patients: Yes <br><br>`);
			} else {
				$("#result").append(`Accepting new patients: No <br><br>`);
			}
		}
	}
}

let showDoctorBySymptom = (response) => {
	if (response.data[0] === undefined) {
		$("#result").append("I'm sorry, there are no doctors in the area that treat this symptom!")
	} else {
		for (var i = 0; i <= response.data.length; i += 1) {
			$("#result").append(`${response.data[i].profile.first_name} `);
			$("#result").append(`${response.data[i].profile.last_name}<br>`);
			$("#result").append(`${response.data[i].practices[0].visit_address.street}<br>`);
			$("#result").append(`${response.data[i].practices[0].visit_address.city}, `);
			$("#result").append(`${response.data[i].practices[0].visit_address.state}<br>`);
			let formattedNumber = formatPhoneNumber(response.data[i].practices[0].phones[0].number);
			$("#result").append(`${formattedNumber}<br>`);
			if (response.data[i].practices[0].website === undefined) {
				$("#result").append("Website: no website listed<br>");
			} else {
				$("#result").append(`Website: ${response.data[i].practices[0].website}<br>`);
			}
			if (response.data[i].practices[0].accepts_new_patients === true) {
				$("#result").append(`Accepting new patients: Yes <br><br>`);
			} else {
				$("#result").append(`Accepting new patients: No <br><br>`);
			}
		}
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