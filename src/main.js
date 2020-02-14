import { DoctorLookup } from "./doctor-lookup";
import $ from 'jquery';
$;
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './styles.css';

let getElements = (response, searchInput) => {
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

	$("form#search-input").submit(function (event) {
		event.preventDefault();
		let searchInput = "Johnson";
		(async () => {
			let doctorLookup = new DoctorLookup();
			const response = await doctorLookup.getDoctorByName();
			getElements(response, searchInput);
		})();
	});
});