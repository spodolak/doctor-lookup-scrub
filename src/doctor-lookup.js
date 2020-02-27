export class DoctorLookup {
	async getDoctorByName(name) {
		try {
			let response = await fetch(`https://api.betterdoctor.com/2016-03-01/doctors?name=${name}&location=or-portland&skip=0&user_key=${process.env.API_KEY}`);
			
			let jsonifiedResponse;
			if (response.ok && response.status == 200) {
				jsonifiedResponse = await response.json();
				return jsonifiedResponse;
			} else {
				jsonifiedResponse = false;
			}
		} catch(error) {
			return false;
		}
	}
	async getDoctorBySymptom(symptom) {
		try {
			let response = await fetch(`https://api.betterdoctor.com/2016-03-01/doctors?query=${symptom}&location=or-portland&skip=0&user_key=${process.env.API_KEY}`);
			let jsonifiedResponse;
			if (response.ok && response.status == 200) {
				jsonifiedResponse = await response.json();
				return jsonifiedResponse;
			} else {
				jsonifiedResponse = false;
			}
		} catch(error) {
			return false;
		}
	}
}