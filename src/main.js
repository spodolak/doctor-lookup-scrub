import { DoctorLookup } from "./doctor-lookup";
import $ from 'jquery';
$;
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './styles.css';

let showDoctorByName = (response, name) => {
	for (var i = 0; i <= response.data.length; i += 1) {
		console.log(response.data[i].profile);
		let doctorSearch = response.data[i].profile.last_name;
		if (name === doctorSearch) {
			$("#result").append(`${response.data[i].profile.first_name} `);
			$("#result").append(`${response.data[i].profile.last_name}<br>`);
			$("#result").append(`${response.data[i].practices[0].visit_address.street}<br>`);
			$("#result").append(`${response.data[i].practices[0].visit_address.city}<br>`);
			$("#result").append(`${response.data[i].practices[0].visit_address.state}<br>`);
			$("#result").append(`${response.data[i].practices[0].phones[0].number}<br><br>`);
		}
	}
}

let showDoctorBySymptom = (response, searchInput) => {
	for (var i = 1; i <= response.data.length; i += 1) {
		console.log(response.data[i].profile);
		let doctorSearch = response.data[i].profile.last_name;
		if (searchInput === doctorSearch) {
			$("#result").append(`${response.data[i].profile.first_name} `);
			$("#result").append(`${response.data[i].profile.last_name}<br>`);
			$("#result").append(`${response.data[i].practices[0].visit_address.street}<br>`);
			$("#result").append(`${response.data[i].practices[0].visit_address.city}<br>`);
			$("#result").append(`${response.data[i].practices[0].visit_address.state}<br>`);
			$("#result").append(`${response.data[i].practices[0].phones[0].number}<br><br>`);
		}
	}
}


$(document).ready(function () {
	$("form#search-name-input").submit(function (event) {
		event.preventDefault();
		let name = $("#inputted-name").val();
		let symptom $("")
		(async () => {
			let doctorLookup = new DoctorLookup();
			const response = await doctorLookup.getDoctorByName(name);
			showDoctorByName(response, name);
		})();
		(async () => {
			let doctorLookup = new DoctorLookup();
			const response = await doctorLookup.getDoctorBySymptom();
			showDoctorBySymptom(response, searchInput);
		})();
	});
});